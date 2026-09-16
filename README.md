# Helix Wellness — Landing Page

Premium one-page landing for a personalized wellness brand (DNA insights → nutrition → smarter supplements). Built as a speculative deliverable for an Upwork brief by **SkynetLabs**.

## Status

Last reviewed: September 2026 · release v2026.09

**Live:** _populated after first Vercel deploy_

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v3
- Fraunces (serif) + Inter (sans), Google Fonts
- Zero runtime deps beyond React — fast Lighthouse scores out of the box

## Sections
1. Sticky nav + waitlist CTA
2. Hero — DNA blueprint headline, animated helix, sample-report card
3. Brand statement — three pillars
4. Offerings — three premium cards (DNA Insights, Personalized Nutrition, Smarter Supplements)
5. How it works — 3 steps
6. Science — 4-stat grid + evidence note
7. Email-capture / waitlist (form ready to wire to Beehiiv / ConvertKit / Formspree)
8. Footer — socials, legal, contact

## Local
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Wire the email form
Open `src/components/Capture.tsx`. Replace the simulated `await new Promise(...)` with a real fetch:

```ts
await fetch("https://YOUR-ENDPOINT", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

Recommended endpoints:
- **Beehiiv** — `POST https://api.beehiiv.com/v2/publications/{pub_id}/subscriptions`
- **ConvertKit** — `POST https://api.convertkit.com/v3/forms/{form_id}/subscribe`
- **Formspree** — `https://formspree.io/f/{form_id}` (zero-backend, fastest path)

## Deploy
Vercel autodetects Vite. `npm run build` → `dist/`.

## Brand tokens
- Ink `#0B1220` · Bone `#F7F4EE` · Sage `#8FB89A` · Gold `#D4B895` · Mist `#E9E3D6`
- Type pair: Fraunces (display, optical-sized) + Inter (UI/body)

## License
All rights reserved — SkynetLabs / client handover on signed engagement.
