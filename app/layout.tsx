import CookieBanner from "@/components/Cookies/CookieBanner";
import { getConsent } from "@/lib/cookies/getConsent";
import type { Metadata } from "next";
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

    return (
        <html
            lang="en"
            className={montserrat.className}>
            <body>
                {children}
                <CookieBanner initialConsent={consent} />
            </body>
        </html>
    );
}
