import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { t, type Insight } from "@/lib/data/types";
import { getMember } from "@/lib/data/team";
import type { Locale } from "@/lib/i18n/config";
import { formatDate } from "@/lib/utils";

export function InsightCard({
  insight,
  locale,
  dict,
}: {
  insight: Insight;
  locale: Locale;
  dict: { minRead: string };
}) {
  const author = getMember(insight.author);
  return (
    <Link
      href={`/${locale}/insights/${insight.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-ink/5">
        <Image
          src={insight.image}
          alt={t(insight.title, locale)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 bg-paper px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-ink">
          {t(insight.category, locale)}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-6 text-xs uppercase tracking-widest text-ink/50">
        <span>{formatDate(insight.date, locale)}</span>
        <span className="h-1 w-1 rounded-full bg-accent" />
        <span>
          {insight.readMinutes} {dict.minRead}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight transition-colors group-hover:text-accent">
        {t(insight.title, locale)}
      </h3>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/60">
        {t(insight.excerpt, locale)}
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span>{dict ? author?.name : ""}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
