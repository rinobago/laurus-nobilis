import { createSupabaseServerClient } from "../supabase/server";

export async function refundBooking(bookingId: string) {
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

    if (targetBooking.status !== "active" && targetBooking.status !== "canceled") {
        throw new Error("Only active or canceled bookings can be refunded");
    }

    const { error: updateError } = await supabase
        .from("bookings")
        .update({
            status: "refunded",
            checkin_date: null,
            checkout_date: null,
        })
        .eq("id", bookingId);

    if (updateError) {
        throw new Error("Failed to update refunded booking");
    }
}
