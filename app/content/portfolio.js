/** @typedef {'es' | 'en'} Locale */
/** @typedef {{ es: string, en: string }} LocalizedText */
/** @typedef {{ name: string, shortName: string, email: string, phone: string, phoneHref: string, location: LocalizedText, portrait: string, portraitAlt: LocalizedText, social: { github: string, linkedin: string }, cvUrl: string | null }} Profile */
/** @typedef {{ id: string, slugs: LocalizedText, year: string, accent: string, stack: string[], diagram: Record<Locale, string[]>, metrics?: Array<{ value: string, label: LocalizedText }>, links: { repositoryUrl: string | null, demoUrl: string | null }, content: Record<Locale, object> }} ProjectCase */
/** @typedef {{ period: string, content: Record<Locale, object> }} ExperienceItem */
/** @typedef {{ name: LocalizedText, issuer: string, year: string, certificateUrl: string | null }} Credential */

// Public files live under the deploy base path ('/' on Hostinger, '/Portafolio/' on GitHub Pages).
export function asset(pathname) {
  const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  return `${base.replace(/\/$/, '')}${pathname}`;
}

export const LOCALES = ['es', 'en'];
export const DEFAULT_LOCALE = 'es';

/** @type {Profile} */
export const profile = {
  name: 'Adrián Gustavo Rubio Calixto',
  shortName: 'Adrián Rubio',
  email: 'arubiocalixto@gmail.com',
  phone: '+51 988 444 953',
  phoneHref: 'tel:+51988444953',
  location: {
    es: 'Lima, Perú · Híbrido o remoto',
    en: 'Lima, Peru · Hybrid or remote',
  },
  portrait: asset('/adrian-rubio.jpg'),
  portraitAlt: {
    es: 'Retrato de Adrián Gustavo Rubio Calixto',
    en: 'Portrait of Adrián Gustavo Rubio Calixto',
  },
  social: {
    github: 'https://github.com/ZarRubio',
    linkedin: 'https://www.linkedin.com/in/adrianrubiocalixto/',
  },
  cvUrl: asset('/CV_Adrian_Rubio_Calixto.pdf'),
};

export const dictionary = {
  es: {
    localeName: 'Español',
    alternateLocale: 'EN',
    skip: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    navigation: 'Navegación principal',
    nav: [
      { label: 'Sobre mí', hash: 'about' },
      { label: 'Experiencia', hash: 'experience' },
      { label: 'Proyectos', hash: 'work' },
      { label: 'Habilidades', hash: 'stack' },
      { label: 'Formación', hash: 'education' },
      { label: 'Contacto', hash: 'contact' },
    ],
    contactCta: 'Hablemos',
    hero: {
      eyebrow: 'Desarrollador Full Stack & IA en Lima',
      title: 'Soy Adrián. Construyo software con IA que se usa a diario.',
      intro:
        'Desarrollo aplicaciones full stack e integro IA generativa en procesos reales de negocio: agentes con LangGraph, RAG y automatización en Python, sobre Next.js, Node.js y SQL. Lo que construyo está en uso y lo mido.',
      primary: 'Explorar casos',
      secondary: 'Iniciar conversación',
      availability: 'Abierto a roles híbridos o remotos',
      locationLabel: 'Base',
      proof: [
        ['Agentes + RAG', 'IA en producción'],
        ['Next.js + Node', 'Apps de negocio'],
        ['Python + SQL', 'Datos y automatización'],
      ],
    },
    work: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Proyectos que explican cómo trabajo.',
      intro:
        'Sistemas en uso real, no ejercicios de estilo. Cada caso muestra el problema, las restricciones y las decisiones que tomé con la información disponible.',
      open: 'Abrir caso',
      caseLabel: 'Caso',
    },
    profile: {
      eyebrow: 'Perfil',
      title: 'Me interesa que el software resuelva un problema real.',
      intro:
        'Empiezo por entender el proceso del negocio: quién lo usa, dónde se pierde tiempo y qué no puede fallar. Después construyo la solución más simple que lo resuelva.',
      paragraphs: [
        'Soy ingeniero de software (UPC, décimo superior). Desde julio de 2023 construyo aplicaciones de negocio e IA para una importadora en Lima: asistentes con agentes y RAG, un cotizador móvil, automatización de reportes y la implementación de un nuevo ERP.',
        'Uso IA donde aporta y código determinista donde se necesita exactitud: los cálculos los hacen Python y SQL, el modelo interpreta y explica, y una persona aprueba lo importante. Programo con Claude Code y Codex, con pruebas automatizadas y CI/CD.',
      ],
      principles: [
        ['IA con control', 'Cálculos reproducibles, trazas y revisión humana antes de actuar.'],
        ['Impacto medible', 'Herramientas que se usan a diario y tiempos que se pueden comparar.'],
        ['Handoff sin misterio', 'Decisiones y arquitectura que no dependen de una sola persona.'],
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Experiencia aplicada.',
      intro:
        'Desde 2023 en el área de TI de una importadora: empecé con el ERP y la automatización, pasé al desarrollo web y hoy construyo aplicaciones de negocio con IA.',
    },
    stack: {
      eyebrow: 'Stack de trabajo',
      title: 'Lo que uso para construir.',
      intro:
        'Un stack compacto para integrar IA en procesos reales, construir aplicaciones completas y mantener los datos limpios.',
    },
    credentials: {
      eyebrow: 'Credenciales',
      title: 'Aprendizaje con evidencia pública.',
      intro: 'Solo aparecen credenciales que pueden verificarse mediante un certificado o registro público.',
      open: 'Ver certificado',
    },
    home: {
      available: 'Disponible · híbrido o remoto',
      firstName: 'Adrián',
      lastName: 'Rubio Calixto',
      roles: ['Desarrollador Full Stack & IA', 'Agentes con LangGraph y RAG', 'Next.js · Node.js · Python'],
      badgeValue: '3 años',
      badgeLabel: 'construyendo software en uso',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      contactMe: 'Contáctame',
      themeToLight: 'Cambiar a modo claro',
      themeToDark: 'Cambiar a modo oscuro',
      techStrip: 'Tecnologías con las que trabajo',
      aboutPill: 'Sobre mí',
      aboutTitle: 'Desarrollador Full Stack con IA aplicada',
      aboutLead: 'Ingeniero de software (UPC, décimo superior) que construye aplicaciones de negocio y las conecta con IA generativa.',
      stats: [
        ['3', 'años en desarrollo'],
        ['7', 'proyectos documentados'],
        ['4', 'credenciales verificables'],
      ],
      experiencePill: 'Experiencia',
      experienceTitle: 'Dónde he trabajado',
      current: 'Actual',
      workPill: 'Proyectos',
      workTitle: 'Trabajo destacado',
      openCase: 'Ver caso',
      stackPill: 'Habilidades',
      stackTitle: 'Con qué construyo',
      educationPill: 'Formación',
      educationTitle: 'Estudios y credenciales',
      degreeStatus: 'Bachiller',
      verify: 'Verificar',
      credentialTag: 'Credencial',
      contactPill: 'Contacto',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿En qué estás trabajando?',
      intro:
        'Si tienes un proyecto, una vacante o un problema técnico concreto, cuéntame el contexto. Respondo normalmente en 24–48 horas.',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      subjectPlaceholder: 'Rol, proyecto o colaboración',
      messagePlaceholder: 'Cuéntame el contexto, el objetivo y los tiempos…',
      submit: 'Enviar mensaje',
      submitting: 'Enviando…',
      successTitle: 'Mensaje enviado',
      success: 'Gracias por el contexto. Te responderé lo antes posible.',
      errorTitle: 'No se pudo enviar',
      error: 'Puedes intentarlo nuevamente o escribirme directamente por email.',
      configurationMissing: 'Escríbeme directamente por correo o LinkedIn; respondo en 24–48 horas.',
      direct: 'Contacto directo',
      privacy: 'Usaré estos datos únicamente para responder tu mensaje.',
    },
    footer: {
      statement: 'IA aplicada, full stack y automatización sin más complejidad de la necesaria.',
      rights: 'Todos los derechos reservados.',
      built: 'Construido con React, pre-render y atención al detalle.',
    },
    project: {
      back: 'Volver a los casos',
      overview: 'Vista general',
      problem: 'El problema',
      constraints: 'Condiciones del proyecto',
      decisions: 'Decisiones de trabajo',
      outcomes: 'Resultado documentado',
      stack: 'Tecnología',
      evidence: 'Vista del sistema',
      repository: 'Ver código',
      demo: 'Abrir demo',
      next: 'Siguiente caso',
      discuss: '¿Tienes un reto parecido?',
      discussCta: 'Conversemos',
    },
    notFound: {
      eyebrow: '404',
      title: 'Esta ruta no forma parte del sistema.',
      copy: 'Puedes volver al inicio o explorar uno de los casos publicados.',
      cta: 'Volver al inicio',
    },
  },
  en: {
    localeName: 'English',
    alternateLocale: 'ES',
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navigation: 'Primary navigation',
    nav: [
      { label: 'About', hash: 'about' },
      { label: 'Experience', hash: 'experience' },
      { label: 'Projects', hash: 'work' },
      { label: 'Skills', hash: 'stack' },
      { label: 'Education', hash: 'education' },
      { label: 'Contact', hash: 'contact' },
    ],
    contactCta: 'Let’s talk',
    hero: {
      eyebrow: 'Full Stack & AI Developer in Lima',
      title: 'I’m Adrián. I build AI-powered software people use every day.',
      intro:
        'I build full stack applications and bring generative AI into real business processes: LangGraph agents, RAG, and Python automation on top of Next.js, Node.js, and SQL. What I build is in use, and I measure it.',
      primary: 'Explore case studies',
      secondary: 'Start a conversation',
      availability: 'Open to hybrid or remote roles',
      locationLabel: 'Based in',
      proof: [
        ['Agents + RAG', 'AI in production'],
        ['Next.js + Node', 'Business apps'],
        ['Python + SQL', 'Data and automation'],
      ],
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Projects that show how I work.',
      intro:
        'Systems in real use, not styling exercises. Each case explains the problem, constraints, and decisions I made with the information available.',
      open: 'Open case study',
      caseLabel: 'Case',
    },
    profile: {
      eyebrow: 'Profile',
      title: 'I care about software that solves a real problem.',
      intro:
        'I start by understanding the business process: who uses it, where time is lost, and what cannot fail. Then I build the simplest solution that solves it.',
      paragraphs: [
        'I am a software engineer (UPC, top 10% of class). Since July 2023 I have been building business and AI applications for an importer in Lima: assistants with agents and RAG, a mobile quoting app, report automation, and a new ERP rollout.',
        'I use AI where it adds value and deterministic code where accuracy matters: Python and SQL do the math, the model interprets and explains, and a person approves what matters. I build with Claude Code and Codex, with automated tests and CI/CD.',
      ],
      principles: [
        ['AI with control', 'Reproducible calculations, traces, and human review before acting.'],
        ['Measurable impact', 'Tools people use every day, with times that can be compared.'],
        ['A handoff without mystery', 'Architecture and decisions that do not depend on one person.'],
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Applied experience.',
      intro:
        'Since 2023 in the IT team of an importer: I started with the ERP and automation, moved into web development, and now build AI-powered business applications.',
    },
    stack: {
      eyebrow: 'Working stack',
      title: 'What I use to build.',
      intro:
        'A compact stack for bringing AI into real processes, building complete applications, and keeping data clean.',
    },
    credentials: {
      eyebrow: 'Credentials',
      title: 'Learning backed by public evidence.',
      intro: 'Only credentials that can be verified through a certificate or public record are displayed.',
      open: 'View certificate',
    },
    home: {
      available: 'Available · hybrid or remote',
      firstName: 'Adrián',
      lastName: 'Rubio Calixto',
      roles: ['Full Stack & AI Developer', 'LangGraph agents and RAG', 'Next.js · Node.js · Python'],
      badgeValue: '3 years',
      badgeLabel: 'building software in real use',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      contactMe: 'Contact me',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      techStrip: 'Technologies I work with',
      aboutPill: 'About',
      aboutTitle: 'Full Stack Developer with applied AI',
      aboutLead: 'Software engineer (UPC, top 10% of class) who builds business applications and connects them to generative AI.',
      stats: [
        ['3', 'years in development'],
        ['7', 'documented projects'],
        ['4', 'verifiable credentials'],
      ],
      experiencePill: 'Experience',
      experienceTitle: 'Where I have worked',
      current: 'Current',
      workPill: 'Projects',
      workTitle: 'Featured work',
      openCase: 'View case study',
      stackPill: 'Skills',
      stackTitle: 'What I build with',
      educationPill: 'Education',
      educationTitle: 'Studies and credentials',
      degreeStatus: 'Bachelor',
      verify: 'Verify',
      credentialTag: 'Credential',
      contactPill: 'Contact',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'What are you working on?',
      intro:
        'If you have a project, an open role, or a concrete technical problem, share the context. I usually reply within 24–48 hours.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      subjectPlaceholder: 'Role, project, or collaboration',
      messagePlaceholder: 'Share the context, goal, and timing…',
      submit: 'Send message',
      submitting: 'Sending…',
      successTitle: 'Message sent',
      success: 'Thank you for the context. I will get back to you as soon as possible.',
      errorTitle: 'Message not sent',
      error: 'Please try again or contact me directly by email.',
      configurationMissing: 'Write to me directly by email or LinkedIn; I usually reply within 24–48 hours.',
      direct: 'Direct contact',
      privacy: 'I will only use this information to reply to your message.',
    },
    footer: {
      statement: 'Applied AI, full stack, and automation without unnecessary complexity.',
      rights: 'All rights reserved.',
      built: 'Built with React, pre-rendering, and attention to detail.',
    },
    project: {
      back: 'Back to case studies',
      overview: 'Overview',
      problem: 'The problem',
      constraints: 'Project conditions',
      decisions: 'Working decisions',
      outcomes: 'Documented outcome',
      stack: 'Technology',
      evidence: 'System view',
      repository: 'View code',
      demo: 'Open demo',
      next: 'Next case',
      discuss: 'Working on a similar challenge?',
      discussCta: 'Let’s talk',
    },
    notFound: {
      eyebrow: '404',
      title: 'This route is not part of the system.',
      copy: 'Return home or explore one of the published case studies.',
      cta: 'Return home',
    },
  },
};

/** @type {ExperienceItem[]} */
export const experienceItems = [
  {
    period: '2026 – Hoy',
    current: true,
    stack: ['LangGraph', 'OpenAI API', 'pgvector', 'Next.js', 'Node.js', 'MySQL', 'Python', 'Odoo'],
    content: {
      es: {
        title: 'Desarrollador Full Stack & IA',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'Aplicaciones de negocio con IA generativa en uso diario, sobre el ERP de la empresa.',
        highlights: [
          'PumpyIA: asistente con agente en LangGraph, function calling y RAG, en uso por la gerencia y el área contable.',
          'Cotizador móvil para los 6 vendedores: 120+ cotizaciones al día.',
          'Co-lidero la implementación de Odoo como nuevo ERP (salida a producción programada para el 14/12/2026).',
        ],
      },
      en: {
        title: 'Full Stack & AI Developer',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'Business applications with generative AI in daily use, built on top of the company ERP.',
        highlights: [
          'PumpyIA: an assistant with a LangGraph agent, function calling, and RAG, used by management and the accounting team.',
          'Mobile quoting app for all 6 sales reps: 120+ quotes a day.',
          'Co-leading the Odoo rollout as the new ERP (go-live scheduled for 12/14/2026).',
        ],
      },
    },
  },
  {
    period: '2025 – 2026',
    stack: ['Next.js', 'React', 'Vite', 'Tailwind', 'WooCommerce', 'SEO'],
    content: {
      es: {
        title: 'Desarrollo web y análisis de sistemas',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'Sitios del grupo empresarial y selección del nuevo ERP.',
        highlights: [
          'Desarrollé solo los sitios de SAHM Parts y Grupo NBG Import.',
          'Renové la web de CST Tires Perú: Speed Index de 2.6 s a 1.8 s.',
          'Lideré el levantamiento de requerimientos con 6 áreas para reemplazar el ERP (se eligió Odoo).',
        ],
      },
      en: {
        title: 'Web development and systems analysis',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'Websites for the business group and selection of the new ERP.',
        highlights: [
          'Built the SAHM Parts and Grupo NBG Import websites on my own.',
          'Rebuilt the CST Tires Perú website: Speed Index from 2.6 s to 1.8 s.',
          'Led requirements gathering with 6 departments to replace the ERP (Odoo was chosen).',
        ],
      },
    },
  },
  {
    period: '2023 – 2024',
    stack: ['ERP HDSOFT', 'cPanel', 'SQL', 'Automatización'],
    content: {
      es: {
        title: 'ERP y automatización',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'Soporte funcional del ERP, accesos e infraestructura de correo, con mejoras automatizadas.',
        highlights: [
          'Automatización en guías de remisión: de 3-10 min a 1-2 min por guía.',
          'Configuración de módulos y capacitación de usuarios del ERP.',
          'Administración de ~100 cuentas de correo corporativo en 2 servidores.',
        ],
      },
      en: {
        title: 'ERP and automation',
        context: 'NBG Importaciones / CST Tires Perú',
        summary: 'ERP functional support, access management, and email infrastructure, with automated improvements.',
        highlights: [
          'Dispatch-guide automation: from 3-10 min to 1-2 min per guide.',
          'ERP module configuration and user training.',
          'Managed ~100 corporate email accounts across 2 servers.',
        ],
      },
    },
  },
  {
    period: '2020 – 2026',
    education: true,
    stack: ['UML / C4', 'Java', 'PyTorch'],
    content: {
      es: {
        title: 'Bachiller en Ingeniería de Software',
        context: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        summary: 'Décimo superior. Título profesional en curso con la tesis CXR Classifier.',
        highlights: ['Arquitectura de software (UML, C4).', 'Desarrollo backend y web.', 'Deep learning aplicado (tesis).'],
      },
      en: {
        title: 'Bachelor’s degree in Software Engineering',
        context: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        summary: 'Top 10% of class. Professional title in progress with the CXR Classifier thesis.',
        highlights: ['Software architecture (UML, C4).', 'Backend and web development.', 'Applied deep learning (thesis).'],
      },
    },
  },
];

export const skillGroups = [
  {
    number: '01',
    code: 'IA',
    content: { es: 'IA aplicada', en: 'Applied AI' },
    skills: ['LLMs (OpenAI API)', 'LangGraph', 'Function calling', 'RAG / pgvector', 'Human-in-the-Loop'],
  },
  {
    number: '02',
    code: 'WEB',
    content: { es: 'Full stack', en: 'Full stack' },
    skills: ['TypeScript', 'React / Next.js', 'Node.js', 'Java / Spring Boot', 'MySQL / PostgreSQL'],
  },
  {
    number: '03',
    code: 'PY',
    content: { es: 'Python y datos', en: 'Python and data' },
    skills: ['Python', 'FastAPI', 'PyTorch', 'ETL', 'Power BI'],
  },
  {
    number: '04',
    code: 'OPS',
    content: { es: 'Entrega y herramientas', en: 'Delivery and tooling' },
    skills: ['Git', 'Docker', 'GitHub Actions', 'Google Cloud Run', 'Claude Code'],
  },
];

// Only credentials with a public verification URL are listed.
/** @type {Credential[]} */
export const credentials = [
  {
    name: { es: 'Scrum Fundamentals Certified (SFC)', en: 'Scrum Fundamentals Certified (SFC)' },
    issuer: 'SCRUMstudy',
    year: '2024',
    certificateUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1057490',
  },
  {
    name: { es: 'Generative AI Fundamentals (especialización)', en: 'Generative AI Fundamentals (specialization)' },
    issuer: 'IBM · Coursera',
    year: '2026',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/specialization/PPYIYJ9E4JKH',
  },
  {
    name: { es: 'Databases for Data Scientists (especialización)', en: 'Databases for Data Scientists (specialization)' },
    issuer: 'University of Colorado Boulder · Coursera',
    year: '2025',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/specialization/I8H1XJRFPFLD',
  },
  {
    name: { es: 'Good with Words: Writing and Editing (especialización, en inglés)', en: 'Good with Words: Writing and Editing (specialization)' },
    issuer: 'University of Michigan · Coursera',
    year: '2026',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/specialization/HIYD8TGM8I2C',
  },
];

/** @type {ProjectCase[]} */
export const projectCases = [
  {
    id: 'pumpyia',
    image: { src: asset('/projects/pumpyia.svg'), alt: { es: 'Ilustración del asistente: pasos del agente, resultado y revisión humana (datos ficticios)', en: 'Illustration of the assistant: agent steps, result, and human review (fictitious data)' } },
    slugs: { es: 'pumpyia', en: 'pumpyia' },
    year: '2026',
    accent: 'cyan',
    stack: ['OpenAI API', 'LangGraph', 'Function calling', 'pgvector', 'Python', 'SQL'],
    diagram: {
      es: ['Pregunta', 'Agente', 'Herramientas + ERP', 'Revisión humana'],
      en: ['Question', 'Agent', 'Tools + ERP', 'Human review'],
    },
    metrics: [
      { value: '1-2 min', label: { es: 'por reporte, antes horas o días', en: 'per report, previously hours or days' } },
      { value: '2', label: { es: 'áreas en uso: gerencia y contabilidad', en: 'teams using it: management and accounting' } },
    ],
    links: { repositoryUrl: null, demoUrl: null },
    content: {
      es: {
        eyebrow: 'IA generativa · Agentes',
        title: 'PumpyIA',
        summary: 'Asistente con IA generativa que responde preguntas de negocio consultando el ERP, con un módulo contable que investiga y propone, pero deja la decisión al contador.',
        role: 'Diseño y desarrollo (con revisión del contador general)',
        status: 'En uso · código privado',
        problem: 'Cada reporte gerencial dependía de otras áreas y tardaba horas o días.',
        constraints: [
          'Los números tenían que ser exactos: un modelo de lenguaje no puede inventar cifras contables.',
          'Datos internos y confidenciales de la empresa.',
          'Usuarios no técnicos que preguntan en lenguaje natural.',
        ],
        decisions: [
          ['Cálculo determinista', 'Python y SQL calculan con reglas reproducibles; el modelo solo interpreta la pregunta y explica los hallazgos.'],
          ['Agente con herramientas', 'Un agente en LangGraph con function calling consulta el ERP y ejecuta verificaciones como la integridad de asientos y la conciliación de saldos.'],
          ['Humano en el ciclo', 'Las propuestas quedan en pausa hasta que el contador las revisa; las investigaciones guardan estado y trazas para retomarlas.'],
        ],
        outcomes: [
          'Reportes de ventas, cuentas por cobrar y rankings en 1-2 minutos.',
          'Envío semanal automático de cuentas por cobrar por vendedor.',
          'RAG con pgvector sobre el manual contable para citar la política que aplica.',
        ],
      },
      en: {
        eyebrow: 'Generative AI · Agents',
        title: 'PumpyIA',
        summary: 'A generative AI assistant that answers business questions by querying the ERP, with an accounting module that investigates and proposes but leaves the decision to the accountant.',
        role: 'Design and development (reviewed by the chief accountant)',
        status: 'In use · private code',
        problem: 'Every management report depended on other teams and took hours or days.',
        constraints: [
          'Numbers had to be exact: a language model cannot invent accounting figures.',
          'Internal, confidential company data.',
          'Non-technical users asking in natural language.',
        ],
        decisions: [
          ['Deterministic math', 'Python and SQL calculate with reproducible rules; the model only interprets the question and explains the findings.'],
          ['Agent with tools', 'A LangGraph agent with function calling queries the ERP and runs checks such as journal integrity and balance reconciliation.'],
          ['Human in the loop', 'Proposals pause until the accountant reviews them; investigations keep state and traces so they can be resumed.'],
        ],
        outcomes: [
          'Sales, receivables, and ranking reports in 1-2 minutes.',
          'Automated weekly email of receivables per sales rep.',
          'RAG with pgvector over the accounting manual to cite the applicable policy.',
        ],
      },
    },
  },
  {
    id: 'cotizador-movil',
    image: { src: asset('/projects/cotizador.svg'), alt: { es: 'Ilustración del cotizador móvil y la aprobación del cliente (datos ficticios)', en: 'Illustration of the mobile quoting app and customer approval (fictitious data)' } },
    slugs: { es: 'cotizador-movil', en: 'mobile-quoting-app' },
    year: '2026',
    accent: 'violet',
    stack: ['Next.js 16', 'React 19', 'Node.js', 'MySQL', 'Vitest'],
    diagram: {
      es: ['Vendedor', 'Cotización', 'Servidor', 'Cliente'],
      en: ['Sales rep', 'Quote', 'Server', 'Customer'],
    },
    metrics: [
      { value: '120+', label: { es: 'cotizaciones al día', en: 'quotes a day' } },
      { value: '2-5 min', label: { es: 'por cotización en campo', en: 'per quote in the field' } },
    ],
    links: { repositoryUrl: null, demoUrl: null },
    content: {
      es: {
        eyebrow: 'Full stack · Ventas',
        title: 'Cotizador móvil',
        summary: 'Aplicación de cotizaciones para que los vendedores en campo coticen al momento, sin esperar a un cotizador fijo en la oficina.',
        role: 'Desarrollo completo en solitario',
        status: 'En uso diario · código privado',
        problem: 'En campo, cotizar significaba esperar 30 minutos o más por el cotizador de la oficina.',
        constraints: [
          'Cada vendedor debía ver solo sus cotizaciones; la gerencia, todas.',
          'Los precios no podían manipularse desde el navegador.',
          'Uso desde el celular, en la calle.',
        ],
        decisions: [
          ['Reglas en el servidor', 'Totales e IGV calculados en el servidor y permisos por identidad validados en cada solicitud.'],
          ['Envío con enlace firmado', 'El cliente recibe por WhatsApp un enlace que vence, aprueba en línea y obtiene el PDF desglosado.'],
          ['Datos controlados', 'Carga de stock y precios por CSV validada y restringida a gerencia, con sesiones firmadas.'],
        ],
        outcomes: [
          'En uso diario por los 6 vendedores, con 120+ cotizaciones al día.',
          'Cotizar en campo toma 2-5 minutos.',
          'Pruebas automatizadas de cálculo, permisos e importación.',
        ],
      },
      en: {
        eyebrow: 'Full stack · Sales',
        title: 'Mobile quoting app',
        summary: 'A quoting app so field sales reps can quote on the spot instead of waiting for a fixed office quoting station.',
        role: 'Built end to end on my own',
        status: 'In daily use · private code',
        problem: 'In the field, quoting meant waiting 30+ minutes for the office quoting station.',
        constraints: [
          'Each rep could see only their own quotes; management could see all of them.',
          'Prices could not be manipulated from the browser.',
          'Used from a phone, out in the field.',
        ],
        decisions: [
          ['Rules on the server', 'Totals and sales tax calculated on the server, with identity-based permissions checked on every request.'],
          ['Signed-link delivery', 'Customers get an expiring link by WhatsApp, approve online, and receive an itemized PDF.'],
          ['Controlled data', 'Validated CSV uploads of stock and prices, restricted to management, with signed sessions.'],
        ],
        outcomes: [
          'In daily use by all 6 sales reps, with 120+ quotes a day.',
          'Quoting in the field takes 2-5 minutes.',
          'Automated tests for calculations, permissions, and imports.',
        ],
      },
    },
  },
  {
    id: 'cxr-classifier',
    image: { src: asset('/projects/cxr-analizar.png'), alt: { es: 'Captura de CXR Classifier: pantalla de nuevo estudio', en: 'CXR Classifier screenshot: new study screen' } },
    slugs: { es: 'cxr-classifier', en: 'cxr-classifier' },
    year: '2026',
    accent: 'amber',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Next.js', 'Docker', 'Google Cloud Run'],
    diagram: {
      es: ['Radiografía', 'Ensemble CNN-ViT', 'Grad-CAM', 'Reporte'],
      en: ['X-ray', 'CNN-ViT ensemble', 'Grad-CAM', 'Report'],
    },
    metrics: [
      { value: '0.8045', label: { es: 'AUC macro en 14 patologías', en: 'macro AUC across 14 pathologies' } },
    ],
    links: { repositoryUrl: 'https://github.com/ZarRubio/cxr-system', demoUrl: null },
    content: {
      es: {
        eyebrow: 'Deep learning · Tesis',
        title: 'CXR Classifier',
        summary: 'Sistema de apoyo diagnóstico que clasifica radiografías de tórax en 14 patologías y explica cada predicción con mapas Grad-CAM.',
        role: 'Tesis de título profesional · autor único',
        status: 'Uso académico',
        problem: 'Una radiografía puede mostrar varias patologías, y el modelo tiene que explicar lo que ve.',
        constraints: [
          'Dataset público NIH ChestX-ray14, multietiqueta y desbalanceado.',
          'Sin calibración clínica ni validación externa: uso académico.',
          'Despliegue reproducible y verificable.',
        ],
        decisions: [
          ['Ensemble híbrido', 'Dos modelos CNN-ViT (DenseNet121 + Vision Transformer) combinados en PyTorch.'],
          ['Explicabilidad', 'Mapas Grad-CAM y reportes PDF para cada estudio.'],
          ['Entrega trazable', 'FastAPI en Google Cloud Run con CI/CD en GitHub Actions y manifiesto SHA-256 de los artefactos del modelo.'],
        ],
        outcomes: [
          'AUC macro de 0.8045 en el conjunto de prueba, reproducido localmente.',
          'Aplicación web con Next.js y autenticación.',
          'Límites de la evaluación documentados con honestidad.',
        ],
      },
      en: {
        eyebrow: 'Deep learning · Thesis',
        title: 'CXR Classifier',
        summary: 'A diagnostic-support system that classifies chest X-rays into 14 pathologies and explains each prediction with Grad-CAM maps.',
        role: 'Professional thesis · sole author',
        status: 'Academic use',
        problem: 'An X-ray can show several pathologies, and the model has to explain what it sees.',
        constraints: [
          'Public NIH ChestX-ray14 dataset, multi-label and imbalanced.',
          'No clinical calibration or external validation: academic use.',
          'Reproducible, verifiable deployment.',
        ],
        decisions: [
          ['Hybrid ensemble', 'Two CNN-ViT models (DenseNet121 + Vision Transformer) combined in PyTorch.'],
          ['Explainability', 'Grad-CAM maps and PDF reports for every study.'],
          ['Traceable delivery', 'FastAPI on Google Cloud Run with CI/CD in GitHub Actions and a SHA-256 manifest of model artifacts.'],
        ],
        outcomes: [
          'Macro AUC of 0.8045 on the test set, reproduced locally.',
          'Web app built with Next.js and authentication.',
          'Evaluation limits documented honestly.',
        ],
      },
    },
  },
  {
    id: 'sahm-parts-nbg',
    image: { src: asset('/projects/sahm-parts.jpg'), alt: { es: 'Captura de la portada de sahmparts.com', en: 'Screenshot of the sahmparts.com home page' } },
    slugs: { es: 'sahm-parts-nbg', en: 'sahm-parts-nbg' },
    year: '2025',
    accent: 'cyan',
    stack: ['Next.js', 'React', 'Tailwind', 'Vite', 'WooCommerce', 'SEO'],
    diagram: {
      es: ['Catálogo', 'Fichas SKU', 'Búsqueda', 'Cotización'],
      en: ['Catalog', 'SKU pages', 'Search', 'Quote'],
    },
    metrics: [
      { value: '-30.8%', label: { es: 'Speed Index en la nueva web de CST Tires', en: 'Speed Index on the new CST Tires site' } },
    ],
    links: { repositoryUrl: 'https://github.com/ZarRubio/sham', demoUrl: 'https://sahmparts.com' },
    content: {
      es: {
        eyebrow: 'Web · E-commerce',
        title: 'SAHM Parts y Grupo NBG Import',
        summary: 'Sitios web del grupo empresarial: el catálogo de repuestos SAHM Parts, el sitio corporativo de Grupo NBG Import y la renovación de la web de CST Tires Perú.',
        role: 'Desarrollo en solitario',
        status: 'En línea',
        problem: 'Las marcas del grupo no tenían web propia y la de CST Tires era lenta.',
        constraints: [
          'Catálogos grandes con categorías, SKUs y stock.',
          'Cotización directa por WhatsApp, sin pasarela de pago.',
          'Mantener la operación comercial sin interrupciones.',
        ],
        decisions: [
          ['Catálogo primero', 'Estructura por categorías, fichas por SKU, stock y búsqueda antes de la capa visual.'],
          ['Stack por necesidad', 'Next.js para SAHM Parts, React con Vite para el sitio corporativo y WooCommerce para CST Tires.'],
          ['SEO técnico', 'Robots, sitemap y metadatos para que los sitios se indexen bien.'],
        ],
        outcomes: [
          'sahmparts.com y gruponbgimport.com en línea.',
          'Web de CST Tires renovada: Speed Index de 2.6 s a 1.8 s.',
          'Cotización por WhatsApp desde cada ficha de producto.',
        ],
      },
      en: {
        eyebrow: 'Web · E-commerce',
        title: 'SAHM Parts and Grupo NBG Import',
        summary: 'Websites for the business group: the SAHM Parts spare-parts catalog, the Grupo NBG Import corporate site, and a rebuild of the CST Tires Perú website.',
        role: 'Built on my own',
        status: 'Live',
        problem: 'The group’s brands had no website of their own, and the CST Tires site was slow.',
        constraints: [
          'Large catalogs with categories, SKUs, and stock.',
          'Direct quotes through WhatsApp, with no payment gateway.',
          'Keep commercial operations running without interruption.',
        ],
        decisions: [
          ['Catalog first', 'Categories, SKU pages, stock, and search before the visual layer.'],
          ['Stack by need', 'Next.js for SAHM Parts, React with Vite for the corporate site, and WooCommerce for CST Tires.'],
          ['Technical SEO', 'Robots, sitemap, and metadata so the sites index well.'],
        ],
        outcomes: [
          'sahmparts.com and gruponbgimport.com are live.',
          'CST Tires site rebuilt: Speed Index from 2.6 s to 1.8 s.',
          'WhatsApp quotes from every product page.',
        ],
      },
    },
  },
  {
    id: 'apfel-store',
    image: { src: asset('/projects/apfel-store.jpg'), alt: { es: 'Captura de la portada de Apfel Store', en: 'Screenshot of the Apfel Store home page' } },
    slugs: { es: 'apfel-store', en: 'apfel-store' },
    year: '2026',
    accent: 'violet',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind', 'Supabase'],
    diagram: {
      es: ['Catálogo', 'Rutas + SEO', 'Ficha', 'WhatsApp'],
      en: ['Catalog', 'Routes + SEO', 'Product page', 'WhatsApp'],
    },
    metrics: [],
    links: { repositoryUrl: 'https://github.com/ZarRubio/Apfel-Store', demoUrl: 'https://apfelstore.netlify.app' },
    content: {
      es: {
        eyebrow: 'Freelance · E-commerce',
        title: 'Apfel Store',
        summary: 'Frontend de e-commerce de smartphones para un cliente, con compra por WhatsApp y un catálogo que genera sus propias rutas, sitemap y metadatos.',
        role: 'Desarrollo frontend (encargo de cliente)',
        status: 'Freelance · en línea',
        problem: 'El cliente necesitaba vender por WhatsApp con un catálogo rápido y fácil de mantener.',
        constraints: [
          'Sin pasarela de pago: la compra se cierra por WhatsApp.',
          'Catálogo que crecerá sin tocar el código de cada página.',
          'Datos que más adelante vivirán en una base de datos.',
        ],
        decisions: [
          ['El catálogo manda', 'Rutas, sitemap y metadatos se generan desde el catálogo, no a mano.'],
          ['Datos desacoplados', 'Capa de datos separada, lista para conectarse a Supabase.'],
          ['Imágenes livianas', 'Pipeline que normaliza las imágenes a WebP.'],
        ],
        outcomes: [
          'Next.js 16, React 19 y TypeScript estricto.',
          'Botones de compra medibles con GA4 / GTM.',
          'Base lista para pasar del catálogo estático a Supabase.',
        ],
      },
      en: {
        eyebrow: 'Freelance · E-commerce',
        title: 'Apfel Store',
        summary: 'A smartphone e-commerce frontend for a client, with WhatsApp checkout and a catalog that generates its own routes, sitemap, and metadata.',
        role: 'Frontend development (client project)',
        status: 'Freelance · live',
        problem: 'The client needed to sell through WhatsApp with a fast catalog that is easy to maintain.',
        constraints: [
          'No payment gateway: purchases close through WhatsApp.',
          'A catalog that grows without editing each page.',
          'Data that will later live in a database.',
        ],
        decisions: [
          ['Catalog first', 'Routes, sitemap, and metadata are generated from the catalog, not by hand.'],
          ['Decoupled data', 'A separate data layer, ready to connect to Supabase.'],
          ['Light images', 'A pipeline that normalizes images to WebP.'],
        ],
        outcomes: [
          'Next.js 16, React 19, and strict TypeScript.',
          'Purchase buttons trackable with GA4 / GTM.',
          'Ready to move from a static catalog to Supabase.',
        ],
      },
    },
  },
  {
    id: 'mesa-de-ayuda',
    image: { src: asset('/projects/incidencias.svg'), alt: { es: 'Ilustración de un tablero de tickets con máquina de estados y auditoría (datos ficticios)', en: 'Illustration of a ticket board with a state machine and audit log (fictitious data)' } },
    slugs: { es: 'mesa-de-ayuda', en: 'helpdesk-system' },
    year: '2026',
    accent: 'amber',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'GitHub Actions'],
    diagram: {
      es: ['Usuario', 'JWT', 'Estados', 'Auditoría'],
      en: ['User', 'JWT', 'States', 'Audit'],
    },
    metrics: [],
    links: { repositoryUrl: 'https://github.com/ZarRubio/practice1', demoUrl: null },
    content: {
      es: {
        eyebrow: 'Full stack · Java',
        title: 'Sistema de Mesa de Ayuda',
        summary: 'Aplicación full stack para registrar, asignar y cerrar incidencias, con seguridad JWT, roles y una máquina de estados validada en la API.',
        role: 'Desarrollo full stack',
        status: 'Proyecto personal · código público',
        problem: 'Un ticket no debería poder saltar de "abierto" a "cerrado" ni cambiar sin dejar rastro.',
        constraints: [
          'Sesiones seguras que se puedan revocar.',
          'Permisos por rol guardados en la base de datos.',
          'Despliegue reproducible con contenedores.',
        ],
        decisions: [
          ['Estados en la API', 'Las transiciones inválidas responden 400; la regla vive en el backend, no en la interfaz.'],
          ['Sesiones revocables', 'JWT con refresh token rotativo y revocación.'],
          ['Todo con rastro', 'Auditoría de cada cambio de estado y pruebas de integración de seguridad.'],
        ],
        outcomes: [
          'React + Vite, Spring Boot y MySQL con Docker Compose.',
          'CI en GitHub Actions y API documentada con Swagger.',
          'Panel de administración de usuarios y roles.',
        ],
      },
      en: {
        eyebrow: 'Full stack · Java',
        title: 'Helpdesk System',
        summary: 'A full stack app to log, assign, and close incidents, with JWT security, roles, and a state machine validated in the API.',
        role: 'Full stack development',
        status: 'Personal project · public code',
        problem: 'A ticket should never jump from "open" to "closed" or change without leaving a trace.',
        constraints: [
          'Secure sessions that can be revoked.',
          'Role permissions stored in the database.',
          'Reproducible deployment with containers.',
        ],
        decisions: [
          ['States in the API', 'Invalid transitions return 400; the rule lives in the backend, not the UI.'],
          ['Revocable sessions', 'JWT with rotating refresh tokens and revocation.'],
          ['Everything traced', 'An audit log for every state change, plus security integration tests.'],
        ],
        outcomes: [
          'React + Vite, Spring Boot, and MySQL with Docker Compose.',
          'CI on GitHub Actions and an API documented with Swagger.',
          'Admin panel for users and roles.',
        ],
      },
    },
  },
  {
    id: 'fitsense',
    image: { src: asset('/projects/fitsense-landing.jpg'), alt: { es: 'Captura de la landing page de FitSense', en: 'Screenshot of the FitSense landing page' } },
    slugs: { es: 'fitsense', en: 'fitsense' },
    year: '2025',
    accent: 'cyan',
    stack: ['Node.js', 'Express', 'MySQL', 'LLM (Replicate)', 'OpenAPI'],
    diagram: {
      es: ['Perfil', 'MySQL', 'Prompt', 'LLM'],
      en: ['Profile', 'MySQL', 'Prompt', 'LLM'],
    },
    metrics: [],
    links: { repositoryUrl: 'https://github.com/FitSense-Emergentes-14653', demoUrl: 'https://fitsense-emergentes-14653.github.io/Landing-Page/' },
    content: {
      es: {
        eyebrow: 'IA · Proyecto UPC',
        title: 'FitSense',
        summary: 'App de fitness con un chatbot que genera rutinas según el nivel, el equipo y los objetivos de cada persona, recuperando ejercicios de la base de datos antes de llamar al modelo.',
        role: 'Lógica del chatbot (en pareja) y producto · equipo de 5',
        status: 'Proyecto académico en equipo',
        problem: 'Un LLM solo puede inventar ejercicios; las rutinas tenían que salir de un catálogo real.',
        constraints: [
          'Equipo de 5 con app móvil, backend y servicio de chat separados.',
          'Rutinas ajustadas a nivel, equipo, edad y músculos objetivo.',
          'Sin base vectorial: la recuperación es sobre SQL.',
        ],
        decisions: [
          ['Recuperar antes de generar', 'El servicio busca y puntúa ejercicios en MySQL y se los pasa al modelo.'],
          ['Pair programming', 'Desarrollé la lógica del chatbot en pareja con otro integrante.'],
          ['API documentada', 'Especificación OpenAPI y Swagger UI para el servicio de chat.'],
        ],
        outcomes: [
          'Chatbot que genera rutinas a partir del catálogo real.',
          'Principal contribuidor del informe: entrevistas, user personas y escenarios.',
          'Servicio de chat en Node.js/Express con un LLM vía Replicate.',
        ],
      },
      en: {
        eyebrow: 'AI · University project',
        title: 'FitSense',
        summary: 'A fitness app with a chatbot that builds routines from each person’s level, equipment, and goals, retrieving exercises from the database before calling the model.',
        role: 'Chatbot logic (pair programming) and product · team of 5',
        status: 'Team academic project',
        problem: 'An LLM alone can invent exercises; routines had to come from a real catalog.',
        constraints: [
          'A team of 5 with separate mobile app, backend, and chat service.',
          'Routines tailored to level, equipment, age, and target muscles.',
          'No vector database: retrieval runs on SQL.',
        ],
        decisions: [
          ['Retrieve before generating', 'The service searches and scores exercises in MySQL and passes them to the model.'],
          ['Pair programming', 'I built the chatbot logic in a pair with another team member.'],
          ['Documented API', 'OpenAPI spec and Swagger UI for the chat service.'],
        ],
        outcomes: [
          'A chatbot that builds routines from the real catalog.',
          'Main contributor to the project report: interviews, user personas, and scenarios.',
          'Chat service in Node.js/Express with an LLM via Replicate.',
        ],
      },
    },
  },
];

export function getDictionary(locale = DEFAULT_LOCALE) {
  return dictionary[locale] || dictionary[DEFAULT_LOCALE];
}

export function getHomePath(locale = DEFAULT_LOCALE) {
  return locale === 'en' ? '/en' : '/';
}

export function getProjectPath(project, locale = DEFAULT_LOCALE) {
  return locale === 'en' ? `/en/projects/${project.slugs.en}` : `/proyectos/${project.slugs.es}`;
}

export function getProjectBySlug(locale, slug) {
  const safeLocale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  return projectCases.find((project) => project.slugs[safeLocale] === slug) || null;
}

export function getAlternatePath(pathname, targetLocale) {
  const sourceLocale = pathname.startsWith('/en') ? 'en' : 'es';
  const prefix = sourceLocale === 'en' ? '/en/projects/' : '/proyectos/';

  if (pathname.startsWith(prefix)) {
    const slug = pathname.slice(prefix.length).split('/')[0];
    const project = getProjectBySlug(sourceLocale, slug);
    if (project) return getProjectPath(project, targetLocale);
  }

  return getHomePath(targetLocale);
}

export function getPrerenderPaths() {
  return [
    '/',
    '/en',
    ...projectCases.flatMap((project) => [getProjectPath(project, 'es'), getProjectPath(project, 'en')]),
  ];
}

export const techStrip = [
  'LangGraph', 'OpenAI API', 'RAG', 'pgvector', 'Python', 'FastAPI', 'TypeScript', 'Next.js',
  'React', 'Node.js', 'MySQL', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Cloud Run', 'Power BI',
];
