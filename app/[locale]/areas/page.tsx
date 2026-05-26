import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PracticeCard } from "@/components/cards/PracticeCard";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { practices } from "@/lib/data/practices";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.nav.practices };
}

export default async function PracticesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.practices.eyebrow}
        title={dict.practices.title}
        subtitle={dict.practices.subtitle}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.practices },
        ]}
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
