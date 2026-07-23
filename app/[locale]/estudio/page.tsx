import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { offices } from "@/lib/data/offices";
import { t } from "@/lib/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.nav.firm };
}

export default async function FirmPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.firm.eyebrow}
        title={dict.firm.title}
        subtitle={dict.firm.lead}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.firm },
        ]}
      />

      {/* Mission */}
      <section className="bg-paper py-28 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">{dict.firm.missionTitle}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <p className="display-3 max-w-3xl text-balance">
                {dict.firm.missionBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80"
          alt="ECIJA Argentina"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
      </section>

      {/* Values */}
      <section className="bg-ink py-28 text-paper lg:py-36">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent-light">{dict.firm.valuesTitle}</p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.firm.values.map((v, i) => (
              <Reveal key={i} delay={i} className="bg-ink p-8 lg:p-10">
                <span className="font-serif text-4xl text-accent-light">
                  0{i + 1}
                </span>
                <h3 className="mt-8 font-serif text-2xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-paper py-28 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">{dict.firm.historyTitle}</p>
              <h2 className="mt-6 display-2">{dict.firm.historyTitle}</h2>
              <p className="mt-8 text-lg leading-relaxed text-ink/70">
                {dict.firm.historyBody}
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-px bg-ink/10">
              {[
                { value: 18, suffix: "", label: dict.home.statCountries },
                { value: 31, suffix: "", label: dict.home.statOffices },
                { value: 700, suffix: "+", label: dict.home.statLawyers },
                { value: 140, suffix: "+", label: dict.home.statPartners },
              ].map((s, i) => (
                <div key={i} className="bg-paper p-8">
                  <p className="font-serif text-4xl text-accent lg:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Network */}
      <section className="bg-paper-warm py-28 lg:py-36">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Globe2 className="h-12 w-12 text-accent" strokeWidth={1} />
                <h2 className="mt-8 display-2">{dict.firm.networkTitle}</h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
                  {dict.firm.networkBody}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={1}>
                <ul className="divide-y divide-ink/10 border-y border-ink/10">
                  {offices.map((o) => (
                    <li
                      key={o.slug}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="font-serif text-xl">
                        {t(o.city, locale)}
                      </span>
                      <span className="text-sm uppercase tracking-widest text-ink/50">
                        {t(o.country, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/oficinas`}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
                >
                  {dict.nav.offices}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
