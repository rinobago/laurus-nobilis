"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Xicon from "../svg_icons/Xicon";
import AmenitiesFeaturePopup from "./AmenitiesFeaturePopup";

export default function AmenitiesPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
    const t = useTranslations("Amenities.List");

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed flex justify-center items-center inset-0 z-1010 bg-black/30 px-24"
            onMouseDown={onClose}>
            <div
                className="overflow-clip w-full max-w-100 lg:max-w-135 max-h-[85vh] bg-beige border border-white rounded-[48px] flex flex-col"
                onMouseDown={(e) => e.stopPropagation()}>
                <div className="w-full h-14 lg:h-18.75 flex justify-end items-center px-2.5 pt-16 max-md:px-1.5 max-md:pt-12">
                    <button
                        type="button"
                        onClick={onClose}
                        className="aspect-square w-[48px] cursor-pointer"
                        aria-label="Close amenities">
                        <Xicon className="w-6 md:w-32 lg:w-10 aspect-square fill-black stroke-black" />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-[clamp(20px,2.77vw,40px)] w-full h-130 px-[clamp(24px,3.88vw,56px)] pb-24 overflow-y-auto">
                    <AmenitiesFeaturePopup
                        amenitiy="queenbed"
                        text={t("queenbed")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="singlebed"
                        text={t("singlebed")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="sofa"
                        text={t("sofa")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="pool"
                        text={t("pool")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="bbq"
                        text={t("bbq")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="parking"
                        text={t("parking")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="ac"
                        text={t("ac")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="wifi"
                        text={t("wifi")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="beach"
                        text={t("beach")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="tv"
                        text={t("tv")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="campfire"
                        text={t("campfire")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="lounge"
                        text={t("lounge")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="dishes"
                        text={t("dishes")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="hairdryer"
                        text={t("hairdryer")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="heating"
                        text={t("heating")}
                    />
                    <AmenitiesFeaturePopup
                        amenitiy="towel"
                        text={t("towel")}
                    />
                </div>
                <div className="bg-beige-dark w-full h-14 lg:h-18.75"></div>
            </div>
        </div>
    );
}
