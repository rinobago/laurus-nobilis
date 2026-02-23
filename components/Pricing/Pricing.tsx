import { useTranslations } from "next-intl";
import PricingTable from "./PricingTable";

export default function Pricing() {
    const t = useTranslations("Pricing");

    return (
        <section
            id="pricing"
            className="flex flex-col items-center bg-beige relative">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "url('/texture/brick-texture.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "50% 50%",
                    backgroundPosition: "center",
                }}
            />
            <div className="container flex flex-col items-center gap-[80px]">
                <div className="flex flex-col gap-32 items-center lg:gap-24">
                    <h2 className="w-full text-center text-black font-bold text-[clamp(36px,3.33vw,48px)] leading-120">
                        {t("Title")}
                    </h2>
                    <p className="text-center text-16 lg:text-18 text-black">{t("Description")}</p>
                </div>
                <PricingTable />
                <a
                    href="/#booking"
                    className="btn-brown">
                    {t("Button")}
                </a>
            </div>
        </section>
    );
}
