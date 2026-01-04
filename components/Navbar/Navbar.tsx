"use client";

import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import LanguageMenu from "./LanguageMenu";
import NavbarOverlay from "./NavbarOverlay";

export default function Navbar({ showCta = true }: { showCta?: boolean }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* OVERLAY (behind navbar) */}
            <NavbarOverlay open={menuOpen} locale="en" />

            {/* NAVBAR */}
            <nav className="w-full sticky flex justify-center top-0 z-1000 bg-brown-060 py-1.25">
                <div className="w-full max-w-360 flex justify-center items-center px-24 md:px-64">
                    <div className="flex justify-center mr-auto">
                        <img src="/Laurus-Nobilis-Logo.png" alt="Laurus Nobilis Logo" className="w-[54px] sm:w-[60px] aspect-square" />
                    </div>

                    <ul className="justify-center gap-32 hidden lg:flex">
                        <a href="/#amenities">
                            <li className="navbar-item">Amenities</li>
                        </a>
                        <a href="/#gallery">
                            <li className="navbar-item">Gallery</li>
                        </a>
                        <a href="/#about">
                            <li className="navbar-item">About</li>
                        </a>
                        <a href="/#map">
                            <li className="navbar-item">Map</li>
                        </a>
                        <a href="/#pricing">
                            <li className="navbar-item">Pricing</li>
                        </a>
                        <a href="/#booking">
                            <li className="navbar-item">Booking</li>
                        </a>
                        <LanguageMenu locale="en" offsetY={35} sizeClass="w-5" />
                    </ul>

                    <div className="flex ml-auto items-center justify-center gap-24">
                        <div className="flex justify-center ml-auto">
                            {showCta && (
                                <a href="/#booking">
                                    <button className="btn-beige py-8 px-20">Book now</button>
                                </a>
                            )}
                        </div>

                        <div className="flex lg:hidden">
                            <HamburgerButton open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
