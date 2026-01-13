"use client";

import { formatDMY, fromYMD, nightsBetween } from "@/lib/dateParams";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import EditDatesButton from "./EditDatesButton";

export default function DetailsCard() {
    const searchParams = useSearchParams();

    const checkInStr = searchParams.get("check_in");
    const checkOutStr = searchParams.get("check_out");

    const checkIn = checkInStr ? fromYMD(checkInStr) : undefined;
    const checkOut = checkOutStr ? fromYMD(checkOutStr) : undefined;

    const checkInText = checkIn ? formatDMY(checkIn) : "-";
    const checkOutText = checkOut ? formatDMY(checkOut) : "-";

    const nights = nightsBetween(checkIn, checkOut);

    // --- pricing per night based on check-in date ---
    const pricePerNight = (() => {
        if (!checkOut) return 0;

        const m = checkOut.getUTCMonth() + 1; // 1 - 12
        const d = checkOut.getUTCDate(); // 1 - 31

        // 1.11 - 1.3 (Nov 1 -> Mar 1)
        if ((m === 11 && d >= 1) || m === 12 || m === 1 || m === 2 || (m === 3 && d <= 1)) {
            return 150;
        }

        // 2.3 - 30.5 (Mar 2 -> May 30)
        if ((m === 3 && d >= 2) || m === 4 || (m === 5 && d <= 30)) {
            return 200;
        }

        // 1.6 - 31.10 (Jun 1 -> Oct 31)
        if ((m === 6 && d >= 1) || m === 7 || m === 8 || m === 9 || (m === 10 && d <= 31)) {
            return 300;
        }

        return 0;
    })();

    const rentPrice = nights * pricePerNight;
    const cleaningFee = 50;
    const totalPrice = rentPrice + cleaningFee;

    return (
        <div className="max-w-107.5 w-full bg-beige rounded-2xl overflow-hidden" style={{ boxShadow: "0px 6px 16px 4px rgba(0, 0, 0, 0.12)" }}>
            <div className="relative w-full aspect-[1.79/1]">
                <Image src="/apartment-images/IMG_7224.jpg" alt="Image of the view from apartment" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-24 items-start justify-center px-24 py-16 w-full text-black">
                <p className="font-semibold leading-150 text-16 text-left pb-4 border-b border-beige-darkest w-full">Laurus Nobilis</p>
                <div className="flex flex-col gap-3.5 w-full items-start justify-center">
                    <div className="flex max-w-65 w-full justify-start items-center gap-0">
                        <div className="flex flex-col justify-center items-start gap-0.5 w-full">
                            <p className="leading-150 font-semibold text-12 text-left w-full">Check In</p>
                            <div className="flex justify-start items-center w-full px-12 py-2.5 rounded-l-md bg-beige-dark border border-beige-darker">
                                <p className="leading-150 text-14 text-left">{checkInText}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-0.5 w-full">
                            <p className="leading-150 font-semibold text-12 text-left w-full">Check Out</p>
                            <div className="flex justify-start items-center w-full px-12 py-2.5 rounded-r-md bg-beige-dark border border-l-0 border-beige-darker">
                                <p className="leading-150 text-14 text-left">{checkOutText}</p>
                            </div>
                        </div>
                    </div>
                    <EditDatesButton />
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="font-medium w-full text-14 leading-150 text-left">Price Details</p>
                    <div className="flex justify-between items-start w-full leading-150 text-14 text-left ">
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">
                                {nights} nights x € {pricePerNight}
                            </p>
                            <p className="w-full">Cleaning fee</p>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">€ {rentPrice}</p>
                            <p className="w-full">€ {cleaningFee}</p>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="text-14 text-left w-full leading-150 font-medium">Total</p>
                    <p className="text-18 font-semibold leading-150 w-full text-left">€ {totalPrice}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <button type="submit" form="details-form" className="btn-brown">
                        Continue to payment
                    </button>
                    <p className="w-full text-center text-10 leading-150 ">You will review payment details on the next step</p>
                </div>
            </div>
        </div>
    );
}
