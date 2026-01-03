export default function About() {
    return (
        <section className="flex flex-col items-center relative bg-brown-080">
            <div className="absolute inset-0 bg-center bg-cover opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/texture/stone-texture.png')" }}></div>
            <div className="container flex flex-col lg:flex-row gap-[80px] justify-start items-start">
                <h2 className="shrink-[0.8] text-left w-full text-beige-dark font-bold text-[clamp(36px,3.33vw,48px)] leading-120">Your modern escape in Lovran</h2>
                <div>
                    <p className="text-beige-dark w-full text-18 leading-150 text-left">
                        Laurus Nobilis is a modern, fully equipped holiday apartment in Lovran, ideal for families and groups. With two queen-size bedrooms, a separate kids bed, and an extendable
                        couch for two, the apartment accommodates up to 7 guests in total.
                    </p>
                    <br />
                    <p className="text-beige-dark w-full text-18 leading-150 text-left">
                        The interior is modern and comfortable, with a fully equipped kitchen, air conditioning in all rooms, fast WiFi, and a TV in every bedroom. Outside, the private pool, terrace,
                        and BBQ area offer a relaxing space to enjoy the sun and spend time together.
                    </p>
                    <br />
                    <p className="text-beige-dark w-full text-18 leading-150 text-left">
                        The apartment is located in a peaceful area, just a few minutes' walk from the beach, shops, and restaurants.
                    </p>
                </div>
            </div>
        </section>
    );
}
