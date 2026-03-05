import BookingTableDesktop from "./BookingTableDesktop";
import PageNumeration from "./PageNumeration";

export default function BookingList() {
    return (
        <div className="flex flex-col gap-24 justify-center items-center w-full">
            <BookingTableDesktop />
            <PageNumeration />
        </div>
    );
}
