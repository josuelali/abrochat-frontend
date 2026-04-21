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