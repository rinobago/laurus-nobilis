"use client";

import Xicon from "@/components/svg_icons/Xicon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutFailed() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const qs = searchParams.toString();

        const timer = setTimeout(() => {
            router.replace(qs ? `/checkout/payment?${qs}` : "/checkout/payment");
        }, 10000);

        return () => clearTimeout(timer);
    }, [router, searchParams]);

    return (
        <section className="flex flex-col items-center bg-beige h-[80vh]">
            <div className="h-full flex flex-col gap-12 container items-center justify-center text-black">
                <Xicon className="w-[clamp(120px,18.23vw,140px)] aspect-square fill-badge-red-fg" />
                <h1 className="w-full text-center font-bold leading-120 text-[clamp(2rem,6.25vw,3rem)] max-[368px]:text-28 max-[328px]:text-[1.5rem]">Payment failed</h1>
                <p className="w-full text-center leading-150 text-[clamp(0.875rem,2.34vw,1.125rem)] max-[328px]:text-12">Please try again or use a different card.</p>
            </div>
        </section>
    );
}
