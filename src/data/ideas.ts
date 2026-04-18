export type AssistantIdea = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
  category: "estrategia" | "ejecucion" | "conversion";
  featured?: boolean;
};

export const ideas: AssistantIdea[] = [
  {
    id: "sistema-maestro-ia",
    name: "Sistema Maestro IA",
    subtitle: "ORQUESTADOR DE ASISTENTES",
    description:
      "Organiza asistentes especializados, divide objetivos en pasos y coordina ejecución, automatización y monetización.",
    icon: "🧠",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-67f34188dde481918b0ce47fcc89b1e0-sistema-maestro-ia-orquestador-de-asistentes",
    category: "estrategia",
    featured: true,
  },
  {
    id: "auditor-ecosistema",
    name: "Auditor Ecosistema",
    subtitle: "AUDITOR DE NEGOCIO DIGITAL",
    description:
      "Analiza ecosistemas, detecta duplicidades, prioriza acciones y decide dónde enfocar esfuerzo para generar más ingresos.",
    icon: "📊",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69d7f4f9334081918f8fd1a1794a1d81-auditor-director-del-ecosistema",
    category: "estrategia",
  },
  {
    id: "bizviable",
    name: "BizViable",
    subtitle: "ANALISTA DE VIABILIDAD DIGITAL",
    description:
      "Evalúa ideas de negocio, apps, SaaS, webs y productos digitales para detectar potencial real, riesgos y siguiente paso.",
    icon: "💼",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e2de6daf5c8191807fe12f71832185-bizviable",
    category: "estrategia",
  },
  {
    id: "promptmaker-pro",
    name: "PromptMaker Pro",
    subtitle: "ARQUITECTO DE PROMPTS IA",
    description:
      "Crea, audita y optimiza prompts de alto nivel para GPTs y asistentes orientados a IA aplicada, automatización y negocio digital.",
    icon: "🧩",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e2c6497a308191b95e2555542730d4-promptmaker-pro",
    category: "ejecucion",
    featured: true,
  },
  {
    id: "autoflow-pro",
    name: "AutoFlow Pro",
    subtitle: "EXPERTO EN AUTOMATIZACIÓN",
    description:
      "Detecta tareas repetitivas, diseña sistemas, propone flujos e integra herramientas para ahorrar tiempo y escalar procesos.",
    icon: "⚙️",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e2d1ac72448191bb9394378260427a-autoflow-pro",
    category: "ejecucion",
  },
  {
    id: "reparador-html-seo",
    name: "Reparador HTML SEO",
    subtitle: "ESPECIALISTA TÉCNICO HTML",
    description:
      "Corrige páginas HTML rotas, arregla rutas, encoding, imágenes y estructura sin romper SEO ni modificar el contenido útil.",
    icon: "🛠️",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e14730aef48191a49d42cdf3a31c9e-reparador-html-seo-especialista-tecnico-html",
    category: "ejecucion",
  },
  {
    id: "funnel",
    name: "Funnel",
    subtitle: "ANALISTA DE FUNNELS DE CONVERSIÓN",
    description:
      "Revisa embudos, detecta fugas, mejora pasos clave y optimiza la conversión desde la captación hasta la venta.",
    icon: "📈",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e2db82f4948191a0cccc066f8e5878-funnel",
    category: "conversion",
    featured: true,
  },
  {
    id: "pdf-monetizador-ia",
    name: "PDF Monetizador IA",
    subtitle: "CREADOR DE MICROPRODUCTOS VENDIBLES",
    description:
      "Diseña guías, PDFs y ebooks visuales listos para Canva, pensados para conversión, valor percibido y venta digital.",
    icon: "📕",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e21bb36f748191af4f43465f5c124a-pdf-monetizadoria-creador-microproductos-vendibles",
    category: "conversion",
  },
  {
    id: "linguapro-ai",
    name: "LinguaPro AI",
    subtitle: "TRADUCTOR MULTILINGÜE PROFESIONAL",
    description:
      "Traduce entre varios idiomas adaptando tono, intención y contexto para emails, webs, mensajes, redes y textos comerciales.",
    icon: "🌍",
    cta: "Habla con el asistente",
    href: "https://chatgpt.com/g/g-69e2d6839d3c8191baaf536c1079c67a-linguapro-ai",
    category: "conversion",
  },
];
