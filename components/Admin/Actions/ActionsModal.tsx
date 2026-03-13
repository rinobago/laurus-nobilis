"use client";

import { useEffect, useRef, useState } from "react";
import { Booking } from "../adminTypes";
import CancelModal from "./CancelModal";
import ChangeDatesModal from "./ChangeDates/ChangeDatesModal";
import RefundModal from "./Refund/RefundModal";
import ViewModal from "./ViewModal";

export default function ActionsModal({
    open,
    onClose,
    booking,
}: {
    open: boolean;
    onClose: () => void;
    booking: Booking;
}) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [openView, setOpenView] = useState(false);
    const [openDates, setOpenDates] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);
    const [openRefund, setOpenRefund] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    function openViewFunc() {
        onClose();
        setOpenView(true);
    }
    function openDatesFunc() {
        onClose();
        setOpenDates(true);
    }
    function openCancelFunc() {
        onClose();
        setOpenCancel(true);
    }
    function openRefundFunc() {
        onClose();
        setOpenRefund(true);
    }

    return (
        <>
            {open ? (
                <div
                    ref={modalRef}
                    className="z-1300 overflow-hidden absolute top-full right-0 w-29.75 h-37 bg-beige-dark border border-beige-darker rounded-md flex flex-col">
                    <button
                        onClick={openViewFunc}
                        className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-14 leading-150 text-center text-black">
                        Pregled
                    </button>

                    <button
                        onClick={openDatesFunc}
                        className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                        Uredi datume
                    </button>
                    <button
                        onClick={openCancelFunc}
                        className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                        Otkaži
                    </button>
                    <button
                        onClick={openRefundFunc}
                        className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                        Refundiraj
                    </button>
                </div>
            ) : null}

            <ViewModal
                open={openView}
                onClose={() => setOpenView(false)}
                booking={booking}
            />
            <ChangeDatesModal
                open={openDates}
                onClose={() => setOpenDates(false)}
                bookingId={booking.booking_id}
                initialCheckIn={booking.checkin_date}
                initialCheckOut={booking.checkout_date}
            />
            <CancelModal
                open={openCancel}
                onClose={() => setOpenCancel(false)}
                bookingId={booking.booking_id}
            />
            <RefundModal
                open={openRefund}
                onClose={() => setOpenRefund(false)}
                bookingId={booking.booking_id}
                paymentIntentId={booking?.paymentIntentId}
            />
        </>
    );
}
