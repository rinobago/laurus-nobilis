import CookiePreferencesText from "./CookiePreferencesText";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
    const t = useTranslations("PrivacyPolicy");
    const tRoot = useTranslations();
    const section1_1List = t.raw("Section1.Section1_1List") as string[];
    const section1_2List = t.raw("Section1.Section1_2List") as string[];
    const section2List = t.raw("Section2.List") as string[];
    const section3List = t.raw("Section3.List") as string[];
    const section4List = t.raw("Section4.List") as string[];
    const section5List = t.raw("Section5.List") as string[];
    const section6List = t.raw("Section6.List") as string[];

    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col container items-center text-black text-left">
                <div className="w-full flex flex-col gap-32">
                    <h1 className="w-full text-[clamp(40px,5.56vw,80px)] leading-120 font-bold">
                        {t("Title")}
                    </h1>
                    <div className="w-full flex flex-col gap-32">
                        <p className="paragraph-h3">
                            {t("LastUpdatedLabel")} <time dateTime="2026-01-05">{t("LastUpdatedDate")}</time>
                        </p>
                        <div className="paragraph-text flex flex-col gap-16">
                            <p>
                                {t("IntroParagraph1")}
                                <span className="font-bold">{tRoot("CancellationPolicy.ApartmentName")}</span>
                                {t("IntroParagraph2")}
                                <span className="font-bold">{t("WebsiteURL")}</span>
                                {t("IntroParagraph3")}
                            </p>
                            <p>
                                {t("IntroParagraph4")}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section1.Title")}</h2>
                    <div className="w-full flex flex-col gap-32">
                        <h3 className="paragraph-h3">{t("Section1.Section1_1Title")}</h3>
                        <div className="paragraph-text flex flex-col gap-16">
                            <p>{t("Section1.Section1_1Intro")}</p>
                            <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                                {section1_1List.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p>
                                {t("Section1.Section1_1Outro1")}
                                <span className="font-bold">{t("Section1.Not")}</span>
                                {t("Section1.Section1_1Outro2")}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h3 className="paragraph-h3">{t("Section1.Section1_2Title")}</h3>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section1.Section1_2Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section1_2List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p>{t("Section1.Section1_2Outro")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h3 className="paragraph-h3">{t("Section1.Section1_3Title")}</h3>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            {t("Section1.Section1_3Prefix")}
                            <CookiePreferencesText className="font-bold underline cursor-pointer" />{" "}
                            {t("Section1.Section1_3Suffix")}
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section2.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section2.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section2List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section3.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section3.Intro")}</p>
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
                        <p>{t("Section4.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                <span className="font-bold">{section4List[0]}</span>
                                {section4List[1]}
                            </li>
                            <li>
                                <span className="font-bold">{section4List[2]}</span>
                                {section4List[3]}
                            </li>
                            <li>
                                <span className="font-bold">{section4List[4]}</span>
                                {section4List[5]}
                            </li>
                        </ul>
                        <p>{t("Section4.Outro")}</p>
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
                        <p>{t("Section5.Outro")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section6.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section6.Intro")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            {section6List.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p>
                            {t("Section6.Outro")}
                            <span className="font-bold">{t("Section6.ContactEmail")}</span>
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section7.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section7.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section8.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section8.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section9.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section9.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section10.Title")}</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>{t("Section10.Intro")}</p>
                        <p className="font-bold">{t("Section10.Email")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
