import { useTranslations } from "next-intl";
import { Suspense } from "react";
import ReserveButtonWithCalendar from "./ReserveButtonWithCalendar";

export default function Booking() {
    const t = useTranslations("Booking");

    return (
        <section
            id="booking"
            className="flex flex-col items-center bg-brown-100">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-[80px] lg:gap-14">
                <h2 className="w-full text-left text-white font-bold text-[clamp(36px,3.33vw,48px)] leading-120">
                    {t("Title")}
                </h2>
                <div className="flex flex-col gap-64 lg:gap-14 items-center">
                    <Suspense fallback={null}>
                        <ReserveButtonWithCalendar />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
