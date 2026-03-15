import { PEOPLE } from "../data/index.js";
import TradeCard from "../components/TradeCard.jsx";
import { SectionLabel } from "../components/ui.jsx";

export default function ArtisansPage({ onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-5">
        <SectionLabel text="Directory" />
        <h2 className="text-2xl font-black text-stone-800">
          All artisans{" "}
          <span className="text-stone-400 font-normal text-lg">({PEOPLE.length})</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PEOPLE.map((p) => (
          <TradeCard key={p.id} person={p} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
