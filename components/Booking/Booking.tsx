import Link from "next/link";
import BookingCalendar from "./BookingCalendar";

export default function Booking() {
    return (
        <section id="booking" className="flex flex-col items-center bg-brown-100">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-[80px] lg:gap-14">
                <h2 className="w-full text-left text-white font-bold text-[clamp(36px,3.33vw,48px)] leading-120">Ready to book your stay at Laurus Nobilis?</h2>
                <div className="flex flex-col gap-64 lg:gap-14 items-center">
                    <div className="flex bg-beige rounded-lg p-12" aria-label="Booking calendar">
                        <BookingCalendar />
                    </div>
                    <Link href="/checkout/details" className="btn-beige">
                        Reserve
                    </Link>
                </div>
            </div>
        </section>
    );
}
