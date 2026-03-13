import { createSupabaseServerClient } from "../supabase/server";

export async function cancelBooking(bookingId: string) {
    const supabase = createSupabaseServerClient();

    const { data: targetBooking, error: targetError } = await supabase
        .from("bookings")
        .select("id, status")
        .eq("id", bookingId)
        .maybeSingle();

    if (targetError) {
        throw new Error("Failed to load booking");
    }

    if (!targetBooking) {
        throw new Error("Booking not found");
    }

    if (targetBooking.status !== "active") {
        throw new Error("Only active bookings can be canceled");
    }

    const { error: updateError } = await supabase
        .from("bookings")
        .update({
            status: "canceled",
            checkin_date: null,
            checkout_date: null,
        })
        .eq("id", bookingId);

    if (updateError) {
        throw new Error("Failed to cancel booking");
    }
}
