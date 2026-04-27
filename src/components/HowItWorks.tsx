const steps = [
  { n: "01", title: "Order your kit", body: "A discreet at-home cheek swab. Postage-paid both ways." },
  { n: "02", title: "We sequence + interpret", body: "Lab-grade panel reviewed by clinicians, not algorithms-only." },
  { n: "03", title: "Receive your routine", body: "A nutrition plan, supplement stack, and quarterly re-tunes." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-ink/50">How it works</span>
          <h2 className="serif mt-4 text-4xl md:text-6xl leading-[1.05] tracking-tightish">
            From swab to <span className="italic text-sage">a routine you'll keep.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-bone p-8 md:p-10">
              <span className="font-mono text-xs text-ink/40">{s.n}</span>
              <h3 className="serif text-2xl md:text-3xl mt-3 tracking-tightish">{s.title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
