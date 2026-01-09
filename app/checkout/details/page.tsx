import CheckoutDetails from "@/components/Checkout-details/CheckoutDetails";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <CheckoutDetails />
            <Footer showMainLinks={false} />
        </>
    );
}
