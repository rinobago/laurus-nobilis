"use client";

import Image from "next/image";

export default function DetailsCard() {
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
                            <button className="cursor-pointer flex justify-start items-center w-full px-12 py-2.5 rounded-l-md bg-beige-dark border border-beige-darker">
                                <p className="leading-150 text-14 text-left">12/6/2026</p>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-0.5 w-full">
                            <p className="leading-150 font-semibold text-12 text-left w-full">Check Out</p>
                            <button className="cursor-pointer flex justify-start items-center w-full px-12 py-2.5 rounded-r-md bg-beige-dark border border-l-0 border-beige-darker">
                                <p className="leading-150 text-14 text-left">19/6/2026</p>
                            </button>
                        </div>
                    </div>
                    <button className="btn-brown-outline">Edit dates</button>
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="font-medium w-full text-14 leading-150 text-left">Price Details</p>
                    <div className="flex justify-between items-start w-full leading-150 text-14 text-left ">
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">2 nights x € ___</p>
                            <p className="w-full">Cleaning fee</p>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">€ ___</p>
                            <p className="w-full">€ ___</p>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="text-14 text-left w-full leading-150 font-medium">Total</p>
                    <p className="text-18 font-semibold leading-150 w-full text-left">€ ___</p>
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
