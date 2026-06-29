import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type CalendarSource = "airbnb" | "booking";

type ParsedIcsBooking = {
    checkin_date: string;
    checkout_date: string;
};

const AIRBNB_ICS_URL = process.env.AIRBNB_ICS_URL;
const BOOKING_ICS_URL = process.env.BOOKING_ICS_URL;
const CRON_SECRET = process.env.CRON_SECRET;

function unfoldIcsLines(icsText: string): string[] {
    return icsText
        .replace(/\r\n/g, "\n")
        .split("\n")
        .reduce<string[]>((lines, line) => {
            if (line.startsWith(" ") || line.startsWith("\t")) {
                lines[lines.length - 1] += line.slice(1);
            } else {
                lines.push(line);
            }

            return lines;
        }, []);
}

function getIcsValue(eventLines: string[], field: string): string | null {
    const line = eventLines.find((l) => l.startsWith(`${field}:`) || l.startsWith(`${field};`));
    if (!line) return null;

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return null;

    return line.slice(colonIndex + 1).trim();
}

function formatIcsDateToSqlDate(value: string): string {
    const raw = value.slice(0, 8);

    if (!/^\d{8}$/.test(raw)) {
        throw new Error(`Invalid ICS date: ${value}`);
    }

    return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

function parseIcsBookings(icsText: string): ParsedIcsBooking[] {
    const lines = unfoldIcsLines(icsText);
    const bookings: ParsedIcsBooking[] = [];

    let currentEvent: string[] = [];
    let insideEvent = false;

    for (const line of lines) {
        if (line === "BEGIN:VEVENT") {
            insideEvent = true;
            currentEvent = [];
            continue;
        }

        if (line === "END:VEVENT") {
            insideEvent = false;

            const dtStart = getIcsValue(currentEvent, "DTSTART");
            const dtEnd = getIcsValue(currentEvent, "DTEND");

            if (dtStart && dtEnd) {
                bookings.push({
                    checkin_date: formatIcsDateToSqlDate(dtStart),
                    checkout_date: formatIcsDateToSqlDate(dtEnd),
                });
            }

            currentEvent = [];
            continue;
        }

        if (insideEvent) {
            currentEvent.push(line);
        }
    }

    return bookings;
}

async function fetchIcsText(icsUrl: string): Promise<string> {
    const response = await fetch(icsUrl, {
        method: "GET",
        headers: {
            Accept: "text/calendar,text/plain,*/*",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ICS: ${response.status}`);
    }

    return response.text();
}

async function bookingAlreadyExists(
    supabase: ReturnType<typeof createSupabaseServerClient>,
    booking: ParsedIcsBooking,
): Promise<boolean> {
    const { data, error } = await supabase
        .from("bookings")
        .select("id")
        .eq("checkin_date", booking.checkin_date)
        .eq("checkout_date", booking.checkout_date)
        .limit(1)
        .maybeSingle();

    if (error) {
        throw new Error(`Failed to check existing booking: ${error.message}`);
    }

    return Boolean(data);
}

async function importBookingsIntoSupabase(bookings: ParsedIcsBooking[]) {
    const supabase = createSupabaseServerClient();

    let imported = 0;
    let skipped = 0;

    for (const booking of bookings) {
        const exists = await bookingAlreadyExists(supabase, booking);

        if (exists) {
            skipped++;
            continue;
        }

        const { error } = await supabase.from("bookings").insert({
            customer_id: null,
            checkin_date: booking.checkin_date,
            checkout_date: booking.checkout_date,
            guests_count: null,
            status: "active",
        });

        if (error) {
            throw new Error(`Failed to insert booking: ${error.message}`);
        }

        imported++;
    }

    return { imported, skipped };
}

async function syncCalendar(source: CalendarSource, icsUrl?: string) {
    if (!icsUrl) {
        return { source, skipped: true, reason: "Missing ICS URL" };
    }

    const icsText = await fetchIcsText(icsUrl);
    const bookings = parseIcsBookings(icsText);
    const result = await importBookingsIntoSupabase(bookings);

    return {
        source,
        bookingsFound: bookings.length,
        ...result,
    };
}

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const token = authHeader?.replace("Bearer ", "");

        if (!CRON_SECRET || token !== CRON_SECRET) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const results = await Promise.all([
            syncCalendar("airbnb", AIRBNB_ICS_URL),
            syncCalendar("booking", BOOKING_ICS_URL),
        ]);

        return NextResponse.json({ ok: true, results });
    } catch (err) {
        console.error("Calendar sync failed", err);

        return NextResponse.json(
            {
                error: "Calendar sync failed",
                details:
                    process.env.NODE_ENV === "production"
                        ? undefined
                        : err instanceof Error
                          ? err.message
                          : String(err),
            },
            { status: 500 },
        );
    }
}
