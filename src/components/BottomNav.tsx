import { Flame, Heart, Clock, LogOut } from "lucide-react";

type Tab = "feed" | "favorites" | "history";

interface BottomNavProps {
  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;
  onLogout: () => void;
}

const BottomNav = ({ activeTab, onChangeTab, onLogout }: BottomNavProps) => {
  const tabs: { id: Tab; icon: typeof Flame; label: string }[] = [
    { id: "feed", icon: Flame, label: "Ideas" },
    { id: "favorites", icon: Heart, label: "Favoritos" },
    { id: "history", icon: Clock, label: "Historial" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl safe-area-bottom">
      <div className="flex items-center justify-around max-w-sm mx-auto px-2 py-2">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onChangeTab(id)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all ${
              activeTab === id
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <Icon className={`w-5 h-5 ${activeTab === id ? "drop-shadow-[0_0_8px_hsl(230,80%,62%)]" : ""}`} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
        <button
          onClick={onLogout}
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl text-muted-foreground transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[10px] font-medium">Salir</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
