import { formatDMY, fromYMD } from "@/lib/dateParams";
import ActionDotsButton from "../Actions/ActionDotsButton";
import { Booking } from "../adminTypes";
import StatusBanner from "./StatusBanner";

export default function BookingRowMobile({ booking }: { booking: Booking }) {
    const from = booking?.checkin_date ? formatDMY(fromYMD(booking?.checkin_date)) : "/";
    const to = booking?.checkout_date ? formatDMY(fromYMD(booking?.checkout_date)) : "/";

    return (
        <div className="w-full h-fit bg-white border border-beige-darkest rounded-[5px]">
            <div className="bg-beige-dark w-full py-2.5 pl-2.5 pr-1.25 flex justify-between items-center rounded-t-[5px]">
                <div className="text-black font-semibold text-12 leading-150 text-left">
                    {booking.booking_id}
                </div>
                <ActionDotsButton booking={booking} />
            </div>
            <div className="bg-white flex flex-col p-2.5 gap-2.5 justify-center items-start w-full rounded-b-[5px]">
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-bold text-12 leading-150 text-left">
                        {booking.first_name} {booking.last_name}
                    </div>
                    <StatusBanner status={booking.status} />
                </div>
                <hr className="w-full h-[0.5px] border-0 bg-beige-darkest" />
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Datumi boravka
                    </div>
                    <div className="text-black text-12 leading-150 text-left">
                        {from} - {to}
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Broj gostiju
                    </div>
                    <div className="text-black text-12 leading-150 text-left">
                        {booking.guests_count}
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Ukupan iznos
                    </div>
                    <div className="text-black text-12 leading-150 text-left">
                        € {booking.total_amount}
                    </div>
                </div>
            </div>
        </div>
    );
}
