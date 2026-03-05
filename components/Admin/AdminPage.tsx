import BookingList from "./Bookings/BookingList";
import FilterSection from "./Filters/FilterSection";

export default function AdminPage() {
    return (
        <section className="flex flex-col items-center justify-center relative bg-beige w-full">
            <div className="container flex flex-col items-center justify-center gap-30 w-full h-full">
                <h1
                    id="adminTitle"
                    className="font-bold text-h2 text-black leading-120 text-center w-full">
                    Rezervacije
                </h1>
                <div
                    id="adminList"
                    className="flex flex-col gap-32 justify-start items-center w-full">
                    <FilterSection />
                    <BookingList />
                </div>
            </div>
        </section>
    );
}
