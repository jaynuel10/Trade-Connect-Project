import { useState } from "react";
import { Stars, LevelPill, SpecialBadge, Avatar } from "./ui.jsx";
import { TRADES } from "../data/index.js";

const MOCK_REVIEWS = [
  { author:"Tunde B.",  text:"Showed up on time, fixed everything in one visit. Will definitely call again.", rating:5 },
  { author:"Chioma O.", text:"Very professional. Explained every step clearly and left the place spotless.", rating:5 },
  { author:"Bola A.",   text:"Good quality work. Took a bit longer than expected but overall great value.", rating:4 },
];

export default function ProfileModal({ person, onClose, onHire }) {
  const [tab, setTab] = useState("about");
  if (!person) return null;

  const tradeName = TRADES.find((t) => t.id === person.trade)?.label ?? person.trade;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 bg-white z-10 px-5 pt-5 pb-0 border-b border-stone-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar initials={person.initials} color={person.color} size="lg" />
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h2 className="font-black text-stone-800 text-lg">{person.name}</h2>
                  {person.verified && <span className="text-emerald-500 font-black">✓</span>}
                </div>
                <p className="text-xs text-stone-400">{tradeName} · {person.area}, Lagos</p>
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  <LevelPill level={person.level} />
                  <SpecialBadge badge={person.badge} />
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-stone-300 hover:text-stone-600 text-2xl leading-none px-1 cursor-pointer"
            >
              ×
            </button>
          </div>

          <div className="flex gap-5 text-sm border-b border-stone-100">
            {["about", "skills", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 font-semibold capitalize border-b-2 -mb-px transition-colors cursor-pointer ${
                  tab === t
                    ? "border-stone-800 text-stone-800"
                    : "border-transparent text-stone-400 hover:text-stone-600"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* ── About ── */}
          {tab === "about" && (
            <div className="space-y-4">
              <p className="text-sm text-stone-600 leading-relaxed">{person.bio}</p>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { l:"Jobs done", v:person.jobs },
                  { l:"Rating",    v:person.rating },
                  { l:"Reviews",   v:person.reviews },
                ].map((s) => (
                  <div key={s.l} className="bg-stone-50 rounded-xl p-3 text-center">
                    <p className="text-xl font-black text-stone-800">{s.v}</p>
                    <p className="text-[10px] text-stone-400 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Trust</p>
                <div className="flex flex-wrap gap-2">
                  {person.verified && (
                    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">✓ ID Verified</span>
                  )}
                  {person.vouched && (
                    <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">Peer Vouched</span>
                  )}
                  <span className={`text-xs px-3 py-1 rounded-full border ${
                    person.available
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-500 border-red-200"
                  }`}>
                    {person.available ? "Available now" : "Currently busy"}
                  </span>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider">Rate</p>
                  <p className="text-2xl font-black text-stone-800">
                    ₦{person.rate.toLocaleString()}
                    <span className="text-sm font-normal text-stone-400">/{person.rateUnit}</span>
                  </p>
                </div>
                <button
                  onClick={() => onHire(person)}
                  disabled={!person.available}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    person.available
                      ? "bg-stone-900 text-white hover:bg-stone-700 active:scale-95 cursor-pointer"
                      : "bg-stone-100 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  {person.available ? "Request job" : "Unavailable"}
                </button>
              </div>
            </div>
          )}

          {/* ── Skills ── */}
          {tab === "skills" && (
            <div className="space-y-2">
              {person.skills.map((s) => (
                <div key={s} className="flex items-center justify-between bg-stone-50 rounded-xl px-4 py-3">
                  <span className="text-sm text-stone-700">{s}</span>
                  <span className="text-emerald-500 font-bold">✓</span>
                </div>
              ))}
            </div>
          )}

          {/* ── Reviews ── */}
          {tab === "reviews" && (
            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700">
                Reviews only posted after a confirmed escrow payment.
              </div>
              {MOCK_REVIEWS.map((r, i) => (
                <div key={i} className="bg-stone-50 rounded-xl p-4">
                  <div className="flex justify-between mb-1.5">
                    <p className="text-sm font-semibold text-stone-700">{r.author}</p>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">"{r.text}"</p>
                  <p className="text-[10px] text-stone-300 mt-2">Verified job · Escrow payment</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
