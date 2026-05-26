import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

export function Logo({
  locale,
  variant = "dark",
}: {
  locale: Locale;
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-paper" : "text-ink";
  return (
    <Link
      href={`/${locale}`}
      aria-label="ECIJA Argentina"
      className={`group flex items-baseline gap-2 ${color}`}
    >
      <span className="font-serif text-2xl font-semibold tracking-tight leading-none">
        ECIJA
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-3 w-px bg-accent" />
        <span className="text-[0.65rem] font-medium uppercase tracking-widest2 opacity-70">
          Argentina
        </span>
      </span>
    </Link>
  );
}
