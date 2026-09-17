# Ummah Care Foundation — website

Static marketing site for Ummah Care Foundation, implemented from the Claude Design handoff
(`weDevs Foundation-handoff.zip`) with [Astro 7](https://docs.astro.build).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
```

Requires Node 22.12+.

## Pages

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about`, `/area-of-activity`, `/donate`, `/contact`, `/membership`, `/volunteer`, `/faq`, `/news-and-events`, `/success-stories`, `/privacy-policy`, `/terms-and-conditions` | `src/pages/*.astro` |
| `/causes/<slug>` (8 causes) | `src/pages/causes/[slug].astro`, content in `src/data/causes.ts` |

## Structure

- `src/layouts/Base.astro` — `<head>`, fonts, header, footer, global scripts.
- `src/components/` — `SiteHeader` (light/dark variants, mega menu, mobile menu), `SiteFooter`,
  `PageHero`, `CauseHero`, `CausePage`, `Testimonials`.
- `src/data/` — `images.ts` (single image map), `site.ts` (routes, nav), `causes.ts`, `testimonials.ts`.
- `src/scripts/` — vanilla TypeScript behaviours: `site-reveal` (scroll reveal), `gsap-buttons`
  (CTA micro-interactions, bound to `.btn-fx`), `site-fx` (counters + lightbox), `mesh-gradient`
  (WebGL hero background), `header`, `forms`, `home`, `cause-page`, `testimonials`.
- `src/styles/global.css` — design tokens and shared classes (`.btn`, `.eyebrow`, `.page-hero`, forms, `.zoom`).
- `public/images/` — photos bundled with the handoff. Photos not in the bundle are hotlinked from
  `wedevs.foundation`; swap the URLs in `src/data/images.ts` after copying them into `public/images/`.

## Things to wire up

- Forms (donate, contact, membership, volunteer) only show their "sent" state; connect them to a
  backend or form service in `src/scripts/forms.ts`.
- The Home donation box exists behind `SHOW_DONATION_BOX` in `src/pages/index.astro` (off, as in the design).
