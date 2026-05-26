import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { PracticeCard } from "@/components/cards/PracticeCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { PracticeIcon } from "@/components/PracticeIcon";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { getFeaturedPractices } from "@/lib/data/practices";
import { getRecentInsights } from "@/lib/data/insights";
import { sectors } from "@/lib/data/sectors";
import { t } from "@/lib/data/types";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const practices = getFeaturedPractices();
  const insights = getRecentInsights(3);

  const stats = [
    { value: 250, suffix: "+", label: dict.home.statClients },
    { value: 40, suffix: "+", label: dict.home.statLawyers },
    { value: 15, suffix: "+", label: dict.home.statCountries },
    { value: 25, suffix: "+", label: dict.home.statYears },
  ];

  return (
    <>
      <Hero locale={locale} dict={dict} />

      {/* Stats */}
      <section className="bg-ink text-paper">
        <div className="container-x grid grid-cols-2 gap-px border-t border-paper/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={i}
              delay={i}
              className="border-r border-paper/10 py-12 last:border-r-0 lg:py-16"
            >
              <p className="font-serif text-5xl tracking-tight text-accent-light lg:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-paper/60">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-28 lg:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">{dict.home.introEyebrow}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <h2 className="display-2 max-w-3xl text-balance">
                {dict.home.introTitle}
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/70">
                {dict.home.introBody}
              </p>
            </Reveal>
            <Reveal delay={3}>
              <Link
                href={`/${locale}/estudio`}
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
              >
                {dict.nav.firm}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sectors marquee */}
      <Marquee
        items={sectors.map((s) => ({
          icon: s.icon,
          label: t(s.name, locale),
        }))}
      />

      {/* Practice areas */}
      <section className="bg-paper py-28 lg:py-40">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">{dict.home.practicesEyebrow}</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 display-2 max-w-2xl">
                  {dict.home.practicesTitle}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link
                href={`/${locale}/areas`}
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
              >
                {dict.common.viewAll}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3} className="flex">
                <div className="flex w-full">
                  <PracticeCard practice={p} locale={locale} index={i} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why ECIJA */}
      <section className="bg-ink py-28 text-paper lg:py-40">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent-light">{dict.home.whyEyebrow}</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 display-2">{dict.home.whyTitle}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px bg-paper/10 sm:grid-cols-2">
                {dict.home.whyItems.map((item, i) => (
                  <Reveal
                    key={i}
                    delay={i}
                    className="bg-ink p-8"
                  >
                    <span className="font-serif text-3xl text-accent-light">
                      0{i + 1}
                    </span>
                    <h3 className="mt-6 font-serif text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/60">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-paper py-28 lg:py-40">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">{dict.home.insightsEyebrow}</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 display-2 max-w-2xl">
                  {dict.home.insightsTitle}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link
                href={`/${locale}/insights`}
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
              >
                {dict.common.viewAll}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={i}>
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent py-28 text-paper lg:py-36">
        <div className="container-x relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="display-2">{dict.home.ctaTitle}</h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 text-lg leading-relaxed text-paper/80">
                {dict.home.ctaBody}
              </p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link
              href={`/${locale}/contacto`}
              className="group inline-flex items-center gap-3 bg-ink px-10 py-5 text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {dict.home.ctaButton}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
        <PracticeIcon
          name="Scale"
          className="pointer-events-none absolute -bottom-16 right-0 h-96 w-96 text-paper/10"
          strokeWidth={0.5}
        />
      </section>
    </>
  );
}
