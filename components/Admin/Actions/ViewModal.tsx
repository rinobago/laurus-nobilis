import Xicon from "@/components/svg_icons/Xicon";
import { useEffect } from "react";

export default function ViewModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24"
            onMouseDown={onClose}>
            <div
                className="text-black w-full max-w-135 h-fit bg-beige border border-beige-dark rounded-3xl md:rounded-[48px] flex flex-col"
                onMouseDown={(e) => e.stopPropagation()}>
                <div className="w-full h-18.75 flex justify-end items-center pr-3.75">
                    <button
                        type="button"
                        onClick={onClose}
                        className="aspect-square w-10 cursor-pointer"
                        aria-label="Close view">
                        <Xicon className="w-5.5 aspect-square fill-black stroke-black" />
                    </button>
                </div>
                <div className="flex flex-col gap-16 items-center justify-start px-24 pb-24 md:px-14 md:pb-24">
                    <div className="flex flex-col gap-16 w-full justify-center items-center">
                        <div className="w-full text-14 md:text-16 leading-150 text-left font-semibold">
                            Rezervacija
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-start">
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Booking ID
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Datum kreiranja
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Status
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-end">
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    1234
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    23/2/2026
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    Aktivan
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full h-[0.5px] border-0 bg-beige-darkest" />
                    <div className="flex flex-col gap-16 w-full justify-center items-center">
                        <div className="w-full text-14 md:text-16 leading-150 text-left font-semibold">
                            Gost
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-start">
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Ime i prezime
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Email
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Broj telefona
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-end">
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    Marko Marković
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    marko.markovic@email.com
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    +385 98 3484 354
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full h-[0.5px] border-0 bg-beige-darkest" />
                    <div className="flex flex-col gap-16 w-full justify-center items-center">
                        <div className="w-full text-14 md:text-16 leading-150 text-left font-semibold">
                            Boravak
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-start">
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Datum dolaska
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Datum odlaska
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Broj noćenja
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Broj gostiju
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-end">
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    6/7/2026
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    12/7/2026
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">6</div>
                                <div className="text-12 md:text-14 leading-150 text-right">4</div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full h-[0.5px] border-0 bg-beige-darkest" />
                    <div className="flex flex-col gap-16 w-full justify-center items-center">
                        <div className="w-full text-14 md:text-16 leading-150 text-left font-semibold">
                            Plaćanje
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-start">
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Razdoblje
                                </div>
                                <div className="font-medium text-12 md:text-14 leading-150 text-left">
                                    Iznos
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 w-fit h-fit justify-center items-end">
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    Unutar sezone
                                </div>
                                <div className="text-12 md:text-14 leading-150 text-right">
                                    € ___
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
