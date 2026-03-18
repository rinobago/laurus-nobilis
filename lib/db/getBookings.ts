import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getServerSession } from "next-auth";
import { authOptions, isAdminEmail } from "../auth/options";

type GetBookingsParams = {
    page?: number;
    limit?: number;
    filterOption?: string | null;
    q?: string | null;
    check_in?: string | null;
    check_out?: string | null;
};

export async function getBookings({
    page = 1,
    limit = 10,
    filterOption,
    q,
    check_in,
    check_out,
}: GetBookingsParams) {
    // 1) Require logged-in admin
    const session = await getServerSession(authOptions);
    const email = session?.user?.email ?? null;

    if (!isAdminEmail(email)) {
        throw new Error("Unauthorized");
    }

    const supabase = createSupabaseServerClient();

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let queryBuilder = supabase
        .from("bookings")
        .select(
            `
        id,
        checkin_date,
        checkout_date,
        guests_count,
        status,
        created_at,
        customers!inner (
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

    if (filterOption) {
        queryBuilder = queryBuilder.eq("status", filterOption);
    }

    if (q) {
        queryBuilder = queryBuilder.or(
            `first_name.ilike.*${q}*,last_name.ilike.*${q}*,email.ilike.*${q}*,phone.ilike.*${q}*`,
            { referencedTable: "customers" },
        );
    }

    if (check_in && check_out) {
        queryBuilder = queryBuilder.gte("checkin_date", check_in).lte("checkin_date", check_out);
    }

    const { data, error, count } = await queryBuilder;

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
