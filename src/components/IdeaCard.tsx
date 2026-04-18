import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AssistantIdea } from "@/data/ideas";

type IdeaCardProps = {
  idea: AssistantIdea;
};

const categoryGlow: Record<AssistantIdea["category"], string> = {
  estrategia: "from-fuchsia-500/20 via-transparent to-transparent",
  ejecucion: "from-cyan-500/20 via-transparent to-transparent",
  conversion: "from-amber-400/20 via-transparent to-transparent",
};

export default function IdeaCard({ idea }: IdeaCardProps) {
  const handleOpen = () => {
    window.open(idea.href, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#24182b] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.36)]",
        idea.featured && "ring-1 ring-fuchsia-400/20"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70",
          categoryGlow[idea.category]
        )}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10 text-4xl shadow-inner shadow-white/5">
          <span aria-hidden="true">{idea.icon}</span>
        </div>

        <h3 className="mb-3 text-[2rem] font-extrabold leading-none tracking-tight text-white">
          {idea.name}
        </h3>

        <p className="mb-4 text-[1.05rem] font-bold uppercase leading-tight tracking-wide text-[#ffd400]">
          {idea.subtitle}
        </p>

        <p className="mb-8 text-[1.05rem] leading-relaxed text-white/90">
          {idea.description}
        </p>

        <div className="mt-auto">
          <Button
            onClick={handleOpen}
            className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 py-7 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:from-fuchsia-500 hover:to-pink-400"
          >
            {idea.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}
