import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicy from "@/components/Privacy-policy/PrivacyPolicy";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Privacy Policy",
    description:
        "Read the Laurus Nobilis Privacy Policy to understand how we collect, process, and protect your personal information when you use our website and booking flow.",
    path: "/privacy-policy",
});

export default function Page() {
    return (
        <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
        </>
    );
}
