import type { Locale } from "@/lib/i18n/config";

export type Localized = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export function L(es: string, en: string, de: string): Localized {
  return { es, en, de };
}

export function LL(
  es: string[],
  en: string[],
  de: string[]
): LocalizedList {
  return { es, en, de };
}

export function t(value: Localized, locale: Locale): string {
  return value[locale];
}

export interface PracticeArea {
  slug: string;
  icon: string;
  name: Localized;
  tagline: Localized;
  summary: Localized;
  description: Localized;
  services: LocalizedList;
  contacts: string[]; // team member slugs
  featured?: boolean;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: "seniorPartner" | "partner" | "counsel" | "senior" | "associate";
  image: string;
  email: string;
  phone?: string;
  practices: string[]; // practice slugs
  languages: string[];
  bio: Localized;
  education: LocalizedList;
  experience: Localized;
  linkedin?: string;
  featured?: boolean;
}

export interface Insight {
  slug: string;
  category: Localized;
  categoryKey: string;
  title: Localized;
  excerpt: Localized;
  body: Localized;
  author: string; // team member slug
  date: string; // ISO
  readMinutes: number;
  image: string;
  practices: string[];
  featured?: boolean;
}

export interface Office {
  slug: string;
  city: Localized;
  country: Localized;
  headquarters?: boolean;
  address: string;
  email: string;
  phone: string;
  timezone: string;
  mapQuery: string;
}

export interface Sector {
  slug: string;
  icon: string;
  name: Localized;
  description: Localized;
}
