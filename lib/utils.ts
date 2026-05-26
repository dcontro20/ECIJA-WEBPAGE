import type { Locale } from "@/lib/i18n/config";

const localeMap: Record<Locale, string> = {
  es: "es-AR",
  en: "en-GB",
  de: "de-DE",
};

export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat(localeMap[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
