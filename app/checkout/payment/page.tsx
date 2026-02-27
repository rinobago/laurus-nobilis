import CheckoutPayment from "@/components/Checkout/Payment/CheckoutPayment";
import { PaymentUiProvider } from "@/components/Checkout/Payment/PaymentUiContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
    title: "Secure Payment",
    description: "Complete your secure payment for your Laurus Nobilis booking.",
    path: "/checkout/payment",
    indexable: false,
});

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <PaymentUiProvider>
                <CheckoutPayment />
            </PaymentUiProvider>
            <Footer showMainLinks={false} />
        </>
    );
}
