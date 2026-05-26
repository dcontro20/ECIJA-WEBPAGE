import { L, type Insight } from "./types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const insights: Insight[] = [
  {
    slug: "regulacion-inteligencia-artificial-latam",
    categoryKey: "tech",
    category: L("Tecnología", "Technology", "Technologie"),
    featured: true,
    title: L(
      "El nuevo mapa regulatorio de la inteligencia artificial en Latinoamérica",
      "The new regulatory map of artificial intelligence in Latin America",
      "Die neue Regulierungslandschaft der künstlichen Intelligenz in Lateinamerika"
    ),
    excerpt: L(
      "Mientras Europa avanza con su Reglamento de IA, la región define su propio enfoque. Analizamos qué deben prever las empresas que desarrollan o implementan sistemas de IA.",
      "As Europe advances its AI Act, the region is defining its own approach. We analyse what companies developing or deploying AI systems should anticipate.",
      "Während Europa seine KI-Verordnung vorantreibt, definiert die Region ihren eigenen Ansatz. Wir analysieren, worauf Unternehmen achten sollten, die KI-Systeme entwickeln oder einsetzen."
    ),
    body: L(
      "La inteligencia artificial dejó de ser una promesa para convertirse en una realidad operativa en prácticamente todos los sectores. Con esa adopción acelerada llega, inevitablemente, la atención de los reguladores.\n\nEuropa marcó el camino con su Reglamento de Inteligencia Artificial, el primer marco integral basado en el riesgo. Su enfoque —clasificar los sistemas según su nivel de riesgo e imponer obligaciones proporcionales— se está convirtiendo en una referencia global, incluso fuera de su ámbito de aplicación directa.\n\nEn Latinoamérica, el panorama es heterogéneo. Algunos países avanzan con proyectos de ley específicos, mientras otros optan por adaptar sus marcos de protección de datos existentes. Para las empresas que operan a nivel regional, esto plantea un desafío de cumplimiento multinivel.\n\nNuestra recomendación es clara: las organizaciones deben construir una gobernanza de IA robusta desde ahora, independientemente del estado regulatorio de cada jurisdicción. Esto incluye inventarios de sistemas, evaluaciones de impacto, mecanismos de supervisión humana y trazabilidad de las decisiones algorítmicas.\n\nAnticiparse no es solo una cuestión de cumplimiento: es una ventaja competitiva y una forma de generar confianza con clientes, socios y reguladores.",
      "Artificial intelligence has moved from promise to operational reality in virtually every sector. With that accelerated adoption inevitably comes the attention of regulators.\n\nEurope led the way with its AI Act, the first comprehensive risk-based framework. Its approach — classifying systems by risk level and imposing proportionate obligations — is becoming a global reference, even beyond its direct scope.\n\nIn Latin America, the picture is heterogeneous. Some countries are advancing specific bills, while others choose to adapt their existing data protection frameworks. For companies operating regionally, this poses a multi-layered compliance challenge.\n\nOur recommendation is clear: organisations should build robust AI governance now, regardless of the regulatory status of each jurisdiction. This includes system inventories, impact assessments, human oversight mechanisms and traceability of algorithmic decisions.\n\nGetting ahead is not only a compliance matter: it is a competitive advantage and a way to build trust with clients, partners and regulators.",
      "Künstliche Intelligenz hat sich vom Versprechen zur operativen Realität in nahezu jeder Branche entwickelt. Mit dieser beschleunigten Einführung kommt unweigerlich die Aufmerksamkeit der Regulierungsbehörden.\n\nEuropa ging mit seiner KI-Verordnung voran, dem ersten umfassenden risikobasierten Rahmen. Sein Ansatz – die Klassifizierung von Systemen nach Risikograd und die Auferlegung verhältnismäßiger Pflichten – wird zu einer globalen Referenz, selbst über seinen direkten Anwendungsbereich hinaus.\n\nIn Lateinamerika ist das Bild uneinheitlich. Einige Länder treiben spezifische Gesetzentwürfe voran, während andere ihre bestehenden Datenschutzrahmen anpassen. Für regional tätige Unternehmen stellt dies eine mehrschichtige Compliance-Herausforderung dar.\n\nUnsere Empfehlung ist klar: Organisationen sollten jetzt eine robuste KI-Governance aufbauen, unabhängig vom regulatorischen Status der jeweiligen Jurisdiktion. Dazu gehören Systeminventare, Folgenabschätzungen, Mechanismen menschlicher Aufsicht und die Nachvollziehbarkeit algorithmischer Entscheidungen.\n\nVorauszudenken ist nicht nur eine Compliance-Frage: Es ist ein Wettbewerbsvorteil und eine Möglichkeit, Vertrauen bei Mandanten, Partnern und Regulierungsbehörden aufzubauen."
    ),
    author: "valentina-rossi",
    date: "2026-05-12",
    readMinutes: 6,
    image: img("photo-1485827404703-89b55fcc595e"),
    practices: ["tecnologia-telecomunicaciones", "privacidad-proteccion-datos"],
  },
  {
    slug: "criptoactivos-marco-regulatorio",
    categoryKey: "fintech",
    category: L("Fintech", "Fintech", "Fintech"),
    featured: true,
    title: L(
      "Criptoactivos: hacia un marco regulatorio que da certeza",
      "Crypto-assets: towards a regulatory framework that brings certainty",
      "Kryptowerte: auf dem Weg zu einem Rechtsrahmen, der Sicherheit schafft"
    ),
    excerpt: L(
      "El registro de proveedores de servicios de activos virtuales marca un antes y un después. Qué implica para exchanges, billeteras y fintechs.",
      "The registry of virtual asset service providers marks a turning point. What it means for exchanges, wallets and fintechs.",
      "Das Register für Anbieter von Dienstleistungen für virtuelle Vermögenswerte markiert einen Wendepunkt. Was es für Börsen, Wallets und Fintechs bedeutet."
    ),
    body: L(
      "El ecosistema cripto vivió durante años en una zona gris regulatoria. Esa etapa está llegando a su fin. La incorporación de regímenes de registro para proveedores de servicios de activos virtuales (PSAV) representa un paso decisivo hacia la formalización del sector.\n\nPara los exchanges, billeteras y plataformas, esto implica obligaciones concretas: inscripción registral, implementación de programas de prevención de lavado de activos, requisitos de información al usuario y estándares de ciberseguridad.\n\nLejos de ser una carga, vemos esta regulación como una oportunidad. La certeza jurídica atrae inversión institucional, facilita las relaciones bancarias y profesionaliza un sector que necesita madurar para alcanzar su potencial.\n\nLas empresas que se adelanten a estos requisitos y construyan estructuras de cumplimiento sólidas estarán mejor posicionadas para crecer de forma sostenible y para operar a nivel transfronterizo.",
      "The crypto ecosystem lived for years in a regulatory grey zone. That stage is coming to an end. The introduction of registration regimes for virtual asset service providers (VASPs) represents a decisive step towards formalising the sector.\n\nFor exchanges, wallets and platforms, this means concrete obligations: registration, implementation of anti-money-laundering programmes, user information requirements and cybersecurity standards.\n\nFar from being a burden, we see this regulation as an opportunity. Legal certainty attracts institutional investment, facilitates banking relationships and professionalises a sector that needs to mature to reach its potential.\n\nCompanies that get ahead of these requirements and build solid compliance structures will be better positioned to grow sustainably and operate cross-border.",
      "Das Krypto-Ökosystem lebte jahrelang in einer regulatorischen Grauzone. Diese Phase geht zu Ende. Die Einführung von Registrierungsregelungen für Anbieter von Dienstleistungen für virtuelle Vermögenswerte (VASPs) ist ein entscheidender Schritt zur Formalisierung des Sektors.\n\nFür Börsen, Wallets und Plattformen bedeutet dies konkrete Pflichten: Registrierung, Implementierung von Geldwäschepräventionsprogrammen, Informationspflichten gegenüber Nutzern und Cybersicherheitsstandards.\n\nWir sehen diese Regulierung nicht als Belastung, sondern als Chance. Rechtssicherheit zieht institutionelle Investitionen an, erleichtert Bankbeziehungen und professionalisiert einen Sektor, der reifen muss, um sein Potenzial auszuschöpfen.\n\nUnternehmen, die diesen Anforderungen zuvorkommen und solide Compliance-Strukturen aufbauen, sind besser positioniert, um nachhaltig zu wachsen und grenzüberschreitend zu agieren."
    ),
    author: "sofia-paredes",
    date: "2026-04-28",
    readMinutes: 5,
    image: img("photo-1639762681485-074b7f938ba0"),
    practices: ["fintech-regulatorio-financiero"],
  },
  {
    slug: "brechas-seguridad-respuesta-legal",
    categoryKey: "cyber",
    category: L("Ciberseguridad", "Cybersecurity", "Cybersicherheit"),
    featured: true,
    title: L(
      "Las primeras 72 horas: cómo responder legalmente a una brecha de seguridad",
      "The first 72 hours: how to respond legally to a data breach",
      "Die ersten 72 Stunden: rechtlich richtig auf eine Datenpanne reagieren"
    ),
    excerpt: L(
      "Un incidente de ciberseguridad pone a prueba la preparación de toda organización. La diferencia entre una crisis gestionada y una catástrofe reputacional se define en horas.",
      "A cybersecurity incident tests every organisation's preparedness. The difference between a managed crisis and a reputational catastrophe is decided in hours.",
      "Ein Cybersicherheitsvorfall stellt die Vorbereitung jeder Organisation auf die Probe. Der Unterschied zwischen einer bewältigten Krise und einer Reputationskatastrophe entscheidet sich in Stunden."
    ),
    body: L(
      "Cuando ocurre un incidente de ciberseguridad, el reloj empieza a correr de inmediato. Las decisiones tomadas en las primeras horas determinan la exposición legal, regulatoria y reputacional de la organización.\n\nEl primer paso es activar el comité de crisis y preservar la evidencia. Antes de remediar, hay que documentar: la forma en que se gestiona técnicamente el incidente tiene consecuencias legales directas.\n\nEn paralelo, debe evaluarse el alcance de las obligaciones de notificación. Muchos marcos regulatorios exigen comunicar la brecha a la autoridad de control y, según el caso, a los titulares de los datos afectados, dentro de plazos acotados.\n\nLa comunicación externa requiere un equilibrio delicado entre transparencia y prudencia. Cada palabra cuenta y puede ser utilizada en litigios posteriores.\n\nLa lección más importante: la respuesta a incidentes no se improvisa. Las organizaciones que han ensayado su plan de crisis, que tienen roles claros y asesoramiento legal preestablecido, atraviesan estos eventos con un costo significativamente menor.",
      "When a cybersecurity incident occurs, the clock starts ticking immediately. Decisions made in the first hours determine the organisation's legal, regulatory and reputational exposure.\n\nThe first step is to activate the crisis committee and preserve evidence. Before remediating, document everything: the way an incident is technically handled has direct legal consequences.\n\nIn parallel, the scope of notification obligations must be assessed. Many regulatory frameworks require reporting the breach to the supervisory authority and, where applicable, to affected data subjects, within tight deadlines.\n\nExternal communication requires a delicate balance between transparency and prudence. Every word counts and may be used in later litigation.\n\nThe most important lesson: incident response cannot be improvised. Organisations that have rehearsed their crisis plan, with clear roles and pre-arranged legal counsel, get through these events at a significantly lower cost.",
      "Wenn ein Cybersicherheitsvorfall eintritt, beginnt die Uhr sofort zu ticken. Die in den ersten Stunden getroffenen Entscheidungen bestimmen die rechtliche, regulatorische und reputationsbezogene Exposition der Organisation.\n\nDer erste Schritt ist die Aktivierung des Krisenstabs und die Sicherung von Beweisen. Vor der Behebung muss alles dokumentiert werden: Die Art der technischen Behandlung eines Vorfalls hat direkte rechtliche Folgen.\n\nParallel dazu ist der Umfang der Meldepflichten zu bewerten. Viele Regulierungsrahmen verlangen die Meldung der Verletzung an die Aufsichtsbehörde und gegebenenfalls an die betroffenen Personen innerhalb enger Fristen.\n\nDie externe Kommunikation erfordert ein heikles Gleichgewicht zwischen Transparenz und Vorsicht. Jedes Wort zählt und kann in späteren Rechtsstreitigkeiten verwendet werden.\n\nDie wichtigste Lektion: Incident Response lässt sich nicht improvisieren. Organisationen, die ihren Krisenplan geprobt haben, mit klaren Rollen und vorab vereinbarter Rechtsberatung, überstehen diese Ereignisse mit deutlich geringeren Kosten."
    ),
    author: "martin-acosta",
    date: "2026-04-15",
    readMinutes: 7,
    image: img("photo-1550751827-4bd374c3f58b"),
    practices: ["ciberseguridad", "privacidad-proteccion-datos"],
  },
  {
    slug: "due-diligence-startups-errores",
    categoryKey: "corporate",
    category: L("Corporativo", "Corporate", "Gesellschaftsrecht"),
    title: L(
      "Cinco errores legales que pueden costarle a tu startup la próxima ronda",
      "Five legal mistakes that can cost your startup its next round",
      "Fünf rechtliche Fehler, die Ihr Start-up die nächste Runde kosten können"
    ),
    excerpt: L(
      "La due diligence de un inversor revela todo. Estos son los problemas legales que con más frecuencia frenan o devalúan una operación.",
      "An investor's due diligence reveals everything. These are the legal issues that most often stall or devalue a deal.",
      "Die Due Diligence eines Investors deckt alles auf. Dies sind die rechtlichen Probleme, die ein Geschäft am häufigsten verzögern oder entwerten."
    ),
    body: L(
      "Cuando un fondo decide invertir, su equipo legal examina la empresa con lupa. Muchos fundadores descubren demasiado tarde que descuidos del pasado pueden frenar una ronda o reducir drásticamente la valuación.\n\nEl primer error frecuente es una estructura societaria desprolija: cap tables informales, acuerdos verbales con cofundadores o vesting mal documentado. El segundo es la propiedad intelectual: si el código o la marca no están correctamente cedidos a la empresa, el activo principal está en riesgo.\n\nEl tercero son los contratos laborales y de contratistas mal estructurados, especialmente con equipos distribuidos en varias jurisdicciones. El cuarto, el incumplimiento de normativa de protección de datos, cada vez más escrutado por los inversores. Y el quinto, la falta de formalización de rondas previas: SAFEs sin convertir, deuda no registrada o promesas de equity sin documentar.\n\nLa buena noticia es que todos estos problemas son prevenibles. Invertir en una base legal sólida desde el día uno no es un gasto: es la mejor protección de la valuación futura.",
      "When a fund decides to invest, its legal team examines the company under a magnifying glass. Many founders discover too late that past oversights can stall a round or drastically reduce the valuation.\n\nThe first common mistake is a messy corporate structure: informal cap tables, verbal agreements with co-founders or poorly documented vesting. The second is intellectual property: if the code or brand is not properly assigned to the company, the main asset is at risk.\n\nThe third is poorly structured employment and contractor agreements, especially with teams distributed across jurisdictions. The fourth is non-compliance with data protection law, increasingly scrutinised by investors. And the fifth is the failure to formalise prior rounds: unconverted SAFEs, unrecorded debt or undocumented equity promises.\n\nThe good news is that all of these issues are preventable. Investing in a solid legal foundation from day one is not an expense: it is the best protection for future valuation.",
      "Wenn ein Fonds investieren möchte, prüft sein Rechtsteam das Unternehmen unter der Lupe. Viele Gründer entdecken zu spät, dass vergangene Versäumnisse eine Runde verzögern oder die Bewertung drastisch senken können.\n\nDer erste häufige Fehler ist eine unordentliche Gesellschaftsstruktur: informelle Cap Tables, mündliche Vereinbarungen mit Mitgründern oder schlecht dokumentiertes Vesting. Der zweite ist das geistige Eigentum: Wenn Code oder Marke nicht ordnungsgemäß auf das Unternehmen übertragen sind, ist das Hauptvermögen gefährdet.\n\nDer dritte sind schlecht strukturierte Arbeits- und Auftragnehmerverträge, besonders bei über mehrere Jurisdiktionen verteilten Teams. Der vierte ist die Nichteinhaltung des Datenschutzrechts, das von Investoren zunehmend geprüft wird. Und der fünfte ist die fehlende Formalisierung früherer Runden: nicht umgewandelte SAFEs, nicht erfasste Schulden oder nicht dokumentierte Equity-Versprechen.\n\nDie gute Nachricht: All diese Probleme sind vermeidbar. In ein solides rechtliches Fundament von Tag eins an zu investieren ist keine Ausgabe, sondern der beste Schutz für die künftige Bewertung."
    ),
    author: "sofia-paredes",
    date: "2026-03-30",
    readMinutes: 5,
    image: img("photo-1556761175-5973dc0f32e7"),
    practices: ["startups-venture-capital", "corporativo-ma"],
  },
  {
    slug: "trabajo-remoto-internacional-talento",
    categoryKey: "employment",
    category: L("Laboral", "Employment", "Arbeitsrecht"),
    title: L(
      "Contratar talento sin fronteras: el rompecabezas legal del trabajo remoto",
      "Hiring talent without borders: the legal puzzle of remote work",
      "Talent ohne Grenzen einstellen: das rechtliche Puzzle der Remote-Arbeit"
    ),
    excerpt: L(
      "Las empresas tecnológicas contratan donde está el talento. Pero el trabajo remoto internacional esconde riesgos laborales, fiscales y de cumplimiento.",
      "Tech companies hire where the talent is. But international remote work hides labour, tax and compliance risks.",
      "Technologieunternehmen stellen dort ein, wo das Talent ist. Doch internationale Remote-Arbeit birgt arbeits-, steuer- und compliancerechtliche Risiken."
    ),
    body: L(
      "La pandemia normalizó el trabajo remoto y, con él, la posibilidad de contratar talento en cualquier lugar del mundo. Para las empresas tecnológicas, esto abrió un acceso sin precedentes a profesionales calificados. Pero también multiplicó la complejidad legal.\n\nContratar a una persona que trabaja desde otro país plantea preguntas críticas: ¿bajo qué legislación laboral se rige la relación? ¿Genera la empresa un establecimiento permanente con implicancias fiscales? ¿Cómo se gestionan los aportes previsionales y la seguridad social?\n\nLas alternativas van desde la contratación directa hasta el uso de entidades empleadoras (EOR), pasando por esquemas de contratistas independientes, cada uno con sus ventajas y riesgos. La elección incorrecta puede derivar en reclamos laborales, contingencias fiscales y sanciones.\n\nNuestro enfoque es diseñar estructuras de contratación que equilibren la flexibilidad que necesitan las empresas con la seguridad jurídica que protege tanto al empleador como al talento.",
      "The pandemic normalised remote work and, with it, the possibility of hiring talent anywhere in the world. For technology companies, this opened unprecedented access to qualified professionals. But it also multiplied legal complexity.\n\nHiring someone working from another country raises critical questions: which labour law governs the relationship? Does the company create a permanent establishment with tax implications? How are pension contributions and social security managed?\n\nThe alternatives range from direct hiring to employer-of-record (EOR) arrangements and independent contractor schemes, each with its advantages and risks. The wrong choice can lead to labour claims, tax contingencies and penalties.\n\nOur approach is to design hiring structures that balance the flexibility companies need with the legal certainty that protects both employer and talent.",
      "Die Pandemie hat Remote-Arbeit normalisiert und damit die Möglichkeit, überall auf der Welt Talente einzustellen. Für Technologieunternehmen eröffnete dies einen beispiellosen Zugang zu qualifizierten Fachkräften. Doch sie vervielfachte auch die rechtliche Komplexität.\n\nDie Einstellung einer Person, die aus einem anderen Land arbeitet, wirft kritische Fragen auf: Welchem Arbeitsrecht unterliegt das Verhältnis? Begründet das Unternehmen eine Betriebsstätte mit steuerlichen Folgen? Wie werden Rentenbeiträge und Sozialversicherung gehandhabt?\n\nDie Alternativen reichen von der Direkteinstellung über Employer-of-Record-Modelle (EOR) bis hin zu Werkvertragslösungen, jede mit eigenen Vorteilen und Risiken. Die falsche Wahl kann zu Arbeitsklagen, steuerlichen Risiken und Sanktionen führen.\n\nUnser Ansatz ist es, Einstellungsstrukturen zu gestalten, die die von Unternehmen benötigte Flexibilität mit der Rechtssicherheit verbinden, die sowohl Arbeitgeber als auch Talent schützt."
    ),
    author: "sofia-paredes",
    date: "2026-03-10",
    readMinutes: 6,
    image: img("photo-1521737711867-e3b97375f902"),
    practices: ["laboral", "corporativo-ma"],
  },
  {
    slug: "proteccion-marca-era-digital",
    categoryKey: "ip",
    category: L("Propiedad Intelectual", "Intellectual Property", "Geistiges Eigentum"),
    title: L(
      "Tu marca en la era digital: proteger el activo más valioso e invisible",
      "Your brand in the digital era: protecting the most valuable invisible asset",
      "Ihre Marke im digitalen Zeitalter: das wertvollste unsichtbare Gut schützen"
    ),
    excerpt: L(
      "Dominios, redes sociales, marketplaces y el metaverso amplían el campo de batalla de la propiedad intelectual. Cómo construir una estrategia de protección 360°.",
      "Domains, social media, marketplaces and the metaverse expand the IP battlefield. How to build a 360° protection strategy.",
      "Domains, soziale Medien, Marktplätze und das Metaverse erweitern das Schlachtfeld des geistigen Eigentums. Wie man eine 360°-Schutzstrategie aufbaut."
    ),
    body: L(
      "Durante décadas, proteger una marca significaba registrarla en una oficina de patentes y marcas. Hoy, el valor de una marca se construye —y se ataca— en múltiples frentes digitales simultáneamente.\n\nLos nombres de dominio, las cuentas de redes sociales, las listas en marketplaces y, cada vez más, los activos en entornos virtuales forman parte del territorio que toda empresa debe defender. El registro tradicional sigue siendo la base, pero ya no es suficiente.\n\nUna estrategia moderna de propiedad intelectual combina el registro de marcas en las clases relevantes, la vigilancia activa de infracciones online, la gestión de dominios y la actuación rápida frente a usos no autorizados, falsificaciones y suplantaciones.\n\nLas herramientas de monitoreo automatizado permiten detectar infracciones a escala, pero la decisión sobre cómo y cuándo actuar requiere criterio estratégico. No toda infracción merece la misma respuesta.\n\nProteger una marca hoy es un ejercicio continuo, no un trámite único. Las empresas que lo entienden convierten su propiedad intelectual en una verdadera ventaja competitiva.",
      "For decades, protecting a brand meant registering it at a trademark office. Today, a brand's value is built — and attacked — across multiple digital fronts simultaneously.\n\nDomain names, social media accounts, marketplace listings and, increasingly, assets in virtual environments are part of the territory every company must defend. Traditional registration remains the foundation, but is no longer enough.\n\nA modern IP strategy combines trademark registration in the relevant classes, active monitoring of online infringement, domain management and swift action against unauthorised uses, counterfeits and impersonation.\n\nAutomated monitoring tools allow infringement to be detected at scale, but the decision on how and when to act requires strategic judgement. Not every infringement deserves the same response.\n\nProtecting a brand today is a continuous exercise, not a one-off formality. Companies that understand this turn their intellectual property into a genuine competitive advantage.",
      "Jahrzehntelang bedeutete der Schutz einer Marke, sie bei einem Markenamt anzumelden. Heute wird der Wert einer Marke an mehreren digitalen Fronten gleichzeitig aufgebaut – und angegriffen.\n\nDomainnamen, Social-Media-Konten, Marktplatzeinträge und zunehmend Vermögenswerte in virtuellen Umgebungen gehören zum Territorium, das jedes Unternehmen verteidigen muss. Die traditionelle Anmeldung bleibt die Grundlage, reicht aber nicht mehr aus.\n\nEine moderne IP-Strategie kombiniert die Markenanmeldung in den relevanten Klassen, die aktive Überwachung von Online-Verletzungen, das Domainmanagement und schnelles Handeln gegen unbefugte Nutzungen, Fälschungen und Identitätsmissbrauch.\n\nAutomatisierte Überwachungstools ermöglichen die Erkennung von Verletzungen im großen Maßstab, doch die Entscheidung über das Wie und Wann erfordert strategisches Urteilsvermögen. Nicht jede Verletzung verdient dieselbe Reaktion.\n\nDer Schutz einer Marke ist heute eine fortlaufende Aufgabe, keine einmalige Formalität. Unternehmen, die das verstehen, verwandeln ihr geistiges Eigentum in einen echten Wettbewerbsvorteil."
    ),
    author: "lucia-fernandez",
    date: "2026-02-20",
    readMinutes: 6,
    image: img("photo-1611224923853-80b023f02d71"),
    practices: ["propiedad-intelectual", "tecnologia-telecomunicaciones"],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getFeaturedInsights(): Insight[] {
  return insights.filter((i) => i.featured);
}

export function getRecentInsights(limit = 3): Insight[] {
  return [...insights]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
