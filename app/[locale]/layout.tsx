import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Fraunces } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = "https://ecija.com.ar";
  const titles: Record<string, string> = {
    es: "ECIJA Argentina — Derecho, tecnología y negocios",
    en: "ECIJA Argentina — Law, technology and business",
    de: "ECIJA Argentinien — Recht, Technologie und Wirtschaft",
  };
  const descriptions: Record<string, string> = {
    es: "Estudio jurídico internacional especializado en tecnología, privacidad, propiedad intelectual y mercados regulados. Buenos Aires, Argentina.",
    en: "International law firm specialising in technology, privacy, intellectual property and regulated markets. Buenos Aires, Argentina.",
    de: "Internationale Wirtschaftskanzlei für Technologie, Datenschutz, geistiges Eigentum und regulierte Märkte. Buenos Aires, Argentinien.",
  };
  return {
    metadataBase: new URL(base),
    title: {
      default: titles[locale] ?? titles.es,
      template: "%s · ECIJA Argentina",
    },
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        es: `${base}/es`,
        en: `${base}/en`,
        de: `${base}/de`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "ECIJA Argentina",
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="overflow-x-hidden bg-paper font-sans text-ink antialiased">
        <Header locale={locale as Locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
