import BookingRowDesktop from "./BookingRowDesktop";

export default function BookingTable() {
    return (
        <div className="flex justify-center items-center max-w-247.25 w-full">
            <table className="w-full table-auto border border-beige-darkest border-separate border-spacing-0 rounded-[5px]">
                <thead id="tableHeader">
                    <tr className="bg-beige-dark">
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left rounded-tl-[5px]">
                            Booking ID
                        </th>
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
                            Ime i prezime
                        </th>
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
                            Datumi boravka
                        </th>
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
                            Broj gostiju
                        </th>
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
                            Ukupan iznos
                        </th>
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
                            Status
                        </th>
                        <th className="w-8.75 p-2.5 rounded-tr-[5px]">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="last:[&>tr]:border-b-0 [&>tr:last-child>td:first-child]:rounded-bl-[5px] [&>tr:last-child>td:last-child]:rounded-br-[5px]">
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="cancelled" />
                    <BookingRowDesktop status="refunded" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                    <BookingRowDesktop status="active" />
                </tbody>
            </table>
        </div>
    );
}
