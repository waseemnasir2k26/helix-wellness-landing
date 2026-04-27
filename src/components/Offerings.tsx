const cards = [
  {
    tag: "DNA Insights",
    title: "Read your blueprint.",
    body: "A clinical-grade panel translating 60+ wellness-relevant variants into language you can act on — energy, sleep, recovery, methylation, and more.",
    bullets: ["60+ variant report", "Clinician-reviewed", "Lifetime updates"],
    accent: "from-sage/30 to-bone",
  },
  {
    tag: "Personalized Nutrition",
    title: "Eat for your code.",
    body: "Macro targets, micronutrient priorities, and food sensitivities mapped to your genetics — built into a weekly plan you can hand to any kitchen.",
    bullets: ["Macro + micro targets", "Sensitivity flags", "Weekly meal scaffolds"],
    accent: "from-gold/30 to-bone",
  },
  {
    tag: "Smarter Supplements",
    title: "Only what you need.",
    body: "Stop stacking guesswork. Get a curated stack — dosage, form, and timing — chosen for your variants, validated against your bloodwork.",
    bullets: ["Stack of 3–6, not 30", "Dose + form + timing", "Re-tuned each quarter"],
    accent: "from-mist to-bone",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-24 md:py-32 bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-bone/50">What you get</span>
            <h2 className="serif mt-4 text-4xl md:text-6xl leading-[1.05] tracking-tightish max-w-2xl">
              Three pillars. <span className="italic text-sage">One coherent</span> routine.
            </h2>
          </div>
          <p className="md:max-w-sm text-bone/70 leading-relaxed">
            Each layer compounds on the last. Buy them together or step in one at a time — the recommendations stay in sync.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.tag}
              className={`group relative rounded-3xl border border-bone/10 bg-gradient-to-b ${c.accent} text-ink p-8 overflow-hidden`}
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink/50">{c.tag}</span>
              <h3 className="serif mt-4 text-3xl leading-tight tracking-tightish">{c.title}</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">{c.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink/80">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1.5 text-sage shrink-0">
                      <path d="M2 7.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-bone/40 blur-2xl group-hover:scale-110 transition-transform duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
