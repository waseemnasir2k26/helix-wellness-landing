export default function Hero() {
  return (
    <section className="relative overflow-hidden grain pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink/60">
            <span className="w-6 h-px bg-ink/40" />
            DNA-guided wellness
          </span>
          <h1 className="serif mt-6 text-5xl md:text-7xl leading-[1.02] tracking-tightish text-ink">
            Your body has a
            <span className="block italic text-sage/90">blueprint.</span>
            We help you read it.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/70 max-w-xl leading-relaxed">
            Helix turns your DNA into clear, daily decisions — what to eat, what to take, what to skip. Personalized nutrition and supplementation, science-backed, simply done.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#waitlist"
              className="px-6 py-3.5 rounded-full bg-ink text-bone font-medium tracking-wide hover:bg-slate2 transition shadow-soft"
            >
              Join the waitlist
            </a>
            <a
              href="#how"
              className="px-6 py-3.5 rounded-full border border-ink/15 text-ink/80 font-medium hover:border-ink/40 transition"
            >
              How it works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-ink/50">
            <Trust label="Clinically reviewed" />
            <Trust label="Lab-grade DNA" />
            <Trust label="No data sold" />
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-mist via-bone to-sage/20 shadow-soft overflow-hidden relative">
            <svg viewBox="0 0 200 280" className="absolute inset-0 w-full h-full helix">
              <path d="M50 20 C 150 60, 50 100, 150 140 S 50 220, 150 260" fill="none" stroke="#0B1220" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
              <path d="M150 20 C 50 60, 150 100, 50 140 S 150 220, 50 260" fill="none" stroke="#8FB89A" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={i}
                  x1="50" x2="150"
                  y1={30 + i * 28} y2={30 + i * 28}
                  stroke="#D4B895" strokeWidth="1" opacity="0.55"
                />
              ))}
            </svg>
            <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-bone/70 border border-ink/5 rounded-2xl px-4 py-3 text-xs text-ink/70">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-[0.2em]">Sample report</span>
                <span className="font-mono text-ink/50">rs1801133</span>
              </div>
              <div className="mt-1.5 serif text-ink text-sm">MTHFR variant detected — increase methylated B-12.</div>
            </div>
          </div>
          <div className="hidden md:block absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gold/30 blur-2xl" />
          <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sage/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 14 14" className="text-sage">
        <path d="M2 7.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
