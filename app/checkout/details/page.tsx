import CheckoutDetails from "@/components/Checkout/Details/CheckoutDetails";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar showCta={false} />
            <CheckoutDetails />
            <Footer showMainLinks={false} />
        </>
    );
}
