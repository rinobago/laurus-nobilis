import About from "@/components/About/About";
import Amenities from "@/components/Amenities/Amenities";
import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Map from "@/components/Map/Map";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildPageMetadata({
    title: "Seaside Holiday Apartment in Lovran, Croatia",
    description:
        "Book Laurus Nobilis, a modern 3-bedroom holiday apartment in Lovran near the beach. Ideal for families or groups up to 7 guests with private parking and a private pool",
    path: "/",
});

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    image: [absoluteUrl("/apartment-images/IMG_7224.jpg")],
    url: absoluteUrl("/"),
    telephone: "+385992170459",
    email: "zeljko.bago@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Rezine 7G",
        postalCode: "51415",
        addressLocality: "Lovran",
        addressCountry: "HR",
    },
};

const Page = () => {
    return (
        <>
            <Script
                id="lodging-business-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <Navbar />
            <Hero />
            <Amenities />
            <Gallery />
            <About />
            <Map />
            <Pricing />
            <Booking />
            <Footer />
        </>
    );
};

export default Page;
