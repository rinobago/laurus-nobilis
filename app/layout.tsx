import CookieBanner from "@/components/Cookies/CookieBanner";
import { CookiePrefsProvider } from "@/components/Cookies/CookiePreferencesContext";
import { CookiePrefsModalHost } from "@/components/Cookies/CookiePreferencesHost";
import { getConsent } from "@/lib/cookies/getConsent";
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
    title: "Laurus Nobilis",
    description: "Apartment Laurus Nobilis",
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
