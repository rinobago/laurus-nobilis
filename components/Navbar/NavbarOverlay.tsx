"use client";

import { useEffect } from "react";
import LanguageMenu from "./LanguageMenu";

export default function NavbarOverlay({ open, locale = "en", onClose }: { open: boolean; locale?: string; onClose: () => void }) {
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
                    <a href="/#amenities" className="navbar-item text-18" onClick={onClose}>
                        Amenities
                    </a>
                    <a href="/#gallery" className="navbar-item text-18" onClick={onClose}>
                        Gallery
                    </a>
                    <a href="/#about" className="navbar-item text-18" onClick={onClose}>
                        About
                    </a>
                    <a href="/#map" className="navbar-item text-18" onClick={onClose}>
                        Map
                    </a>
                    <a href="/#pricing" className="navbar-item text-18" onClick={onClose}>
                        Pricing
                    </a>
                    <a href="/#booking" className="navbar-item text-18" onClick={onClose}>
                        Booking
                    </a>

                    <LanguageMenu locale={locale} offsetY={20} sizeClass="w-6" />
                </div>
            </div>
        </div>
    );
}
