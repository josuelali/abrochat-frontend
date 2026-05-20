import { useEffect, useState } from "react";
import logoAbrochat from "@/assets/logo-abrochat.png";

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

interface LoginProps {
  onLogin: (email: string) => void;
}

const STRIPE_ABROCHAT_PRO = "https://buy.stripe.com/fZueVf4zyglmbfa57lgYU00";
const BETA_DEADLINE = new Date("2026-05-22T06:15:00Z").getTime();
const BETA_ACCESS_CODE = "ABRO-BETA-2026-X7K9";
const trackAbrochatAppEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      asset_name: "app_abrochat",
      page_url: window.location.href,
      ...params,
    });
  }
};


const formatCountdown = () => {
  const diff = BETA_DEADLINE - Date.now();
  if (diff <= 0) return "precio beta finalizado";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [betaCode, setBetaCode] = useState("");
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(formatCountdown());

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(formatCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const handlePaidAccess = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Introduce el email usado en Stripe para validar tu acceso beta.");
      return;
    }

    if (betaCode.trim() !== BETA_ACCESS_CODE) {
      setMessage("Código no válido. Revisa el email de acceso o contacta con soporte.");
      return;
    }

    // V1.1 acceso beta manual. No es paywall definitivo.
    localStorage.setItem("abrochat_beta_access", "true");
    localStorage.setItem("abrochat_user", email.trim());
    trackAbrochatAppEvent("activation_complete", {
      cta_location: "beta_access_form",
      access_type: "manual_beta_code",
    });
    onLogin(email.trim());
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--gradient-metallic)" }}
      />

      <div className="relative z-10 w-full max-w-sm space-y-7 animate-fade-in text-center">
        <div className="space-y-4">
          <img
            src={logoAbrochat}
            alt="Abrochat - Conéctate a la IA"
            className="mx-auto h-14 w-auto max-w-[280px] object-contain"
          />
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Acceso beta
            </p>
            <h1 className="text-3xl font-extrabold text-foreground">
              AbroChat Pro — Acceso beta
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              Asistentes IA especializados para crear, vender, automatizar y organizar proyectos digitales.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-5 text-left space-y-3">
          <p className="text-sm font-semibold text-foreground">
            Precio beta: <span className="text-primary">19 €</span>
          </p>
          <p className="text-xs leading-5 text-muted-foreground">
            Después sube a 29,99 €. El acceso beta se gestiona manualmente tras el pago.
          </p>
          <p className="text-xs font-bold text-foreground">
            Tiempo restante: {countdown}
          </p>
        </div>

        <a
          href={STRIPE_ABROCHAT_PRO}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3.5 rounded-xl gradient-metallic text-primary-foreground font-bold text-sm glow-primary transition-all active:scale-[0.97]"
          onClick={() =>
            trackAbrochatAppEvent("begin_checkout", {
              cta_text: "Acceder a AbroChat Pro — 19 €",
              cta_location: "login_pricing",
              destination_url: STRIPE_ABROCHAT_PRO,
              product_name: "AbroChat Pro Beta",
              value: 19,
              currency: "EUR",
            })
          }
        >
          ⚡ Acceder a AbroChat Pro — 19 €
        </a>

        {!showAccessForm ? (
          <button
            type="button"
            onClick={() => {
              trackAbrochatAppEvent("beta_access_form_open", {
                cta_text: "Ya he pagado / tengo acceso beta",
                cta_location: "login_access",
              });
              setShowAccessForm(true);
              setMessage("Introduce el email usado en Stripe y el código beta recibido por email.");
            }}
            className="w-full py-3.5 rounded-xl border border-border text-foreground font-bold text-sm transition-all active:scale-[0.97]"
          >
            Ya he pagado / tengo acceso beta
          </button>
        ) : (
          <form onSubmit={handlePaidAccess} className="space-y-3 text-left">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Email usado en Stripe
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email usado en Stripe"
              className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Código beta
            </label>
            <input
              type="text"
              value={betaCode}
              onChange={(e) => setBetaCode(e.target.value)}
              placeholder="ABRO-BETA-..."
              className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl border border-border text-foreground font-bold text-sm transition-all active:scale-[0.97]"
            >
              Desbloquear acceso beta
            </button>
          </form>
        )}

        {message && (
          <p className="rounded-xl bg-muted/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
            {message}
          </p>
        )}

        <p className="text-[10px] leading-5 text-muted-foreground">
          Este acceso por código es una solución beta manual. No es un paywall definitivo ni sustituye la futura verificación con Stripe webhook.
        </p>
      </div>
    </div>
  );
};

export default Login;
