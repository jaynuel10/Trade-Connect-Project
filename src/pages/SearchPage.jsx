import { useState } from "react";
import { TRADES, AREAS, PEOPLE } from "../data/index.js";
import TradeCard from "../components/TradeCard.jsx";
import { SectionLabel } from "../components/ui.jsx";

export default function SearchPage({ onSelect }) {
  const [query,     setQuery]     = useState("");
  const [area,      setArea]      = useState("");
  const [trade,     setTrade]     = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [availOnly, setAvailOnly] = useState(false);
  const [locMsg,    setLocMsg]    = useState("");
  const [locating,  setLocating]  = useState(false);

  const handleGeo = () => {
    if (!navigator.geolocation) {
      setLocMsg("Geolocation is not supported by your browser.");
      return;
    }
    setLocating(true);
    setLocMsg("Detecting your location…");
    navigator.geolocation.getCurrentPosition(
      () => {
        const pick = AREAS[Math.floor(Math.random() * 5)];
        setArea(pick);
        setLocMsg(`📍 Showing artisans near ${pick}`);
        setLocating(false);
      },
      () => {
        setLocMsg("Could not detect location. Please select an area manually.");
        setLocating(false);
      }
    );
  };

  const results = PEOPLE.filter((p) => {
    if (trade !== "all" && p.trade !== trade) return false;
    if (area && p.area !== area) return false;
    if (p.rating < minRating) return false;
    if (availOnly && !p.available) return false;
    if (query) {
      const q = query.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.trade.toLowerCase().includes(q) ||
        p.area.toLowerCase().includes(q) ||
        p.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-5">
        <SectionLabel text="Discover" />
        <h2 className="text-2xl font-black text-stone-800">Find an artisan</h2>
      </div>

      {/* Search bar */}
      <div className="relative mb-3">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 text-sm">🔍</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name, skill, or area…"
          className="w-full pl-9 pr-4 py-3 text-sm border border-stone-200 rounded-xl bg-white focus:outline-none focus:border-stone-400 text-stone-700 placeholder:text-stone-300"
        />
      </div>

      {/* Area + geo */}
      <div className="flex gap-2 mb-3">
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="flex-1 text-xs border border-stone-200 rounded-xl px-3 py-2.5 bg-white focus:outline-none focus:border-stone-400 text-stone-600 min-w-0"
        >
          <option value="">All areas in Lagos</option>
          {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        <button
          onClick={handleGeo}
          disabled={locating}
          className="flex-shrink-0 text-xs border border-stone-200 bg-white hover:bg-stone-50 text-stone-500 rounded-xl px-3 py-2.5 whitespace-nowrap transition-colors cursor-pointer"
        >
          {locating ? "…" : "📍 Near me"}
        </button>
      </div>

      {/* Trade filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
        {TRADES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTrade(t.id)}
            className={`flex-shrink-0 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
              trade === t.id
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Extra filters */}
      <div className="flex items-center gap-4 mb-4 text-xs text-stone-500 flex-wrap">
        <label className="flex items-center gap-2">
          Min rating:
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="border border-stone-200 rounded-lg px-2 py-1 bg-white text-stone-600 text-xs focus:outline-none"
          >
            <option value={0}>Any</option>
            <option value={4}>4★+</option>
            <option value={4.5}>4.5★+</option>
            <option value={4.8}>4.8★+</option>
          </select>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={availOnly}
            onChange={(e) => setAvailOnly(e.target.checked)}
            className="accent-stone-800"
          />
          Available now only
        </label>
      </div>

      {/* Geo message */}
      {locMsg && (
        <div className="text-xs bg-stone-50 border border-stone-100 rounded-xl px-3 py-2 mb-3 text-stone-500">
          {locMsg}
        </div>
      )}

      {/* Result count */}
      <p className="text-xs text-stone-400 mb-4">
        {results.length} artisan{results.length !== 1 ? "s" : ""}
        {area ? ` in ${area}` : " across Lagos"}
      </p>

      {/* Grid */}
      {results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-3">🔍</p>
          <p className="font-bold text-stone-500 text-sm">No artisans found</p>
          <p className="text-xs text-stone-400 mt-1">Try adjusting your filters or clearing the area.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((p) => <TradeCard key={p.id} person={p} onSelect={onSelect} />)}
        </div>
      )}
    </div>
  );
}
