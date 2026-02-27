import CheckoutComplete from "@/components/Checkout/Complete/CheckoutComplete";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Booking Confirmation",
    description: "Booking confirmation page for Laurus Nobilis reservations.",
    path: "/checkout/complete",
    indexable: false,
});

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <CheckoutComplete />
            <Footer showMainLinks={false} />
        </>
    );
}
