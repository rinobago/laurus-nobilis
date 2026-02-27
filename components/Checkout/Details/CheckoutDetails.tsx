import { useTranslations } from "next-intl";
import Link from "next/link";
import { Suspense } from "react";
import { PreviousButton } from "../../svg_icons/ChevronButtons";
import DetailsCard from "./DetailsCard";
import FormDetails from "./FormDetails";

export default function CheckoutDetails() {
    const t = useTranslations("Details");

    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col gap-64 min-[960px]:gap-24 container items-center text-black">
                <Link
                    href="/#booking"
                    className="w-full flex justify-start items-center gap-1.5">
                    <div className="w-[clamp(18px,3.13vw,24px)] aspect-square flex items-center justify-center">
                        <PreviousButton className="w-[clamp(4.5px,0.78vw,6px)] aspect-1/2 fill-none stroke-black" />
                    </div>
                    <p className="text-[clamp(14px,2.08vw,16px)] font-semibold leading-150 text-left">
                        {t("Back")}
                    </p>
                </Link>
                <div className="flex flex-col min-[960px]:flex-row gap-30 w-full justify-center items-center min-[960px]:items-start">
                    <div className="flex flex-col min-[960px]:max-w-134.5 w-full items-center min-[960px]:items-start justify-center gap-[80px] min-[960px]:gap-64">
                        <div className="flex w-full flex-col items-start justify-center gap-12">
                            <h1 className="text-left font-bold leading-120 text-[clamp(2.25rem,6vw,3rem)]">
                                {t("Title")}
                            </h1>
                            <p className="text-left w-full leading-150 text-[clamp(1rem,2.34vw,1.125rem)]">
                                {t("Description")}
                            </p>
                        </div>
                        <Suspense fallback={null}>
                            <FormDetails />
                        </Suspense>
                    </div>
                    <Suspense fallback={null}>
                        <DetailsCard />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
