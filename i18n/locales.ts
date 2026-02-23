export const SUPPORTED_LOCALES = ["en", "de", "sl", "cs", "es", "hr", "it", "pl", "hu", "fr"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";

export function isSupportedLocale(locale: string): locale is AppLocale {
    return SUPPORTED_LOCALES.includes(locale as AppLocale);
}
