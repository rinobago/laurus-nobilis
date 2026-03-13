import { authOptions, isAdminEmail } from "@/lib/auth/options";
import { updateBookingDates } from "@/lib/db/updateBookingDates";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const YMD_RE = /^\d{4}-\d{2}-\d{2}$/;

type UpdateDatesBody = {
    checkIn?: string;
    checkOut?: string;
};

function parseYmdDate(value: string) {
    if (!YMD_RE.test(value)) return null;
    const d = new Date(`${value}T00:00:00.000Z`);
    return Number.isNaN(d.getTime()) ? null : d;
}

export async function POST(req: Request, context: { params: Promise<{ bookingId: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        const email = session?.user?.email ?? null;

        if (!isAdminEmail(email)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const host = req.headers.get("host");
        const origin = req.headers.get("origin");
        if (origin && host && new URL(origin).host !== host) {
            return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
        }

        const body = (await req.json()) as UpdateDatesBody;
        const checkInRaw = body?.checkIn?.trim() ?? "";
        const checkOutRaw = body?.checkOut?.trim() ?? "";

        if (!checkInRaw || !checkOutRaw) {
            return NextResponse.json({ error: "Missing checkIn/checkOut" }, { status: 400 });
        }

        const checkInDate = parseYmdDate(checkInRaw);
        const checkOutDate = parseYmdDate(checkOutRaw);

        if (!checkInDate || !checkOutDate) {
            return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
        }

        if (checkOutDate <= checkInDate) {
            return NextResponse.json({ error: "checkOut must be after checkIn" }, { status: 400 });
        }

        const today = new Date();
        const todayUtc = new Date(
            Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
        );

        if (checkInDate < todayUtc) {
            return NextResponse.json({ error: "checkIn cannot be in the past" }, { status: 400 });
        }

        const { bookingId } = await context.params;
        if (!bookingId) {
            return NextResponse.json({ error: "Missing bookingId" }, { status: 400 });
        }

        try {
            await updateBookingDates({
                bookingId,
                checkIn: checkInRaw,
                checkOut: checkOutRaw,
            });
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to update booking dates";

            if (message === "Booking not found") {
                return NextResponse.json({ error: message }, { status: 404 });
            }
            if (
                message === "Only active bookings can be updated" ||
                message === "Selected dates overlap another booking"
            ) {
                return NextResponse.json({ error: message }, { status: 409 });
            }

            return NextResponse.json({ error: message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        return NextResponse.json(
            {
                error: "Failed to update booking dates",
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
