import { Booking } from "../adminTypes";
import BookingRowMobile from "./BookingRowMobile";

export default function BookingTableMobile({
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
        <div className="flex flex-col w-full justify-start items-center gap-6.5">
            {bookings.map((booking) => (
                <BookingRowMobile
                    key={booking.booking_id}
                    booking={booking}
                />
            ))}
        </div>
    );
}
