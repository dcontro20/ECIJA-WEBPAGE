import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";

const legalSlugs = ["privacidad", "terminos", "cookies"] as const;
type LegalSlug = (typeof legalSlugs)[number];

const titles: Record<LegalSlug, Record<Locale, string>> = {
  privacidad: {
    es: "Política de Privacidad",
    en: "Privacy Policy",
    de: "Datenschutzrichtlinie",
  },
  terminos: {
    es: "Términos de Uso",
    en: "Terms of Use",
    de: "Nutzungsbedingungen",
  },
  cookies: {
    es: "Política de Cookies",
    en: "Cookie Policy",
    de: "Cookie-Richtlinie",
  },
};

const intros: Record<LegalSlug, Record<Locale, string>> = {
  privacidad: {
    es: "En ECIJA Argentina valoramos y protegemos la privacidad de quienes visitan nuestro sitio y confían en nuestros servicios.",
    en: "At ECIJA Argentina we value and protect the privacy of those who visit our site and trust our services.",
    de: "Bei ECIJA Argentinien schätzen und schützen wir die Privatsphäre derer, die unsere Website besuchen und unseren Diensten vertrauen.",
  },
  terminos: {
    es: "El uso de este sitio web implica la aceptación de los presentes términos y condiciones.",
    en: "Use of this website implies acceptance of these terms and conditions.",
    de: "Die Nutzung dieser Website setzt die Annahme dieser Bedingungen voraus.",
  },
  cookies: {
    es: "Este sitio utiliza cookies para mejorar la experiencia de navegación y analizar el uso del sitio.",
    en: "This site uses cookies to improve the browsing experience and analyse site usage.",
    de: "Diese Website verwendet Cookies, um das Surferlebnis zu verbessern und die Nutzung zu analysieren.",
  },
};

const sections: Record<Locale, { heading: string; body: string }[]> = {
  es: [
    {
      heading: "Información que recopilamos",
      body: "Recopilamos únicamente la información que nos proporcionás de forma voluntaria a través de nuestros formularios de contacto, así como datos técnicos de navegación necesarios para el funcionamiento del sitio.",
    },
    {
      heading: "Finalidad del tratamiento",
      body: "Utilizamos tus datos para responder a tus consultas, brindarte información sobre nuestros servicios y cumplir con nuestras obligaciones legales. Nunca compartimos tu información con terceros sin tu consentimiento.",
    },
    {
      heading: "Tus derechos",
      body: "Tenés derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, podés contactarnos en cualquier momento a través de los canales indicados en este sitio.",
    },
    {
      heading: "Seguridad",
      body: "Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos contra el acceso no autorizado, la alteración o la divulgación.",
    },
    {
      heading: "Contacto",
      body: "Si tenés preguntas sobre esta política, escribinos a buenosaires@ecija.com. Este documento tiene carácter informativo y será actualizado según la normativa aplicable.",
    },
  ],
  en: [
    {
      heading: "Information we collect",
      body: "We only collect information you voluntarily provide through our contact forms, as well as technical browsing data necessary for the operation of the site.",
    },
    {
      heading: "Purpose of processing",
      body: "We use your data to respond to your enquiries, provide information about our services and comply with our legal obligations. We never share your information with third parties without your consent.",
    },
    {
      heading: "Your rights",
      body: "You have the right to access, rectify, erase and object to the processing of your personal data. To exercise these rights, you may contact us at any time through the channels indicated on this site.",
    },
    {
      heading: "Security",
      body: "We apply appropriate technical and organisational measures to protect your data against unauthorised access, alteration or disclosure.",
    },
    {
      heading: "Contact",
      body: "If you have questions about this policy, write to us at buenosaires@ecija.com. This document is informational and will be updated in accordance with applicable regulations.",
    },
  ],
  de: [
    {
      heading: "Informationen, die wir erheben",
      body: "Wir erheben ausschließlich Informationen, die Sie uns freiwillig über unsere Kontaktformulare bereitstellen, sowie technische Navigationsdaten, die für den Betrieb der Website erforderlich sind.",
    },
    {
      heading: "Zweck der Verarbeitung",
      body: "Wir verwenden Ihre Daten, um Ihre Anfragen zu beantworten, Sie über unsere Dienstleistungen zu informieren und unseren rechtlichen Pflichten nachzukommen. Wir geben Ihre Informationen niemals ohne Ihre Einwilligung an Dritte weiter.",
    },
    {
      heading: "Ihre Rechte",
      body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Zur Ausübung dieser Rechte können Sie uns jederzeit über die auf dieser Website angegebenen Kanäle kontaktieren.",
    },
    {
      heading: "Sicherheit",
      body: "Wir wenden geeignete technische und organisatorische Maßnahmen an, um Ihre Daten vor unbefugtem Zugriff, Veränderung oder Offenlegung zu schützen.",
    },
    {
      heading: "Kontakt",
      body: "Bei Fragen zu dieser Richtlinie schreiben Sie uns an buenosaires@ecija.com. Dieses Dokument dient zu Informationszwecken und wird gemäß den geltenden Vorschriften aktualisiert.",
    },
  ],
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    legalSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!legalSlugs.includes(slug as LegalSlug)) return {};
  return { title: titles[slug as LegalSlug][locale] };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!legalSlugs.includes(slug as LegalSlug)) notFound();
  const key = slug as LegalSlug;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.footer.legalTitle}
        title={titles[key][locale]}
        subtitle={intros[key][locale]}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: titles[key][locale] },
        ]}
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-12">
            {sections[locale].map((s, i) => (
              <div key={i}>
                <h2 className="font-serif text-2xl tracking-tight">
                  {s.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
