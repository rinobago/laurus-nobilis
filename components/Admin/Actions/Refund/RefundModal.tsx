"use client";

import { PreviousButton } from "@/components/svg_icons/ChevronButtons";
import { useEffect, useState } from "react";
import RefundConfirm from "./RefundConfirm";

export default function RefundModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [percentage, setPercentage] = useState(50);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    return (
        <>
            {open ? (
                <div className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
                    <div className="flex flex-col w-fit h-fit gap-24 md:gap-32 justify-center items-center px-24 md:px-32 pb-16 pt-24 bg-beige border border-beige-darkest rounded-xl">
                        <div className="w-full text-left text-black font-semibold text-[24px] md:text-h3 leading-120">
                            Izvrši povrat novca?
                        </div>
                        <div className="flex flex-col gap-16 w-full h-fit justify-center items-start">
                            <div className="flex gap-10 w-fit h-fit justify-start items-center text-black text-12 md:text-14 leading-150 font-medium text-left">
                                <div>Iznos</div>
                                <div>€ ___</div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <select
                                    name="refund"
                                    required
                                    value={percentage}
                                    onChange={(e) => setPercentage(Number(e.target.value))}
                                    className="cursor-pointer appearance-none w-22.5 flex bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150">
                                    <option value="50">50%</option>
                                    <option value="90">90%</option>
                                    <option value="100">100%</option>
                                </select>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none flex w-24 aspect-square justify-center items-center">
                                    <PreviousButton className="pointer-events-none w-1.5 aspect-1/2 fill-none stroke-black -rotate-90" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-fit gap-8 justify-center items-center">
                            <button
                                onClick={() => setOpenConfirm(true)}
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
            ) : null}

            <RefundConfirm
                open={openConfirm}
                onSave={() => {
                    setOpenConfirm(false);
                    onClose();
                }}
                onCancel={() => setOpenConfirm(false)}
                percentage={percentage}
            />
        </>
    );
}
