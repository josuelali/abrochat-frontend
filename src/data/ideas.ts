export interface Idea {
  id: string;
  title: string;
  steps: string[];
  tools: string[];
  isPremium: boolean;
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
      "Convierte ideas sueltas en un sistema real con enfoque comercial"
    ],
    tools: ["SistemaMaestroIA", "Asistentes IA", "Automatización"],
    isPremium: true,
    ctaUrl: "https://sistemamaestroia.com",
    ctaText: "Abrir SistemaMaestroIA",
    microText: "👉 Entra al núcleo principal del ecosistema",
    disclaimerText: "Accede al sistema principal para crear y organizar asistentes con IA en",
    disclaimerLinkText: "SistemaMaestroIA"
  },
  {
    title: "💸 VendeConIA — encuentra oportunidades y conviértelas en ventas",
    steps: [
      "Detecta productos o ideas con potencial comercial",
      "Convierte oportunidades en contenido y propuesta de venta",
      "Usa un flujo rápido para monetizar sin perder tiempo"
    ],
    tools: ["VendeConIA", "Contenido", "Monetización"],
    isPremium: false,
    ctaUrl: "https://vendeconia.org",
    ctaText: "Abrir VendeConIA",
    microText: "👉 Activa una ruta rápida de monetización",
    disclaimerText: "Explora herramientas y flujos de venta inmediatos en",
    disclaimerLinkText: "VendeConIA"
  }
];

const regularIdeas: Omit<Idea, "id" | "isPremium">[] = [
  {
    title: "Bot de WhatsApp que agenda citas automáticamente",
    steps: [
      "Conecta un chatbot a tu WhatsApp Business",
      "Configura respuestas automáticas con horarios disponibles",
      "Integra con Google Calendar para confirmar citas"
    ],
    tools: ["ManyChat", "Calendly"]
  },
  {
    title: "Generador de contenido para redes sociales con IA",
    steps: [
      "Usa un prompt específico para tu nicho",
      "Genera 30 posts en menos de 10 minutos",
      "Programa todo con una herramienta de scheduling"
    ],
    tools: ["ChatGPT", "Buffer"]
  },
  {
    title: "Asistente de email que responde clientes 24/7",
    steps: [
      "Entrena una IA con las preguntas frecuentes de tu negocio",
      "Conecta el asistente a tu correo empresarial",
      "Revisa y aprueba respuestas automáticamente"
    ],
    tools: ["Zapier", "OpenAI API"]
  },
  {
    title: "Scraper de leads en LinkedIn con IA",
    steps: [
      "Define tu cliente ideal con filtros específicos",
      "Automatiza la extracción de perfiles relevantes",
      "Envía mensajes personalizados con IA"
    ],
    tools: ["PhantomBuster", "Claude AI"]
  },
  {
    title: "Tienda dropshipping que se gestiona sola",
    steps: [
      "Usa IA para encontrar productos trending",
      "Automatiza descripciones y precios",
      "Configura fulfillment automático"
    ],
    tools: ["Shopify", "AutoDS"]
  },
  {
    title: "Traductor de documentos profesional con IA",
    steps: [
      "Sube documentos en cualquier idioma",
      "Procesa con IA manteniendo el formato",
      "Entrega traducciones profesionales en minutos"
    ],
    tools: ["DeepL API", "Google Cloud"]
  },
  {
    title: "Sistema de reseñas automáticas para negocios",
    steps: [
      "Envía SMS automáticos post-compra",
      "Genera respuestas inteligentes a reseñas",
      "Publica las mejores en tus redes sociales"
    ],
    tools: ["Twilio", "Make"]
  },
  {
    title: "Podcast generado con voces de IA",
    steps: [
      "Escribe guiones con ChatGPT sobre tu nicho",
      "Convierte texto a voz con IA realista",
      "Publica y distribuye automáticamente"
    ],
    tools: ["ElevenLabs", "Anchor"]
  },
  {
    title: "Detector de oportunidades en marketplaces",
    steps: [
      "Escanea precios en Amazon y MercadoLibre",
      "Identifica productos con margen alto",
      "Recibe alertas automáticas de oportunidades"
    ],
    tools: ["Keepa", "Python"]
  },
  {
    title: "Generador de thumbnails virales con IA",
    steps: [
      "Analiza thumbnails exitosos de tu competencia",
      "Genera variaciones con IA de imágenes",
      "Testea A/B para maximizar clicks"
    ],
    tools: ["Midjourney", "Canva"]
  },
  {
    title: "Chatbot de ventas para Instagram DMs",
    steps: [
      "Configura respuestas automáticas a palabras clave",
      "Califica leads con preguntas inteligentes",
      "Envía links de pago automáticamente"
    ],
    tools: ["ManyChat", "Stripe"]
  },
  {
    title: "Resumidor de reuniones con transcripción IA",
    steps: [
      "Graba reuniones de Zoom automáticamente",
      "Transcribe y resume puntos clave con IA",
      "Envía resúmenes por email a participantes"
    ],
    tools: ["Otter.ai", "Notion"]
  },
];

const premiumIdeas: Omit<Idea, "id" | "isPremium">[] = [
  {
    title: "🔥 Sistema completo de ingresos pasivos con IA",
    steps: [
      "Crea un funnel automatizado de captación",
      "Implementa secuencias de email con IA",
      "Configura pagos recurrentes automáticos"
    ],
    tools: ["ClickFunnels", "ActiveCampaign"]
  },
  {
    title: "💎 Agencia de marketing 100% automatizada",
    steps: [
      "Automatiza reportes de clientes con IA",
      "Genera contenido para múltiples marcas simultáneamente",
      "Escala sin contratar más personal"
    ],
    tools: ["GoHighLevel", "Jasper AI"]
  },
  {
    title: "⚡ Bot de trading con señales de IA",
    steps: [
      "Entrena modelos con datos históricos del mercado",
      "Configura alertas automáticas de oportunidades",
      "Ejecuta operaciones con gestión de riesgo automatizada"
    ],
    tools: ["TradingView", "Python"]
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
      });
    } else {
      const idx = regularIndex % regularIdeas.length;
      ideas.push({
        ...regularIdeas[idx],
        id: `idea-${positionInBatch}`,
        isPremium: false,
      });
      regularIndex++;
    }
  }

  return ideas.slice(0, count);
}