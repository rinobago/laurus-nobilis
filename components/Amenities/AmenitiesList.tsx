import { useTranslations } from "next-intl";
import AmenitiesFeature from "./AmenitiesFeature";

export default function AmenitiesList() {
    const t = useTranslations("Amenities.List");

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-[clamp(16px,2.77vw,40px)] w-full max-sm:max-w-100">
            <li className="hidden w-full sm:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="queenbed"
                    text={t("queenbed")}
                />
            </li>
            <li className="hidden w-full sm:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="singlebed"
                    text={t("singlebed")}
                />
            </li>
            <li className="hidden w-full lg:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="sofa"
                    text={t("sofa")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="pool"
                    text={t("pool")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="bbq"
                    text={t("bbq")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="parking"
                    text={t("parking")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="ac"
                    text={t("ac")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="wifi"
                    text={t("wifi")}
                />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature
                    amenitiy="beach"
                    text={t("beach")}
                />
            </li>
        </ul>
    );
}
