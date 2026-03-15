import { TRADES } from "../data/index.js";

const FOOTER_LINKS = {
  Platform: [
    { label: "How it works", page: "how" },
    { label: "Browse artisans", page: "artisans" },
    { label: "Search by skill", page: "skills" },
    { label: "Find near me", page: "search" },
  ],
  Trades: TRADES.filter((t) => t.id !== "all")
    .slice(0, 5)
    .map((t) => ({
      label: `${t.icon} ${t.label}`,
      page: "skills",
    })),
  Trust: [
    { label: "ID Verification", page: "how" },
    { label: "Escrow payments", page: "how" },
    { label: "Verified reviews", page: "how" },
    { label: "Peer vouching", page: "how" },
  ],
};

const SOCIALS = [
  { label: "Twitter / X", href: "#", icon: "𝕏" },
  { label: "Instagram", href: "#", icon: "◈" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "WhatsApp", href: "#", icon: "✆" },
];

const STATS_MINI = [
  { value: "2,400+", label: "Artisans" },
  { value: "18,000+", label: "Jobs done" },
  { value: "8", label: "Trades" },
  { value: "4.8★", label: "Avg rating" },
];

export default function Footer({ goTo }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      {/* ── Top band ── */}
      <div className="border-b border-white/8 px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center">
                <span className="text-stone-900 text-sm font-black">TC</span>
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                TradeConnect
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              The trusted marketplace connecting skilled artisans with customers
              across Lagos. Every worker verified. Every payment protected.
            </p>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-4 gap-4 lg:gap-8">
            {STATS_MINI.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-black text-amber-400">{s.value}</p>
                <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main links grid ── */}
      <div className="px-4 py-10 border-b border-white/8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Column headers + links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => goTo(l.page)}
                      className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">
              Stay updated
            </p>
            <p className="text-xs text-white/40 mb-3 leading-relaxed">
              Get notified when new artisans join your area.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full text-xs bg-white/8 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/25 focus:outline-none focus:border-amber-400/50"
              />
              <button className="w-full bg-amber-400 text-stone-900 text-xs font-black px-3 py-2.5 rounded-xl hover:bg-amber-300 transition-colors cursor-pointer">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust badges strip ── */}
      <div className="px-4 py-5 border-b border-white/8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "🪪", text: "ID Verified artisans" },
            { icon: "🔒", text: "Escrow protected payments" },
            { icon: "⭐", text: "Verified reviews only" },
            { icon: "🤝", text: "Peer vouching system" },
            { icon: "📍", text: "Lagos-wide coverage" },
          ].map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 text-white/40 text-xs"
            >
              <span className="text-base">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-4 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {year} TradeConnect Lagos. Built to solve real problems.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all text-xs font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <button
                key={l}
                className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
