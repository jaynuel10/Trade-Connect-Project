import { HOW_IT_WORKS } from "../data/index.js";
import { SectionLabel } from "../components/ui.jsx";

const TRUST = [
  { icon:"🪪", title:"Identity verification",  desc:"Every artisan submits a government-issued ID (NIN). We verify it before they can be listed on the platform." },
  { icon:"📸", title:"Portfolio verification", desc:"Photos must be uploaded during an active job — not from a gallery. This prevents fake portfolios." },
  { icon:"⭐", title:"Locked reviews",          desc:"The review button only appears after a job is marked complete and payment released. No fake 5-stars." },
  { icon:"🔒", title:"Escrow protection",       desc:"When you send a job request, payment is held by us. The artisan only receives it once you confirm satisfaction." },
  { icon:"🤝", title:"Peer vouching",           desc:"Established artisans on the platform can vouch for new joiners, adding an extra layer of social trust." },
];

export default function HowPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <SectionLabel text="Guide" />
        <h2 className="text-2xl font-black text-stone-800">How TradeConnect works</h2>
      </div>

      {/* Steps */}
      <div className="space-y-3 mb-10">
        {HOW_IT_WORKS.map((h, i) => (
          <div key={h.title} className="flex gap-4 bg-white border border-stone-100 rounded-2xl p-5 items-start">
            <div className="w-9 h-9 rounded-xl bg-stone-900 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <p className="font-bold text-stone-800 text-sm mb-0.5">{h.title}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust system */}
      <div className="mb-5">
        <SectionLabel text="Safety" />
        <h3 className="text-xl font-black text-stone-800">Our trust system</h3>
      </div>
      <div className="space-y-3">
        {TRUST.map((t) => (
          <div key={t.title} className="flex gap-4 bg-stone-50 rounded-2xl p-4">
            <span className="text-2xl flex-shrink-0">{t.icon}</span>
            <div>
              <p className="font-bold text-stone-800 text-sm">{t.title}</p>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
