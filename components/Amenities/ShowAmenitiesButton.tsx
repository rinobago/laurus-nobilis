"use client";

import { useState } from "react";
import AmenitiesPopup from "./AmenitiesPopup";

export default function ShowAmenitiesButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button type="button" className="btn-brown-outline" onClick={() => setOpen(true)}>
                Show all
            </button>

            <AmenitiesPopup open={open} onClose={() => setOpen(false)} />
        </>
    );
}
