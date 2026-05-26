import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { InsightCard } from "@/components/cards/InsightCard";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { insights } from "@/lib/data/insights";
import { getMember } from "@/lib/data/team";
import { t } from "@/lib/data/types";
import { formatDate } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.nav.insights };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  const author = getMember(featured.author);

  return (
    <>
      <PageHeader
        eyebrow={dict.insights.eyebrow}
        title={dict.insights.title}
        subtitle={dict.insights.subtitle}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.insights },
        ]}
      />

      {/* Featured */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <Link
              href={`/${locale}/insights/${featured.slug}`}
              className="group grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                <Image
                  src={featured.image}
                  alt={t(featured.title, locale)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 bg-accent px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-paper">
                  {dict.insights.featured}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ink/50">
                  <span>{t(featured.category, locale)}</span>
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span>{formatDate(featured.date, locale)}</span>
                </div>
                <h2 className="mt-5 display-3 transition-colors group-hover:text-accent">
                  {t(featured.title, locale)}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/70">
                  {t(featured.excerpt, locale)}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
                  {author?.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-paper pb-28 lg:pb-36">
        <div className="container-x">
          <div className="grid gap-12 border-t border-ink/10 pt-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight, i) => (
              <Reveal key={insight.slug} delay={i % 3}>
                <InsightCard
                  insight={insight}
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
