import BookingList from "./Bookings/BookingList";
import FilterSection from "./Filters/FilterSection";
import { Booking } from "./adminTypes";

export default async function AdminPage({
    bookings,
    page,
    limit,
    totalItems,
    totalPages,
}: {
    bookings: Booking[];
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}) {
    return (
        <section className="flex flex-col items-center justify-center relative bg-beige w-full">
            <div className="container flex flex-col items-center justify-center gap-30 w-full h-full">
                <h1 className="font-bold text-[clamp(2rem,7.12vw,3rem)] text-black leading-120 text-center w-full">
                    Rezervacije
                </h1>
                <div
                    id="adminList"
                    className="flex flex-col gap-32 justify-start items-center w-full">
                    <FilterSection />
                    <BookingList
                        bookings={bookings}
                        page={page}
                        limit={limit}
                        totalItems={totalItems}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </section>
    );
}
