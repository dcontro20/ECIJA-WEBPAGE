import { L, LL, type TeamMember } from "./types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const team: TeamMember[] = [
  {
    slug: "cristian-mendoza",
    name: "Cristian Mendoza",
    role: "seniorPartner",
    image: img("photo-1560250097-0b93528c311a"),
    email: "cristian.mendoza@ecija.com",
    phone: "+54 11 5236 4800",
    practices: ["corporativo-ma", "tecnologia-telecomunicaciones", "fintech-regulatorio-financiero"],
    languages: ["Español", "English", "Português"],
    featured: true,
    linkedin: "https://linkedin.com",
    bio: L(
      "Socio director de ECIJA Argentina, Cristian lidera la práctica corporativa y tecnológica del estudio. Con más de veinte años de experiencia, ha asesorado en algunas de las operaciones de M&A tecnológicas más relevantes de la región y es una voz reconocida en la convergencia entre derecho, negocios y tecnología.",
      "Managing Partner of ECIJA Argentina, Cristian leads the firm's corporate and technology practice. With over twenty years of experience, he has advised on some of the region's most significant technology M&A deals and is a recognised voice on the convergence of law, business and technology.",
      "Als geschäftsführender Partner von ECIJA Argentinien leitet Cristian die Gesellschafts- und Technologiepraxis der Kanzlei. Mit über zwanzig Jahren Erfahrung hat er einige der bedeutendsten Technologie-M&A-Transaktionen der Region begleitet und ist eine anerkannte Stimme an der Schnittstelle von Recht, Wirtschaft und Technologie."
    ),
    experience: L(
      "Más de 20 años asesorando a empresas tecnológicas, fondos e inversores internacionales.",
      "Over 20 years advising technology companies, funds and international investors.",
      "Über 20 Jahre Beratung von Technologieunternehmen, Fonds und internationalen Investoren."
    ),
    education: LL(
      ["Abogado, Universidad de Buenos Aires", "LL.M. en Derecho Corporativo, Northwestern University", "Programa de Dirección, IAE Business School"],
      ["Law Degree, University of Buenos Aires", "LL.M. in Corporate Law, Northwestern University", "Executive Programme, IAE Business School"],
      ["Juraabschluss, Universität Buenos Aires", "LL.M. Gesellschaftsrecht, Northwestern University", "Executive-Programm, IAE Business School"]
    ),
  },
  {
    slug: "valentina-rossi",
    name: "Valentina Rossi",
    role: "partner",
    image: img("photo-1573496359142-b8d87734a5a2"),
    email: "valentina.rossi@ecija.com",
    phone: "+54 11 5236 4801",
    practices: ["privacidad-proteccion-datos", "tecnologia-telecomunicaciones", "startups-venture-capital"],
    languages: ["Español", "English", "Italiano", "Deutsch"],
    featured: true,
    linkedin: "https://linkedin.com",
    bio: L(
      "Socia a cargo de la práctica de privacidad y protección de datos, Valentina es referente regional en derecho de la tecnología y la regulación de la inteligencia artificial. Acompaña a multinacionales y plataformas digitales en sus estrategias de cumplimiento y gobernanza de datos en toda Latinoamérica.",
      "Partner in charge of the privacy and data protection practice, Valentina is a regional reference in technology law and AI regulation. She supports multinationals and digital platforms in their data compliance and governance strategies across Latin America.",
      "Als Partnerin für Datenschutz ist Valentina eine regionale Referenz im Technologierecht und in der KI-Regulierung. Sie begleitet multinationale Unternehmen und digitale Plattformen bei ihren Datenschutz- und Governance-Strategien in ganz Lateinamerika."
    ),
    experience: L(
      "15 años especializada en privacidad, datos personales y regulación tecnológica.",
      "15 years specialised in privacy, data protection and technology regulation.",
      "15 Jahre spezialisiert auf Datenschutz, personenbezogene Daten und Technologieregulierung."
    ),
    education: LL(
      ["Abogada, Universidad Torcuato Di Tella", "Máster en Derecho de las TIC, Universidad de Barcelona", "Certified Information Privacy Professional (CIPP/E)"],
      ["Law Degree, Universidad Torcuato Di Tella", "Master in ICT Law, University of Barcelona", "Certified Information Privacy Professional (CIPP/E)"],
      ["Juraabschluss, Universidad Torcuato Di Tella", "Master im IKT-Recht, Universität Barcelona", "Certified Information Privacy Professional (CIPP/E)"]
    ),
  },
  {
    slug: "martin-acosta",
    name: "Martín Acosta",
    role: "partner",
    image: img("photo-1507003211169-0a1dd7228f2d"),
    email: "martin.acosta@ecija.com",
    phone: "+54 11 5236 4802",
    practices: ["litigios-arbitraje", "compliance-penal-economico", "ciberseguridad"],
    languages: ["Español", "English"],
    featured: true,
    linkedin: "https://linkedin.com",
    bio: L(
      "Socio responsable de litigios, arbitraje y compliance, Martín cuenta con una sólida trayectoria en disputas comerciales complejas e investigaciones internas. Ha representado a empresas líderes en arbitrajes internacionales y en la gestión de crisis vinculadas a ciberseguridad e integridad corporativa.",
      "Partner responsible for litigation, arbitration and compliance, Martín has a strong track record in complex commercial disputes and internal investigations. He has represented leading companies in international arbitration and in managing crises related to cybersecurity and corporate integrity.",
      "Als Partner für Prozessführung, Schiedsverfahren und Compliance verfügt Martín über eine starke Erfolgsbilanz bei komplexen Handelsstreitigkeiten und internen Untersuchungen. Er hat führende Unternehmen in internationalen Schiedsverfahren und im Management von Krisen rund um Cybersicherheit und Unternehmensintegrität vertreten."
    ),
    experience: L(
      "18 años en litigios complejos, arbitraje internacional y compliance corporativo.",
      "18 years in complex litigation, international arbitration and corporate compliance.",
      "18 Jahre in komplexer Prozessführung, internationaler Schiedsgerichtsbarkeit und Unternehmens-Compliance."
    ),
    education: LL(
      ["Abogado, Universidad Católica Argentina", "LL.M. en Resolución de Disputas, Queen Mary University of London", "Especialización en Derecho Penal Económico, Universidad Austral"],
      ["Law Degree, Universidad Católica Argentina", "LL.M. in Dispute Resolution, Queen Mary University of London", "Specialisation in White-Collar Crime, Universidad Austral"],
      ["Juraabschluss, Universidad Católica Argentina", "LL.M. Streitbeilegung, Queen Mary University of London", "Spezialisierung Wirtschaftsstrafrecht, Universidad Austral"]
    ),
  },
  {
    slug: "sofia-paredes",
    name: "Sofía Paredes",
    role: "partner",
    image: img("photo-1580489944761-15a19d654956"),
    email: "sofia.paredes@ecija.com",
    phone: "+54 11 5236 4803",
    practices: ["startups-venture-capital", "fintech-regulatorio-financiero", "laboral"],
    languages: ["Español", "English", "Français"],
    featured: true,
    linkedin: "https://linkedin.com",
    bio: L(
      "Socia especializada en startups, venture capital y regulación fintech, Sofía es la conexión del estudio con el ecosistema emprendedor. Ha estructurado decenas de rondas de inversión y asesora a fondos y aceleradoras líderes en sus operaciones en Argentina y la región.",
      "Partner specialising in startups, venture capital and fintech regulation, Sofía is the firm's bridge to the entrepreneurial ecosystem. She has structured dozens of investment rounds and advises leading funds and accelerators on their operations in Argentina and the region.",
      "Als Partnerin mit Schwerpunkt Start-ups, Venture Capital und Fintech-Regulierung ist Sofía die Brücke der Kanzlei zum Gründer-Ökosystem. Sie hat Dutzende Finanzierungsrunden strukturiert und berät führende Fonds und Acceleratoren bei ihren Aktivitäten in Argentinien und der Region."
    ),
    experience: L(
      "12 años acompañando startups, fondos de VC y proyectos fintech.",
      "12 years supporting startups, VC funds and fintech projects.",
      "12 Jahre Begleitung von Start-ups, VC-Fonds und Fintech-Projekten."
    ),
    education: LL(
      ["Abogada, Universidad de San Andrés", "MBA, INSEAD", "Programa de Venture Capital, Stanford Graduate School of Business"],
      ["Law Degree, Universidad de San Andrés", "MBA, INSEAD", "Venture Capital Programme, Stanford Graduate School of Business"],
      ["Juraabschluss, Universidad de San Andrés", "MBA, INSEAD", "Venture-Capital-Programm, Stanford Graduate School of Business"]
    ),
  },
  {
    slug: "lucia-fernandez",
    name: "Lucía Fernández",
    role: "counsel",
    image: img("photo-1544005313-94ddf0286df2"),
    email: "lucia.fernandez@ecija.com",
    phone: "+54 11 5236 4804",
    practices: ["propiedad-intelectual", "privacidad-proteccion-datos", "laboral"],
    languages: ["Español", "English", "Português"],
    linkedin: "https://linkedin.com",
    bio: L(
      "Counsel de la práctica de propiedad intelectual, Lucía combina experiencia en gestión de carteras de marcas y patentes con un profundo conocimiento de la protección del software y los activos digitales. Asesora a empresas creativas y tecnológicas en la protección de sus intangibles.",
      "Counsel in the intellectual property practice, Lucía combines experience in trademark and patent portfolio management with deep knowledge of software and digital asset protection. She advises creative and technology companies on protecting their intangibles.",
      "Als Counsel in der IP-Praxis verbindet Lucía Erfahrung in der Verwaltung von Marken- und Patentportfolios mit fundiertem Wissen zum Schutz von Software und digitalen Vermögenswerten. Sie berät Kreativ- und Technologieunternehmen beim Schutz ihrer immateriellen Werte."
    ),
    experience: L(
      "10 años en propiedad intelectual, marcas, patentes y derechos de autor.",
      "10 years in intellectual property, trademarks, patents and copyright.",
      "10 Jahre im Bereich geistiges Eigentum, Marken, Patente und Urheberrecht."
    ),
    education: LL(
      ["Abogada, Universidad de Buenos Aires", "Especialización en Propiedad Intelectual, Universidad Austral", "Diploma WIPO en Derecho de Autor"],
      ["Law Degree, University of Buenos Aires", "Specialisation in Intellectual Property, Universidad Austral", "WIPO Diploma in Copyright Law"],
      ["Juraabschluss, Universität Buenos Aires", "Spezialisierung im geistigen Eigentum, Universidad Austral", "WIPO-Diplom im Urheberrecht"]
    ),
  },
  {
    slug: "tomas-ibanez",
    name: "Tomás Ibáñez",
    role: "senior",
    image: img("photo-1472099645785-5658abf4ff4e"),
    email: "tomas.ibanez@ecija.com",
    practices: ["tecnologia-telecomunicaciones", "ciberseguridad", "corporativo-ma"],
    languages: ["Español", "English", "Deutsch"],
    linkedin: "https://linkedin.com",
    bio: L(
      "Asociado senior del equipo de tecnología y ciberseguridad, Tomás asesora en contratación tecnológica compleja, proyectos de transformación digital y respuesta a incidentes. Su formación técnica le permite dialogar de igual a igual con los equipos de ingeniería de los clientes.",
      "Senior associate in the technology and cybersecurity team, Tomás advises on complex technology contracting, digital transformation projects and incident response. His technical background lets him engage on equal terms with clients' engineering teams.",
      "Als Senior Associate im Technologie- und Cybersicherheitsteam berät Tomás zu komplexen Technologieverträgen, Projekten der digitalen Transformation und Incident Response. Sein technischer Hintergrund ermöglicht ihm den Austausch auf Augenhöhe mit den Engineering-Teams der Mandanten."
    ),
    experience: L(
      "8 años en derecho tecnológico, ciberseguridad y contratación digital.",
      "8 years in technology law, cybersecurity and digital contracting.",
      "8 Jahre im Technologierecht, in der Cybersicherheit und bei digitalen Verträgen."
    ),
    education: LL(
      ["Abogado, Universidad Torcuato Di Tella", "Ingeniería en Sistemas (incompleta), UTN", "Máster en Derecho y Tecnología, IE University"],
      ["Law Degree, Universidad Torcuato Di Tella", "Systems Engineering (partial), UTN", "Master in Law and Technology, IE University"],
      ["Juraabschluss, Universidad Torcuato Di Tella", "Systemtechnik (teilweise), UTN", "Master in Recht und Technologie, IE University"]
    ),
  },
  {
    slug: "camila-duarte",
    name: "Camila Duarte",
    role: "senior",
    image: img("photo-1438761681033-6461ffad8d80"),
    email: "camila.duarte@ecija.com",
    practices: ["fintech-regulatorio-financiero", "startups-venture-capital", "corporativo-ma"],
    languages: ["Español", "English"],
    linkedin: "https://linkedin.com",
    bio: L(
      "Asociada senior del equipo fintech y corporativo, Camila se especializa en regulación de medios de pago, criptoactivos y estructuración de rondas de inversión. Acompaña a fintechs en su crecimiento desde la etapa temprana hasta la expansión regional.",
      "Senior associate in the fintech and corporate team, Camila specialises in payment regulation, crypto-assets and investment round structuring. She supports fintechs as they grow from early stage to regional expansion.",
      "Als Senior Associate im Fintech- und Corporate-Team ist Camila auf die Regulierung von Zahlungsmitteln, Kryptowerte und die Strukturierung von Finanzierungsrunden spezialisiert. Sie begleitet Fintechs auf ihrem Weg von der Frühphase bis zur regionalen Expansion."
    ),
    experience: L(
      "7 años en regulación financiera, fintech y derecho societario.",
      "7 years in financial regulation, fintech and corporate law.",
      "7 Jahre in Finanzregulierung, Fintech und Gesellschaftsrecht."
    ),
    education: LL(
      ["Abogada, Universidad Austral", "Posgrado en Derecho Bancario y Financiero, UBA", "Certificación en Criptoactivos y Blockchain"],
      ["Law Degree, Universidad Austral", "Postgraduate in Banking and Financial Law, UBA", "Certification in Crypto-assets and Blockchain"],
      ["Juraabschluss, Universidad Austral", "Aufbaustudium Bank- und Finanzrecht, UBA", "Zertifizierung in Kryptowerten und Blockchain"]
    ),
  },
  {
    slug: "javier-soto",
    name: "Javier Soto",
    role: "associate",
    image: img("photo-1568602471122-7832951cc4c5"),
    email: "javier.soto@ecija.com",
    practices: ["litigios-arbitraje", "compliance-penal-economico", "laboral"],
    languages: ["Español", "English"],
    linkedin: "https://linkedin.com",
    bio: L(
      "Asociado del equipo de litigios y compliance, Javier participa en disputas comerciales, investigaciones internas y procedimientos regulatorios. Combina rigor analítico con una marcada orientación al detalle en la preparación de estrategias procesales.",
      "Associate in the litigation and compliance team, Javier works on commercial disputes, internal investigations and regulatory proceedings. He combines analytical rigour with a strong attention to detail in preparing procedural strategies.",
      "Als Associate im Prozess- und Compliance-Team arbeitet Javier an Handelsstreitigkeiten, internen Untersuchungen und Regulierungsverfahren. Er verbindet analytische Strenge mit ausgeprägter Detailgenauigkeit bei der Vorbereitung von Prozessstrategien."
    ),
    experience: L(
      "5 años en litigios, arbitraje y compliance corporativo.",
      "5 years in litigation, arbitration and corporate compliance.",
      "5 Jahre in Prozessführung, Schiedsverfahren und Unternehmens-Compliance."
    ),
    education: LL(
      ["Abogado, Universidad de Buenos Aires", "Diploma en Compliance, Universidad Austral"],
      ["Law Degree, University of Buenos Aires", "Diploma in Compliance, Universidad Austral"],
      ["Juraabschluss, Universität Buenos Aires", "Diplom in Compliance, Universidad Austral"]
    ),
  },
];

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

export function getFeaturedTeam(): TeamMember[] {
  return team.filter((m) => m.featured);
}

export function getTeamByPractice(practiceSlug: string): TeamMember[] {
  return team.filter((m) => m.practices.includes(practiceSlug));
}
