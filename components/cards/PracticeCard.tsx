import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PracticeIcon } from "@/components/PracticeIcon";
import { t, type PracticeArea } from "@/lib/data/types";
import type { Locale } from "@/lib/i18n/config";

export function PracticeCard({
  practice,
  locale,
  index,
}: {
  practice: PracticeArea;
  locale: Locale;
  index?: number;
}) {
  return (
    <Link
      href={`/${locale}/areas/${practice.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden border border-ink/10 bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper"
    >
      <div className="absolute right-6 top-6 text-xs font-medium text-ink/30 transition-colors group-hover:text-paper/40">
        {index !== undefined ? String(index + 1).padStart(2, "0") : ""}
      </div>

      <div>
        <PracticeIcon
          name={practice.icon}
          className="h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-110"
        />
        <h3 className="mt-8 font-serif text-2xl leading-snug tracking-tight">
          {t(practice.name, locale)}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/60">
          {t(practice.summary, locale)}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span>{t(practice.tagline, locale)}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
