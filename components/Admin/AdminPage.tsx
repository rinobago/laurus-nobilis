import BookingList from "./BookingList";
import FilterSection from "./Filters/FilterSection";

export default function AdminPage() {
    return (
        <section className="flex flex-col items-center justify-center relative bg-beige">
            <div className="container flex flex-col items-center justify-center gap-30">
                <h1
                    id="adminTitle"
                    className="font-bold text-h2 text-black leading-120 text-center w-full">
                    Rezervacije
                </h1>
                <div id="adminList">
                    <FilterSection />
                    <BookingList />
                </div>
            </div>
        </section>
    );
}
