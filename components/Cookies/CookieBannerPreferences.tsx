"use client";

import { useEffect, useState } from "react";
import Toggle from "../Interactive/Toggle";
import { useCookiePrefs } from "./CookiePreferencesContext";

export default function CookieBannerPreferences() {
    const { closePrefs } = useCookiePrefs();

    const [analytics, setAnalytics] = useState(false);
    const [functional, setFunctional] = useState(false);

    useEffect(() => {
        async function loadConsent() {
            const res = await fetch("/api/consent", { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch consent");

            const { consent } = await res.json();

            setAnalytics(consent?.analytics ?? false);
            setFunctional(consent?.functional ?? false);
        }

        loadConsent();
    }, []);

    async function save(consent: { analytics: boolean; functional: boolean }) {
        await fetch("/api/consent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(consent),
        });

        closePrefs();
        window.location.reload();
    }

    return (
        <div className="z-20000 fixed bottom-16 left-16 right-16 bg-beige border border-beige-darkest rounded-2xl w-fit sm:w-122.5 h-fit max-h-[calc(100vh-8rem)] flex flex-col justify-center items-center md:items-start gap-[clamp(24px,3.15vh,40px)] px-[clamp(32px,4.44vw,64px)] py-[clamp(24px,3.47vw,50px)] max-[375px]:px-24 max-[375px]:py-16">
            <div className="text-black flex flex-col gap-10 max-[375px]:gap-24 w-full flex-1 min-h-0 overflow-y-auto">
                <div className="flex flex-col gap-[clamp(12px,1.66vw,24px)] justify-center items-center w-full">
                    <p className="font-bold leading-120 text-center w-full text-[clamp(2rem,3.33vw,3rem)] max-[375px]:text-[1.5rem]">
                        Cookie preferences
                    </p>
                    <p className="leading-150 text-center w-full text-[clamp(0.875rem,1.11vw,1rem)] max-[375px]:text-12">
                        You can choose which types of cookies you allow. Essential cookies are
                        always enabled as they are necessary for the website to function.
                    </p>
                </div>
                <div className="flex flex-col gap-24 w-full">
                    <div className="flex flex-col justify-center items-start gap-[clamp(12px,1.11vw,16px)]">
                        <p className="font-semibold w-full text-left leading-150 text-[clamp(1rem,1.25vw,1.125rem)] max-[375px]:text-12">
                            Essential (always on)
                        </p>
                        <p className="leading-150 text-left w-full text-[clamp(0.875rem,1.11vw,1rem)] max-[375px]:text-12">
                            Required for core website functionality, booking steps, and security.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[clamp(12px,1.11vw,16px)]">
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-left leading-150 text-[clamp(1rem,1.25vw,1.125rem)] max-[375px]:text-12">
                                Analytics
                            </p>
                            <div className="w-17.5 max-[375px]:w-12.5">
                                <Toggle
                                    className="w-full"
                                    on={analytics}
                                    onChange={(value) => {
                                        setAnalytics(value);
                                    }}
                                />
                            </div>
                        </div>
                        <p className="leading-150 text-left w-full text-[clamp(0.875rem,1.11vw,1rem)] max-[375px]:text-12">
                            Help us understand how visitors use the website so we can improve
                            performance and usability.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[clamp(12px,1.11vw,16px)]">
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-left leading-150 text-[clamp(1rem,1.25vw,1.125rem)] max-[375px]:text-12">
                                Functional
                            </p>
                            <div className="w-17.5 max-[375px]:w-12.5">
                                <Toggle
                                    className="w-full"
                                    on={functional}
                                    onChange={(value) => {
                                        setFunctional(value);
                                    }}
                                />
                            </div>
                        </div>
                        <p className="leading-150 text-left w-full text-[clamp(0.875rem,1.11vw,1rem)] max-[375px]:text-12">
                            Remember preferences such as language selection.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[clamp(12px,1.67vw,24px)] w-full">
                <button
                    onClick={() => save({ analytics: true, functional: true })}
                    className="btn-brown max-[375px]:text-14 max-[375px]:px-20 max-[375px]:py-8">
                    Accept all
                </button>
                <button
                    onClick={() => save({ analytics, functional })}
                    className="btn-brown-outline max-[375px]:text-14 max-[375px]:px-20 max-[375px]:py-8">
                    Save preferences
                </button>
            </div>
        </div>
    );
}
