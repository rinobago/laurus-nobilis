"use client";
import { ButtonHTMLAttributes } from "react";
import { useCookiePrefs } from "../Cookies/CookiePreferencesContext";

export default function CookiePreferencesText({
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { openPrefs } = useCookiePrefs();
    return (
        <button
            onClick={openPrefs}
            {...props}>
            Cookie preferences
        </button>
    );
}
