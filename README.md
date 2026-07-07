# Top Hand Car Rental

Premium car rental website for Top Hand Car Rental — serving the Greater Toronto Area since 2000.

## Live Site

**https://thatisshayan.github.io/TopHandCarRental/**

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** with OKLCH color system
- **Framer Motion** for animations
- **Lucide React** for icons
- Deployed to **GitHub Pages** via GitHub Actions

## Design Philosophy

See [ideas.md](./ideas.md) for the full design philosophy doc — covers brand system, color rationale, typography choices, signature visual devices, and accessibility standards.

### Brand System

- **Design Direction:** Dark Premium Automotive
- **Signature Color:** Amber Gold (`oklch(0.72 0.19 85)`)
- **Display Font:** DM Serif Display
- **Body Font:** Inter

### Signature Visual Devices

1. **Ace Card Corner Treatment** — gold corner brackets on cards evoking a playing card
2. **Deal Strip Eyebrow** — branded separator before section headings
3. **Odometer Counters** — rolling animation for trust statistics
4. **Road Line Dividers** — dashed centerline pattern between sections

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Deployment is automated via GitHub Actions on push to `master`.

## Project Structure

```
src/
  components/
    Navbar.tsx        — Sticky nav with mobile drawer
    Hero.tsx          — Cinematic hero with parallax
    Marquee.tsx       — Continuous service ticker
    Fleet.tsx         — Vehicle showcase grid
    Services.tsx      — Service offerings
    WhyChooseUs.tsx   — Trust stats + reasons
    Process.tsx       — How it works steps
    Testimonials.tsx  — Customer reviews
    Location.tsx      — Map + contact info
    Contact.tsx       — Quote request form
    Footer.tsx        — NAP-consistent footer
    ScrollReveal.tsx  — Scroll animation + Odometer
  lib/
    utils.ts          — Utility functions
```
