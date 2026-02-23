"use client";
import { useTranslations } from "next-intl";
import { ButtonHTMLAttributes } from "react";
import { useCookiePrefs } from "../Cookies/CookiePreferencesContext";

export default function CookiePreferencesButton({
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const t = useTranslations("Footer");

    const { openPrefs } = useCookiePrefs();
    return (
        <button
            onClick={openPrefs}
            {...props}>
            {t("CookiePreferences")}
        </button>
    );
}
