import CheckoutFailed from "@/components/Checkout/Failed/CheckoutFailed";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <Suspense fallback={null}>
                <CheckoutFailed />
            </Suspense>
            <Footer showMainLinks={false} />
        </>
    );
}
