import { Stars, LevelPill, SpecialBadge, Avatar, AvailDot } from "./ui.jsx";

export default function TradeCard({ person, onSelect }) {
  return (
    <div
      onClick={() => onSelect(person)}
      className="bg-white border border-stone-100 rounded-2xl p-4 cursor-pointer
                 hover:border-stone-300 hover:shadow-lg hover:-translate-y-0.5
                 transition-all duration-200 flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <Avatar initials={person.initials} color={person.color} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <p className="font-bold text-stone-800 text-sm truncate">{person.name}</p>
            {person.verified && (
              <span className="text-emerald-500 text-[11px] font-black">✓</span>
            )}
          </div>
          <p className="text-[11px] text-stone-400 mt-0.5">📍 {person.area}, Lagos</p>
          <div className="flex items-center gap-1 mt-1.5 flex-wrap">
            <LevelPill level={person.level} />
            <SpecialBadge badge={person.badge} />
            <AvailDot available={person.available} />
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{person.bio}</p>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1">
        {person.skills.slice(0, 3).map((s) => (
          <span key={s} className="text-[10px] bg-stone-50 border border-stone-100 text-stone-500 px-2 py-0.5 rounded-md">
            {s}
          </span>
        ))}
        {person.skills.length > 3 && (
          <span className="text-[10px] text-stone-300 px-1">+{person.skills.length - 3}</span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center justify-between pt-2 border-t border-stone-50">
        <Stars rating={person.rating} />
        <span className="text-xs text-stone-400">{person.reviews} reviews</span>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <p className="text-base font-black text-stone-800">
          ₦{person.rate.toLocaleString()}
          <span className="text-xs font-normal text-stone-400">/{person.rateUnit}</span>
        </p>
        <span className="text-xs text-stone-400">{person.jobs} jobs</span>
      </div>
    </div>
  );
}
