import { Booking } from "../adminTypes";
import PageNumeration from "../Pagination/PageNumeration";
import BookingTableDesktop from "./BookingTableDesktop";
import BookingTableMobile from "./BookingTableMobile";

export default function BookingList({
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
        <div className="flex flex-col lg:gap-24 gap-10 justify-center items-center w-full">
            <div className="hidden lg:flex w-full justify-center">
                <BookingTableDesktop
                    bookings={bookings}
                    page={page}
                    limit={limit}
                    totalItems={totalItems}
                    totalPages={totalPages}
                />
            </div>
            <div className="block lg:hidden w-full">
                <BookingTableMobile
                    bookings={bookings}
                    page={page}
                    limit={limit}
                    totalItems={totalItems}
                    totalPages={totalPages}
                />
            </div>
            <PageNumeration
                page={page}
                limit={limit}
                totalItems={totalItems}
                totalPages={totalPages}
            />
        </div>
    );
}
