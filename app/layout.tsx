import CookieBanner from "@/components/Cookies/CookieBanner";
import { CookiePrefsProvider } from "@/components/Cookies/CookiePreferencesContext";
import { CookiePrefsModalHost } from "@/components/Cookies/CookiePreferencesHost";
import { getConsent } from "@/lib/cookies/getConsent";
import { DEFAULT_OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import "react-day-picker/dist/style.css";
import "./globals.css";

export const montserrat = Montserrat({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    applicationName: SITE_NAME,
    title: {
        default: `${SITE_NAME} | Seaside Holiday Apartment in Lovran`,
        template: `${SITE_NAME} | %s`,
    },
    description:
        "Stay at Laurus Nobilis, a spacious seaside apartment in Lovran, Croatia. Sleeps 7 guests with private parking, modern amenities, and easy online booking.",
    keywords: [
        "Laurus Nobilis",
        "Lovran apartment",
        "Croatia holiday apartment",
        "Istria accommodation",
        "family apartment Lovran",
        "vacation rental Croatia",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `${SITE_NAME} | Holiday Apartment in Lovran`,
        description:
            "Modern holiday apartment in Lovran, Croatia for up to 7 guests. Check availability and book your stay online.",
        url: "/",
        siteName: SITE_NAME,
        type: "website",
        locale: "en_US",
        images: [
            {
                url: DEFAULT_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "Laurus Nobilis apartment in Lovran",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_NAME} | Holiday Apartment in Lovran`,
        description:
            "Modern holiday apartment in Lovran, Croatia for up to 7 guests. Check availability and book your stay online.",
        images: [DEFAULT_OG_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const consent = await getConsent();
    const locale = await getLocale();

    return (
        <html
            lang={locale}
            className={montserrat.className}>
            <body>
                <NextIntlClientProvider>
                    <CookiePrefsProvider>
                        {children}
                        <CookieBanner initialConsent={consent} />
                        <CookiePrefsModalHost />
                    </CookiePrefsProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
