"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import AmenitiesPopup from "./AmenitiesPopup";

export default function ShowAmenitiesButton() {
    const t = useTranslations("Amenities");
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="btn-brown-outline"
                onClick={() => setOpen(true)}>
                {t("Button")}
            </button>

            <AmenitiesPopup
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
