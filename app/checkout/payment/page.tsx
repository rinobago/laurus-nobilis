import CheckoutPayment from "@/components/Checkout/Payment/CheckoutPayment";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <CheckoutPayment />
            <Footer showMainLinks={false} />
        </>
    );
}
