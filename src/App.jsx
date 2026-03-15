import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import FooterPage from "./pages/FooterPage.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import HireModal from "./components/HireModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ArtisansPage from "./pages/ArtisansPage.jsx";
import HowPage from "./pages/HowPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [profile, setProfile] = useState(null);
  const [hire, setHire] = useState(null);

  const goTo = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  const openProfile = (p) => setProfile(p);
  const openHire = (p) => {
    setProfile(null);
    setHire(p);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar page={page} goTo={goTo} />

      <main className="flex-1">
        {page === "home" && (
          <HomePage goTo={goTo} onSelectPerson={openProfile} />
        )}
        {page === "search" && <SearchPage onSelect={openProfile} />}
        {page === "skills" && <SkillsPage onSelect={openProfile} />}
        {page === "artisans" && <ArtisansPage onSelect={openProfile} />}
        {page === "how" && <HowPage />}
      </main>

      <FooterPage goTo={goTo} />

      {profile && (
        <ProfileModal
          person={profile}
          onClose={() => setProfile(null)}
          onHire={openHire}
        />
      )}
      {hire && <HireModal person={hire} onClose={() => setHire(null)} />}
    </div>
  );
}
