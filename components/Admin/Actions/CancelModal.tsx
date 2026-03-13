"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CancelModal({
    open,
    onClose,
    bookingId,
}: {
    open: boolean;
    onClose: () => void;
    bookingId: string;
}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    async function cancelBookingFunction() {
        try {
            setLoading(true);

            const response = await fetch(
                `/api/admin/bookings/${encodeURIComponent(bookingId)}/cancel`,
                {
                    method: "POST",
                },
            );

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                throw new Error(data?.error || "Failed to cancel booking");
            }

            router.refresh();
            onClose();
        } catch (err) {
            console.error("Failed to cancel booking:", err);
            alert("Došlo je do greške pri otkazivanju rezervacije.");
        } finally {
            setLoading(false);
        }
    }

    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
            <div className="flex flex-col w-fit h-fit gap-24 md:gap-32 justify-center items-center px-24 md:px-32 pb-16 pt-24 bg-beige border border-beige-darkest rounded-xl">
                <div className="w-full text-center text-black font-semibold text-[24px] md:text-h3 leading-120">
                    Otkaži rezervaciju?
                </div>
                <div className="flex w-fit gap-8 justify-center items-center">
                    <button
                        onClick={cancelBookingFunction}
                        className="btn-brown">
                        Potvrdi
                    </button>
                    <button
                        onClick={onClose}
                        className="btn-brown-outline">
                        Odustani
                    </button>
                </div>
            </div>
        </div>
    );
}
