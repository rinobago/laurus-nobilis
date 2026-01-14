"use client";

import { formatDMY, fromYMD, nightsBetween, pricePerNight } from "@/lib/dateParams";
import { useSearchParams } from "next/navigation";
import RequiredCheckbox from "../../Interactive/RequiredCheckbox";

export default function PaymentCard() {
    const searchParams = useSearchParams();

    const checkInStr = searchParams.get("check_in");
    const checkOutStr = searchParams.get("check_out");

    const checkIn = checkInStr ? fromYMD(checkInStr) : undefined;
    const checkOut = checkOutStr ? fromYMD(checkOutStr) : undefined;

    const checkInText = checkIn ? formatDMY(checkIn) : "-";
    const checkOutText = checkOut ? formatDMY(checkOut) : "-";

    const nights = nightsBetween(checkIn, checkOut);

    const priceNight = pricePerNight(checkOut);

    const rentPrice = nights * priceNight;
    const cleaningFee = 50;
    const totalPrice = rentPrice + cleaningFee;

    return (
        <div className="max-w-107.5 w-full bg-beige rounded-2xl overflow-hidden" style={{ boxShadow: "0px 6px 16px 4px rgba(0, 0, 0, 0.12)" }}>
            <div className="flex flex-col gap-24 items-start justify-center px-24 py-16 w-full text-black">
                <p className="font-semibold leading-120 text-h3 text-left pb-4 border-b border-beige-darkest w-full">Laurus Nobilis</p>
                <div className="flex flex-col w-full items-start justify-center">
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
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="font-medium w-full text-14 leading-150 text-left">Price Details</p>
                    <div className="flex justify-between items-start w-full leading-150 text-14 text-left ">
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">
                                {nights} nights x € {priceNight}
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
                <label htmlFor="terms-payment" className="flex justify-start items-center w-full gap-8 cursor-pointer">
                    <RequiredCheckbox id="terms-payment" name="terms-payment" />
                    <p className="text-12 leading-150">
                        I agree to the{" "}
                        <a href="/cancellation-policy" target="_blank" rel="noopener noreferrer" className="underline" onClick={(e) => e.stopPropagation()}>
                            Cancellation Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline" onClick={(e) => e.stopPropagation()}>
                            Terms of Service
                        </a>
                    </p>
                </label>
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <button type="submit" form="payment-form" className="btn-brown">
                        Pay & confirm reservation
                    </button>
                    <p className="w-full text-center text-10 leading-150 ">Secure payment powered by Stripe</p>
                </div>
            </div>
        </div>
    );
}
