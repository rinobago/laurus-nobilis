import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TermsOfService from "@/components/Terms-of-service/TermsOfService";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Terms of Service",
    description:
        "Review the Laurus Nobilis Terms of Service covering booking conditions, guest responsibilities, and usage terms for the website and accommodation services.",
    path: "/terms-of-service",
});

export default function Page() {
    return (
        <>
            <Navbar />
            <TermsOfService />
            <Footer />
        </>
    );
}
