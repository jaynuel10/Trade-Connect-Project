import { STATS, HOW_IT_WORKS, TRADES, PEOPLE } from "../data/index.js";
import TradeCard from "../components/TradeCard.jsx";
import { SectionLabel } from "../components/ui.jsx";

function HeroImage() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto lg:mx-0"
      role="img"
      aria-label="TradeConnect app showing artisan profiles and search"
    >
      {/* <img src="../image.png" alt="" /> */}
      {/* Phone frame */}
      <rect x="60" y="10" width="300" height="320" rx="28" fill="#1c1917" />
      <rect x="66" y="16" width="288" height="308" rx="23" fill="#292524" />

      {/* Status bar */}
      <rect x="80" y="26" width="60" height="5" rx="2.5" fill="#44403c" />
      <circle cx="322" cy="28" r="4" fill="#44403c" />

      {/* Search bar */}
      <rect x="80" y="44" width="260" height="34" rx="10" fill="#3c3836" />
      <circle cx="96" cy="61" r="7" fill="#57534e" />
      <rect x="109" y="57" width="90" height="5" rx="2" fill="#57534e" />
      <rect x="109" y="65" width="60" height="4" rx="2" fill="#44403c" />
      <rect x="313" y="50" width="20" height="22" rx="7" fill="#f59e0b" />

      {/* Filter chips */}
      <rect x="80" y="88" width="54" height="18" rx="9" fill="#f59e0b" />
      <rect x="84" y="94" width="46" height="6" rx="2" fill="#1c1917" />
      <rect x="142" y="88" width="62" height="18" rx="9" fill="#3c3836" />
      <rect x="148" y="94" width="50" height="6" rx="2" fill="#57534e" />
      <rect x="212" y="88" width="54" height="18" rx="9" fill="#3c3836" />
      <rect x="218" y="94" width="42" height="6" rx="2" fill="#57534e" />
      <rect x="274" y="88" width="50" height="18" rx="9" fill="#3c3836" />
      <rect x="280" y="94" width="38" height="6" rx="2" fill="#57534e" />

      {/* Card 1 — Emeka */}
      <rect x="80" y="118" width="122" height="130" rx="14" fill="#3c3836" />
      {/* Avatar */}
      <rect x="92" y="130" width="34" height="34" rx="9" fill="#ea580c" />
      <text
        x="109"
        y="151"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
      >
        EO
      </text>
      {/* Name */}
      <rect x="132" y="134" width="58" height="5" rx="2" fill="#d6d3d1" />
      <rect x="132" y="143" width="42" height="4" rx="2" fill="#78716c" />
      {/* Verified badge */}
      <rect x="132" y="151" width="36" height="12" rx="6" fill="#064e3b" />
      <rect x="136" y="155" width="28" height="4" rx="2" fill="#34d399" />
      {/* Bio lines */}
      <rect x="92" y="176" width="98" height="4" rx="2" fill="#44403c" />
      <rect x="92" y="183" width="80" height="4" rx="2" fill="#44403c" />
      {/* Tags */}
      <rect x="92" y="194" width="40" height="12" rx="5" fill="#292524" />
      <rect x="94" y="198" width="36" height="4" rx="2" fill="#57534e" />
      <rect x="138" y="194" width="36" height="12" rx="5" fill="#292524" />
      <rect x="140" y="198" width="32" height="4" rx="2" fill="#57534e" />
      {/* Stars */}
      <text x="92" y="222" fill="#f59e0b" fontSize="10">
        ★★★★★
      </text>
      {/* Price */}
      <rect x="92" y="228" width="70" height="6" rx="2" fill="#e7e5e4" />

      {/* Card 2 — Kemi */}
      <rect x="218" y="118" width="122" height="130" rx="14" fill="#3c3836" />
      <rect x="230" y="130" width="34" height="34" rx="9" fill="#7c3aed" />
      <text
        x="247"
        y="151"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
      >
        KF
      </text>
      <rect x="270" y="134" width="58" height="5" rx="2" fill="#d6d3d1" />
      <rect x="270" y="143" width="42" height="4" rx="2" fill="#78716c" />
      <rect x="270" y="151" width="42" height="12" rx="6" fill="#2e1065" />
      <rect x="274" y="155" width="34" height="4" rx="2" fill="#a78bfa" />
      <rect x="230" y="176" width="98" height="4" rx="2" fill="#44403c" />
      <rect x="230" y="183" width="76" height="4" rx="2" fill="#44403c" />
      <rect x="230" y="194" width="38" height="12" rx="5" fill="#292524" />
      <rect x="232" y="198" width="34" height="4" rx="2" fill="#57534e" />
      <rect x="274" y="194" width="38" height="12" rx="5" fill="#292524" />
      <rect x="276" y="198" width="34" height="4" rx="2" fill="#57534e" />
      <text x="230" y="222" fill="#f59e0b" fontSize="10">
        ★★★★★
      </text>
      <rect x="230" y="228" width="76" height="6" rx="2" fill="#e7e5e4" />

      {/* Bottom nav bar */}
      <rect x="66" y="296" width="288" height="28" rx="0" fill="#1c1917" />
      <rect x="66" y="296" width="288" height="1" fill="#3c3836" />
      {[100, 160, 210, 268, 320].map((x, i) => (
        <g key={i}>
          <rect
            x={x - 10}
            y="303"
            width="20"
            height="8"
            rx="4"
            fill={i === 0 ? "#f59e0b" : "#44403c"}
          />
        </g>
      ))}

      {/* Floating badge — Verified */}
      <rect
        x="290"
        y="22"
        width="86"
        height="24"
        rx="12"
        fill="#065f46"
        opacity="0.95"
      />
      <text
        x="334"
        y="38"
        textAnchor="middle"
        fill="#6ee7b7"
        fontSize="10"
        fontWeight="600"
      >
        ✓ ID Verified
      </text>

      {/* Floating badge — Escrow */}
      <rect
        x="46"
        y="180"
        width="76"
        height="24"
        rx="12"
        fill="#451a03"
        opacity="0.95"
      />
      <text
        x="84"
        y="196"
        textAnchor="middle"
        fill="#fcd34d"
        fontSize="10"
        fontWeight="600"
      >
        🔒 Escrow
      </text>

      {/* Floating badge — Rating */}
      <rect
        x="298"
        y="258"
        width="72"
        height="24"
        rx="12"
        fill="#1c1917"
        opacity="0.95"
      />
      <text
        x="334"
        y="274"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        fontWeight="600"
      >
        ★ 4.9 / 5
      </text>
    </svg>
  );
}

export default function HomePage({ goTo, onSelectPerson }) {
  const available = PEOPLE.filter((p) => p.available).length;
  const topRated = PEOPLE.filter((p) => p.rating >= 4.8).slice(0, 4);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white px-4 pt-12 pb-14 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {available} artisans available in Lagos right now
            </div>

            <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight mb-4">
              Find trusted
              <br />
              <span className="text-amber-400">skilled artisans</span>
              <br />
              near you.
            </h1>

            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
              ID-verified tradespeople. Real reviews from real completed jobs.
              Your payment protected by escrow until you're satisfied.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => goTo("search")}
                className="bg-amber-400 text-stone-900 font-black text-sm px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Find an artisan →
              </button>
              <button
                onClick={() => goTo("how")}
                className="bg-white/10 border border-white/20 text-white/70 text-sm px-5 py-3 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
              >
                How it works
              </button>
            </div>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {["🪪 ID Verified", "⭐ Real Reviews", "🔒 Escrow Safe"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Hero illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-black text-stone-800">{s.value}</p>
              <p className="text-xs text-stone-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Browse by trade ──────────────────────────────────── */}
      <section className="bg-stone-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <SectionLabel text="Browse" />
              <h2 className="text-xl font-black text-stone-800">
                Browse by trade
              </h2>
            </div>
            <button
              onClick={() => goTo("skills")}
              className="text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              See all →
            </button>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {TRADES.filter((t) => t.id !== "all").map((t) => (
              <button
                key={t.id}
                onClick={() => goTo("skills")}
                className="flex flex-col items-center gap-1.5 bg-white border border-stone-100 rounded-2xl py-3 px-1 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-[10px] text-stone-500 font-semibold leading-tight text-center">
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top rated ────────────────────────────────────────── */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <SectionLabel text="Featured" />
              <h2 className="text-xl font-black text-stone-800">
                Top rated near you
              </h2>
            </div>
            <button
              onClick={() => goTo("artisans")}
              className="text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              See all →
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRated.map((p) => (
              <TradeCard key={p.id} person={p} onSelect={onSelectPerson} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="bg-stone-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <SectionLabel text="Process" />
            <h2 className="text-xl font-black text-stone-800">
              How TradeConnect works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((h, i) => (
              <div
                key={h.title}
                className="bg-white border border-stone-100 rounded-2xl p-5"
              >
                <div className="w-9 h-9 rounded-xl bg-stone-900 text-white text-sm font-black flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <p className="font-bold text-stone-800 text-sm mb-1">
                  {h.title}
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-black mb-2">Ready to find someone?</h2>
          <p className="text-white/50 text-sm mb-6">
            {PEOPLE.length} verified artisans across {TRADES.length - 1} trades
            in Lagos.
          </p>
          <button
            onClick={() => goTo("search")}
            className="bg-amber-400 text-stone-900 font-black text-sm px-8 py-3 rounded-xl hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Search now →
          </button>
        </div>
      </section>
    </div>
  );
}
