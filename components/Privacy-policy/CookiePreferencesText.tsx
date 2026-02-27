"use client";
import { useTranslations } from "next-intl";
import { ButtonHTMLAttributes } from "react";
import { useCookiePrefs } from "../Cookies/CookiePreferencesContext";

export default function CookiePreferencesText({
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const t = useTranslations("PrivacyPolicy.Section1");

    const { openPrefs } = useCookiePrefs();
    return (
        <button
            onClick={openPrefs}
            {...props}>
            {t("Section1_3CookieLink")}
        </button>
    );
}
