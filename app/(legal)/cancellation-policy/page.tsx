import CancellationPolicy from "@/components/Cancellation-policy/CancellationPolicy";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Cancellation Policy",
    description:
        "See the Laurus Nobilis Cancellation Policy for refund windows, cancellation terms, and how booking changes are handled.",
    path: "/cancellation-policy",
});

export default function Page() {
    return (
        <>
            <Navbar />
            <CancellationPolicy />
            <Footer />
        </>
    );
}
