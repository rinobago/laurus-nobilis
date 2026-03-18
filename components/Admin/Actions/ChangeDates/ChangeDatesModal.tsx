"use client";

import { fromYMD, toYMD } from "@/lib/dateParams";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import CalendarDateChange from "./CalendarDateChange";
import ChangeDatesConfirm from "./ChangeDatesConfirm";

export default function ChangeDatesModal({
    open,
    onClose,
    bookingId,
    initialCheckIn,
    initialCheckOut,
}: {
    open: boolean;
    onClose: () => void;
    bookingId: string;
    initialCheckIn: string;
    initialCheckOut: string;
}) {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(undefined);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const router = useRouter();
    const hasInitialDates = initialCheckIn !== "" && initialCheckOut !== "";

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        if (!hasInitialDates) {
            setSelectedRange(undefined);
            setOpenConfirm(false);
            setSaveError("Rezervacija nema valjane datume.");
            alert("Rezervacija je otkazana. Ne mogu se mijenjati datumi.");
            return;
        }

        setSelectedRange({
            from: fromYMD(initialCheckIn),
            to: fromYMD(initialCheckOut),
        });
        setOpenConfirm(false);
        setSaveError(null);
    }, [open, initialCheckIn, initialCheckOut, hasInitialDates]);

    async function saveDates() {
        if (!selectedRange?.from || !selectedRange?.to) {
            setSaveError("Odaberi datum dolaska i odlaska.");
            setOpenConfirm(false);
            return;
        }

        setSaving(true);
        setSaveError(null);

        try {
            const response = await fetch(
                `/api/admin/bookings/${encodeURIComponent(bookingId)}/dates`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        checkIn: toYMD(selectedRange.from),
                        checkOut: toYMD(selectedRange.to),
                    }),
                },
            );

            const payload = (await response.json()) as { error?: string };
            if (!response.ok) {
                setSaveError(payload.error ?? "Neuspješno spremanje datuma.");
                setOpenConfirm(false);
                return;
            }

            setOpenConfirm(false);
            onClose();
            router.refresh();
        } catch {
            setSaveError("Došlo je do greške pri spremanju datuma.");
            setOpenConfirm(false);
        } finally {
            setSaving(false);
        }
    }

    const canSubmit = Boolean(selectedRange?.from && selectedRange?.to) && !saving;

    return (
        <>
            {open ? (
                <div
                    onMouseDown={() => {
                        if (!saving) onClose();
                    }}
                    className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
                    <div
                        onMouseDown={(e) => e.stopPropagation()}
                        className="flex flex-col p-12 justify-center items-center rounded-xl gap-24 w-fit bg-beige-dark border border-beige-darkest">
                        <div className="p-12 bg-beige border border-beige-darkest w-fit rounded-lg">
                            <CalendarDateChange
                                selected={selectedRange}
                                onSelect={(range) => {
                                    setSaveError(null);
                                    setSelectedRange(range);
                                }}
                                disabled={saving}
                                currentCheckIn={initialCheckIn}
                                currentCheckOut={initialCheckOut}
                            />
                        </div>
                        {saveError ? (
                            <div className="text-red-700 text-14 leading-150 text-center">
                                {saveError}
                            </div>
                        ) : null}
                        <div className="flex w-fit gap-8 justify-center items-center">
                            <button
                                disabled={!canSubmit}
                                onClick={() => setOpenConfirm(true)}
                                className="btn-brown">
                                Spremi
                            </button>
                            <button
                                disabled={saving}
                                onClick={onClose}
                                className="btn-brown-outline">
                                Odustani
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            <ChangeDatesConfirm
                open={openConfirm}
                onSave={saveDates}
                onCancel={() => !saving && setOpenConfirm(false)}
                loading={saving}
            />
        </>
    );
}
