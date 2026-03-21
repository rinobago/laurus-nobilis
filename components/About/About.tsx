import { useTranslations } from "next-intl";
import Reveal from "../Animation/FadeIn";

export default function About() {
    const t = useTranslations("About");

    return (
        <section
            id="about"
            className="flex flex-col items-center relative bg-brown-080">
            <div
                className="absolute inset-0 bg-center bg-cover opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url('/texture/stone-texture.png')" }}></div>
            <div className="container flex flex-col lg:flex-row gap-[80px] justify-start items-start">
                <h2 className="shrink-[0.8] text-left w-full text-beige-dark font-bold text-[clamp(36px,3.33vw,48px)] leading-120">
                    {t("Title")}
                </h2>
                <article className="flex flex-col gap-24">
                    <Reveal
                        as="p"
                        className="text-beige-dark w-full text-18 leading-150 text-left">
                        {t("Description1")}
                    </Reveal>
                    <Reveal
                        as="p"
                        className="text-beige-dark w-full text-18 leading-150 text-left">
                        {t("Description2")}
                    </Reveal>
                    <Reveal
                        as="p"
                        className="text-beige-dark w-full text-18 leading-150 text-left">
                        {t("Description3")}
                    </Reveal>
                </article>
            </div>
        </section>
    );
}
