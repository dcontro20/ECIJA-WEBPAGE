import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { InsightCard } from "@/components/cards/InsightCard";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import { insights, getInsight } from "@/lib/data/insights";
import { getMember } from "@/lib/data/team";
import { getPractice } from "@/lib/data/practices";
import { t } from "@/lib/data/types";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: t(insight.title, locale),
    description: t(insight.excerpt, locale),
    openGraph: {
      images: [insight.image],
      type: "article",
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const dict = getDictionary(locale);
  const author = getMember(insight.author);
  const related = insights
    .filter((i) => i.slug !== slug && i.categoryKey === insight.categoryKey)
    .slice(0, 3);
  const fallbackRelated =
    related.length > 0
      ? related
      : insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={t(insight.category, locale)}
        title={t(insight.title, locale)}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.insights, href: `/${locale}/insights` },
          { label: t(insight.category, locale) },
        ]}
      />

      {/* Meta bar */}
      <section className="bg-ink pb-12 text-paper">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-paper/60">
          {author && (
            <Link
              href={`/${locale}/equipo/${author.slug}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-light"
            >
              {author.name} — {dict.common[author.role]}
            </Link>
          )}
          <span>{formatDate(insight.date, locale)}</span>
          <span>
            {insight.readMinutes} {dict.common.minRead}
          </span>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-paper">
        <div className="container-x">
          <div className="relative -mt-px aspect-[16/8] w-full overflow-hidden bg-ink/5">
            <Image
              src={insight.image}
              alt={t(insight.title, locale)}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            <Reveal>
              <p className="display-3 font-light leading-snug text-ink">
                {t(insight.excerpt, locale)}
              </p>
            </Reveal>
            <div className="mt-12 space-y-7 text-lg leading-relaxed text-ink/80">
              {t(insight.body, locale)
                .split("\n\n")
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>

            {/* Tags */}
            <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-8">
              <span className="text-xs font-medium uppercase tracking-widest2 text-ink/40">
                {dict.common.relatedPractices}
              </span>
              {insight.practices.map((p) => {
                const practice = getPractice(p);
                if (!practice) return null;
                return (
                  <Link
                    key={p}
                    href={`/${locale}/areas/${p}`}
                    className="border border-ink/15 px-3 py-1.5 text-sm text-ink/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    {t(practice.name, locale)}
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <p className="eyebrow">{dict.common.relatedInsights}</p>
            <Link
              href={`/${locale}/insights`}
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
            >
              {dict.common.allInsights}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((rel, i) => (
              <Reveal key={rel.slug} delay={i}>
                <InsightCard
                  insight={rel}
                  locale={locale}
                  dict={{ minRead: dict.common.minRead }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
