"use client";

import { useEffect } from "react";
import Xicon from "../svg_icons/Xicon";
import AmenitiesFeaturePopup from "./AmenitiesFeaturePopup";

export default function AmenitiesPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center inset-0 z-1010 bg-black/30 px-24" onMouseDown={onClose}>
            <div className="overflow-clip w-full max-w-100 lg:max-w-135 max-h-[85vh] bg-beige border border-white rounded-[48px] flex flex-col" onMouseDown={(e) => e.stopPropagation()}>
                <div className="w-full h-14 lg:h-18.75 flex justify-end items-center px-2.5 pt-16">
                    <button type="button" onClick={onClose} className="aspect-square w-[48px] cursor-pointer" aria-label="Close amenities">
                        <Xicon className="w-10 aspect-square fill-black stroke-black" />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-[clamp(20px,2.77vw,40px)] w-full h-130 px-[clamp(24px,3.88vw,56px)] pb-24 overflow-y-auto">
                    <AmenitiesFeaturePopup amenitiy="queenbed" text="2 queen beds" />
                    <AmenitiesFeaturePopup amenitiy="singlebed" text="1 kid's bed" />
                    <AmenitiesFeaturePopup amenitiy="sofa" text="Extendable couch" />
                    <AmenitiesFeaturePopup amenitiy="pool" text="Private pool" />
                    <AmenitiesFeaturePopup amenitiy="bbq" text="Terrace with BBQ" />
                    <AmenitiesFeaturePopup amenitiy="parking" text="Private parking" />
                    <AmenitiesFeaturePopup amenitiy="ac" text="Air conditioning" />
                    <AmenitiesFeaturePopup amenitiy="wifi" text="WiFi" />
                    <AmenitiesFeaturePopup amenitiy="beach" text="Nearby beach" />
                    <AmenitiesFeaturePopup amenitiy="tv" text="TV in every bedroom" />
                    <AmenitiesFeaturePopup amenitiy="campfire" text="Outdoor lounge area" />
                    <AmenitiesFeaturePopup amenitiy="lounge" text="Sun loungers" />
                    <AmenitiesFeaturePopup amenitiy="dishes" text="Dishwasher" />
                    <AmenitiesFeaturePopup amenitiy="hairdryer" text="Hair dryer" />
                    <AmenitiesFeaturePopup amenitiy="heating" text="Heating" />
                    <AmenitiesFeaturePopup amenitiy="towel" text="Bed linens and towels" />
                </div>
                <div className="bg-beige-dark w-full h-14 lg:h-18.75"></div>
            </div>
        </div>
    );
}
