import About from "@/components/About";
import Amenities from "@/components/Amenities/Amenities";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Amenities />
            <Gallery />
            <About />
        </>
    );
};

export default Page;
