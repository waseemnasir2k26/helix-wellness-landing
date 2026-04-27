export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 32 32">
            <path d="M8 4c0 6 16 6 16 12s-16 6-16 12" fill="none" stroke="#0B1220" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M24 4c0 6-16 6-16 12s16 6 16 12" fill="none" stroke="#8FB89A" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <span className="serif font-semibold tracking-tightish">Helix Wellness</span>
          <span className="text-xs text-ink/40 ml-2">© {year}</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <a href="#" className="hover:text-ink transition">Privacy</a>
          <a href="#" className="hover:text-ink transition">Terms</a>
          <a href="mailto:hello@helix.example" className="hover:text-ink transition">hello@helix.example</a>
        </nav>

        <div className="flex items-center gap-4 text-ink/60">
          <a aria-label="Instagram" href="#" className="hover:text-ink transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:text-ink transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4"/></svg>
          </a>
          <a aria-label="X" href="#" className="hover:text-ink transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l16 16M20 4L4 20"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
