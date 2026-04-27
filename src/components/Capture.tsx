import { useState } from "react";

export default function Capture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      setMsg("That email doesn't look right.");
      return;
    }
    setStatus("loading");
    try {
      // Replace with your real endpoint (Beehiiv / ConvertKit / Formspree).
      await new Promise((r) => setTimeout(r, 700));
      setStatus("ok");
      setMsg("You're on the list. We'll be in touch soon.");
      setEmail("");
    } catch {
      setStatus("err");
      setMsg("Something went wrong. Try again in a moment.");
    }
  }

  return (
    <section id="waitlist" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl bg-ink text-bone p-10 md:p-16 overflow-hidden shadow-soft">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sage/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.22em] text-bone/50">Join the waitlist</span>
            <h2 className="serif mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tightish max-w-2xl">
              Be first when <span className="italic text-sage">your blueprint</span> is ready.
            </h2>
            <p className="mt-5 text-bone/70 max-w-xl leading-relaxed">
              Founder pricing for the first 500. No spam, no shared data. We'll email when your kit is ready to ship.
            </p>

            <form onSubmit={onSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="flex-1 rounded-full bg-bone/10 border border-bone/20 px-5 py-3.5 text-bone placeholder:text-bone/40 focus:outline-none focus:border-sage/60 transition"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-bone text-ink px-6 py-3.5 font-medium hover:bg-mist transition disabled:opacity-60"
              >
                {status === "loading" ? "Joining…" : "Reserve my spot"}
              </button>
            </form>

            {status !== "idle" && status !== "loading" && (
              <p
                className={`mt-4 text-sm ${
                  status === "ok" ? "text-sage" : "text-gold"
                }`}
              >
                {msg}
              </p>
            )}

            <p className="mt-6 text-xs text-bone/40">
              By joining, you agree to our privacy policy. We never sell genetic data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
