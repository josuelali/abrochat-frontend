import { Heart } from "lucide-react";
import type { Idea } from "@/data/ideas";
import IdeaCard from "@/components/IdeaCard";

interface FavoritesViewProps {
  ideas: Idea[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
}

const FavoritesView = ({ ideas, favorites, onToggleFavorite }: FavoritesViewProps) => {
  const favoriteIdeas = ideas.filter(i => favorites.has(i.id));

  if (favoriteIdeas.length === 0) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 pb-20">
        <Heart className="w-12 h-12 text-muted-foreground/30 mb-4" />
        <h2 className="text-lg font-bold text-foreground/70">Sin favoritos aún</h2>
        <p className="text-sm text-muted-foreground mt-1">Toca el ❤️ en las ideas que te gusten</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] overflow-y-auto snap-y-mandatory hide-scrollbar pb-20">
      {favoriteIdeas.map(idea => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default FavoritesView;
