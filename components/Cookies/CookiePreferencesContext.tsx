"use client";
import { createContext, useContext, useState } from "react";

const CookiePrefsContext = createContext<{
    open: boolean;
    openPrefs: () => void;
    closePrefs: () => void;
    closeCookieBanner: () => void;
} | null>(null);

export function CookiePrefsProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [cookieBannerOpened, setCookieBannerOpened] = useState(false);

    return (
        <CookiePrefsContext.Provider
            value={{
                open,
                openPrefs: () => setOpen(true),
                closePrefs: () => setOpen(false),
                closeCookieBanner: () => setCookieBannerOpened(false),
            }}>
            {children}
        </CookiePrefsContext.Provider>
    );
}

export function useCookiePrefs() {
    const ctx = useContext(CookiePrefsContext);
    if (!ctx) throw new Error("useCookiePrefs must be used inside CookiePrefsProvider");
    return ctx;
}
