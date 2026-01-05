import Link from "next/link";
import { Facebook, Instagram, Whatsapp } from "../svg_icons/SocialsIcons";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-brown-060">
            <div className="container md:py-[80px] flex flex-col items-center gap-[80px] text-white">
                <div className="flex w-full items-start justify-center gap-64">
                    <div className=" flex flex-col items-start justify-start gap-32 w-full">
                        <a href="/#top">
                            <img src="/Laurus-Nobilis-Logo.png" alt="Laurus Nobilis Logo" className="w-25 md:w-35 aspect-square" />
                        </a>
                        <div className="flex flex-col items-start justify-start gap-24 w-full text-14 leading-150">
                            <div className="flex flex-col items-start justify-start gap-4 w-full">
                                <p className="font-semibold">Address:</p>
                                <address className="not-italic">Rezine 7G, 51415, Lovran, Croatia</address>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 w-full">
                                <p className="font-semibold">Contact:</p>
                                <a href="tel:+385992170459" className="hover:text-brown-160 active:text-brown-160">
                                    +385 99 2170 459
                                </a>
                                <a href="mailto:zeljko.bago@gmail.com" className="hover:text-brown-160 active:text-brown-160">
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
                    <div className="flex flex-col justify-start items-start text-14 leading-150">
                        <a href="/#amenities" className="py-8 hover:text-brown-160 active:text-brown-160">
                            Amenities
                        </a>

                        <a href="/#gallery" className="py-8 hover:text-brown-160 active:text-brown-160">
                            Gallery
                        </a>

                        <a href="/#about" className="py-8 hover:text-brown-160 active:text-brown-160">
                            About
                        </a>

                        <a href="/#map" className="py-8 hover:text-brown-160 active:text-brown-160">
                            Map
                        </a>

                        <a href="/#pricing" className="py-8 hover:text-brown-160 active:text-brown-160">
                            Pricing
                        </a>

                        <a href="/#booking" className="py-8 hover:text-brown-160 active:text-brown-160">
                            Booking
                        </a>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-start items-center gap-64 border-t border-white pt-32">
                    <div className="w-full lg:w-auto max-lg:max-w-100 flex justify-between items-center gap-24 text-14 leading-150 order-0 lg:order-1">
                        <div className="flex flex-col lg:flex-row gap-24">
                            <Link href="/privacy-policy" className="hover:text-brown-160 active:text-brown-160">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="hover:text-brown-160 active:text-brown-160">
                                Terms of Service
                            </Link>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-24">
                            <Link href="/cancellation-policy" className="hover:text-brown-160 active:text-brown-160">
                                Cancellation Policy
                            </Link>
                            <Link href="/cookie-preferences" className="hover:text-brown-160 active:text-brown-160">
                                Cookie preferences
                            </Link>
                        </div>
                    </div>
                    <p className="text-14 leading-150 order-1 lg:order-0">© {new Date().getFullYear()} | Laurus Nobilis</p>
                </div>
            </div>
        </footer>
    );
}
