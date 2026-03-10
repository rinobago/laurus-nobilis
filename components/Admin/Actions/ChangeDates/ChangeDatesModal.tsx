"use client";

import { useEffect, useState } from "react";
import CalendarDateChange from "./CalendarDateChange";
import ChangeDatesConfirm from "./ChangeDatesConfirm";

export default function ChangeDatesModal({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [openConfirm, setOpenConfirm] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    return (
        <>
            {open ? (
                <div
                    onMouseDown={onClose}
                    className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
                    <div
                        onMouseDown={(e) => e.stopPropagation()}
                        className="flex flex-col p-12 justify-center items-center rounded-xl gap-24 w-fit bg-beige-dark border border-beige-darkest">
                        <div className="p-12 bg-beige border border-beige-darkest w-fit rounded-lg">
                            <CalendarDateChange />
                        </div>
                        <div className="flex w-fit gap-8 justify-center items-center">
                            <button
                                onClick={() => setOpenConfirm(true)}
                                className="btn-brown">
                                Spremi
                            </button>
                            <button
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
                onSave={() => {
                    setOpenConfirm(false);
                    onClose();
                }}
                onCancel={() => setOpenConfirm(false)}
            />
        </>
    );
}
