import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PracticeIcon } from "@/components/PracticeIcon";
import { TeamCard } from "@/components/cards/TeamCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import { practices, getPractice } from "@/lib/data/practices";
import { getMember } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";
import { t } from "@/lib/data/types";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    practices.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: t(practice.name, locale),
    description: t(practice.summary, locale),
  };
}

export default async function PracticeDetail({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const dict = getDictionary(locale);
  const contacts = practice.contacts
    .map((s) => getMember(s))
    .filter(Boolean);
  const related = insights
    .filter((i) => i.practices.includes(slug))
    .slice(0, 3);
  const others = practices.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={dict.practices.eyebrow}
        title={t(practice.name, locale)}
        subtitle={t(practice.tagline, locale)}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.practices, href: `/${locale}/areas` },
          { label: t(practice.name, locale) },
        ]}
      />

      {/* Overview + services */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <PracticeIcon
                name={practice.icon}
                className="h-14 w-14 text-accent"
                strokeWidth={1}
              />
              <p className="mt-8 text-xl leading-relaxed text-ink/80">
                {t(practice.description, locale)}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={1}>
              <div className="border-t border-ink/15 pt-8">
                <h2 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                  {dict.common.services}
                </h2>
                <ul className="mt-8 space-y-5">
                  {practice.services[locale].map((service, i) => (
                    <li key={i} className="flex gap-4">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                      <span className="leading-relaxed text-ink/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key contacts */}
      {contacts.length > 0 && (
        <section className="bg-paper-warm py-24 lg:py-32">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">{dict.common.keyContacts}</p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
              {contacts.map(
                (m, i) =>
                  m && (
                    <Reveal key={m.slug} delay={i}>
                      <TeamCard
                        member={m}
                        locale={locale}
                        roleLabel={dict.common[m.role]}
                      />
                    </Reveal>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related insights */}
      {related.length > 0 && (
        <section className="bg-paper py-24 lg:py-32">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">{dict.common.relatedInsights}</p>
            </Reveal>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {related.map((insight, i) => (
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
      )}

      {/* Other practices */}
      <section className="bg-ink py-24 text-paper lg:py-28">
        <div className="container-x">
          <p className="eyebrow text-accent-light">{dict.common.relatedPractices}</p>
          <div className="mt-12 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/areas/${p.slug}`}
                className="group bg-ink p-8 transition-colors hover:bg-ink-700"
              >
                <PracticeIcon name={p.icon} className="h-8 w-8 text-accent-light" />
                <h3 className="mt-6 flex items-start justify-between gap-2 font-serif text-lg leading-snug">
                  {t(p.name, locale)}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-paper/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
