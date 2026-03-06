import BookingRowMobile from "./BookingRowMobile";

export default function BookingTableMobile() {
    return (
        <div className="flex flex-col w-full justify-start items-center gap-6.5">
            <BookingRowMobile status="active" />
            <BookingRowMobile status="cancelled" />
            <BookingRowMobile status="refunded" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="cancelled" />
            <BookingRowMobile status="cancelled" />
            <BookingRowMobile status="cancelled" />
            <BookingRowMobile status="refunded" />
            <BookingRowMobile status="refunded" />
            <BookingRowMobile status="refunded" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="active" />
            <BookingRowMobile status="cancelled" />
            <BookingRowMobile status="cancelled" />
        </div>
    );
}
