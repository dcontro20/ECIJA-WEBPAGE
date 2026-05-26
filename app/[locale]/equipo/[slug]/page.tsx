import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { InsightCard } from "@/components/cards/InsightCard";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import { team, getMember } from "@/lib/data/team";
import { getPractice } from "@/lib/data/practices";
import { insights } from "@/lib/data/insights";
import { t } from "@/lib/data/types";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    team.map((m) => ({ locale, slug: m.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  const dict = getDictionary(locale);
  return {
    title: `${member.name} — ${dict.common[member.role]}`,
    description: t(member.bio, locale).slice(0, 155),
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const dict = getDictionary(locale);
  const authored = insights.filter((i) => i.author === slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 text-paper lg:pt-40">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-end pb-12 lg:col-span-7 lg:pb-20">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-paper/40">
              <Link href={`/${locale}/equipo`} className="hover:text-accent-light">
                {dict.nav.team}
              </Link>
            </nav>
            <p className="text-sm font-medium uppercase tracking-widest2 text-accent-light">
              {dict.common[member.role]}
            </p>
            <h1 className="mt-4 display-1 font-light">{member.name}</h1>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-paper/70">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-light"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {member.email}
              </a>
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-light"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  {member.phone}
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-light"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-ink/80">
                {t(member.bio, locale)
                  .split("\n\n")
                  .map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-12 border-t border-ink/10 pt-8">
                <h2 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                  {dict.common.experience}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {t(member.experience, locale)}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={1}>
              <div className="space-y-10 border-l border-ink/10 pl-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                    {dict.common.focusAreas}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {member.practices.map((slug) => {
                      const p = getPractice(slug);
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/${locale}/areas/${slug}`}
                            className="group inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-accent"
                          >
                            {t(p.name, locale)}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                    {dict.common.education}
                  </h3>
                  <ul className="mt-5 space-y-3 text-ink/80">
                    {member.education[locale].map((e, i) => (
                      <li key={i} className="leading-relaxed">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                    {dict.common.languages}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.languages.map((l) => (
                      <span
                        key={l}
                        className="inline-flex items-center gap-1.5 border border-ink/15 px-3 py-1.5 text-sm text-ink/70"
                      >
                        <Globe className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Authored insights */}
      {authored.length > 0 && (
        <section className="bg-paper-warm py-24 lg:py-32">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">{dict.common.relatedInsights}</p>
            </Reveal>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {authored.map((insight, i) => (
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
    </>
  );
}
