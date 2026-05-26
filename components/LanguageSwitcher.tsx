"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({
  locale,
  variant = "dark",
}: {
  locale: Locale;
  variant?: "dark" | "light";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const swap = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  const text = variant === "light" ? "text-paper" : "text-ink";

  return (
    <div ref={ref} className={`relative ${text}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
        aria-label="Language"
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
        {localeFlags[locale]}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-44 border border-ink/10 bg-paper py-2 text-ink shadow-xl">
          {locales.map((l) => (
            <Link
              key={l}
              href={swap(l)}
              className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-paper-warm"
            >
              <span>{localeNames[l]}</span>
              {l === locale && <Check className="h-4 w-4 text-accent" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
