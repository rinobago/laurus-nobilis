"use client";
import CookieBannerPreferences from "./CookieBannerPreferences";
import { useCookiePrefs } from "./CookiePreferencesContext";

export function CookiePrefsModalHost() {
    const { open } = useCookiePrefs();

    if (!open) return null;

    return <CookieBannerPreferences />;
}
