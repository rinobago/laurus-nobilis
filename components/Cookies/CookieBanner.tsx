"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = {
    essential: true;
    analytics: boolean;
    functional: boolean;
    updatedAt: number;
} | null;

export default function CookieBanner({ initialConsent }: { initialConsent: Consent }) {
    const [open, setOpen] = useState(!initialConsent);

    useEffect(() => {
        setOpen(!initialConsent);
    }, [initialConsent]);

    if (!open) return null;

    async function save(consent: { analytics: boolean; functional: boolean }) {
        await fetch("/api/consent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(consent),
        });

        setOpen(false);

        window.location.reload();
    }

    return (
        <div className="z-20000 fixed bottom-16 left-16 right-16 md:right-auto bg-beige border border-beige-darkest rounded-2xl max-w-none md:max-w-150 max-h-[80%] w-auto md:w-full h-fit flex flex-col justify-center items-center md:items-start gap-24 px-[clamp(32px,4.44vw,64px)] py-[clamp(24px,3.47vw,50px)]">
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-[clamp(12px,2.22vw,32px)] text-black">
                <p className="leading-120 font-bold text-[clamp(2rem,3.33vw,3rem)] text-center md:text-left">
                    We use cookies
                </p>
                <p className="leading-150 text-[clamp(0.875rem,0.07vw,1rem)] text-center md:text-left">
                    We use cookies to ensure the website functions properly and to improve your
                    browsing experience. You can accept all cookies, reject non-essential cookies,
                    or manage your preferences. Learn more in our{" "}
                    <Link
                        href="/privacy-policy"
                        className="underline">
                        Privacy policy
                    </Link>
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                <button
                    className="btn-brown"
                    onClick={() => save({ analytics: true, functional: true })}>
                    Accept all
                </button>
                <button
                    className="btn-brown-outline"
                    onClick={() => save({ analytics: false, functional: false })}>
                    Manage preferences
                </button>
            </div>
        </div>
    );
}
