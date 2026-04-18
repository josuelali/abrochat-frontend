import { useState, useCallback } from "react";
import Login from "./Login";
import SwipeFeed from "@/components/SwipeFeed";
import BottomNav from "@/components/BottomNav";
import FavoritesView from "./FavoritesView";
import HistoryView from "./HistoryView";
import type { Idea } from "@/data/ideas";
import logoAbrochat from "@/assets/logo-abrochat.png";

type Tab = "feed" | "favorites" | "history";

const Index = () => {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem("abrochat_user"));
  const [activeTab, setActiveTab] = useState<Tab>("feed");
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem("abrochat_favs");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [viewedIdeas, setViewedIdeas] = useState<Idea[]>([]);
  const [allIdeas, setAllIdeas] = useState<Idea[]>([]);

  const handleLogin = (email: string) => {
    localStorage.setItem("abrochat_user", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("abrochat_user");
    setUser(null);
  };

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("abrochat_favs", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const handleViewIdea = useCallback((idea: Idea) => {
    setViewedIdeas(prev => {
      if (prev[prev.length - 1]?.id === idea.id) return prev;
      return [...prev, idea];
    });
    setAllIdeas(prev => {
      if (prev.find(i => i.id === idea.id)) return prev;
      return [...prev, idea];
    });
  }, []);

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div className="relative bg-background min-h-[100dvh]">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/30">
        <img
          src={logoAbrochat}
          alt="Abrochat - Conéctate a la IA"
          className="h-12 w-auto max-w-[320px] object-contain animate-fade-in"
        />
      </header>
      {activeTab === "feed" && (
        <SwipeFeed
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewIdea={handleViewIdea}
        />
      )}
      {activeTab === "favorites" && (
        <FavoritesView
          ideas={allIdeas}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      {activeTab === "history" && (
        <HistoryView viewedIdeas={viewedIdeas} />
      )}
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} onLogout={handleLogout} />
    </div>
  );
};

export default Index;
