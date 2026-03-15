import { useState } from "react";

export default function HireModal({ person, onClose }) {
  const [form, setForm] = useState({ desc: "", date: "", budget: "" });
  const [done, setDone] = useState(false);

  if (!person) return null;

  const valid = form.desc.trim().length > 0 && form.date.length > 0;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-emerald-500 text-3xl font-black">✓</span>
            </div>
            <h3 className="font-black text-stone-800 text-xl mb-2">Request sent!</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Your funds are held in escrow and released only when you confirm the job is done.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-stone-900 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-stone-700 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-black text-stone-800">Request a job</h3>
                <p className="text-xs text-stone-400 mt-0.5">with {person.name}</p>
              </div>
              <button onClick={onClose} className="text-stone-300 hover:text-stone-600 text-2xl cursor-pointer">×</button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-stone-500 block mb-1.5">Describe the job *</label>
                <textarea
                  rows={3}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  placeholder="e.g. Fix leaking pipe under kitchen sink..."
                  className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:border-stone-400 placeholder:text-stone-300 text-stone-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-500 block mb-1.5">Preferred date *</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-stone-400 text-stone-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-500 block mb-1.5">Your budget (optional)</label>
                <input
                  type="text"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  placeholder="e.g. ₦25,000"
                  className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-stone-400 placeholder:text-stone-300 text-stone-700"
                />
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700 leading-relaxed">
                🔒 Payment is held in escrow and released only when you confirm the job is complete.
              </div>

              <button
                onClick={() => valid && setDone(true)}
                disabled={!valid}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                  valid
                    ? "bg-stone-900 text-white hover:bg-stone-700 active:scale-95 cursor-pointer"
                    : "bg-stone-100 text-stone-400 cursor-not-allowed"
                }`}
              >
                Send request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
