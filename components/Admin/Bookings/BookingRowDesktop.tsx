import { formatDMY, fromYMD } from "@/lib/dateParams";
import ActionDotsButton from "../Actions/ActionDotsButton";
import { Booking } from "../adminTypes";
import StatusBanner from "./StatusBanner";

export default function BookingRow({ booking }: { booking: Booking }) {
    const from = booking?.checkin_date ? formatDMY(fromYMD(booking?.checkin_date)) : "/";
    const to = booking?.checkout_date ? formatDMY(fromYMD(booking?.checkout_date)) : "/";

    return (
        <tr className="bg-white border-y-[0.5px] border-beige-darkest">
            <td className="p-2.5 text-black text-12 leading-150 text-left">{booking.booking_id}</td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                {booking.first_name} {booking.last_name}
            </td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                {from} - {to}
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
