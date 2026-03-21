"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import Reveal from "../Animation/FadeIn";
import BookingCalendar from "./BookingCalendar";

export default function ReserveButtonWithCalendar() {
    const t = useTranslations("Booking");

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
            <div
                className="flex bg-beige rounded-lg p-12"
                aria-label="Booking calendar">
                <BookingCalendar />
            </div>
            <Reveal>
                <button
                    onClick={onReserve}
                    disabled={!checkIn || !checkOut}
                    className="btn-beige">
                    {t("Button")}
                </button>
            </Reveal>
        </>
    );
}
