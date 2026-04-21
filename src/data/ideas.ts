export type IdeaCategory = "estrategia" | "ejecucion" | "conversion";

export interface Idea {
  id: string;
  title: string;
  steps: string[];
  tools: string[];
  isPremium: boolean;
  category: IdeaCategory;
  featured?: boolean;
  ctaUrl?: string;
  ctaText?: string;
  microText?: string;
  disclaimerText?: string;
  disclaimerLinkText?: string;
}

const featuredIdeas: Omit<Idea, "id">[] = [
  {
    title: "🚀 SistemaMaestroIA — crea tu sistema de asistentes con IA",
    steps: [
      "Diseña una estructura de asistentes conectados para tu negocio",
      "Organiza ejecución, control y crecimiento desde un solo sistema",
      "Convierte ideas sueltas en un sistema real con enfoque comercial",
    ],
    tools: ["SistemaMaestroIA", "Asistentes IA", "Automatización"],
    isPremium: true,
    category: "estrategia",
    featured: true,
    ctaUrl: "https://sistemamaestroia.com",
    ctaText: "Abrir SistemaMaestroIA",
    microText: "👉 Entra al núcleo principal del ecosistema",
    disclaimerText:
      "Accede al sistema principal para crear y organizar asistentes con IA en",
    disclaimerLinkText: "SistemaMaestroIA",
  },
  {
    title: "💸 VendeConIA — encuentra oportunidades y conviértelas en ventas",
    steps: [
      "Detecta productos o ideas con potencial comercial",
      "Convierte oportunidades en contenido y propuesta de venta",
      "Usa un flujo rápido para monetizar sin perder tiempo",
    ],
    tools: ["VendeConIA", "Contenido", "Monetización"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl: "https://vendeconia.org",
    ctaText: "Abrir VendeConIA",
    microText: "👉 Activa una ruta rápida de monetización",
    disclaimerText: "Explora herramientas y flujos de venta inmediatos en",
    disclaimerLinkText: "VendeConIA",
  },
  {
    title: "🧭 Director de Activos Digitales — ordena tu ecosistema",
    steps: [
      "Define el papel exacto de cada activo dentro del sistema",
      "Detecta solapamientos, dispersión y activos mal colocados",
      "Aclara qué empuja a qué y qué debe monetizar primero",
    ],
    tools: ["GPT", "Ecosistema", "Dirección"],
    isPremium: true,
    category: "estrategia",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e5fd5fb29c8191a9ea3359c794f482-director-de-activos-digitales",
    ctaText: "Abrir Director de Activos",
    microText: "👉 Dirección estratégica del ecosistema",
    disclaimerText: "Usa este GPT para ordenar activos, rutas y prioridades en",
    disclaimerLinkText: "Director de Activos Digitales",
  },
  {
    title: "📊 Lancelot — Director de Métricas y Conversión",
    steps: [
      "Lee métricas, tráfico, leads y señales de conversión",
      "Detecta qué activo merece empuje y cuál necesita corrección",
      "Convierte datos en decisiones ejecutables sin ruido",
    ],
    tools: ["Métricas", "Conversión", "Análisis"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e434065ac481918ea4ee5ee97efd48-lancelot-director-de-metricas-y-conversion",
    ctaText: "Abrir Lancelot",
    microText: "👉 Prioriza con datos y conversión",
    disclaimerText: "Usa este GPT para revisar métricas y foco de crecimiento en",
    disclaimerLinkText: "Lancelot",
  },
  {
    title: "🛠️ Project Manager Digital — ejecución y seguimiento",
    steps: [
      "Convierte ideas y decisiones en tareas cerradas",
      "Ordena ejecución paso a paso sin dispersarte",
      "Define siguiente acción exacta y criterio de cierre",
    ],
    tools: ["Ejecución", "Seguimiento", "Organización"],
    isPremium: false,
    category: "ejecucion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e3212acbc08191b8d637cc6081310c-project-manager-digital-ejecucion",
    ctaText: "Abrir Project Manager",
    microText: "👉 Baja estrategia a ejecución real",
    disclaimerText: "Usa este GPT para secuenciar tareas y cerrar rondas en",
    disclaimerLinkText: "Project Manager Digital",
  },
  {
    title: "🎬 ViralScript Pro — guiones virales para redes",
    steps: [
      "Genera hooks y estructuras que captan atención rápido",
      "Convierte ideas en guiones de vídeo más virales",
      "Ajusta tono, CTA y ritmo para redes sociales",
    ],
    tools: ["Guiones", "Vídeo", "Viralidad"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e49a3c819481918089e333ef99d1e6-viralscript-pro",
    ctaText: "Abrir ViralScript Pro",
    microText: "👉 Convierte ideas en guiones que enganchan",
    disclaimerText: "Usa este GPT para preparar guiones virales en",
    disclaimerLinkText: "ViralScript Pro",
  },
  {
    title: "🏗️ Arquitecto Operativo — ordena estructura y prioridades",
    steps: [
      "Define estructura operativa sin abrir frentes inútiles",
      "Aclara qué hacer primero y qué no tocar todavía",
      "Convierte caos en una ruta de trabajo limpia",
    ],
    tools: ["Arquitectura", "Prioridad", "Sistema"],
    isPremium: true,
    category: "estrategia",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e3e10cdc748191b639dd17d10bff05-arquitecto-operativo",
    ctaText: "Abrir Arquitecto Operativo",
    microText: "👉 Orden estructural y foco operativo",
    disclaimerText: "Usa este GPT para ordenar estructura y decisiones en",
    disclaimerLinkText: "Arquitecto Operativo",
  },
  {
    title: "🌐 LinguaPro AI — traducción y adaptación inteligente",
    steps: [
      "Traduce textos con intención comercial y claridad",
      "Adapta copies, páginas y mensajes a otros idiomas",
      "Mantén tono, CTA y sentido sin sonar robótico",
    ],
    tools: ["Traducción", "Adaptación", "Copy"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e2d6839d3c8191baaf536c1079c67a-linguapro-ai",
    ctaText: "Abrir LinguaPro AI",
    microText: "👉 Traduce y adapta sin perder intención",
    disclaimerText: "Usa este GPT para traducción y adaptación en",
    disclaimerLinkText: "LinguaPro AI",
  },
  {
    title: "🧲 Funnel — estructura de captación y conversión",
    steps: [
      "Diseña el recorrido correcto desde visita hasta acción",
      "Aclara CTA, lead magnet y siguiente paso",
      "Evita embudos confusos y mejora la conversión",
    ],
    tools: ["Funnel", "CTA", "Captación"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e2db82f4948191a0cccc066f8e5878-funnel",
    ctaText: "Abrir Funnel",
    microText: "👉 Ordena captación y conversión",
    disclaimerText: "Usa este GPT para diseñar embudos simples y claros en",
    disclaimerLinkText: "Funnel",
  },
  {
    title: "💡 BizViable — valida ideas de negocio digital",
    steps: [
      "Analiza si una idea tiene potencial real",
      "Detecta debilidades, complejidad y riesgo",
      "Propone mejoras para hacerla más viable",
    ],
    tools: ["Validación", "Negocio", "Viabilidad"],
    isPremium: false,
    category: "estrategia",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e2de6daf5c8191807fe12f71832185-bizviable",
    ctaText: "Abrir BizViable",
    microText: "👉 Filtra ideas antes de perder tiempo",
    disclaimerText: "Usa este GPT para validar ideas y modelos en",
    disclaimerLinkText: "BizViable",
  },
  {
    title: "🧠 PromptMaker Pro — crea prompts premium y útiles",
    steps: [
      "Diseña prompts claros, fuertes y reutilizables",
      "Mejora instrucciones para asistentes especializados",
      "Convierte tareas vagas en prompts ejecutables",
    ],
    tools: ["Prompts", "GPTs", "Optimización"],
    isPremium: false,
    category: "ejecucion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e2c6497a308191b95e2555542730d4-promptmaker-pro",
    ctaText: "Abrir PromptMaker Pro",
    microText: "👉 Sube el nivel de tus prompts",
    disclaimerText: "Usa este GPT para crear prompts más sólidos en",
    disclaimerLinkText: "PromptMaker Pro",
  },
  {
    title: "⚙️ AutoFlow Pro — automatización con foco real",
    steps: [
      "Diseña flujos simples, estables y automatizables",
      "Evita automatizar basura o complicarte de más",
      "Convierte tareas repetitivas en sistemas útiles",
    ],
    tools: ["Automatización", "Flujos", "Sistema"],
    isPremium: true,
    category: "ejecucion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e2d1ac72448191bb9394378260427a-autoflow-pro",
    ctaText: "Abrir AutoFlow Pro",
    microText: "👉 Automatiza sin perder estabilidad",
    disclaimerText: "Usa este GPT para diseñar automatizaciones útiles en",
    disclaimerLinkText: "AutoFlow Pro",
  },
  {
    title: "📄 PDF MonetizadorIA — crea microproductos vendibles",
    steps: [
      "Transforma contenido en PDF listo para vender",
      "Estructura producto, portada, promesa y entrega",
      "Crea recursos simples con salida comercial inmediata",
    ],
    tools: ["PDF", "Microproductos", "Venta"],
    isPremium: false,
    category: "conversion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e21bb36f748191af4f43465f5c124a-pdf-monetizadoria-creador-microproductos-vendibles",
    ctaText: "Abrir PDF MonetizadorIA",
    microText: "👉 Convierte conocimiento en producto",
    disclaimerText: "Usa este GPT para crear PDFs y microproductos en",
    disclaimerLinkText: "PDF MonetizadorIA",
  },
  {
    title: "🔧 Reparador HTML SEO — especialista técnico HTML",
    steps: [
      "Corrige HTML roto, estructura y errores visibles",
      "Mejora orden técnico, enlaces y consistencia",
      "Deja páginas más limpias para SEO y despliegue",
    ],
    tools: ["HTML", "SEO", "Corrección"],
    isPremium: false,
    category: "ejecucion",
    featured: true,
    ctaUrl:
      "https://chatgpt.com/g/g-69e14730aef48191a49d42cdf3a31c9e-reparador-html-seo-especialista-tecnico-html",
    ctaText: "Abrir Reparador HTML SEO",
    microText: "👉 Corrige páginas sin romperlas más",
    disclaimerText: "Usa este GPT para reparación técnica y SEO en",
    disclaimerLinkText: "Reparador HTML SEO",
  },
];

const regularIdeas: Omit<Idea, "id" | "isPremium" | "featured">[] = [
  {
    title: "Bot de WhatsApp que agenda citas automáticamente",
    steps: [
      "Conecta un chatbot a tu WhatsApp Business",
      "Configura respuestas automáticas con horarios disponibles",
      "Integra con Google Calendar para confirmar citas",
    ],
    tools: ["ManyChat", "Calendly"],
    category: "ejecucion",
  },
  {
    title: "Generador de contenido para redes sociales con IA",
    steps: [
      "Usa un prompt específico para tu nicho",
      "Genera 30 posts en menos de 10 minutos",
      "Programa todo con una herramienta de scheduling",
    ],
    tools: ["ChatGPT", "Buffer"],
    category: "conversion",
  },
  {
    title: "Asistente de email que responde clientes 24/7",
    steps: [
      "Entrena una IA con las preguntas frecuentes de tu negocio",
      "Conecta el asistente a tu correo empresarial",
      "Revisa y aprueba respuestas automáticamente",
    ],
    tools: ["Zapier", "OpenAI API"],
    category: "ejecucion",
  },
  {
    title: "Scraper de leads en LinkedIn con IA",
    steps: [
      "Define tu cliente ideal con filtros específicos",
      "Automatiza la extracción de perfiles relevantes",
      "Envía mensajes personalizados con IA",
    ],
    tools: ["PhantomBuster", "Claude AI"],
    category: "conversion",
  },
  {
    title: "Tienda dropshipping que se gestiona sola",
    steps: [
      "Usa IA para encontrar productos trending",
      "Automatiza descripciones y precios",
      "Configura fulfillment automático",
    ],
    tools: ["Shopify", "AutoDS"],
    category: "ejecucion",
  },
  {
    title: "Traductor de documentos profesional con IA",
    steps: [
      "Sube documentos en cualquier idioma",
      "Procesa con IA manteniendo el formato",
      "Entrega traducciones profesionales en minutos",
    ],
    tools: ["DeepL API", "Google Cloud"],
    category: "ejecucion",
  },
  {
    title: "Sistema de reseñas automáticas para negocios",
    steps: [
      "Envía SMS automáticos post-compra",
      "Genera respuestas inteligentes a reseñas",
      "Publica las mejores en tus redes sociales",
    ],
    tools: ["Twilio", "Make"],
    category: "conversion",
  },
  {
    title: "Podcast generado con voces de IA",
    steps: [
      "Escribe guiones con ChatGPT sobre tu nicho",
      "Convierte texto a voz con IA realista",
      "Publica y distribuye automáticamente",
    ],
    tools: ["ElevenLabs", "Anchor"],
    category: "conversion",
  },
  {
    title: "Detector de oportunidades en marketplaces",
    steps: [
      "Escanea precios en Amazon y MercadoLibre",
      "Identifica productos con margen alto",
      "Recibe alertas automáticas de oportunidades",
    ],
    tools: ["Keepa", "Python"],
    category: "estrategia",
  },
  {
    title: "Generador de thumbnails virales con IA",
    steps: [
      "Analiza thumbnails exitosos de tu competencia",
      "Genera variaciones con IA de imágenes",
      "Testea A/B para maximizar clicks",
    ],
    tools: ["Midjourney", "Canva"],
    category: "conversion",
  },
  {
    title: "Chatbot de ventas para Instagram DMs",
    steps: [
      "Configura respuestas automáticas a palabras clave",
      "Califica leads con preguntas inteligentes",
      "Envía links de pago automáticamente",
    ],
    tools: ["ManyChat", "Stripe"],
    category: "conversion",
  },
  {
    title: "Resumidor de reuniones con transcripción IA",
    steps: [
      "Graba reuniones de Zoom automáticamente",
      "Transcribe y resume puntos clave con IA",
      "Envía resúmenes por email a participantes",
    ],
    tools: ["Otter.ai", "Notion"],
    category: "ejecucion",
  },
];

const premiumIdeas: Omit<Idea, "id" | "isPremium" | "featured">[] = [
  {
    title: "🔥 Sistema completo de ingresos pasivos con IA",
    steps: [
      "Crea un funnel automatizado de captación",
      "Implementa secuencias de email con IA",
      "Configura pagos recurrentes automáticos",
    ],
    tools: ["ClickFunnels", "ActiveCampaign"],
    category: "conversion",
  },
  {
    title: "💎 Agencia de marketing 100% automatizada",
    steps: [
      "Automatiza reportes de clientes con IA",
      "Genera contenido para múltiples marcas simultáneamente",
      "Escala sin contratar más personal",
    ],
    tools: ["GoHighLevel", "Jasper AI"],
    category: "ejecucion",
  },
  {
    title: "⚡ Bot de trading con señales de IA",
    steps: [
      "Entrena modelos con datos históricos del mercado",
      "Configura alertas automáticas de oportunidades",
      "Ejecuta operaciones con gestión de riesgo automatizada",
    ],
    tools: ["TradingView", "Python"],
    category: "estrategia",
  },
];

export function generateIdeasBatch(startIndex: number, count: number = 10): Idea[] {
  const ideas: Idea[] = [];

  if (startIndex === 0) {
    featuredIdeas.forEach((idea, idx) => {
      ideas.push({
        ...idea,
        id: `featured-${idx}`,
      });
    });
  }

  let regularIndex = startIndex;

  while (ideas.length < count) {
    const positionInBatch = startIndex + ideas.length;

    if (positionInBatch > 0 && positionInBatch % 6 === 5) {
      const premiumIdx = Math.floor(positionInBatch / 6) % premiumIdeas.length;
      ideas.push({
        ...premiumIdeas[premiumIdx],
        id: `premium-${positionInBatch}`,
        isPremium: true,
        featured: false,
      });
    } else {
      const idx = regularIndex % regularIdeas.length;
      ideas.push({
        ...regularIdeas[idx],
        id: `idea-${positionInBatch}`,
        isPremium: false,
        featured: false,
      });
      regularIndex++;
    }
  }

  return ideas.slice(0, count);
}

export const ideas: Idea[] = generateIdeasBatch(0, 20);