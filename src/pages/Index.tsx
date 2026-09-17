import { useState } from "react";
import Login from "./Login";
import SwipeFeed from "@/components/SwipeFeed";
import BottomNav from "@/components/BottomNav";
import logoAbrochat from "@/assets/logo-abrochat.png";

type Tab = "feed";

const Index = () => {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("abrochat_user")
  );
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  const handleLogin = (email: string) => {
    localStorage.setItem("abrochat_user", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("abrochat_user");
    setUser(null);
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div className="min-h-[100dvh] bg-[#12001c] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12001c]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 md:px-6">
          <img
            src={logoAbrochat}
            alt="Abrochat - Conéctate a la IA"
            className="h-10 w-auto max-w-[220px] object-contain md:h-12 md:max-w-[260px]"
          />
        </div>
      </header>

      <div className="pb-24">
        {activeTab === "feed" && <SwipeFeed />}
      </div>

      <BottomNav
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Index;
