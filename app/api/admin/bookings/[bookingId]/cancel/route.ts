import { authOptions, isAdminEmail } from "@/lib/auth/options";
import { cancelBooking } from "@/lib/db/cancelBooking";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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

        const { bookingId } = await context.params;

        if (!bookingId) {
            return NextResponse.json({ error: "Missing bookingId" }, { status: 400 });
        }

        await cancelBooking(bookingId);

        return NextResponse.json({ ok: true });
    } catch (err) {
        return NextResponse.json(
            {
                error: "Failed to cancel booking",
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
