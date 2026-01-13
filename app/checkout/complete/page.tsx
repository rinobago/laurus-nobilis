import CheckoutComplete from "@/components/Checkout/Complete/CheckoutComplete";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <CheckoutComplete />
            <Footer showMainLinks={false} />
        </>
    );
}
