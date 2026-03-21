"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Reveal from "../Animation/FadeIn";
import AmenitiesPopup from "./AmenitiesPopup";

export default function ShowAmenitiesButton() {
    const t = useTranslations("Amenities");
    const [open, setOpen] = useState(false);

    return (
        <>
            <Reveal>
                <button
                    type="button"
                    className="btn-brown-outline"
                    onClick={() => setOpen(true)}>
                    {t("Button")}
                </button>
            </Reveal>

            <AmenitiesPopup
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
