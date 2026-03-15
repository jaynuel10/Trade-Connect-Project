import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "search", label: "Search", icon: "🔍" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "artisans", label: "Artisans", icon: "👷" },
  { id: "how", label: "How it works", icon: "ℹ️" },
];

export default function Navbar({ page, goTo }) {
  const [open, setOpen] = useState(false);

  const nav = (id) => {
    goTo(id);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ── Desktop / top bar ─────────────────────────────────── */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => nav("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-stone-900 rounded-xl flex items-center justify-center">
              <span className="text-amber-400 text-xs font-black">TC</span>
            </div>
            <span className="font-black text-stone-900 text-base tracking-tight">
              TradeConnect
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => nav(l.id)}
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  page === l.id
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-400 hover:text-stone-700 hover:bg-stone-50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => nav("search")}
              className="hidden sm:block bg-stone-900 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
            >
              Find artisan
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden p-2 text-stone-500 text-xl cursor-pointer"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="sm:hidden border-t border-stone-100 bg-white px-4 py-2 space-y-0.5">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => nav(l.id)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                  page === l.id
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-500 hover:bg-stone-50"
                }`}
              >
                <span>{l.icon}</span>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Mobile bottom tab bar ─────────────────────────────── */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 bg-white border-t border-stone-100 z-50 flex">
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => nav(l.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors cursor-pointer ${
              page === l.id ? "text-stone-900" : "text-stone-300"
            }`}
          >
            <span className="text-base leading-none">{l.icon}</span>
            <span className="text-[9px] font-semibold leading-none">
              {l.label.split(" ")[0]}
            </span>
          </button>
        ))}
      </nav>
      {/* Push content above bottom nav on mobile */}
      <div className="h-14 sm:hidden" />
    </>
  );
}
