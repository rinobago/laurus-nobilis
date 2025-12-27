"use client";

import { useEffect } from "react";
import LanguageMenu from "./LanguageMenu";

export default function NavbarOverlay({ open, locale = "en" }: { open: boolean; locale?: string }) {
    // lock background scroll when overlay is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            className={`
        fixed inset-0 z-40 bg-brown-100 lg:hidden
        transition-transform duration-300 ease-out
        ${open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}
      `}
        >
            {/* scroll container + safe-area padding */}
            <div className="h-full overflow-y-auto pt-26 sm:pt-112 pb-40">
                <div className="flex flex-col items-center justify-start gap-7.5">
                    <button className="navbar-item text-18">Amenities</button>
                    <button className="navbar-item text-18">Gallery</button>
                    <button className="navbar-item text-18">About</button>
                    <button className="navbar-item text-18">Map</button>
                    <button className="navbar-item text-18">Pricing</button>
                    <button className="navbar-item text-18">Booking</button>

                    <LanguageMenu locale={locale} offsetY={20} sizeClass="w-6" />
                </div>
            </div>
        </div>
    );
}
