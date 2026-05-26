import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TeamDirectory } from "@/components/team/TeamDirectory";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { team } from "@/lib/data/team";
import { practices } from "@/lib/data/practices";
import { t } from "@/lib/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.nav.team };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const roleLabels = {
    seniorPartner: dict.common.seniorPartner,
    partner: dict.common.partner,
    counsel: dict.common.counsel,
    senior: dict.common.senior,
    associate: dict.common.associate,
  };

  const practiceOptions = practices.map((p) => ({
    slug: p.slug,
    name: t(p.name, locale),
  }));

  return (
    <>
      <PageHeader
        eyebrow={dict.team.eyebrow}
        title={dict.team.title}
        subtitle={dict.team.subtitle}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.team },
        ]}
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <TeamDirectory
            members={team}
            practices={practiceOptions}
            locale={locale}
            roleLabels={roleLabels}
            allLabel={dict.team.filterAll}
          />
        </div>
      </section>
    </>
  );
}
