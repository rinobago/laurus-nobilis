import { useTranslations } from "next-intl";
import AmenitiesList from "./AmenitiesList";
import ShowAmenitiesButton from "./ShowAmenitiesButton";

export default function Amenities() {
    const t = useTranslations("Amenities");

    return (
        <section
            id="amenities"
            className="w-full flex flex-col items-center bg-beige">
            <div className="container flex flex-col items-center gap-64 lg:gap-[80px]">
                <h2 className="text-left w-full text-black font-bold text-[clamp(36px,3.33vw,48px)] leading-120">
                    {t("Title")}
                </h2>
                <AmenitiesList />
                <div className="w-full justify-start">
                    <ShowAmenitiesButton />
                </div>
            </div>
        </section>
    );
}
