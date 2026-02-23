"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import LanguageMenu from "./LanguageMenu";
import NavbarOverlay from "./NavbarOverlay";

export default function Navbar({ showCta = true }: { showCta?: boolean }) {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* OVERLAY (behind navbar) */}
            <NavbarOverlay
                open={menuOpen}
                locale={locale}
                onClose={() => setMenuOpen(false)}
            />

            {/* NAVBAR */}
            <nav className="w-full sticky flex justify-center top-0 z-1000 bg-brown-060 py-1.25">
                <div className="w-full max-w-360 flex justify-center items-center px-24 md:px-64">
                    <a
                        href="/#top"
                        className="flex justify-center mr-auto">
                        <img
                            src="/Laurus-Nobilis-Logo.png"
                            alt="Laurus Nobilis Logo"
                            className="w-13.5 sm:w-15 aspect-square"
                        />
                    </a>

                    <ul className="hidden lg:flex justify-center gap-32 items-center">
                        <li>
                            <a
                                className="navbar-item"
                                href="/#amenities">
                                {t("Amenities")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="navbar-item"
                                href="/#gallery">
                                {t("Gallery")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="navbar-item"
                                href="/#about">
                                {t("About")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="navbar-item"
                                href="/#map">
                                {t("Map")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="navbar-item"
                                href="/#pricing">
                                {t("Pricing")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="navbar-item"
                                href="/#booking">
                                {t("Booking")}
                            </a>
                        </li>
                        <li>
                            <LanguageMenu
                                locale={locale}
                                offsetY={35}
                                sizeClass="w-5"
                            />
                        </li>
                    </ul>

                    <div className="flex ml-auto items-center justify-center gap-24">
                        <div className="flex justify-center ml-auto">
                            {showCta && (
                                <a
                                    href="/#booking"
                                    onClick={() => setMenuOpen(false)}
                                    className="btn-beige py-8 px-20 text-center">
                                    {t("Button")}
                                </a>
                            )}
                        </div>

                        <div className="flex lg:hidden">
                            <HamburgerButton
                                aria-expanded={menuOpen}
                                open={menuOpen}
                                onToggle={() => setMenuOpen((v) => !v)}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
