import GoogleMap from "./GoogleMap";

export default function Map() {
    return (
        <section className="bg-brown-100 flex flex-col items-center">
            <div className="container flex flex-col gap-[80px]">
                <div className="flex flex-col gap-32 lg:gap-16">
                    <h2 className="w-full text-left text-beige-dark font-bold text-[clamp(36px,3.33vw,48px)] leading-120">Location</h2>
                    <p className="text-left w-full text-16 lg:text-18 leading-150">
                        Located in Lovran, just a short walk from the beach and within easy reach of restaurants, shops, and the old town.
                    </p>
                </div>
                <GoogleMap />
            </div>
        </section>
    );
}
