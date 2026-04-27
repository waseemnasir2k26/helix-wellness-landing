const stats = [
  { k: "60+", v: "Wellness-relevant variants analysed" },
  { k: "120+", v: "Peer-reviewed studies referenced" },
  { k: "Q1", v: "Re-tunes per year as your labs evolve" },
  { k: "0", v: "Genetic data sold or shared, ever" },
];

export default function Science() {
  return (
    <section id="science" className="py-24 md:py-32 bg-mist/40 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.22em] text-ink/50">The science</span>
          <h2 className="serif mt-4 text-4xl md:text-5xl leading-[1.08] tracking-tightish">
            Built on evidence, not <span className="italic text-sage">influence.</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Every recommendation traces to peer-reviewed research and is reviewed by a registered clinician before it reaches you. Where evidence is thin, we say so — clearly.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.v} className="bg-bone rounded-2xl border border-ink/5 p-6 md:p-8">
              <div className="serif text-5xl md:text-6xl tracking-tightish text-ink">{s.k}</div>
              <p className="mt-3 text-ink/65 text-sm leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
