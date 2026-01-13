"use client";

import { PreviousButton } from "@/components/svg_icons/ChevronButtons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackToBookingButton() {
    const searchParams = useSearchParams();
    const qs = searchParams.toString();

    return (
        <Link href={`/checkout/details?${qs}`} className="w-full flex justify-start items-center gap-1.5">
            <div className="w-[clamp(18px,3.13vw,24px)] aspect-square flex items-center justify-center">
                <PreviousButton className="w-[clamp(4.5px,0.78vw,6px)] aspect-1/2 fill-none stroke-black" />
            </div>
            <p className="text-[clamp(14px,2.08vw,16px)] font-semibold leading-150 text-left">Back to booking details</p>
        </Link>
    );
}
