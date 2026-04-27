export default function BrandStatement() {
  return (
    <section className="py-24 md:py-32 border-t border-ink/5">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.22em] text-ink/50">Our promise</span>
        <p className="serif mt-6 text-3xl md:text-5xl leading-[1.15] tracking-tightish text-ink">
          Generic wellness ends where <span className="italic text-sage">your</span> biology begins. We build a routine around the body you actually have — not the average one.
        </p>
        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-left">
          <Pillar n="01" title="Specific, not aspirational" body="Recommendations tied to your variants, your labs, your day." />
          <Pillar n="02" title="Backed by science" body="Every claim traces to peer-reviewed evidence — or it isn't said." />
          <Pillar n="03" title="Quietly luxurious" body="No noise, no neon. A routine that feels considered, not loud." />
        </div>
      </div>
    </section>
  );
}

function Pillar({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-t border-ink/10 pt-5">
      <span className="font-mono text-xs text-ink/40">{n}</span>
      <h3 className="serif text-xl mt-2 text-ink">{title}</h3>
      <p className="mt-2 text-ink/70 leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}
