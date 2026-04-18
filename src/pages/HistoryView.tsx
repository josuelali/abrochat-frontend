import { Clock } from "lucide-react";
import type { Idea } from "@/data/ideas";

interface HistoryViewProps {
  viewedIdeas: Idea[];
}

const HistoryView = ({ viewedIdeas }: HistoryViewProps) => {
  if (viewedIdeas.length === 0) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 pb-20">
        <Clock className="w-12 h-12 text-muted-foreground/30 mb-4" />
        <h2 className="text-lg font-bold text-foreground/70">Sin historial</h2>
        <p className="text-sm text-muted-foreground mt-1">Las ideas que veas aparecerán aquí</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] px-4 pt-6 pb-24 overflow-y-auto hide-scrollbar">
      <h2 className="text-lg font-bold text-gradient-metallic mb-4">Historial</h2>
      <div className="space-y-3">
        {viewedIdeas.map((idea, idx) => (
          <div key={`${idea.id}-${idx}`} className="gradient-card rounded-xl p-4 border border-border/50">
            <h3 className={`text-sm font-bold ${idea.isPremium ? "text-gradient-premium" : "text-foreground"}`}>
              {idea.title}
            </h3>
            <div className="flex gap-2 mt-2">
              {idea.tools.map(tool => (
                <span key={tool} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryView;
