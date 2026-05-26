export const locales = ["es", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
