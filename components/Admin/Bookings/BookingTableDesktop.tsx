import BookingRow from "./BookingRow";

export default function BookingTable() {
    return (
        <div className="flex justify-center items-center max-w-247.25 w-full border border-beige-darkest rounded-[5px] overflow-hidden">
            <table className="w-full table-auto">
                <thead id="tableHeader">
                    <tr className="bg-beige-dark">
                        <th className="font-bold p-2.5 whitespace-nowrap text-14 text-black leading-150 text-left">
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
                        <th className="w-8.75 p-2.5">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="last:[&>tr]:border-b-0">
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                    <BookingRow />
                </tbody>
            </table>
        </div>
    );
}
