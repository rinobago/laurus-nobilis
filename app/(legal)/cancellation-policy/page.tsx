import CancellationPolicy from "@/components/Cancellation-policy/CancellationPolicy";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <CancellationPolicy />
            <Footer />
        </>
    );
}
