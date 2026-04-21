import { Heart, ExternalLink, Zap, Star } from "lucide-react";
import type { Idea } from "@/data/ideas";

interface IdeaCardProps {
  idea: Idea;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const IdeaCard = ({ idea, isFavorite, onToggleFavorite }: IdeaCardProps) => {
  const cardClass = idea.isPremium
    ? "gradient-premium-card glow-premium"
    : "gradient-card glow-primary";

  const titleClass = idea.isPremium
    ? "text-gradient-premium"
    : "text-gradient-metallic";

  const ctaUrl = idea.ctaUrl || "https://abrochat.com";
  const ctaText = idea.ctaText || "Ver cómo montarlo";
  const microText = idea.microText || "👉 Desbloquea el sistema completo";
  const disclaimerText =
    idea.disclaimerText ||
    'Esta es una idea básica. Descubre cómo montarlo paso a paso en Abrochat.';
  const disclaimerLinkText = idea.disclaimerLinkText || "Abrochat";

  return (
    <div className="snap-start flex items-center justify-center h-[100dvh] w-full px-4 py-6">
      <div
        className={`${cardClass} rounded-2xl p-6 w-full max-w-sm mx-auto border border-border relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl"
          style={{
            background: idea.isPremium
              ? "radial-gradient(circle at 50% 0%, hsl(45 90% 55% / 0.3), transparent 60%)"
              : "radial-gradient(circle at 50% 0%, hsl(230 80% 62% / 0.3), transparent 60%)",
          }}
        />

        <button
          onClick={() => onToggleFavorite(idea.id)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/50 backdrop-blur-sm transition-all active:scale-90"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-muted-foreground"
            }`}
          />
        </button>

        {idea.isPremium && (
          <div className="flex items-center gap-1.5 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-gradient-premium tracking-wider uppercase">
              Premium
            </span>
          </div>
        )}

        <h2
          className={`text-xl font-extrabold leading-tight mb-5 pr-8 ${titleClass}`}
        >
          {idea.title}
        </h2>

        <div className="space-y-3 mb-5">
          {idea.steps.map((step, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  idea.isPremium
                    ? "gradient-premium text-background"
                    : "gradient-metallic text-primary-foreground"
                }`}
              >
                {i + 1}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed pt-0.5">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {idea.tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted/60 text-xs font-medium text-foreground/70 border border-border/50"
            >
              <Zap className="w-3 h-3 text-primary" />
              {tool}
            </span>
          ))}
        </div>

        <p className="text-xs text-center text-foreground/60 font-medium mb-2">
          {microText}
        </p>

        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all active:scale-[0.97] ${
            idea.isPremium
              ? "gradient-premium text-background glow-premium"
              : "gradient-metallic text-primary-foreground glow-primary"
          }`}
        >
          <ExternalLink className="w-4 h-4" />
          {ctaText}
        </a>

        <p className="text-[10px] text-muted-foreground text-center mt-4 leading-relaxed">
          {disclaimerText}{" "}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            {disclaimerLinkText}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;