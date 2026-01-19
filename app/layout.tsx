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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={montserrat.className}>
            <body>{children}</body>
        </html>
    );
}
