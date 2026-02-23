import { useTranslations } from "next-intl";
import Link from "next/link";
import { Facebook, Instagram, Whatsapp } from "../svg_icons/SocialsIcons";
import CookiePreferencesButton from "./CookiePreferencesButton";

export default function Footer({ showMainLinks = true }: { showMainLinks?: boolean }) {
    const t = useTranslations("Footer");
    const s = useTranslations("Navbar");

    return (
        <footer className="flex flex-col items-center bg-brown-060">
            <div className="container md:py-[80px] flex flex-col items-center gap-[80px] text-white">
                <div className="flex w-full items-start justify-center gap-64">
                    <div className=" flex flex-col items-start justify-start gap-32 w-full">
                        {showMainLinks && (
                            <a href="/#top">
                                <img
                                    src="/Laurus-Nobilis-Logo.png"
                                    alt="Laurus Nobilis Logo"
                                    className="w-25 md:w-35 aspect-square"
                                />
                            </a>
                        )}
                        <div className="flex flex-col items-start justify-start gap-24 w-full text-14 leading-150">
                            <div className="flex flex-col items-start justify-start gap-4 w-full">
                                <p className="font-semibold">{t("Address")}</p>
                                <address className="not-italic">
                                    Rezine 7G, 51415, Lovran, Croatia
                                </address>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 w-full">
                                <p className="font-semibold">{t("Contact")}</p>
                                <a
                                    href="tel:+385992170459"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    +385 99 2170 459
                                </a>
                                <a
                                    href="mailto:zeljko.bago@gmail.com"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    zeljko.bago@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center gap-12">
                            <a href="">
                                <Facebook className="w-4.5 h-4.5 fill-white hover:fill-brown-160 active:fill-brown-160" />
                            </a>
                            <a href="">
                                <Instagram className="w-4.5 h-4.5 fill-white hover:fill-brown-160 active:fill-brown-160" />
                            </a>
                            <a href="">
                                <Whatsapp className="w-4.5 h-4.5 fill-white hover:fill-brown-160 active:fill-brown-160" />
                            </a>
                        </div>
                    </div>
                    {showMainLinks && (
                        <div className="flex flex-col justify-start items-start text-14 leading-150">
                            <a
                                href="/#amenities"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("Amenities")}
                            </a>

                            <a
                                href="/#gallery"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("Gallery")}
                            </a>

                            <a
                                href="/#about"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("About")}
                            </a>

                            <a
                                href="/#map"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("Map")}
                            </a>

                            <a
                                href="/#pricing"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("Pricing")}
                            </a>

                            <a
                                href="/#booking"
                                className="py-8 hover:text-brown-160 active:text-brown-160">
                                {s("Booking")}
                            </a>
                        </div>
                    )}
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-start items-center gap-64 border-t border-white pt-32">
                    {showMainLinks ? (
                        <div className="w-full lg:w-auto max-lg:max-w-100 flex justify-between items-center gap-24 text-14 leading-150 order-0 lg:order-1">
                            <div className="flex flex-col lg:flex-row gap-24">
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("PrivacyPolicy")}
                                </Link>
                                <Link
                                    href="/terms-of-service"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("TermsOfService")}
                                </Link>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-24">
                                <Link
                                    href="/cancellation-policy"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("CancelationPolicy")}
                                </Link>
                                <CookiePreferencesButton className="hover:text-brown-160 active:text-brown-160 cursor-pointer" />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full lg:w-auto max-lg:max-w-100 grid grid-cols-2 lg:grid-cols-3 gap-24 text-14 leading-150 order-0 lg:order-1 place-items-center">
                            {/* Privacy Policy */}
                            <div className="col-span-1 lg:row-start-1">
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("PrivacyPolicy")}
                                </Link>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="col-span-1 lg:col-start-3 lg:row-start-1">
                                <Link
                                    href="/cancellation-policy"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("CancelationPolicy")}
                                </Link>
                            </div>

                            {/* Terms of Service */}
                            <div className="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
                                <Link
                                    href="/terms-of-service"
                                    className="hover:text-brown-160 active:text-brown-160">
                                    {t("TermsOfService")}
                                </Link>
                            </div>
                        </div>
                    )}

                    <p className="text-14 leading-150 order-1 lg:order-0">
                        © {new Date().getFullYear()} | Laurus Nobilis
                    </p>
                </div>
            </div>
        </footer>
    );
}
