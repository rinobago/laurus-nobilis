import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions, isAdminEmail } from "../auth/options";

type GetBookingsParams = {
    page?: number;
    limit?: number;
};

export async function getBookings({ page = 1, limit = 10 }: GetBookingsParams) {
    // 1) Require logged-in admin
    const session = await getServerSession(authOptions);
    const email = session?.user?.email ?? null;

    if (!isAdminEmail(email)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createSupabaseServerClient();

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
        .from("bookings")
        .select(
            `
            id,
            checkin_date,
            checkout_date,
            guests_count,
            status,
            created_at,
            customers (
                first_name,
                last_name,
                email,
                phone
            ),
            payments (
                total_amount_cents,
                stripe_payment_intent_id
            )
        `,
            { count: "exact" },
        )
        .order("created_at", { ascending: false })
        .range(from, to);

    if (error) {
        console.error("getBookings query error:", error);
        throw new Error(`Failed to load bookings: ${error.message}`);
    }

    const bookings =
        data?.map((booking) => {
            const customer = Array.isArray(booking.customers)
                ? booking.customers[0]
                : booking.customers;
            const payment = Array.isArray(booking.payments)
                ? booking.payments[0]
                : booking.payments;

            return {
                booking_id: booking.id,
                checkin_date: booking.checkin_date ?? "",
                checkout_date: booking.checkout_date ?? "",
                guests_count: booking.guests_count,
                status: booking.status,
                created_at: booking.created_at,
                first_name: customer?.first_name ?? null,
                last_name: customer?.last_name ?? null,
                email: customer?.email ?? null,
                phone: customer?.phone ?? null,
                paymentIntentId: payment?.stripe_payment_intent_id ?? null,
                total_amount:
                    payment?.total_amount_cents != null ? payment.total_amount_cents / 100 : null,
            };
        }) ?? [];

    return {
        bookings,
        totalItems: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
    };
}
