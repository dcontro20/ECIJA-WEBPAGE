import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
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
  return { title: dict.nav.offices };
}

export default async function OfficesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.offices.eyebrow}
        title={dict.offices.title}
        subtitle={dict.offices.subtitle}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.offices },
        ]}
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, i) => (
              <Reveal key={office.slug} delay={i % 3} className="flex">
                <div className="flex w-full flex-col bg-paper p-8 lg:p-10">
                  <div className="flex items-start justify-between">
                    <div>
                      {office.headquarters && (
                        <span className="mb-3 inline-block bg-accent px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-paper">
                          {dict.offices.headquarters}
                        </span>
                      )}
                      <h2 className="font-serif text-3xl tracking-tight">
                        {t(office.city, locale)}
                      </h2>
                      <p className="mt-1 text-sm uppercase tracking-widest text-ink/50">
                        {t(office.country, locale)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 flex-1 space-y-4 text-sm text-ink/70">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <span className="leading-relaxed">{office.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <a href={`mailto:${office.email}`} className="hover:text-accent">
                        {office.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <span>{office.timezone}</span>
                    </li>
                  </ul>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent"
                  >
                    {dict.offices.getDirections}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
