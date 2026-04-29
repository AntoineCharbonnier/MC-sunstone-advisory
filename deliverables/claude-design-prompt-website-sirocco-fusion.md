# Prompt Claude Design — Site Sunstone (fusion template Sirocco)

> **Outil cible** : Claude Design (https://claude.ai/design)
> **Source du template de référence** : Sirocco — Luxury Desert Retreat (Aura.build template)
> **Source de vérité copy/DA Sunstone** : Trame Website v7 (mars 2026) + `deliverables/figma-brief.md`
> **Ce que ce prompt fusionne** :
> — le **squelette conceptuel** Sirocco (dualité jour/nuit → Sun/Stone, transition section, hero à grande typo, stats strip, bento, reveals staggered, noise texture, section dividers gold)
> — le **contenu et le positionnement** Sunstone (copy v7 verbatim, voix "we/our", palette navy/gold-print/cream, 3 services, 4 piliers Why Sunstone, bio Marine Charbonnier)
> **⚠️ Tensions assumées** : pas d'images photographiques (contrairement à Sirocco), pas d'icônes décoratives, pas de ton narratif poétique, pas de prix affichés. Les visuels sont remplacés par de la typographie et des formes géométriques SVG dérivées du mark Sunstone.

---

## Objective

Build a fully interactive, production-quality **one-pager website prototype** for **Sunstone Advisory** that adopts the **structural and visual rhythm** of the Sirocco template (day→night polarity, large hero typography, transition section with central quote, stats strip, bento layout, staggered reveals, noise texture, gold accent dividers) while re-skinning it to Sunstone's brand (navy/gold/cream palette, no photography, Cormorant Garamond + Inter type stack, validated v7 copy, corporate finance tone). The visual DNA should read "independent premium advisory boutique with a craft aesthetic" — not "luxury desert retreat" and not "sterile corporate template."

The Sun/Stone brand duality (already core to Sunstone positioning) is the conceptual backbone: **"Sun" sections use the cream/gold palette on light background, "Stone" sections use the navy/gold-digital palette on dark background**, with a dramatic transition between them.

## Audience

Same two reader types as the canonical Sunstone brief:
1. **Primary** — executives, founders, family-office principals, PE dealmakers scanning for 60–90 seconds before deciding to click "Get in touch."
2. **Secondary** — Marine Charbonnier (founder, ex-Carlyle + ex-Deutsche Bank) who must recognize this as unmistakably premium and zero-fluff.

The site cannot look like: a boutique hotel, a startup, a consulting pitch deck, or a no-code builder default. The Sirocco-inspired rhythm introduces warmth and craft without slipping into wellness/retreat aesthetics.

## Layout — 9 sections, Sun-side / Stone-side alternation

Max content width `1100–1200px`, centered, with a **sticky nav** that shifts behavior on `day-section` vs. `night-section` (transparent → navy-glass on Stone-side). A **fine noise texture SVG overlay** sits on the body at `opacity: 0.035` (same pattern as Sirocco) to give a subtle craft-paper feel. Section dividers = `80px × 1px` horizontal line with radial gold gradient, centered.

### 1. NAV (sticky, dual behavior)
- Flex, space-between, padding `16px 0`.
- Left: wordmark `SUNSTONE` in Cormorant Garamond `1.1rem`, letter-spacing `0.15em`, color adapts to section (cream on Stone, navy on Sun).
- Center: links `Story · Services · Approach · Why Sunstone · Contact`, Inter `0.78rem`, letter-spacing `0.06em`, opacity 0.85 → 1 on hover.
- Right: CTA `RESERVE A CALL` (NOT "Get in touch" here — follow Sirocco's CTA tone but keep it professional), bordered (`1px solid rgba(212,168,83,0.4)`), color gold, uppercase, `0.72rem`.
- Behavior: transparent on hero → `rgba(10,15,30,0.92)` with `backdrop-filter: blur(16px)` when scrolled over Stone section; → `rgba(250,250,247,0.92)` glass on Sun sections. Border-bottom `1px solid rgba(212,168,83,0.12)` when scrolled.
- Mobile : hamburger with full-screen overlay (navy backdrop `rgba(10,15,30,0.96)` + `backdrop-filter: blur(20px)`), links in Cormorant `1.6rem`.

### 2. HERO (Sun-side, full viewport)
- Height `100vh`, flex-center.
- **No background image.** Instead: a large-scale version of the **Sunstone mark SVG** (from `deliverables/prompt-logo-consolidated.md`, Variation A — the reference with 4 shapes) rendered at `30–40vw` width, positioned right-center, opacity `0.06`, `filter: saturate(0.85)`. Acts as a ghost graphic watermark.
- Overlay gradient subtle bottom-to-top: `linear-gradient(to bottom, rgba(245,240,232,0) 0%, rgba(245,240,232,0.4) 78%, #FAFAF7 100%)`.
- Centered content column, gap 12px:
  - Location tag (adapting Sirocco's `hero-location` pattern): `iconify-icon` + `PARIS, FRANCE` — `0.72rem`, uppercase, letter-spacing `0.15em`, color `gold-print`.
  - **H1** in Cormorant Garamond, weight 300, `clamp(4rem, 10vw, 7.5rem)`, letter-spacing `0.15em`, color navy `#0F1A2E`, line-height 1: `SUNSTONE`
  - Subtitle in Cormorant Garamond **italic** 300, `clamp(1rem, 2vw, 1.3rem)`, color `gold-print`: *Advisory for high-stakes transactions.*
  - Gold line divider `60px × 1px`.
  - **CTA** with Sirocco's conic-gradient animated border: `padding: 16px 44px`, `background: rgba(15,26,46,0.04)`, `backdrop-filter: blur(8px)`, text `GET IN TOUCH` (`0.76rem`, uppercase, letter-spacing `0.18em`, color navy). Use the `@property --border-angle` + `conic-gradient` trick with gold accent.
- Scroll indicator bottom-center: `SCROLL` label (`0.62rem`, letter-spacing `0.2em`) + `1px × 36px` gold line with `scroll-pulse` animation.

### 3. STORY / ABOUT (Sun-side)
- Replaces Sirocco's "Our Story" Philosophy section.
- Grid `1fr / 1.15fr`, gap 60px, align-center.
- **Left column** (text, reveal-left):
  - Section label `ABOUT SUNSTONE` (uppercase `0.72rem`, letter-spacing `0.12em`, color `gold-print`, margin-bottom 16px).
  - H2 Cormorant Garamond 300, `clamp(1.6rem, 3vw, 2.2rem)`, letter-spacing `-0.02em`, line-height 1.3: *An investor's perspective, on your side of the table.*
  - Para 1 (Inter `0.82rem`, line-height 1.75, color `text-body`): *Sunstone Advisory works with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect.*
  - Para 2 (same style): *Most advisors have seen deals from one side of the table — as banker or investor. Sunstone brings both perspectives, combining years of deal execution with private equity experience in assessing, negotiating, owning and selling companies.*
- **Right column** (NO photo — replacement with a geometric composition, reveal):
  - `aspect-ratio: 4/5`, `border-radius: 12px`, background `cream`, overflow hidden.
  - Inside: the **Sunstone mark SVG** (Variation A) at ~60% of container width, centered, color tokens `#1C1A18` + `#B8922A` on `#F5F0E8`.
  - Bottom gradient overlay identical to Sirocco: `linear-gradient(to bottom, transparent, rgba(245,237,224,0.6))` on bottom 30%.
- **Stats strip** below (same layout as Sirocco — grid-cols-4, gap 24px, margin-top 80px, border-top `1px solid rgba(200,160,96,0.15)`, stagger-up animation):
  - `2017` / Founded (counting up)
  - `100+` / Opportunities Assessed
  - `20+` / Transactions Closed
  - `3` / Service Lines
  - Each: value Cormorant 300 `1.8rem` color navy; label Inter `0.68rem` uppercase letter-spacing `0.1em` color `text-body`.

### 4. SERVICES (Sun-side, grid 3 columns — keep Sirocco's card layout but text-only)
- Section label `SERVICES`, H2 *"Where we help."* (Cormorant 300, `clamp(1.8rem, 3.5vw, 2.4rem)`).
- Grid 3 columns, gap 24px. Cards: `border-radius: 12px`, `background: rgba(255,255,255,0.5)`, `border: 1px solid rgba(200,160,96,0.1)`, `transition: transform 0.5s, box-shadow 0.5s`. Hover: `translateY(-4px)` + `box-shadow: 0 16px 48px rgba(15,26,46,0.08)`.
- **NO image section inside cards.** Replace Sirocco's `suite-image` with a header band: height 80px, solid `cream`, centered typographic treatment — the service initial letter in Cormorant 300 `4rem`, color `gold-print`, opacity 0.35 ("M" / "P" / "F").
- Inside each card (padding 24px):
  - H3 Cormorant 400 `1.3rem`, navy, uppercase with letter-spacing `0.06em`.
  - Em-dash list (NO HTML bullets, NO prices), each line `0.78rem` Inter, color `text-body`, `—` prefix in `gold-print`:

**Card 1 — M&A ADVISORY (BUY & SELL)**
— Process preparation and management
— Due diligence oversight and review
— Valuation, structuring and financing
— Negotiation and documentation
— Closing

**Card 2 — PORTFOLIO WORK & EXIT SUPPORT**
— Value creation execution
— Add-on acquisitions
— Investor and board interactions
— Financing & refinancing
— Equity story and BP refinement
— Exit preparation and process

**Card 3 — FUNDRAISING ADVISORY**
— Process drive and execution
— Equity story and materials
— Q&A preparation and management
— Investor follow-up and tracking
— Term sheet and documentation

- Section divider (80px × 1px gold gradient) after the section.

### 5. TRANSITION SECTION (Sun → Stone bascule)
- **This is the Sirocco signature moment**, re-skinned without stars.
- `height: 100vh`, `display: flex`, `align-items: center`, `justify-content: center`.
- **Background gradient** (vertical, dramatic): `linear-gradient(to bottom, #FAFAF7 0%, #F5F0E8 15%, #8B9BAF 35%, #2C3E5A 55%, #1A2744 75%, #0F1A2E 100%)`.
- **NO stars.** Instead: a grid pattern of **8×12 dots** (diameter 2px, color `gold-print` at opacity 0.25), spaced on a rigorous orthogonal grid, positioned over the darker half of the gradient. Purely typographic/minimalist feel — no animation or subtle fade-in-up only.
- **Centered quote** (the signature Sunstone line, from the bio):
  - Short gold line divider `48px × 1px`, opacity 0.5.
  - Quote block, Cormorant 300 italic, `clamp(1.4rem, 3.5vw, 2.6rem)`, color `gold-digital`, line-height 1.7, text-shadow `0 2px 20px rgba(0,0,0,0.3)`, padding `32px 24px`, text-align center:
    > *Rigorous in execution.*
    > *Pragmatic in approach.*
    > *Easy to work with.*
  - Short gold line divider `48px × 1px`, opacity 0.5.

### 6. OUR APPROACH (Stone-side, navy background)
- Replaces Sirocco's "Wellness" wellness-hero pattern — but image-free.
- Section label `OUR APPROACH` (color `gold-digital` on Stone-side).
- H2 `The Sun and the Stone — two halves of how we work.` (Cormorant 300, cream).
- 2 equal columns, gap 0, with a thin vertical gold separator `1px solid rgba(200,160,96,0.15)` between them. Padding 48px each side.
- **Left column (Stone)**:
  - Oversized typographic treatment: `STONE` in Cormorant 300 `clamp(3rem, 6vw, 4.5rem)`, color `gold-digital`, letter-spacing `0.08em`, uppercase.
  - Sub-label below (Inter `0.72rem`, uppercase, letter-spacing `0.12em`, color `gold-print`): *Rigorous. Structured. Reliable.*
  - Body paragraph in `cream-muted`, Inter `0.82rem`, line-height 1.75: short elaboration (to be drafted from positioning.md — something about discipline and repeatability in execution).
- **Right column (Sun)**:
  - `SUN` treatment same size, `gold-digital`.
  - Sub-label: *Clear. Pragmatic. Easy to work with.*
  - Body paragraph: short elaboration about clarity of judgment and directness of relationship.
- **NO night-glow radial** behind the section (Sirocco has it — Sunstone should stay cleaner). Optional: very faint `gold-digital` dot-grid pattern in the section background at opacity 0.04.

### 7. WHY SUNSTONE (Stone-side, bento layout — this is where we adopt Sirocco's cuisine bento)
- Section label `WHY SUNSTONE` (color `gold-digital`).
- H2 `What separates us` (Cormorant 300, cream).
- **Bento grid** `1.3fr / 1fr`, `grid-template-rows: 1fr 1fr`, gap 20px, min-height 480px.
  - **Bento-large (left, grid-row: 1/3)** — the flagship pillar:
    - Border-radius 14px, padding 48px, background `rgba(255,255,255,0.03)`, border `1px solid rgba(200,160,96,0.15)`.
    - H3 Cormorant 400 `1.6rem`, cream: *Experienced partner.*
    - Body (cream-muted, `0.82rem`, line-height 1.75): *20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings and fundraisings.*
    - Decorative oversized numeric `20+` in top-right corner, Cormorant 300 `5rem`, color `gold-digital` at opacity 0.15.
  - **Bento-text-card top-right** (padding 32px, same card style):
    - H3: *A critical sounding board.*
    - Body: *Beyond process and deliverables, we challenge analysis, pressure-test assumptions and sharpen investment cases — whether assessing an opportunity or preparing for investor scrutiny.*
  - **Bento-text-card bottom-right**:
    - H3: *Hands-on approach.*
    - Body: *Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate handled directly — no layers, no dilution.*
- A 4th pillar *Independent and fully aligned* goes below the bento, full-width, with the same card style (padding 32px, border, radius) — title + body on a single row. This preserves the 4 Why Sunstone pillars from v7 without losing the asymmetric bento feel.

### 8. FOUNDER / BIO (Stone-side, adapting Sirocco's excursions-list horizontal pattern)
- Section label `FOUNDER` (gold-digital).
- H2 `Marine Charbonnier` (Cormorant 400 `1.8rem`, cream, NOT uppercase — keep name proper-cased).
- **Horizontal card** (adapting Sirocco's `excursion-card` grid 280px/1fr, gap 32px):
  - **Left column (280px)** — typographic portrait (NO photo):
    - Aspect 3/4, border-radius 10px, background `rgba(212,168,83,0.08)`, border `1px solid rgba(212,168,83,0.15)`, flex-center.
    - Inside: initials `MC` in Cormorant 300 `7rem`, color `gold-digital`, opacity 0.8.
  - **Right column**:
    - Body para 1 (cream, `0.82rem`, line-height 1.75): *A decade in investment banking and private equity — first structuring and executing deals at Deutsche Bank, then assessing, negotiating, owning and selling them as an investor at Carlyle's European Buyout fund. Over a hundred opportunities assessed and 20+ closed.*
    - Body para 2 (cream-muted, `0.78rem`): *Sunstone Advisory is built on that experience, and the conviction that the best transaction support comes from understanding not only how processes work, but how investors really think.*
    - Logo badges row (horizontal, gap 12px, margin-top 20px): `DEUTSCHE BANK` · `CARLYLE` · `DAUPHINE` — uppercase, Inter `0.68rem`, padding `4px 10px`, border `1px solid rgba(212,168,83,0.2)`, color cream-muted.
- Below the card, aligned right, the signature quote in Cormorant 300 italic `1.1rem`, color `gold-digital`, with gold vertical bar `2px` left-border (`padding-left: 24px`):
  > *Rigorous in execution. Pragmatic in approach. Easy to work with.*
  (Note: this echoes the transition section intentionally — reinforcement of the brand DNA.)

### 9. RESERVE / CONTACT (Stone-side, adapting Sirocco's `.reserve` section)
- Min-height 80vh, flex-center, text-center, overflow hidden.
- **Background**: deep navy `#0A0F1E` with a very large-scale ghost `SUNSTONE` wordmark in Cormorant 300 at 18vw, letter-spacing 0.3em, color `gold-digital` at opacity 0.04, centered — like a watermark.
- **Overlay**: `rgba(10,15,30,0.4)` to deepen.
- Content column, max-width 560px, padding 60px 24px:
  - Section label `GET IN TOUCH` (gold-digital).
  - H2 Cormorant 300 `clamp(2rem, 5vw, 3.2rem)`, cream, letter-spacing `-0.02em`: *Let's talk.*
  - Body (cream-muted, `0.85rem`): *Based in Paris, France. Working globally. Reachable in French and English.*
  - **CTA** (Sirocco's `.reserve-cta` pattern): padding `18px 52px`, `background: linear-gradient(135deg, #C8A060, #B8922A)`, color white, Inter 500, `0.78rem`, letter-spacing `0.14em`, uppercase, NO border-radius (sharp edge — stricter than Sirocco's 2px). Hover: `translateY(-2px)` + `box-shadow: 0 12px 40px rgba(200,160,96,0.3)`. Text: `GET IN TOUCH`.
  - Contact row below, gap 32px, flex-wrap (Inter `0.76rem`, cream-muted):
    - `marine@sunstoneadvisory.com` (mailto link)
    - `linkedin.com/in/marinecharbonnier` (external link)

### 10. FOOTER (Stone-side, matches Sirocco)
- Navy `#0A0F1E`, border-top `1px solid rgba(200,160,96,0.08)`, padding 60px 0 32px.
- Grid `1.5fr / 1fr / 1fr`, gap 48px.
  - **Col 1**: wordmark `SUNSTONE` (Cormorant 400 `1rem`, cream, letter-spacing `0.06em`); address (cream-muted, `0.76rem`): *Paris, France · Working globally*.
  - **Col 2 — Explore**: links About · Services · Approach · Why Sunstone · Contact.
  - **Col 3 — Connect**: LinkedIn · Email.
- Footer-bottom: border-top `1px solid rgba(255,255,255,0.06)`, text-center, copyright `© 2026 Sunstone Advisory. All rights reserved.` (cream-muted, `0.68rem`).

---

## Content — Copy rules (strict)

- **Language** : English throughout, except the "French and English" mention in Contact.
- **Voice** : "we / our". Bio section in 3rd person about Marine.
- **Locked copy** : every sentence in sections 2–9 that appears quoted above is verbatim from Trame v7. Do NOT paraphrase. Sirocco's poetic tone ("Born from the ancient whisper", "Where the desert whispers and the stars ignite") MUST NOT contaminate Sunstone copy.
- **No pricing** (Sirocco shows "From €480 / night" — Sunstone: never).
- **No testimonials**, no decorative icons (Lucide icons in Sirocco's wellness/excursions → removed).
- **Exactly 3 services, exactly 4 Why Sunstone pillars**.

---

## Design System — Tokens

Replace Sirocco's entire `:root` block with Sunstone tokens:

```css
:root {
  /* Sun-side (light/warm) */
  --warm-white: #FAFAF7;     /* main background */
  --cream: #F5F0E8;          /* alternate section bg */
  --cream-soft: #F0E6D6;     /* rare accents */

  /* Stone-side (dark) */
  --navy: #0F1A2E;           /* primary dark */
  --navy-deep: #0A0F1E;      /* footer / reserve */
  --navy-mid: #1A2744;       /* secondary dark */
  --slate: #2C3E5A;          /* separators */

  /* Gold accents */
  --gold-print: #C8A060;     /* on light bg */
  --gold-digital: #FFDF90;   /* on dark bg */

  /* Text */
  --text-body: #3A3A3A;
  --text-gray: #7A7A7A;
  --cream-muted: rgba(240,230,214,0.6);

  /* Borders */
  --border-light: #E4DDD0;
  --border-gold-faint: rgba(200,160,96,0.12);
  --border-gold-mid: rgba(200,160,96,0.2);

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Easing (keep Sirocco's) */
  --ease: cubic-bezier(0.33, 1, 0.68, 1);
}
```

Keep Sirocco's:
- `body::before` noise texture (SVG fractalNoise base64, opacity 0.035)
- `html { scroll-behavior: smooth }`
- Section divider `80px × 1px` with `linear-gradient(90deg, transparent, var(--gold-print), transparent)`
- `@property --border-angle` + conic-gradient for hero CTA
- Scroll indicator pulse animation
- Staggered reveals (`.reveal`, `.reveal-left`, `.stagger-up` with nth-child delays 0 / 0.12s / 0.24s / 0.36s)

---

## Responsive

- **Desktop** (≥ 1024px) : as described.
- **Tablet** (640–1024px) : Story grid → 1 column; bento → stacked; Services grid → 2 cols + 3rd spanning full; Our Approach → 1 column (Stone first, then Sun).
- **Mobile** (< 640px) : all grids collapse to 1 column; Hero H1 `clamp(3rem, 14vw, 5rem)` letter-spacing `0.12em`; stats-strip 2×2; nav → hamburger overlay; Reserve CTA full-width; Founder card stacks (portrait tile on top, text below).

---

## Constraints (strict)

1. **No photography** anywhere. All "image" slots in the Sirocco original are replaced with: the Sunstone mark SVG (from Variation A), large typographic treatments (initials, wordmarks), or solid color panels with subtle dot-grid patterns.
2. **No decorative icons** (Lucide or otherwise). Sirocco's `droplets`, `hand`, `sun` icons and `map-pin` → all removed. The only SVG allowed is the Sunstone mark and generic typography.
3. **No stars** in the transition section → replaced by orthogonal dot-grid.
4. **No poetic copy** — Sirocco's narrative tone ("Born from the ancient whisper", "Where silence speaks, sands shift") is forbidden. All copy is the v7 validated text.
5. **No pricing, no testimonials, no client logos** (the 3 credential badges Deutsche Bank / Carlyle / Dauphine are the only logo-style elements).
6. **No parallax, no autoplay video, no heavy scroll animations** beyond: nav fade, section reveal-up (0.8s ease-out), stats count-up on reveal, staggered card reveals (0.12s steps), scroll indicator pulse, hero CTA border conic rotation.
7. **Accessibility (WCAG 2.1 AA)** : body text ≥ 4.5:1, large ≥ 3:1; focus states gold outline 2px; semantic `<nav>`, `<main>`, `<section>`, one H1, H2s per section; anchor IDs `#story`, `#services`, `#approach`, `#why-sunstone`, `#founder`, `#contact`.
8. **Performance** : no external images, no third-party embeds, noise texture is a base64 data-URL, fonts loaded via `<link preconnect>` + `<link rel="stylesheet">` to Google Fonts.

---

## Deliverables requested

- Interactive HTML prototype on the Claude Design canvas.
- Exports: HTML, PDF (Marine review), Claude Code handoff bundle (Next.js 14 / Astro / plain HTML — recipient's choice).
- CSS custom properties block (`:root { … }`) lifted as a `tokens.css` file for direct dev import.
- SVG of the Sunstone mark (Variation A) embedded inline in sections 2, 3, 9 (hero ghost, story panel, reserve watermark).
- SEO meta tags and JSON-LD `ProfessionalService` schema (same as canonical brief).

---

## Iteration cues (for follow-up in Claude Design)

- "Tighten the Sun→Stone gradient in the transition section — currently too abrupt, I want a 2-stop interpolation through slate."
- "Hero: try a second variant where SUNSTONE is split across two lines with the mark SVG between them."
- "Services cards: add a subtle gold `→` icon bottom-right on hover, replacing the nothing-state."
- "Bento in Why Sunstone: swap to a 2×2 grid if the 1.3fr/1fr asymmetry feels too boutique-hotel."
- "Founder section: test a second variant with MC in a round tile (aspect 1/1) instead of 3/4."
- "Audit for WCAG 2.1 AA — I suspect the `gold-digital on navy` contrast is borderline on small text."
- "Produce a monochrome print-friendly version — no gold, navy + cream only, for the PDF export."
- "Handoff bundle as Astro with Tailwind — map each token to Tailwind's theme.extend.colors."
