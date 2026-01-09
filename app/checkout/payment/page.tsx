import CheckoutPayment from "@/components/Checkout-payment/CheckoutPayment";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <CheckoutPayment />
            <Footer showMainLinks={false} />
        </>
    );
}
