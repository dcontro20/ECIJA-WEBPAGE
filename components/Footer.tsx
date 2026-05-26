import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getFeaturedPractices } from "@/lib/data/practices";
import { getHeadquarters } from "@/lib/data/offices";
import { t } from "@/lib/data/types";
import { NewsletterForm } from "./NewsletterForm";

export function Footer({ locale }: { locale: Locale }) {
  const dict: Dictionary = getDictionary(locale);
  const practices = getFeaturedPractices().slice(0, 5);
  const hq = getHeadquarters();

  const navLinks = [
    { href: `/${locale}/estudio`, label: dict.nav.firm },
    { href: `/${locale}/areas`, label: dict.nav.practices },
    { href: `/${locale}/equipo`, label: dict.nav.team },
    { href: `/${locale}/insights`, label: dict.nav.insights },
    { href: `/${locale}/oficinas`, label: dict.nav.offices },
    { href: `/${locale}/contacto`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-20">
        {/* Top: brand + newsletter */}
        <div className="grid gap-12 border-b border-paper/10 pb-16 lg:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-semibold">ECIJA</span>
              <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-px bg-accent" />
                <span className="text-xs font-medium uppercase tracking-widest2 opacity-70">
                  Argentina
                </span>
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-paper/70">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="lg:pl-12">
            <p className="font-serif text-2xl">{dict.footer.newsletter}</p>
            <div className="mt-6">
              <NewsletterForm dict={dict} />
            </div>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-paper/50">
              {dict.footer.navTitle}
            </h4>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-paper/50">
              {dict.footer.practicesTitle}
            </h4>
            <ul className="mt-6 space-y-3">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${locale}/areas/${p.slug}`}
                    className="text-paper/80 transition-colors hover:text-accent"
                  >
                    {t(p.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-paper/50">
              {dict.footer.contactTitle}
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-paper/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span>{hq.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <a href={`tel:${hq.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {hq.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <a href={`mailto:${hq.email}`} className="hover:text-accent">
                  {hq.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-paper/50">
              {dict.footer.legalTitle}
            </h4>
            <ul className="mt-6 space-y-3 text-paper/80">
              <li>
                <Link href={`/${locale}/legal/privacidad`} className="transition-colors hover:text-accent">
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/terminos`} className="transition-colors hover:text-accent">
                  {dict.footer.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/cookies`} className="transition-colors hover:text-accent">
                  {dict.footer.cookies}
                </Link>
              </li>
            </ul>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-accent"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="border-t border-paper/10 pt-10 text-sm leading-relaxed text-paper/50">
          {dict.footer.disclaimer}
        </p>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} ECIJA Argentina. {dict.footer.rights}
          </p>
          <p className="uppercase tracking-widest2">
            Buenos Aires · Madrid · Santiago · Lima · Bogotá · México
          </p>
        </div>
      </div>
    </footer>
  );
}
