"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface NavItem {
  href: string;
  label: string;
}

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav: NavItem[] = [
    { href: `/${locale}/estudio`, label: dict.nav.firm },
    { href: `/${locale}/areas`, label: dict.nav.practices },
    { href: `/${locale}/equipo`, label: dict.nav.team },
    { href: `/${locale}/insights`, label: dict.nav.insights },
    { href: `/${locale}/oficinas`, label: dict.nav.offices },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo locale={locale} variant="dark" />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-ink/80"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href={`/${locale}/contacto`}
              className="group hidden items-center gap-2 bg-ink px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:bg-accent md:inline-flex"
            >
              {dict.nav.cta}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label={dict.nav.menu}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink text-paper">
          <div className="container-x flex h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <Logo locale={locale} variant="light" />
              <button onClick={() => setOpen(false)} aria-label={dict.nav.close}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col gap-2">
              {[{ href: `/${locale}`, label: dict.nav.home }, ...nav].map(
                (item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-paper/15 py-5"
                  >
                    <span className="font-serif text-3xl tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-paper/40">
                      0{i + 1}
                    </span>
                  </Link>
                )
              )}
            </nav>

            <div className="mt-8 flex items-center justify-between">
              <LanguageSwitcher locale={locale} variant="light" />
              <Link
                href={`/${locale}/contacto`}
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs font-medium uppercase tracking-widest"
              >
                {dict.nav.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
