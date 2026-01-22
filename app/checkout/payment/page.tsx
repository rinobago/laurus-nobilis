import CheckoutPayment from "@/components/Checkout/Payment/CheckoutPayment";
import { PaymentUiProvider } from "@/components/Checkout/Payment/PaymentUiContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
