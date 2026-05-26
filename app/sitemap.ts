import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { practices } from "@/lib/data/practices";
import { team } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";

const base = "https://ecija.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/estudio", "/areas", "/equipo", "/insights", "/oficinas", "/contacto"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
    for (const p of practices) {
      entries.push({ url: `${base}/${locale}/areas/${p.slug}`, changeFrequency: "monthly", priority: 0.7 });
    }
    for (const m of team) {
      entries.push({ url: `${base}/${locale}/equipo/${m.slug}`, changeFrequency: "monthly", priority: 0.6 });
    }
    for (const i of insights) {
      entries.push({ url: `${base}/${locale}/insights/${i.slug}`, changeFrequency: "yearly", priority: 0.6 });
    }
  }

  return entries;
}
