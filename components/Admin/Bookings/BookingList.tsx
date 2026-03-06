import BookingTableDesktop from "./BookingTableDesktop";
import BookingTableMobile from "./BookingTableMobile";
import PageNumeration from "./PageNumeration";

export default function BookingList() {
    return (
        <div className="flex flex-col lg:gap-24 gap-10 justify-center items-center w-full">
            <div className="hidden lg:flex w-full justify-center">
                <BookingTableDesktop />
            </div>
            <div className="block lg:hidden w-full">
                <BookingTableMobile />
            </div>
            <PageNumeration />
        </div>
    );
}
