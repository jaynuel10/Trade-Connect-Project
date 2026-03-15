import { useState } from "react";
import { TRADES, PEOPLE } from "../data/index.js";
import TradeCard from "../components/TradeCard.jsx";
import { LevelPill, SectionLabel } from "../components/ui.jsx";

export default function SkillsPage({ onSelect }) {
  const [active, setActive] = useState("plumber");

  const curr   = TRADES.find((t) => t.id === active);
  const people = PEOPLE.filter((p) => p.trade === active);
  const minRate = Math.min(...people.map((p) => p.rate));
  const maxRate = Math.max(...people.map((p) => p.rate));

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-5">
        <SectionLabel text="Browse" />
        <h2 className="text-2xl font-black text-stone-800">Skill categories</h2>
      </div>

      {/* Trade tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {TRADES.filter((t) => t.id !== "all").map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex-shrink-0 flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
              active === t.id
                ? "bg-stone-900 text-white border-stone-900 shadow-md"
                : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
            }`}
          >
            <span className="text-base">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div className="bg-stone-900 text-white rounded-2xl p-5 mb-5 flex items-center justify-between">
        <div>
          <span className="text-3xl block mb-1">{curr?.icon}</span>
          <h3 className="font-black text-xl">{curr?.label}</h3>
          <p className="text-white/40 text-xs mt-0.5">{people.length} artisans · Lagos</p>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[10px] uppercase tracking-wider">Price range</p>
          <p className="font-black text-base mt-1">
            ₦{minRate.toLocaleString()} – ₦{maxRate.toLocaleString()}
          </p>
          <p className="text-white/30 text-xs">per {people[0]?.rateUnit}</p>
          <div className="flex gap-1 mt-2 justify-end flex-wrap">
            {["Beginner", "Intermediate", "Expert"].map((l) => (
              <LevelPill key={l} level={l} />
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((p) => <TradeCard key={p.id} person={p} onSelect={onSelect} />)}
      </div>
    </div>
  );
}
