import BookingCalendar from "@/components/Booking/BookingCalendar";
import { useEffect, useState } from "react";

function CalendarModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center z-1010 inset-0 bg-black/60" onMouseDown={onClose}>
            <div
                className="flex flex-col justify-center items-center rounded-xl gap-24 bg-beige-dark border border-beige-darkest px-12 pt-12 pb-24 sm:px-32 sm:py-24"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="flex bg-beige border border-beige-darkest rounded-lg p-12" style={{ boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)" }} aria-label="Booking calendar">
                    <BookingCalendar />
                </div>
                <div className="flex justify-center items-center gap-8">
                    <button className="btn-brown-outline">Clear dates</button>
                    <button className="btn-brown" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function EditDatesButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="btn-brown-outline" onClick={() => setOpen(true)}>
                Edit dates
            </button>
            <CalendarModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
