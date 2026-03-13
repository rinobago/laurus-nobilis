import { createSupabaseServerClient } from "@/lib/supabase/server";

type UpdateBookingDatesParams = {
    bookingId: string;
    checkIn: string;
    checkOut: string;
};

export async function updateBookingDates({
    bookingId,
    checkIn,
    checkOut,
}: UpdateBookingDatesParams) {
    const supabase = createSupabaseServerClient();

    const { data: targetBooking, error: targetError } = await supabase
        .from("bookings")
        .select("id, status")
        .eq("id", bookingId)
        .limit(1)
        .maybeSingle();

    if (targetError) {
        throw new Error("Failed to load booking");
    }

    if (!targetBooking) {
        throw new Error("Booking not found");
    }

    if (targetBooking.status !== "active") {
        throw new Error("Only active bookings can be updated");
    }

    const { data: overlapping, error: overlapError } = await supabase
        .from("bookings")
        .select("id")
        .neq("id", bookingId)
        .eq("status", "active")
        .lt("checkin_date", checkOut)
        .gt("checkout_date", checkIn)
        .limit(1);

    if (overlapError) {
        throw new Error("Failed to validate date overlap");
    }

    if ((overlapping?.length ?? 0) > 0) {
        throw new Error("Selected dates overlap another booking");
    }

    const { error: updateError } = await supabase
        .from("bookings")
        .update({
            checkin_date: checkIn,
            checkout_date: checkOut,
        })
        .eq("id", bookingId);

    if (updateError) {
        throw new Error("Failed to update booking dates");
    }
}
