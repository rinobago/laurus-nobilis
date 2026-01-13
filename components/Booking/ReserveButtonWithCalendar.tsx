"use client";

import { useRouter, useSearchParams } from "next/navigation";
import BookingCalendar from "./BookingCalendar";

export default function ReserveButtonWithCalendar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const checkIn = searchParams.get("check_in");
    const checkOut = searchParams.get("check_out");

    const onReserve = () => {
        if (!checkIn || !checkOut) return;
        router.push(`/checkout/details?check_in=${checkIn}&check_out=${checkOut}`);
    };

    return (
        <>
            <div className="flex bg-beige rounded-lg p-12" aria-label="Booking calendar">
                <BookingCalendar />
            </div>
            <button onClick={onReserve} disabled={!checkIn || !checkOut} className="btn-beige">
                Reserve
            </button>
        </>
    );
}
