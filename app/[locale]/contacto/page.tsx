import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { practices } from "@/lib/data/practices";
import { offices } from "@/lib/data/offices";
import { getHeadquarters } from "@/lib/data/offices";
import { t } from "@/lib/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.nav.contact };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const hq = getHeadquarters();

  const areas = practices.map((p) => ({
    slug: p.slug,
    name: t(p.name, locale),
  }));

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.contact },
        ]}
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm dict={dict} areas={areas} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-12">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                {dict.contact.directTitle}
              </h2>
              <ul className="mt-6 space-y-5 text-ink/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <span className="leading-relaxed">{hq.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <a href={`tel:${hq.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                    {hq.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <a href={`mailto:${hq.email}`} className="hover:text-accent">
                    {hq.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 border-t border-ink/10 pt-10">
              <h2 className="text-xs font-medium uppercase tracking-widest2 text-accent">
                {dict.contact.officesTitle}
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                {offices.map((o) => (
                  <li key={o.slug}>
                    <p className="font-serif text-lg">{t(o.city, locale)}</p>
                    <p className="text-sm text-ink/50">{t(o.country, locale)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
