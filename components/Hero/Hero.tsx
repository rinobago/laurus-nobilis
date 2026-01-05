import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center relative">
            <div className="absolute inset-0 bg-center bg-cover opacity-[0.08] pointer-events-none" style={{ backgroundImage: "url('/texture/Sand-Hero.png')" }} />
            <div className="container flex flex-col items-center bg-brown-100">
                <div className="flex flex-col lg:flex-row gap-64">
                    <div className="flex flex-col gap-10 lg:gap-[48px] items-start">
                        <div className="flex flex-col gap-8 items-start">
                            <h1 className="whitespace-nowrap font-bold text-[clamp(2rem,12vw,5rem)] lg:text-[clamp(2.875rem,5.55vw,5rem)] leading-[0.8] lg:leading-120">Laurus Nobilis</h1>{" "}
                            <h2 className="font-semibold text-[clamp(1.125rem,6.25vw,2.5rem)] lg:text-[clamp(1.375rem,2.77vw,2.5rem)] leading-120">Modern holiday apartment in Lovran</h2>{" "}
                        </div>
                        <div className="flex flex-col gap-32 items-start">
                            <p className="font-semibold text-[clamp(0.875rem,3.75vw,1.5rem)] lg:text-[clamp(1rem,1.66vw,1.5rem)] leading-120 text-brown-160">
                                Enjoy a private pool, BBQ terrace, space for seven, all just minutes from the beach.
                            </p>
                            <a href="/#booking" className="btn-beige">
                                Check availability
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full max-w-169.75">
                        <Image src="/apartment-images/IMG_7224.jpg" alt="Hero Image" width={323.3} height={242.48} className="rounded-lg w-[94.25%] mr-auto" />

                        <Image
                            src="/apartment-images/IMG_7225.jpg"
                            alt="Hero Image Smaller"
                            width={169.9}
                            height={127.43}
                            className="rounded-lg w-[52.5%] max-w-[348.06px] ml-auto -mt-[19%]
                        "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
