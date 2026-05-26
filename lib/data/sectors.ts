import { L, type Sector } from "./types";

export const sectors: Sector[] = [
  {
    slug: "software-saas",
    icon: "Code2",
    name: L("Software y SaaS", "Software & SaaS", "Software & SaaS"),
    description: L(
      "Desarrolladores, plataformas y empresas de software en cada etapa.",
      "Developers, platforms and software companies at every stage.",
      "Entwickler, Plattformen und Softwareunternehmen in jeder Phase."
    ),
  },
  {
    slug: "fintech-banca",
    icon: "Banknote",
    name: L("Fintech y Banca", "Fintech & Banking", "Fintech & Banking"),
    description: L(
      "Pagos, criptoactivos, lending y banca digital.",
      "Payments, crypto-assets, lending and digital banking.",
      "Zahlungen, Kryptowerte, Lending und digitales Banking."
    ),
  },
  {
    slug: "ecommerce-retail",
    icon: "ShoppingBag",
    name: L("E-commerce y Retail", "E-commerce & Retail", "E-Commerce & Handel"),
    description: L(
      "Marketplaces, comercio digital y experiencias omnicanal.",
      "Marketplaces, digital commerce and omnichannel experiences.",
      "Marktplätze, digitaler Handel und Omnichannel-Erlebnisse."
    ),
  },
  {
    slug: "salud-lifesciences",
    icon: "HeartPulse",
    name: L("Salud y Life Sciences", "Health & Life Sciences", "Gesundheit & Life Sciences"),
    description: L(
      "Healthtech, dispositivos médicos y datos sensibles de salud.",
      "Healthtech, medical devices and sensitive health data.",
      "Healthtech, Medizinprodukte und sensible Gesundheitsdaten."
    ),
  },
  {
    slug: "medios-entretenimiento",
    icon: "Clapperboard",
    name: L("Medios y Entretenimiento", "Media & Entertainment", "Medien & Unterhaltung"),
    description: L(
      "Streaming, gaming, deportes y contenidos digitales.",
      "Streaming, gaming, sports and digital content.",
      "Streaming, Gaming, Sport und digitale Inhalte."
    ),
  },
  {
    slug: "energia-cleantech",
    icon: "Leaf",
    name: L("Energía y Cleantech", "Energy & Cleantech", "Energie & Cleantech"),
    description: L(
      "Energías renovables, movilidad y tecnología sostenible.",
      "Renewable energy, mobility and sustainable technology.",
      "Erneuerbare Energien, Mobilität und nachhaltige Technologie."
    ),
  },
  {
    slug: "industria-manufactura",
    icon: "Factory",
    name: L("Industria y Manufactura", "Industry & Manufacturing", "Industrie & Fertigung"),
    description: L(
      "Industria 4.0, IoT y automatización de procesos.",
      "Industry 4.0, IoT and process automation.",
      "Industrie 4.0, IoT und Prozessautomatisierung."
    ),
  },
  {
    slug: "sector-publico",
    icon: "Landmark",
    name: L("Sector Público", "Public Sector", "Öffentlicher Sektor"),
    description: L(
      "GovTech, contratación pública y modernización del Estado.",
      "GovTech, public procurement and state modernisation.",
      "GovTech, öffentliche Beschaffung und Staatsmodernisierung."
    ),
  },
];
