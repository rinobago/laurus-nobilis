import ActionDotsButton from "../Actions/ActionDotsButton";
import { Booking } from "../adminTypes";
import StatusBanner from "./StatusBanner";

export default function BookingRow({ booking }: { booking: Booking }) {
    return (
        <tr className="bg-white border-y-[0.5px] border-beige-darkest">
            <td className="p-2.5 text-black text-12 leading-150 text-left">{booking.booking_id}</td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                {booking.first_name} {booking.last_name}
            </td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                {booking.checkin_date} - {booking.checkout_date}
            </td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                {booking.guests_count}
            </td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                € {booking.total_amount}
            </td>
            <td className="p-2.5">
                <StatusBanner status={booking.status} />
            </td>
            <td className="p-2.5">
                <ActionDotsButton booking={booking} />
            </td>
        </tr>
    );
}
