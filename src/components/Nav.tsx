export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-ink">
          <svg width="28" height="28" viewBox="0 0 32 32" className="helix">
            <path d="M8 4c0 6 16 6 16 12s-16 6-16 12" fill="none" stroke="#0B1220" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M24 4c0 6-16 6-16 12s16 6 16 12" fill="none" stroke="#8FB89A" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <span className="serif text-xl font-semibold tracking-tightish">Helix</span>
          <span className="text-xs uppercase tracking-[0.2em] text-ink/50 ml-1 hidden sm:inline">Wellness</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          <a href="#how" className="hover:text-ink transition">How it works</a>
          <a href="#offerings" className="hover:text-ink transition">Offerings</a>
          <a href="#science" className="hover:text-ink transition">Science</a>
        </nav>
        <a
          href="#waitlist"
          className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-bone hover:bg-slate2 transition"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
