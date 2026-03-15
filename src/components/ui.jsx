// Tiny reusable UI atoms used across all pages

export function Stars({ rating }) {
  return (
    <span className="text-amber-400 text-xs">
      {"★".repeat(Math.floor(rating))}
      <span className="text-stone-200">{"☆".repeat(5 - Math.floor(rating))}</span>
      <span className="text-stone-500 ml-1 font-semibold">{rating}</span>
    </span>
  );
}

export function LevelPill({ level }) {
  const styles = {
    Beginner:     "bg-stone-100 text-stone-500",
    Intermediate: "bg-blue-50 text-blue-600",
    Expert:       "bg-amber-50 text-amber-700",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${styles[level] ?? styles.Intermediate}`}>
      {level}
    </span>
  );
}

export function SpecialBadge({ badge }) {
  if (!badge) return null;
  const styles = {
    "Top Rated": "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "Premium":   "bg-violet-50 text-violet-700 border border-violet-200",
    "Budget":    "bg-sky-50 text-sky-700 border border-sky-200",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${styles[badge] ?? ""}`}>
      {badge}
    </span>
  );
}

export function Avatar({ initials, color, size = "md" }) {
  const sz = size === "lg" ? "w-14 h-14 text-base" : "w-11 h-11 text-sm";
  return (
    <div
      className={`${sz} rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export function AvailDot({ available }) {
  return (
    <span
      className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
        available ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
      }`}
    >
      {available ? "● Available" : "● Busy"}
    </span>
  );
}

export function SectionLabel({ text }) {
  return (
    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">{text}</p>
  );
}
