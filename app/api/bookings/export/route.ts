import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type BookingRange = {
    id: string;
    checkin_date: string;
    checkout_date: string;
};

function toIcsDate(date: string): string {
    return date.replaceAll("-", "");
}

function toIcsTimestamp(date: Date): string {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildIcsCalendar(bookings: BookingRange[]): string {
    const now = toIcsTimestamp(new Date());

    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Your Website//Bookings//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
    ];

    for (const booking of bookings) {
        lines.push(
            "BEGIN:VEVENT",
            `UID:${booking.id}@yourwebsite.com`,
            `DTSTAMP:${now}`,
            `DTSTART;VALUE=DATE:${toIcsDate(booking.checkin_date)}`,
            `DTEND;VALUE=DATE:${toIcsDate(booking.checkout_date)}`,
            "SUMMARY:Reserved",
            "END:VEVENT",
        );
    }

    lines.push("END:VCALENDAR");

    return lines.join("\r\n");
}

export async function GET() {
    try {
        const supabase = createSupabaseServerClient();

        const { data, error } = await supabase
            .from("bookings")
            .select("id, checkin_date, checkout_date")
            .eq("status", "active")
            .not("customer_id", "is", null)
            .order("checkin_date", { ascending: true });

        if (error) {
            return NextResponse.json({ error: "Failed to load bookings" }, { status: 500 });
        }

        const ics = buildIcsCalendar(data || []);

        return new Response(ics, {
            status: 200,
            headers: {
                "Content-Type": "text/calendar; charset=utf-8",
                "Content-Disposition": 'inline; filename="calendar.ics"',
                "Cache-Control": "no-store",
            },
        });
    } catch (err) {
        return NextResponse.json(
            {
                error: "Failed to export calendar",
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
