import { useTranslations } from "next-intl";

export default function TermsOfService() {
    const t = useTranslations("TermsOfService");
    const section1List = t.raw("Section1.List") as string[];
    const section3List = t.raw("Section3.List") as string[];
    const section4List = t.raw("Section4.List") as string[];
    const section5List = t.raw("Section5.List") as string[];
    const section7List = t.raw("Section7.List") as string[];

    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col container items-center text-black text-left">
                <div className="w-full flex flex-col gap-32">
                    <h1 className="w-full text-[clamp(40px,5.56vw,80px)] leading-120 font-bold">{t("Title")}</h1>
                    <div className="w-full flex flex-col gap-32">
                        <p className="paragraph-h3">
                            {t("LastUpdatedLabel")} <time dateTime="2026-01-05">{t("LastUpdatedDate")}</time>
                        </p>
                        <p className="paragraph-text">
                            {t("IntroParagraph.Text")}
                            <span className="font-bold">{t("IntroParagraph.WebsiteURL")}</span>
                            {t("IntroParagraph.AndText")}
                            <span className="font-bold">{t("IntroParagraph.ApartmentName")}</span>
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section1.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section1.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section1List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section2.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section2.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section3.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section3List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section4.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section4List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section5.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section5.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section5List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section6.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            {t("Section6.Body.Text1")}
                            <span className="font-bold">{t("Section6.Body.ApartmentName")}</span>
                            {t("Section6.Body.Text2")}
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section7.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section7.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section7List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section8.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            {t("Section8.Body.Text")}
                            <span className="font-bold">{t("Section8.Body.Country")}</span>
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section9.Title")}</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>{t("Section9.Intro")}</p>
                        <p className="font-bold">{t("Section9.Email")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
