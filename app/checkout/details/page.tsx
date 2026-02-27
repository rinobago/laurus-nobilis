import CheckoutDetails from "@/components/Checkout/Details/CheckoutDetails";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Booking Details",
    description: "Enter your stay details to continue your Laurus Nobilis booking.",
    path: "/checkout/details",
    indexable: false,
});

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <CheckoutDetails />
            <Footer showMainLinks={false} />
        </>
    );
}
