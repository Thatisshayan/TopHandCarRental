# Top Hand Car Rental — TODO

Live site (Netlify): https://golden-biscuit-b92c68.netlify.app
Live site (GitHub Pages): https://thatisshayan.github.io/TophandCarRental/

Status legend: `[ ]` open · `[~]` in progress · `[x]` done

---

## A. Audit Fixes (initial review)

**1. Wire the quote form to a real backend (Netlify Forms)**
- Why: `Contact.tsx:8-11` only flips a `submitted` state — every lead is silently lost. On Netlify this is free and takes one `data-netlify="true"` attribute + a hidden input.

**2. Fix the broken skip link**
- Why: `App.tsx:17` points to `#fleet` but the main landmark is `id="main-content"` (`App.tsx:23`). Keyboard users jump past the hero instead of to page content — a WCAG 2.4.1 failure.

**3. Add sitemap.xml + robots.txt**
- Why: A local service business lives or dies on discoverability. No sitemap = crawlers guess; you can't submit the site to Google Search Console properly.

**4. Optimize the hero image**
- Why: `Hero.tsx:10` loads a 1920×1080 Pexels JPEG with no `fetchpriority`, no WebP/AVIF, no preload. It's the LCP element; this is the single biggest threat to the <2.5s LCP target in `ideas.md`.

**5. Add an OG social-card image**
- Why: `index.html` has `og:title/description` but no `og:image`. Shared links on Facebook/WhatsApp/iMessage render with no preview — lost click-through on the exact channels a local biz relies on.

**6. Remove the unused `wouter` dependency**
- Why: `package.json:19` ships a router that's never imported (single page). It bloats install and confuses future maintainers.

**7. Add privacy-friendly analytics + a form-conversion event**
- Why: Without measurement you can't tell if the hero CTA or the form wins. Plausible is GDPR-friendly and one script tag.

**8. Fix the Google Maps embed**
- Why: `Location.tsx:36` uses a placeholder CID (`0x1234567890abcdef`). The pin likely won't sit on 146 Willowdale Ave, undermining the "Find Us" section's whole point.

**9. Add `theme-color` meta + favicon preload**
- Why: Tiny polish that makes the mobile browser chrome match the dark brand and speeds first paint of the tab icon.

**10. Enrich JSON-LD structured data**
- Why: Add `AggregateRating` (from the testimonials) and `sameAs` social links so Google can show star ratings and connect the brand's profiles — free SERP real estate.

---

## B. Near-Term Roadmap (next 10)

**11. Verify asset paths work on both hosts**
- Why: We just switched `base` to `./` and made logo/favicon relative so Netlify (root) and GitHub Pages (subpath) both work. Confirm both deploys render correctly before relying on it.

**12. Code-split `framer-motion` / lazy-load below-fold sections**
- Why: Bundle is 364 KB JS (113 KB gzip). `React.lazy` on Services/Testimonials/Location/Contact cuts the initial payload and improves INP.

**13. Defer the Maps iframe until interaction**
- Why: The iframe is a heavy third-party that blocks the main thread. Loading it on click/scroll keeps TBT low and satisfies the performance targets in `ideas.md`.

**14. Add responsive `srcset` to fleet images**
- Why: `Fleet.tsx` requests a fixed 800×500 Pexels image on every device. `srcset` serves smaller files to phones — directly helps mobile LCP/CLS.

**15. Add a 404 page**
- Why: `netlify.toml` SPA-redirects `/*` to `index.html`, so bad URLs show the homepage with a confusing URL. A branded 404 improves UX and is expected of a "real" site.

**16. Add a Privacy Policy page**
- Why: Required by analytics/GDPR, and it builds trust ("we'll never share your info" in `Contact.tsx` should link to something real).

**17. Add form spam protection (honeypot / reCAPTCHA)**
- Why: Once the form goes live (task 1), bots will hit it. Netlify Forms supports a honeypot field with zero cost.

**18. Validate pickup/return dates in the form**
- Why: `Contact.tsx` has two date inputs with no logic. A return date before pickup is a nonsense lead; validate client-side before submit.

**19. Add a persistent mobile "Call/Quote" bar**
- Why: Most local-rental searches happen on phones. A sticky bottom CTA turns a scroll into a call — the highest-intent action for this business.

**20. Point the custom domain `tophandauto.com` at Netlify**
- Why: `canonical` and `og:url` already point there. Netlify gives free SSL; 301 the GitHub Pages site to consolidate ranking signals.

---

## C. Expansion (50 more)

### SEO & Content
**21. Add an FAQ section**
- Why: FAQ schema captures "People also ask" real estate and answers the top renter objections (insurance, age, deposit) inline.

**22. Start a local-content blog (GTA travel/driving guides)**
- Why: Topical authority drives organic traffic competitors (big chains) ignore; each post is a new ranking opportunity.

**23. Build localized landing pages (Airport YYZ, Markham, Vaughan, Mississauga)**
- Why: "car rental near me" queries are geo-specific; dedicated pages outrank a single generic page for each suburb.

**24. Add `hreflang` if a French version is planned**
- Why: Ontario is bilingual; serving `fr` correctly avoids duplicate-content penalties and captures French-speaking renters.

**25. Create a Rental Terms / Requirements page**
- Why: Renters want to know license, age, and deposit rules before calling; reduces wasted calls and sets expectations.

**26. Add breadcrumb structured data**
- Why: Rich snippets with breadcrumbs improve CTR from SERPs on the deeper pages you'll build in 23.

**27. Claim and verify the Google Business Profile; embed live reviews**
- Why: GBP is the #1 local-rank factor and the reviews in `Testimonials.tsx` are hardcoded — real, synced reviews beat static text.

**28. Add an `Organization`/`Brand` JSON-LD block with logo**
- Why: Reinforces entity recognition so Google connects the site, GBP, and socials as one business.

**29. Audit and fix all image `alt` text for keyword relevance**
- Why: Alt text is a minor ranking signal and a hard a11y requirement; fleet alt is good but a full pass ensures consistency.

**30. Add a `lastmod`/dynamic sitemap generated at build**
- Why: A manually edited sitemap (task 3) goes stale; a build-time generator keeps crawlers informed as pages grow.

### Performance
**31. Preload the hero image via `<link rel="preload">`**
- Why: Explicit preload lets the LCP image download in parallel with CSS/JS — shaves critical-path time.

**32. Add a `font-display` fallback with `size-adjust`**
- Why: Prevents invisible-text/CLS flashes while DM Serif Display + Inter load; improves perceived speed.

**33. Set explicit `width`/`height` on all images**
- Why: Prevents layout shift (CLS) as remote Pexels images resolve — directly serves the <0.1 CLS target.

**34. Enable long-cache headers for hashed assets in `netlify.toml`**
- Why: Vite hashes filenames; caching them for a year lets repeat visitors skip re-downloads entirely.

**35. Convert fleet images to AVIF with WebP fallback**
- Why: AVIF is ~30% smaller than WebP at equal quality; the biggest win for mobile data and LCP.

**36. Lazy-load non-critical sections with `React.lazy` + `Suspense`**
- Why: Pairs with task 12; keeps the first paint focused on hero + fleet above the fold.

**37. Defer the Marquee animation off the main thread where possible**
- Why: `Marquee.tsx` uses a CSS keyframe (good) but verify it's GPU-composited so it doesn't cost INP during scroll.

**38. Add `loading="lazy"` + `decoding="async"` to all below-fold imgs**
- Why: Hero is eager (correct); everything else should defer to protect bandwidth and TBT.

**39. Minimize third-party requests (fonts, maps) with a request budget**
- Why: Each external host adds DNS/TLS latency; a budget keeps the site fast as features are added.

**40. Add a Lighthouse CI check to the deploy pipeline**
- Why: Catches perf/a11y regressions automatically on every push instead of by hand.

### Accessibility
**41. Add `aria-label`s to icon-only links (scroll cue, social, map)**
- Why: Screen readers announce bare `<a>` as "link" with no context; `Location.tsx` map and the hero scroll indicator need labels.

**42. Verify heading order has no skipped levels**
- Why: Sections jump h2→h3 correctly today, but new sections (FAQ, blog) must keep the order or AT users lose outline structure.

**43. Test the mobile nav drawer for focus trapping**
- Why: `Navbar.tsx` slide-in drawer must trap focus and close on Escape/`Tab` to meet 2.4.3 (focus order) and 2.1.2 (no trap).

**44. Ensure the form `<select>` has a visible focus state**
- Why: `Contact.tsx` select uses `focus:border-primary` — confirm contrast is sufficient and add `focus-visible` parity.

**45. Announce form success to screen readers**
- Why: `Contact.tsx` swaps to a success panel; add `role="status"`/`aria-live` so AT users know submission worked.

**46. Add a visible focus ring to the Maps iframe**
- Why: Keyboard users can tab into the embed; it needs a clear focus indicator per 2.4.7.

**47. Respect `prefers-reduced-motion` on the hero scroll indicator**
- Why: The bouncing scroll cue (`Hero.tsx:112`) loops infinitely; confirm it stops under reduced-motion (global rule exists but verify).

**48. Check muted-text contrast on elevated surfaces**
- Why: `text-muted` on `bg-elevated` is close to the 4.5:1 floor; verify with a contrast tool before shipping new surfaces.

**49. Provide a text alternative for the Odometer counters**
- Why: `ScrollReveal.tsx` Odometer animates numbers; ensure the final value is in the DOM (not only in `style`) for AT.

**50. Run an axe DevTools audit and zero out violations**
- Why: Automated a11y scan catches the 80% of issues humans miss; track to completion.

### Design & UX (per `ideas.md`)
**51. Implement the "Hand of Cards" fleet fan layout**
- Why: `ideas.md:35` calls for overlapping cards on desktop — the signature brand device is currently a plain grid (`Fleet.tsx`).

**52. Add road-line dividers between every section**
- Why: `.road-line` utility exists (`index.css:85`) but is only used once (`Process.tsx:71`); it's a core brand rhythm element that should separate sections.

**53. Add hero parallax on scroll**
- Why: `ideas.md:49` specifies restrained scroll-linked parallax; it's absent, making the hero feel static vs. the premium brief.

**54. Add a scroll-progress indicator**
- Why: Gives long single-page scrollers a sense of place; cheap to add and on-brand with the gold accent.

**55. Add loading skeletons for images**
- Why: Remote Pexels images pop in; a shimmer placeholder keeps the premium feel during load.

**56. Build a real "Top Hand" logo (spade-in-H mark)**
- Why: `ideas.md:96` specifies a custom mark; current `logo.png` is presumably a placeholder and weakens brand recall.

**57. Add the "Deal Strip" eyebrow consistently**
- Why: Already used well; audit that every section heading carries it so the branded separator is uniform.

**58. Add a subtle gold hover glow on nav links (verify)**
- Why: `ideas.md` lists nav hover as gold; confirm `Navbar.tsx` matches the spec exactly.

**59. Add a dark/light is not needed — but add a high-contrast mode toggle**
- Why: Some users need more than AA; a contrast toggle satisfies the "warm authority" promise inclusively.

**60. Add micro-interaction feedback on form submit button**
- Why: The CTA should show a spinner/disabled state during send (once real submit exists) to prevent double-clicks.

### Functionality & Features
**61. Integrate the form with a CRM (HubSpot / Pipedrive)**
- Why: Leads from task 1 should flow to a pipeline automatically instead of a Netlify inbox nobody checks.

**62. Add a pricing/quote calculator**
- Why: Renters want a number before calling; an estimator (vehicle × days) increases qualified leads.

**63. Add vehicle availability/inventory view**
- Why: "Call for availability" (`Fleet.tsx`) loses self-serve renters; a live grid shows what's bookable.

**64. Add WhatsApp / live-chat widget**
- Why: Highest-converting channel for local services; meets customers where they already are.

**65. Add a multi-step (progressive) quote form**
- Why: One long form has drop-off; stepping it (contact → dates → vehicle) lifts completion.

**66. Send a customer email confirmation on submit**
- Why: Sets professional expectations and reduces "did it go through?" calls.

**67. Add online deposit / payment (Stripe)**
- Why: "Zero hassle" should include paying the deposit online; captures the booking, not just the lead.

**68. Add a floating "Call Now" button (mobile)**
- Why: Complements task 19; taps the phone dialer in one touch for the dominant mobile audience.

**69. Add a referral / loyalty program module**
- Why: "Using them for two years" (`Testimonials.tsx`) shows repeat business; formalize it to drive word-of-mouth.

**70. Add seasonal promo banner (holidays, summer road trips)**
- Why: Time-boxed offers create urgency and give a reason to re-market to past renters.

---

## D. Business / Operations Hygiene
**71. Audit NAP consistency (Name/Address/Phone) everywhere**
- Why: Phone appears as `(416) 250-7368` in copy and `+14162507368` in JSON-LD; mismatches hurt local rankings across GBP, site, and citations.

**72. Add real customer photo/video testimonials**
- Why: Static text reviews are believable but video/social proof converts better and is easy to gather.

**73. Add insurance & requirements explainer block**
- Why: "Fully Insured" (`Hero.tsx`) is asserted but unexplained; detail builds the trust the brand promises.

**74. Add awards / certifications badges**
- Why: Third-party credibility marks (BBB, Google Guaranteed) lift conversion on the trust sections.

**75. Localize currency display to CAD ($)**
- Why: `priceRange: "$$"` in JSON-LD is ambiguous; show real CAD figures where pricing appears.

**76. Add an About / "Since 2000" story section**
- Why: The 25-year heritage is the differentiator vs. chains; tell it as a dedicated section for emotional connection.

**77. Set up uptime/error monitoring (Netlify analytics + Sentry)**
- Why: Catch a broken form or 500 before customers do; cheap insurance for a revenue-generating site.

**78. Add a post-deploy smoke test (form + key sections render)**
- Why: Automate a check that the live URL's form and CTAs actually work after each deploy.

**79. Document the dual-deploy (Netlify + GitHub Pages) in README**
- Why: Two hosts with different base paths is a footgun; a note prevents a future break.

**80. Schedule a quarterly content/SEO review**
- Why: Local SEO is never "done"; a recurring review keeps rankings and content fresh.
