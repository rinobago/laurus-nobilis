import About from "@/components/About/About";
import Amenities from "@/components/Amenities/Amenities";
import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Map from "@/components/Map/Map";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Amenities />
            <Gallery />
            <About />
            <Map />
            <Pricing />
            <Booking />
            <Footer />
        </>
    );
};

export default Page;
