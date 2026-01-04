"use client";

import { useEffect, useRef, useState } from "react";
import LanguageButton from "./LanguageButton";

export default function LanguageMenu({
    locale,
    offsetY,
    sizeClass, // e.g. "w-5" or "w-6"
}: {
    locale: string;
    offsetY: number; // 35 or 20
    sizeClass: string; // controls icon size via wrapper width
}) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);

    // click outside to close
    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (!rootRef.current) return;
            if (!rootRef.current.contains(e.target as Node)) setOpen(false);
        };
        window.addEventListener("mousedown", onDown);
        return () => window.removeEventListener("mousedown", onDown);
    }, [open]);

    const selectLanguage = (newLocale: string) => {
        // TODO: switch locale here (router, i18n, etc.)
        setOpen(false);
    };

    return (
        <div ref={rootRef} className={`relative ${sizeClass}`}>
            <button type="button" className="active:brightness-75" aria-label="Change Language" onClick={() => setOpen((v) => !v)}>
                <LanguageButton locale={locale} />
            </button>

            {open && (
                <div className="flex gap-7.5 absolute left-1/2 z-1001 -translate-x-1/2 rounded-[10px] bg-brown-060 border border-white/20 px-8 py-2.5" style={{ top: `calc(100% + ${offsetY}px)` }}>
                    <div className="flex flex-col items-start gap-16">
                        <button
                            onClick={() => selectLanguage("en")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="en" />
                            </div>
                            English
                        </button>

                        <button
                            onClick={() => selectLanguage("de")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="de" />
                            </div>
                            German
                        </button>

                        <button
                            onClick={() => selectLanguage("sl")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="sl" />
                            </div>
                            Slovenian
                        </button>

                        <button
                            onClick={() => selectLanguage("cs")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="cs" />
                            </div>
                            Czech
                        </button>

                        <button
                            onClick={() => selectLanguage("es")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="es" />
                            </div>
                            Spanish
                        </button>
                    </div>

                    <div className="flex flex-col items-start gap-16">
                        <button
                            onClick={() => selectLanguage("hr")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="hr" />
                            </div>
                            Croatian
                        </button>

                        <button
                            onClick={() => selectLanguage("it")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="it" />
                            </div>
                            Italian
                        </button>

                        <button
                            onClick={() => selectLanguage("pl")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="pl" />
                            </div>
                            Polish
                        </button>

                        <button
                            onClick={() => selectLanguage("hu")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="hu" />
                            </div>
                            Hungarian
                        </button>

                        <button
                            onClick={() => selectLanguage("fr")}
                            className="font-normal flex gap-20 w-33.5 py-0.5 px-4 rounded-[5px] hover:bg-brown-080 active:bg-brown-080 text-16 leading-150 cursor-pointer text-white items-center"
                            type="button"
                        >
                            <div className="w-5 h-5">
                                <LanguageButton locale="fr" />
                            </div>
                            French
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
