import { useTranslations } from "next-intl";

export default function CancellationPolicy() {
    const t = useTranslations("CancellationPolicy");
    const section1List = t.raw("Section1.List") as string[];
    const section2List = t.raw("Section2.List") as string[];
    const section3List = t.raw("Section3.List") as string[];

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
                            {t("IntroParagraph")}
                            <span className="font-bold">{t("ApartmentName")}</span>
                            {t("Via")}
                            <span className="font-bold">{t("WebsiteURL")}</span>.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section1.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            {t("Section1.Paragraph1")}
                            <span className="font-bold">{t("Section1.ContactEmail")}</span>
                        </p>
                        <p>{t("Section1.Paragraph2")}</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                <span className="font-bold">{section1List[0]}</span>
                                {section1List[1]}
                                <span className="font-bold">{section1List[2]}</span>
                                {section1List[3]}
                            </li>
                            <li>
                                <span className="font-bold">{section1List[4]}</span>
                                {section1List[5]}
                                <span className="font-bold">{section1List[6]}</span>
                                {section1List[7]}
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section2.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
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
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                {section3List[0]}
                                <span className="font-bold">{section3List[1]}</span>
                                {section3List[2]}
                            </li>
                            <li>{section3List[3]}</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section4.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section4.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section5.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            {t("Section5.Body1")}
                            <span className="font-bold">{t("Section5.FullRefund")}</span>
                            {t("Section5.Body2")}
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section6.Title")}</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>{t("Section6.Body")}</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">{t("Section7.Title")}</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>{t("Section7.Intro")}</p>
                        <p className="font-bold">{t("Section7.Email")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
