import { L, LL, type PracticeArea } from "./types";

export const practices: PracticeArea[] = [
  {
    slug: "tecnologia-telecomunicaciones",
    icon: "Cpu",
    featured: true,
    name: L(
      "Tecnología y Telecomunicaciones",
      "Technology & Telecommunications",
      "Technologie & Telekommunikation"
    ),
    tagline: L(
      "Derecho para empresas que construyen el futuro digital.",
      "Law for companies building the digital future.",
      "Recht für Unternehmen, die die digitale Zukunft gestalten."
    ),
    summary: L(
      "Asesoramiento integral en contratación tecnológica, plataformas digitales, cloud, IA y regulación de telecomunicaciones.",
      "Comprehensive advice on technology contracting, digital platforms, cloud, AI and telecoms regulation.",
      "Umfassende Beratung zu Technologieverträgen, digitalen Plattformen, Cloud, KI und Telekommunikationsregulierung."
    ),
    description: L(
      "Somos pioneros en derecho de la tecnología. Acompañamos a empresas de software, telcos, plataformas y fabricantes de hardware en cada etapa: desde la estructuración de contratos complejos de licenciamiento y desarrollo, hasta cuestiones regulatorias de vanguardia en inteligencia artificial, cloud computing y servicios digitales.",
      "We are pioneers in technology law. We support software companies, telcos, platforms and hardware manufacturers at every stage: from structuring complex licensing and development contracts to cutting-edge regulatory matters in artificial intelligence, cloud computing and digital services.",
      "Wir sind Pioniere im Technologierecht. Wir begleiten Softwareunternehmen, Telcos, Plattformen und Hardwarehersteller in jeder Phase: von der Strukturierung komplexer Lizenz- und Entwicklungsverträge bis hin zu wegweisenden regulatorischen Fragen in den Bereichen künstliche Intelligenz, Cloud Computing und digitale Dienste."
    ),
    services: LL(
      [
        "Contratos de licenciamiento, SaaS y desarrollo de software",
        "Regulación de inteligencia artificial y gobernanza algorítmica",
        "Cloud computing y acuerdos de nivel de servicio",
        "Regulación de telecomunicaciones y espectro",
        "Plataformas digitales y responsabilidad de intermediarios",
        "Proyectos de transformación digital",
      ],
      [
        "Licensing, SaaS and software development agreements",
        "AI regulation and algorithmic governance",
        "Cloud computing and service-level agreements",
        "Telecommunications and spectrum regulation",
        "Digital platforms and intermediary liability",
        "Digital transformation projects",
      ],
      [
        "Lizenz-, SaaS- und Softwareentwicklungsverträge",
        "KI-Regulierung und algorithmische Governance",
        "Cloud Computing und Service-Level-Agreements",
        "Telekommunikations- und Frequenzregulierung",
        "Digitale Plattformen und Haftung von Intermediären",
        "Projekte zur digitalen Transformation",
      ]
    ),
    contacts: ["cristian-mendoza", "valentina-rossi"],
  },
  {
    slug: "privacidad-proteccion-datos",
    icon: "ShieldCheck",
    featured: true,
    name: L(
      "Privacidad y Protección de Datos",
      "Privacy & Data Protection",
      "Datenschutz"
    ),
    tagline: L(
      "Confianza digital como ventaja competitiva.",
      "Digital trust as a competitive advantage.",
      "Digitales Vertrauen als Wettbewerbsvorteil."
    ),
    summary: L(
      "Cumplimiento de la normativa de datos personales, transferencias internacionales y gestión de incidentes.",
      "Compliance with data protection law, international transfers and incident management.",
      "Einhaltung des Datenschutzrechts, internationale Übermittlungen und Incident-Management."
    ),
    description: L(
      "El dato es el activo más valioso y más regulado de la economía actual. Diseñamos programas de cumplimiento adaptados a la normativa local e internacional (GDPR, leyes regionales), asesoramos en transferencias internacionales, evaluaciones de impacto y respuesta a brechas de seguridad, y representamos a clientes ante las autoridades de control.",
      "Data is the most valuable and most regulated asset in today's economy. We design compliance programmes tailored to local and international regulation (GDPR, regional laws), advise on international transfers, impact assessments and breach response, and represent clients before supervisory authorities.",
      "Daten sind das wertvollste und am stärksten regulierte Gut der heutigen Wirtschaft. Wir entwickeln Compliance-Programme nach lokalen und internationalen Vorgaben (DSGVO, regionale Gesetze), beraten zu internationalen Übermittlungen, Folgenabschätzungen und der Reaktion auf Sicherheitsvorfälle und vertreten Mandanten vor Aufsichtsbehörden."
    ),
    services: LL(
      [
        "Programas integrales de cumplimiento de datos personales",
        "Transferencias internacionales de datos",
        "Evaluaciones de impacto (DPIA) y privacy by design",
        "Gestión y notificación de brechas de seguridad",
        "Designación y soporte de Data Protection Officer (DPO)",
        "Defensa ante autoridades de protección de datos",
      ],
      [
        "End-to-end data protection compliance programmes",
        "International data transfers",
        "Impact assessments (DPIA) and privacy by design",
        "Data breach management and notification",
        "DPO appointment and support",
        "Defence before data protection authorities",
      ],
      [
        "Umfassende Datenschutz-Compliance-Programme",
        "Internationale Datenübermittlungen",
        "Folgenabschätzungen (DSFA) und Privacy by Design",
        "Management und Meldung von Datenschutzverletzungen",
        "Benennung und Unterstützung des Datenschutzbeauftragten",
        "Verteidigung vor Datenschutzbehörden",
      ]
    ),
    contacts: ["valentina-rossi", "lucia-fernandez"],
  },
  {
    slug: "propiedad-intelectual",
    icon: "Lightbulb",
    featured: true,
    name: L(
      "Propiedad Intelectual e Industrial",
      "Intellectual Property",
      "Geistiges Eigentum"
    ),
    tagline: L(
      "Protegemos lo que hace única a tu empresa.",
      "We protect what makes your company unique.",
      "Wir schützen, was Ihr Unternehmen einzigartig macht."
    ),
    summary: L(
      "Registro y defensa de marcas, patentes, derechos de autor y secretos comerciales.",
      "Registration and defence of trademarks, patents, copyright and trade secrets.",
      "Anmeldung und Verteidigung von Marken, Patenten, Urheberrechten und Geschäftsgeheimnissen."
    ),
    description: L(
      "La innovación necesita protección. Gestionamos carteras de marcas y patentes a nivel local e internacional, asesoramos en derechos de autor y software, secretos comerciales y acuerdos de transferencia de tecnología, y litigamos para defender los activos intangibles de nuestros clientes frente a infracciones y competencia desleal.",
      "Innovation needs protection. We manage trademark and patent portfolios locally and internationally, advise on copyright and software, trade secrets and technology transfer agreements, and litigate to defend our clients' intangible assets against infringement and unfair competition.",
      "Innovation braucht Schutz. Wir verwalten Marken- und Patentportfolios lokal und international, beraten zu Urheberrecht und Software, Geschäftsgeheimnissen und Technologietransferverträgen und führen Prozesse zur Verteidigung der immateriellen Vermögenswerte unserer Mandanten gegen Verletzungen und unlauteren Wettbewerb."
    ),
    services: LL(
      [
        "Registro y gestión de carteras de marcas y patentes",
        "Derechos de autor y protección de software",
        "Secretos comerciales y know-how",
        "Acuerdos de licencia y transferencia de tecnología",
        "Litigios por infracción y competencia desleal",
        "Due diligence de activos de propiedad intelectual",
      ],
      [
        "Trademark and patent portfolio management",
        "Copyright and software protection",
        "Trade secrets and know-how",
        "Licensing and technology transfer agreements",
        "Infringement and unfair competition litigation",
        "Intellectual property due diligence",
      ],
      [
        "Verwaltung von Marken- und Patentportfolios",
        "Urheberrecht und Softwareschutz",
        "Geschäftsgeheimnisse und Know-how",
        "Lizenz- und Technologietransferverträge",
        "Prozesse zu Verletzungen und unlauterem Wettbewerb",
        "Due Diligence von IP-Vermögenswerten",
      ]
    ),
    contacts: ["lucia-fernandez", "martin-acosta"],
  },
  {
    slug: "ciberseguridad",
    icon: "Lock",
    name: L("Ciberseguridad", "Cybersecurity", "Cybersicherheit"),
    tagline: L(
      "Resiliencia legal frente a la amenaza digital.",
      "Legal resilience against the digital threat.",
      "Rechtliche Resilienz gegen digitale Bedrohungen."
    ),
    summary: L(
      "Prevención, respuesta a incidentes y cumplimiento normativo en seguridad de la información.",
      "Prevention, incident response and regulatory compliance in information security.",
      "Prävention, Incident Response und regulatorische Compliance in der Informationssicherheit."
    ),
    description: L(
      "Un incidente de ciberseguridad es, ante todo, un evento legal. Asesoramos en la implementación de marcos de seguridad, coordinamos la respuesta jurídica ante ciberataques y ransomware, gestionamos las obligaciones de notificación y acompañamos a las organizaciones en la mitigación de su responsabilidad y la protección de su reputación.",
      "A cybersecurity incident is, above all, a legal event. We advise on the implementation of security frameworks, coordinate the legal response to cyberattacks and ransomware, manage notification obligations and support organisations in mitigating their liability and protecting their reputation.",
      "Ein Cybersicherheitsvorfall ist vor allem ein rechtliches Ereignis. Wir beraten zur Implementierung von Sicherheitsrahmen, koordinieren die rechtliche Reaktion auf Cyberangriffe und Ransomware, verwalten Meldepflichten und unterstützen Organisationen bei der Minderung ihrer Haftung und dem Schutz ihres Rufs."
    ),
    services: LL(
      [
        "Marcos de gobierno de seguridad de la información",
        "Respuesta a incidentes y gestión de crisis",
        "Cumplimiento de obligaciones regulatorias",
        "Investigaciones forenses y preservación de evidencia",
        "Contratación de servicios de seguridad gestionada",
        "Capacitación y simulacros para directorios",
      ],
      [
        "Information security governance frameworks",
        "Incident response and crisis management",
        "Compliance with regulatory obligations",
        "Forensic investigations and evidence preservation",
        "Contracting managed security services",
        "Board-level training and tabletop exercises",
      ],
      [
        "Governance-Rahmen für Informationssicherheit",
        "Incident Response und Krisenmanagement",
        "Einhaltung regulatorischer Pflichten",
        "Forensische Untersuchungen und Beweissicherung",
        "Beauftragung von Managed-Security-Diensten",
        "Schulungen und Planspiele für Vorstände",
      ]
    ),
    contacts: ["martin-acosta", "valentina-rossi"],
  },
  {
    slug: "corporativo-ma",
    icon: "Building2",
    featured: true,
    name: L("Corporativo y M&A", "Corporate & M&A", "Gesellschaftsrecht & M&A"),
    tagline: L(
      "Estructuramos las transacciones que definen tu crecimiento.",
      "We structure the transactions that define your growth.",
      "Wir strukturieren die Transaktionen, die Ihr Wachstum bestimmen."
    ),
    summary: L(
      "Fusiones y adquisiciones, reorganizaciones, gobierno corporativo y derecho societario.",
      "Mergers and acquisitions, reorganisations, corporate governance and company law.",
      "Fusionen und Übernahmen, Umstrukturierungen, Corporate Governance und Gesellschaftsrecht."
    ),
    description: L(
      "Desde la constitución de una startup hasta operaciones de M&A transfronterizas, acompañamos a empresas e inversores en cada decisión estratégica. Lideramos procesos de due diligence, negociamos y redactamos la documentación transaccional, estructuramos joint ventures y reorganizaciones, y asesoramos al directorio en cuestiones de gobierno corporativo.",
      "From incorporating a startup to cross-border M&A deals, we support companies and investors in every strategic decision. We lead due diligence processes, negotiate and draft transactional documentation, structure joint ventures and reorganisations, and advise boards on corporate governance.",
      "Von der Gründung eines Start-ups bis zu grenzüberschreitenden M&A-Transaktionen begleiten wir Unternehmen und Investoren bei jeder strategischen Entscheidung. Wir leiten Due-Diligence-Prozesse, verhandeln und erstellen Transaktionsdokumentation, strukturieren Joint Ventures und Umstrukturierungen und beraten Vorstände zur Corporate Governance."
    ),
    services: LL(
      [
        "Fusiones, adquisiciones y desinversiones",
        "Due diligence legal integral",
        "Joint ventures y alianzas estratégicas",
        "Reorganizaciones societarias y reestructuraciones",
        "Gobierno corporativo y asesoramiento al directorio",
        "Inversión extranjera y estructuración de holdings",
      ],
      [
        "Mergers, acquisitions and divestitures",
        "Comprehensive legal due diligence",
        "Joint ventures and strategic alliances",
        "Corporate reorganisations and restructurings",
        "Corporate governance and board advisory",
        "Foreign investment and holding structuring",
      ],
      [
        "Fusionen, Übernahmen und Veräußerungen",
        "Umfassende rechtliche Due Diligence",
        "Joint Ventures und strategische Allianzen",
        "Gesellschaftsrechtliche Umstrukturierungen",
        "Corporate Governance und Vorstandsberatung",
        "Auslandsinvestitionen und Holdingstrukturierung",
      ]
    ),
    contacts: ["cristian-mendoza", "sofia-paredes"],
  },
  {
    slug: "fintech-regulatorio-financiero",
    icon: "Landmark",
    featured: true,
    name: L(
      "Fintech y Regulatorio Financiero",
      "Fintech & Financial Regulation",
      "Fintech & Finanzregulierung"
    ),
    tagline: L(
      "Innovación financiera dentro de las reglas.",
      "Financial innovation within the rules.",
      "Finanzinnovation im Rahmen der Regeln."
    ),
    summary: L(
      "Asesoramiento regulatorio a fintechs, medios de pago, criptoactivos y entidades financieras.",
      "Regulatory advice to fintechs, payment providers, crypto-assets and financial institutions.",
      "Regulatorische Beratung für Fintechs, Zahlungsdienstleister, Kryptowerte und Finanzinstitute."
    ),
    description: L(
      "El sector financiero vive una revolución tecnológica. Asesoramos a fintechs, billeteras digitales, plataformas de pago, exchanges de criptoactivos y entidades tradicionales en el cumplimiento regulatorio, la obtención de licencias, la prevención de lavado de activos y el diseño de productos financieros innovadores conformes a la normativa.",
      "The financial sector is undergoing a technological revolution. We advise fintechs, digital wallets, payment platforms, crypto-asset exchanges and traditional institutions on regulatory compliance, licensing, anti-money-laundering and the design of innovative, compliant financial products.",
      "Der Finanzsektor erlebt eine technologische Revolution. Wir beraten Fintechs, digitale Geldbörsen, Zahlungsplattformen, Krypto-Börsen und traditionelle Institute zu regulatorischer Compliance, Lizenzierung, Geldwäscheprävention und der Gestaltung innovativer, konformer Finanzprodukte."
    ),
    services: LL(
      [
        "Licencias y autorizaciones regulatorias",
        "Regulación de criptoactivos y blockchain",
        "Medios de pago y dinero electrónico",
        "Prevención de lavado de activos (PLD/FT)",
        "Open banking y finanzas embebidas",
        "Estructuración de productos financieros",
      ],
      [
        "Regulatory licences and authorisations",
        "Crypto-asset and blockchain regulation",
        "Payment methods and electronic money",
        "Anti-money-laundering (AML/CFT)",
        "Open banking and embedded finance",
        "Financial product structuring",
      ],
      [
        "Regulatorische Lizenzen und Genehmigungen",
        "Regulierung von Kryptowerten und Blockchain",
        "Zahlungsmittel und E-Geld",
        "Geldwäscheprävention (AML/CFT)",
        "Open Banking und Embedded Finance",
        "Strukturierung von Finanzprodukten",
      ]
    ),
    contacts: ["sofia-paredes", "cristian-mendoza"],
  },
  {
    slug: "compliance-penal-economico",
    icon: "Scale",
    name: L(
      "Compliance y Penal Económico",
      "Compliance & White-Collar Crime",
      "Compliance & Wirtschaftsstrafrecht"
    ),
    tagline: L(
      "Cultura de integridad, blindaje frente al riesgo.",
      "A culture of integrity, a shield against risk.",
      "Integritätskultur als Schutz vor Risiken."
    ),
    summary: L(
      "Programas de integridad, investigaciones internas y defensa penal corporativa.",
      "Integrity programmes, internal investigations and corporate criminal defence.",
      "Integritätsprogramme, interne Untersuchungen und Unternehmensstrafverteidigung."
    ),
    description: L(
      "El cumplimiento dejó de ser opcional. Diseñamos e implementamos programas de integridad conforme a las mejores prácticas internacionales, conducimos investigaciones internas con rigor y confidencialidad, y ejercemos la defensa de empresas y directivos en casos de responsabilidad penal corporativa, anticorrupción y fraude.",
      "Compliance is no longer optional. We design and implement integrity programmes in line with international best practice, conduct internal investigations with rigour and confidentiality, and defend companies and executives in matters of corporate criminal liability, anti-corruption and fraud.",
      "Compliance ist nicht mehr optional. Wir entwerfen und implementieren Integritätsprogramme nach internationalen Best Practices, führen interne Untersuchungen mit Sorgfalt und Vertraulichkeit durch und verteidigen Unternehmen und Führungskräfte in Fragen der Unternehmensstrafbarkeit, Korruptionsbekämpfung und Betrug."
    ),
    services: LL(
      [
        "Diseño e implementación de programas de integridad",
        "Investigaciones internas y forensics",
        "Defensa penal corporativa",
        "Prevención de corrupción y soborno",
        "Canales de denuncia y protección al denunciante",
        "Due diligence de integridad de terceros",
      ],
      [
        "Design and implementation of integrity programmes",
        "Internal investigations and forensics",
        "Corporate criminal defence",
        "Anti-corruption and bribery prevention",
        "Whistleblowing channels and protection",
        "Third-party integrity due diligence",
      ],
      [
        "Gestaltung und Umsetzung von Integritätsprogrammen",
        "Interne Untersuchungen und Forensik",
        "Unternehmensstrafverteidigung",
        "Korruptions- und Bestechungsprävention",
        "Hinweisgebersysteme und Whistleblower-Schutz",
        "Integritäts-Due-Diligence von Dritten",
      ]
    ),
    contacts: ["martin-acosta", "sofia-paredes"],
  },
  {
    slug: "laboral",
    icon: "Users",
    name: L("Derecho Laboral", "Employment Law", "Arbeitsrecht"),
    tagline: L(
      "El talento como eje de la estrategia.",
      "Talent at the heart of strategy.",
      "Talent im Zentrum der Strategie."
    ),
    summary: L(
      "Relaciones laborales, contratación de talento tecnológico y trabajo remoto.",
      "Labour relations, tech talent hiring and remote work.",
      "Arbeitsbeziehungen, Einstellung von Tech-Talenten und Remote-Arbeit."
    ),
    description: L(
      "Las nuevas formas de trabajo plantean desafíos legales inéditos. Asesoramos en la contratación de talento local e internacional, esquemas de equity y compensación, trabajo remoto y nómada digital, relaciones sindicales, reestructuraciones de personal y la prevención y defensa de conflictos laborales individuales y colectivos.",
      "New forms of work raise unprecedented legal challenges. We advise on hiring local and international talent, equity and compensation schemes, remote and digital-nomad work, union relations, workforce restructurings, and the prevention and defence of individual and collective labour disputes.",
      "Neue Arbeitsformen stellen beispiellose rechtliche Herausforderungen dar. Wir beraten zur Einstellung lokaler und internationaler Talente, zu Equity- und Vergütungsmodellen, zu Remote- und Digital-Nomad-Arbeit, zu Gewerkschaftsbeziehungen, Personalumstrukturierungen sowie zur Prävention und Verteidigung individueller und kollektiver Arbeitskonflikte."
    ),
    services: LL(
      [
        "Contratación de talento local e internacional",
        "Planes de equity y compensación variable",
        "Trabajo remoto, híbrido y nómada digital",
        "Relaciones colectivas y negociación sindical",
        "Reestructuraciones y desvinculaciones",
        "Litigios laborales individuales y colectivos",
      ],
      [
        "Hiring local and international talent",
        "Equity plans and variable compensation",
        "Remote, hybrid and digital-nomad work",
        "Collective relations and union negotiation",
        "Restructurings and terminations",
        "Individual and collective labour litigation",
      ],
      [
        "Einstellung lokaler und internationaler Talente",
        "Equity-Pläne und variable Vergütung",
        "Remote-, Hybrid- und Digital-Nomad-Arbeit",
        "Kollektivbeziehungen und Tarifverhandlungen",
        "Umstrukturierungen und Kündigungen",
        "Individuelle und kollektive Arbeitsstreitigkeiten",
      ]
    ),
    contacts: ["sofia-paredes", "lucia-fernandez"],
  },
  {
    slug: "litigios-arbitraje",
    icon: "Gavel",
    name: L(
      "Litigios y Arbitraje",
      "Litigation & Arbitration",
      "Prozessführung & Schiedsverfahren"
    ),
    tagline: L(
      "Defensa estratégica en cada instancia.",
      "Strategic defence at every stage.",
      "Strategische Verteidigung in jeder Instanz."
    ),
    summary: L(
      "Resolución de disputas complejas en sede judicial y arbitral, nacional e internacional.",
      "Resolution of complex disputes in court and arbitration, domestic and international.",
      "Lösung komplexer Streitigkeiten vor Gericht und in Schiedsverfahren, national und international."
    ),
    description: L(
      "Cuando el conflicto es inevitable, la estrategia lo es todo. Representamos a nuestros clientes en litigios comerciales complejos, arbitrajes nacionales e internacionales, disputas tecnológicas y de propiedad intelectual, y procedimientos administrativos. Combinamos rigor técnico con una visión pragmática orientada al resultado.",
      "When conflict is unavoidable, strategy is everything. We represent our clients in complex commercial litigation, domestic and international arbitration, technology and IP disputes, and administrative proceedings. We combine technical rigour with a pragmatic, results-oriented approach.",
      "Wenn ein Konflikt unvermeidlich ist, ist die Strategie entscheidend. Wir vertreten unsere Mandanten in komplexen Handelsstreitigkeiten, nationalen und internationalen Schiedsverfahren, Technologie- und IP-Streitigkeiten sowie Verwaltungsverfahren. Wir verbinden fachliche Strenge mit einem pragmatischen, ergebnisorientierten Ansatz."
    ),
    services: LL(
      [
        "Litigios comerciales y societarios complejos",
        "Arbitraje nacional e internacional",
        "Disputas tecnológicas y de propiedad intelectual",
        "Procedimientos administrativos y regulatorios",
        "Medidas cautelares y ejecución de sentencias",
        "Resolución alternativa de conflictos",
      ],
      [
        "Complex commercial and corporate litigation",
        "Domestic and international arbitration",
        "Technology and intellectual property disputes",
        "Administrative and regulatory proceedings",
        "Injunctions and enforcement of judgments",
        "Alternative dispute resolution",
      ],
      [
        "Komplexe Handels- und Gesellschaftsstreitigkeiten",
        "Nationale und internationale Schiedsverfahren",
        "Technologie- und IP-Streitigkeiten",
        "Verwaltungs- und Regulierungsverfahren",
        "Einstweilige Verfügungen und Urteilsvollstreckung",
        "Alternative Streitbeilegung",
      ]
    ),
    contacts: ["martin-acosta", "cristian-mendoza"],
  },
  {
    slug: "startups-venture-capital",
    icon: "Rocket",
    featured: true,
    name: L(
      "Startups y Venture Capital",
      "Startups & Venture Capital",
      "Start-ups & Venture Capital"
    ),
    tagline: L(
      "Del garaje a la ronda Serie C.",
      "From the garage to the Series C round.",
      "Von der Garage bis zur Series-C-Runde."
    ),
    summary: L(
      "Acompañamiento legal integral a emprendedores, fondos e inversores en todo el ciclo de vida.",
      "End-to-end legal support for founders, funds and investors throughout the lifecycle.",
      "Umfassende rechtliche Begleitung für Gründer, Fonds und Investoren über den gesamten Lebenszyklus."
    ),
    description: L(
      "Hablamos el idioma del ecosistema emprendedor. Asesoramos a startups desde su constitución, estructuramos rondas de inversión (SAFE, equity, convertibles), negociamos term sheets, diseñamos planes de stock options y acompañamos a fondos de venture capital en sus inversiones y exits. Entendemos la velocidad y los códigos del mundo startup.",
      "We speak the language of the startup ecosystem. We advise startups from incorporation, structure investment rounds (SAFE, equity, convertibles), negotiate term sheets, design stock option plans and support venture capital funds in their investments and exits. We understand the speed and the codes of the startup world.",
      "Wir sprechen die Sprache des Start-up-Ökosystems. Wir beraten Start-ups ab der Gründung, strukturieren Finanzierungsrunden (SAFE, Equity, Wandeldarlehen), verhandeln Term Sheets, gestalten Aktienoptionsprogramme und begleiten Venture-Capital-Fonds bei Investitionen und Exits. Wir verstehen das Tempo und die Codes der Start-up-Welt."
    ),
    services: LL(
      [
        "Constitución y estructuración de startups",
        "Rondas de inversión: SAFE, convertibles y equity",
        "Negociación de term sheets y pactos de socios",
        "Planes de stock options y ESOP",
        "Asesoramiento a fondos de venture capital",
        "Procesos de exit y adquisición",
      ],
      [
        "Startup incorporation and structuring",
        "Investment rounds: SAFE, convertibles and equity",
        "Term sheet and shareholders' agreement negotiation",
        "Stock option plans and ESOP",
        "Venture capital fund advisory",
        "Exit and acquisition processes",
      ],
      [
        "Gründung und Strukturierung von Start-ups",
        "Finanzierungsrunden: SAFE, Wandeldarlehen und Equity",
        "Verhandlung von Term Sheets und Gesellschaftervereinbarungen",
        "Aktienoptionsprogramme und ESOP",
        "Beratung von Venture-Capital-Fonds",
        "Exit- und Übernahmeprozesse",
      ]
    ),
    contacts: ["sofia-paredes", "valentina-rossi"],
  },
];

export function getPractice(slug: string): PracticeArea | undefined {
  return practices.find((p) => p.slug === slug);
}

export function getFeaturedPractices(): PracticeArea[] {
  return practices.filter((p) => p.featured);
}
