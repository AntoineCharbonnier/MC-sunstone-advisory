# Prompt Claude Design — Site Sunstone Advisory (One-Pager complet)

> **Outil cible** : Claude Design (https://claude.ai/design)
> **Usage** : coller intégralement dans le chat de Claude Design.
> **Structure du prompt** : respect du format recommandé par la doc Claude Design (Objective / Audience / Layout / Content / Design system / Responsive / Constraints / Deliverables).
> **Source de vérité copy & DA** : Trame Website v7 (validée par Marine Charbonnier, mars 2026).

---

## Objective

Build a fully interactive, production-quality **one-pager website prototype** for **Sunstone Advisory**, a premium independent M&A advisory boutique based in Paris. The page is a credibility showcase whose single purpose is to convert a qualified visit into an email contact — not to explain services in depth. Output must be ready for dev handoff (clean semantic HTML + design tokens) and for export to PDF / Canva / Claude Code.

## Audience

Two reader types:

1. **Primary**: corporate executives, founders, family-office principals, and private equity dealmakers considering a transaction (M&A, fundraising, exit, ownership transition). They will spend 60–90 seconds scanning, and decide whether to click "Get in touch."
2. **Secondary**: the founder (Marine Charbonnier, ex-Carlyle + ex-Deutsche Bank), who needs the site to look unmistakably premium and signal rigor. Zero fluff, zero startup aesthetic, zero buzzword.

Tone: direct, senior, sophisticated. References: Lazard, Rothschild, Ondra Partners. Not: fintech, agency, consulting pitch deck.

## Layout

One-pager, vertical scroll, **max content width 900px centered**, with sticky top navigation. Sections separated by `0.5px solid #E4DDD0` dividers. Generous whitespace throughout. No hero image, no illustrations, no icons — typography carries the weight.

Section order (9 blocks):

### 1. NAV (sticky top)
- Flex, space-between.
- Left: wordmark `SUNSTONE ADVISORY` (uppercase, wide letter-spacing; "STONE" in gold `#C8A060`).
- Center: discreet links `About · Services · Why Sunstone · Contact` (small, navy, no underline).
- Right: button `GET IN TOUCH` (navy fill, white text, uppercase, no border-radius).
- Behavior: transparent background on hero → navy `#0F1A2E` background at scroll.

### 2. HERO
- Single column, padding `80px 48px 72px`.
- Tag (uppercase small label, gold): `INDEPENDENT ADVISORY`
- H1 (serif 32px, max-width 620px): *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*
- Subtitle (14px, gray, max-width 480px): *With the perspective of an investor.*

### 3. ABOUT SUNSTONE
- Section label `ABOUT SUNSTONE` (uppercase, 11px, gold, letter-spacing 0.16em).
- 3 equal columns, gap 32px. Each column has a **gold dot (5×5px) preceding the title**.

| Dot | Title | Copy |
|-----|-------|------|
| ● | Critical transaction support | Sunstone Advisory works with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect. |
| ● | An investor's perspective | Most advisors have seen deals from one side of the table — as banker or investor. Sunstone Advisory brings both perspectives, combining years of deal execution with private equity experience in assessing, negotiating, owning and selling companies. |
| ● | Hands-on involvement | A transaction partner embedded in your team and acting as a direct counterpart to management throughout the process. |

### 4. OUR APPROACH
- Section label `OUR APPROACH`.
- **Navy background** (`#0F1A2E`), white + gold text. 2 equal columns, gap 0 with a thin gold vertical separator.
- Card 1 — large typographic treatment `SUN` **STONE** ("SUN" rendered in gold-digital `#FFDF90`, STONE in white) → tagline below: *Rigorous. Structured. Reliable.*
- Card 2 — large typographic treatment **SUN** ("SUN" rendered in gold-digital) → tagline below: *Clear. Pragmatic. Easy to work with.*
- This section IS the brand DNA — contrast must be maximal.

### 5. SERVICES
- Section label `SERVICES`.
- 3 equal columns, gap 24px. Each column = card with `1px solid #E4DDD0` border, padding 28px.
- Structure: uppercase title + thin separator line + list of items prefixed by a gold em-dash `—` (NOT HTML bullets).

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

### 6. WHY SUNSTONE
- Section label `WHY SUNSTONE`.
- 2×2 grid, gap 24px. Each cell = card with `1px solid #E4DDD0` border, padding 28px.

| Title | Copy |
|-------|------|
| Experienced partner | 20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings and fundraisings. |
| A critical sounding board | Beyond process and deliverables, we challenge analysis, pressure-test assumptions and sharpen investment cases — whether assessing an opportunity or preparing for investor scrutiny. |
| Hands-on approach | Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate handled directly — no layers, no dilution. |
| Independent and fully aligned | No conflicts of interest, no proprietary products to push, no cross-selling agendas — fully aligned with your objectives. |

### 7. FOUNDER (Bio)
- **No section label** — this block stands alone.
- 2 equal columns, gap 64px.

**Left column**:
- Name : `Marine Charbonnier` (Inter 18px medium, navy)
- Paragraph 1 (body 13–14px, line-height 1.75):
  *A decade in investment banking and private equity — first structuring and executing deals at Deutsche Bank, then assessing, negotiating, owning and selling them as an investor at Carlyle's European Buyout fund. Over a hundred opportunities assessed and 20+ closed.*
- Paragraph 2 (12px, gray `#7A7A7A`, line-height 1.75):
  *Sunstone Advisory is built on that experience, and the conviction that the best transaction support comes from understanding not only how processes work, but how investors really think.*
- Logo badges row (horizontal, monochrome gray, `1px solid #E4DDD0`, uppercase, padding 4px 10px, gap 12px):
  `DEUTSCHE BANK` · `CARLYLE` · `DAUPHINE`

**Right column** (`border-left: 2px solid #C8A060`, padding-left 24px):
- Quote in Cormorant Garamond 15px italic, navy:
  > *Rigorous in execution.*
  > *Pragmatic in approach.*
  > *Easy to work with.*

### 8. CONTACT
- Flex, space-between, vertically centered.
- **Left**:
  - H3 (Cormorant Garamond 22px): `Let's talk.`
  - Subtitle (13px, gray): *Based in Paris, France. Working globally. Reachable in French and English.*
- **Right** (right-aligned):
  - Button `GET IN TOUCH` (navy fill, white, uppercase)
  - `marine@sunstoneadvisory.com` (12px, gray, mailto link)
  - `linkedin.com/in/marinecharbonnier` (12px, gray, external link)

### 9. FOOTER
- Navy background `#0F1A2E`, white text.
- Flex, space-between.
- Left: wordmark `SUNSTONE ADVISORY` (same treatment as nav, "STONE" in gold `#C8A060`).
- Right: `Paris, France · © 2026`

---

## Content — Rules (strict, do not paraphrase)

- **Language**: English throughout the site. French is only mentioned once ("Reachable in French and English" in Contact).
- **Voice**: "we / our" across the site. Bio section is the only exception — written in third person about Marine.
- **Copy is locked** : every sentence above is the validated v7 wording. Do not rewrite, do not add transitions, do not soften.
- **No testimonials, no quotes from clients** — deliberate credibility strategy via logos + numbers (20+ / 100+) + precision.
- **No HTML bullets (`<ul>`)** — use em-dashes `—` prefixed in the Services section, and gold dots `●` in the About section. Everywhere else: prose paragraphs.
- **Exactly 3 services** : M&A Advisory (Buy & Sell) / Portfolio Work & Exit Support / Fundraising Advisory. Not 2, not 4.

---

## Design System

### Color tokens (use exact hex values)

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#0F1A2E` | Dark fills, primary text on light, Our Approach bg, Footer bg |
| `navy-mid` | `#1A2744` | Secondary dark fills, hover states |
| `slate` | `#2C3E5A` | Dark borders, separators |
| `gold-print` | `#C8A060` | Logo accent ("STONE"), section labels, gold dots, em-dashes, vertical bar |
| `gold-digital` | `#FFDF90` | Highlights on navy bg (Our Approach headings) |
| `cream` | `#F5F0E8` | Alternate section background (optional) |
| `warm-white` | `#FAFAF7` | Main page background |
| `border-light` | `#E4DDD0` | Card borders, section dividers |
| `text-body` | `#3A3A3A` | Body text |
| `text-gray` | `#7A7A7A` | Captions, metadata, secondary copy |

### Typography

| Usage | Family | Size | Style |
|-------|--------|------|-------|
| H1 hero | Cormorant Garamond / Playfair Display | 32px | Regular |
| H2 / H3 | Cormorant Garamond / Playfair Display | 22px | Regular |
| Body | Inter / DM Sans | 13–14px | Regular, line-height 1.75 |
| Section label | Inter / DM Sans | 11px | Uppercase, letter-spacing 0.16em |
| Card body | Inter / DM Sans | 12px | Regular, line-height 1.75 |
| Bio name | Inter | 18px | Medium |
| Bio quote | Cormorant Garamond | 15px | Italic |
| Wordmark (nav/footer) | Inter | 13px | Uppercase, letter-spacing 0.22em |

### Spacing

| Zone | Value |
|------|-------|
| Section padding (vertical × horizontal) | `64px 48px` |
| Hero padding | `80px 48px 72px` |
| Max content width | `900px` |
| About columns gap | `32px` |
| Services / Why Sunstone gap | `24px` |
| Bio columns gap | `64px` |
| Section divider | `0.5px solid #E4DDD0` |
| Card padding | `28px` |

### Recurring UI components

- **Section label**: uppercase, 11px, gold, letter-spacing 0.16em, margin-bottom 32px.
- **Gold dot**: `●` circle 5×5px, fill gold-print, precedes About titles.
- **Em-dash bullet**: `—` in gold-print, replaces HTML bullets in Services cards.
- **Vertical bar**: `border-left: 2px solid gold-print` for the Bio quote.
- **Logo badge**: `1px solid #E4DDD0`, uppercase, padding 4px 10px, gray text.
- **CTA button**: navy fill, white text, uppercase, letter-spacing 0.1em, NO border-radius.
- **Section divider**: `0.5px solid #E4DDD0`, full width.
- **Card**: white bg, `1px solid #E4DDD0`, padding 28px, no shadow.

---

## Responsive behavior

- **Desktop** (≥ 960px): as described above.
- **Tablet** (640–960px): 3-col sections (About, Services) collapse to 2 columns. Bio stays 2 columns. Nav links still visible.
- **Mobile** (< 640px): all multi-column sections stack to 1 column. Nav collapses to hamburger menu. Hero H1 wraps on 4–5 lines, padding reduced to `48px 24px`. Services cards stack with gap 16px. Footer stacks vertically, left-aligned.
- **Minimum supported viewport**: 360px wide.

---

## Constraints (strict)

1. **Zero images, zero illustrations, zero icons** — typography, color, spacing, and the two brand elements (gold dot, em-dash, vertical bar, logo badge) carry all visual weight.
2. **No gradients, no shadows, no 3D effects, no glows** anywhere. Flat and sober throughout.
3. **No animations beyond** subtle nav fade-in on scroll (background transparent → navy) and optional gentle fade-in-up on section scroll (0.4s ease-out). No parallax, no autoplay, no reveal cascades.
4. **Logo is NOT finalized** — use the text wordmark `SUNSTONE ADVISORY` (with "STONE" in gold) in nav and footer. Leave a placeholder comment in the handoff for the final logo integration.
5. **Accessibility baseline** (WCAG 2.1 AA):
   - Color contrast: all body text ≥ 4.5:1, large text ≥ 3:1 against its background.
   - Focus states visible (gold outline 2px) on all interactive elements.
   - Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, proper heading hierarchy (one H1, H2 per section).
   - All links have accessible text (no "click here").
6. **No third-party embeds, no analytics scripts, no cookie banners** in the prototype.

---

## Deliverables requested

- Interactive HTML prototype rendered on the Claude Design canvas.
- **Export targets**: HTML (for dev handoff to Next.js / Astro / Framer), PDF (Marine's review), Claude Code handoff bundle (local agent version).
- Include a design-token file or CSS custom properties block (`:root { --navy: #0F1A2E; ... }`) so dev can lift tokens directly.
- Include anchor IDs for SEO/navigation: `#about`, `#approach`, `#services`, `#why-sunstone`, `#contact`.

---

## SEO meta (to include in the exported HTML)

```html
<title>Sunstone Advisory — M&A, Fundraising & Transaction Advisory</title>
<meta name="description" content="Independent transaction advisory firm. M&A advisory, fundraising and portfolio work, combining investment banking and private equity experience. Based in Paris, working globally." />
<meta property="og:title" content="Sunstone Advisory" />
<meta property="og:description" content="Advisory for high-stakes transactions." />
<meta property="og:image" content="/og-image.png" />
<link rel="canonical" href="https://sunstoneadvisory.com/" />
```

Schema.org JSON-LD (`ProfessionalService`) :

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sunstone Advisory",
  "founder": { "@type": "Person", "name": "Marine Charbonnier" },
  "address": { "@type": "PostalAddress", "addressLocality": "Paris", "addressCountry": "FR" },
  "areaServed": "Global",
  "knowsLanguage": ["en", "fr"],
  "serviceType": ["M&A Advisory", "Fundraising Advisory", "Portfolio Work & Exit Support"]
}
```

---

## Iteration cues (for follow-up conversation with Claude Design)

Once the first version is on canvas, I will iterate with inline comments and targeted requests:
- "Tighten the vertical rhythm across all sections to a consistent 64px"
- "Our Approach: make the SUN/STONE contrast more dramatic — increase H1 size to 64px"
- "Services cards: align all three to equal height even if copy lengths differ"
- "Add a 2nd variation of the Hero with the H1 split across two lines (`Advisory for high-stakes transactions —` / `M&A, exits, fundraising and ownership transitions.`)"
- "Audit this page for WCAG 2.1 AA compliance"
- "Produce a mobile-first redesign variant keeping exact copy"
- "Handoff bundle for Claude Code — package as Next.js 14 (App Router, Tailwind)"
