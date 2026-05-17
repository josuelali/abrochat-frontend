import { useEffect, useState } from "react";
import logoAbrochat from "@/assets/logo-abrochat.png";

interface LoginProps {
  onLogin: (email: string) => void;
}

const STRIPE_ABROCHAT_PRO = "https://buy.stripe.com/fZueVf4zyglmbfa57lgYU00";
const BETA_DEADLINE = new Date("2026-05-22T06:15:00Z").getTime();

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
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(formatCountdown());

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(formatCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const handlePaidAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      "Acceso beta manual: escribe el email usado en Stripe y espera confirmación. Todavía no hay acceso automático ni paywall definitivo."
    );
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
        >
          ⚡ Acceder a AbroChat Pro — 19 €
        </a>

        <form onSubmit={handlePaidAccess} className="space-y-3 text-left">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Ya he pagado / tengo acceso beta
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email usado en Stripe"
            className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl border border-border text-foreground font-bold text-sm transition-all active:scale-[0.97]"
          >
            Ver instrucciones de acceso manual
          </button>
        </form>

        {message && (
          <p className="rounded-xl bg-muted/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
            {message}
          </p>
        )}

        <p className="text-[10px] leading-5 text-muted-foreground">
          Este aviso no es un paywall definitivo. No hay webhook ni acceso automático todavía.
        </p>
      </div>
    </div>
  );
};

export default Login;
