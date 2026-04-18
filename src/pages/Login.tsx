import { useState } from "react";
import logoIcon from "@/assets/logo-icon-abrochat.png";
import logoAbrochat from "@/assets/logo-abrochat.png";

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      onLogin(email);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--gradient-metallic)" }}
      />

      <div className="relative z-10 w-full max-w-sm space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center animate-scale-in">
            <img src={logoAbrochat} alt="Abrochat - Conéctate a la IA" className="h-14 w-auto max-w-[280px] object-contain" />
          </div>
          <p className="text-sm text-muted-foreground animate-fade-in">Descubre ideas de IA para ganar dinero</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl gradient-metallic text-primary-foreground font-bold text-sm glow-primary transition-all active:scale-[0.97] disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar gratis"}
          </button>
        </form>

        <p className="text-[10px] text-muted-foreground text-center">
          Al entrar aceptas recibir ideas de IA en tu feed.
        </p>
      </div>
    </div>
  );
};

export default Login;
