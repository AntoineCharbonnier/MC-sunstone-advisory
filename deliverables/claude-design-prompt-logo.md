# Prompt Claude Design — Brand Exploration Page (Logo Sunstone)

> **Outil cible** : Claude Design (https://claude.ai/design)
> **⚠️ Avertissement** : Claude Design n'est pas un générateur d'images IA. Il ne "créera" pas de logo ex nihilo comme Midjourney/Recraft. En revanche il est excellent pour **présenter, explorer et mettre en contexte** des concepts de mark, avec du SVG propre + annotations + règles d'application.
> **Usage** : coller intégralement dans le chat de Claude Design pour générer une page "brand exploration" interactive.

---

## Objective

Create an interactive single-page **brand exploration board** that presents 5 logo concept variations for **Sunstone Advisory** (a premium independent M&A advisory firm based in Paris). The page must be suitable for presenting options to the founder (Marine Charbonnier) for a final selection.

## Audience

Marine Charbonnier, founder of Sunstone Advisory — ex-Carlyle (Private Equity) + ex-Deutsche Bank (Investment Banking). Sophisticated finance professional. She will select one concept, refine it, then hand off to a designer for final vectorization. She values rigor, minimalism, and zero fluff.

## Layout

Single long-scroll page, max-width 1120px, off-white background (`#F5F3EE`). Sections, in order:

1. **Header** (80px tall)
   - Label: `SUNSTONE ADVISORY — BRAND EXPLORATION`
   - Subtitle: `5 mark concepts · Sun + Stone duality · S negative space`

2. **Anatomy Reference** (primary concept, full-width)
   - Left column (40%): large SVG (240×272px) of the reference mark
   - Right column (60%): annotated anatomy — 5 numbered dots matching the 5 structural elements, each with 1-line description
   - The 5 elements to annotate:
     1. Gold quarter-circle — top-right corner (radius 40% of width) → represents the **SUN**. Color `#B8922A`.
     2. Dark quarter-circle — top-left, anchored at (0,0), radius 60% → upper half of the S. Color `#1C1A18`.
     3. Dark quarter-circle — bottom-right, anchored at (80,80), radius 60% → lower half of the S. Color `#1C1A18`.
     4. White S-shaped negative space — flows diagonally from top-right to bottom-left. The visual link between Sun and Stone.
     5. Dark semicircle arch — bottom-center, flat edge on top, dome down, radius 25% → represents the **STONE**. Color `#1C1A18`.

3. **5 Concept Variations Grid** (3 + 2, gap 32px)
   Each card: 220×260px, white background, 1px border `#E4DFD8`, padding 24px.
   Each contains:
   - The SVG mark (140×160px)
   - Concept name (11px uppercase, letter-spacing 0.18em, color `#B8922A`)
   - 2-line description of the variation's distinct choice
   - Pros/Cons as 2 short labels

   **Variation A — Reference (4 shapes)** : the canonical anatomy above. The complete SUN + S + STONE reading.
   **Variation B — No arch** : only the 3 quarter-circles (no bottom semicircle). Cleaner, more abstract, less literal.
   **Variation C — Inverted gold** : gold quarter-circle is placed bottom-left instead of top-right. Reads as a rising sun from a different angle.
   **Variation D — Square-only (no overflow)** : the arch is tucked inside the square (radius reduced to 20%, not protruding). Tighter bounding box, better for favicons.
   **Variation E — Horizontal lockup** : the mark (from Variation A) placed left, wordmark `SUNSTONE ADVISORY` placed right (Cormorant Garamond, 22px, navy `#0F1A2E`, "STONE" in gold `#B8922A`). Spacing: gap = 1.5× mark height.

4. **Palette & Color Rules**
   Three swatches in a row, each 120×120px with hex label underneath:
   - `#F5F3EE` — off-white background
   - `#1C1A18` — near-black (mark)
   - `#B8922A` — warm gold (sun + wordmark accent)
   Below: a note reading "Strict palette. No gradient, no shadow, no stroke, no outline. Flat vector only."

5. **Application Mockups** (2 columns, gap 24px)
   - Left: the horizontal lockup on a navy business card (mockup-style, 3.5:2 ratio)
   - Right: the mark alone as a favicon (32×32px + 64×64px + 128×128px displayed side-by-side to show scalability)

6. **Usage Rules** (text block, max-width 700px)
   - Minimum size: 120px wide (digital), 25mm (print)
   - Minimum clear space: 0.5× mark height
   - Never apply gradients, shadows, outlines, or recolor
   - On dark backgrounds: invert to cream/white + keep gold as gold
   - On light backgrounds: navy `#0F1A2E` or near-black `#1C1A18` for the mark

## Content — Exact SVG specs to use

For **Variation A (Reference)** the SVG paths must be:

```svg
<svg viewBox="0 0 80 92" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark sector top-left -->
  <path d="M 0,0 L 48,0 A 48,48 0 0,0 0,48 Z" fill="#1C1A18"/>
  <!-- Gold sun quarter-circle top-right -->
  <path d="M 48,0 A 32,32 0 0,1 80,32 L 80,0 Z" fill="#B8922A"/>
  <!-- Dark sector bottom-right -->
  <path d="M 80,80 L 32,80 A 48,48 0 0,0 80,32 Z" fill="#1C1A18"/>
  <!-- Dark stone arch bottom-center -->
  <path d="M 20,80 A 20,20 0 0,1 60,80 Z" fill="#1C1A18"/>
</svg>
```

For the other variations: derive from this reference by removing, repositioning or re-anchoring the individual `<path>` elements as described above. Keep the same viewBox and color tokens. No strokes, no gradients, no filters.

## Typography

- Headers / section labels : Inter (fallback sans-serif), uppercase, 11–13px, letter-spacing 0.16–0.22em, color `#C0BBB4` or `#B8922A`.
- Concept names : Inter 11px uppercase, letter-spacing 0.18em, color `#B8922A`.
- Descriptions : Inter 12.5px, line-height 1.75, color `#555`.
- Wordmark in Variation E : Cormorant Garamond 22px, regular, color `#0F1A2E` (with "STONE" sub-span in `#B8922A`).

## Design System Reference

- Background: `#F5F3EE`
- Card background: `#FFFFFF`
- Card border: `1px solid #E4DFD8`
- Section dividers: `0.5px solid #E4DFD8`
- Primary palette: `#1C1A18` (dark), `#B8922A` (gold), `#F5F3EE` (off-white)
- Site palette (for context only, do not use on this page): navy `#0F1A2E`, cream `#F5F0E8`, warm-white `#FAFAF7`

## Constraints (strict)

1. Flat design only — no gradients, shadows, 3D, glow, outline, texture.
2. No generated imagery — only the SVG paths specified above, rendered directly as inline SVG.
3. No decorative icons (no lucide, no emoji, no illustrations outside the mark itself).
4. No AI-generated mockups — the business card and favicon mockups must be simple CSS/SVG shapes, not photorealistic imagery.
5. Color palette strictly limited to the 3 hex values defined above (plus neutrals for text/borders).
6. The page must be responsive: grid collapses to 1 column on mobile (< 640px), 2 columns on tablet.

## Deliverables requested

- A single interactive HTML page (Claude Design canvas view)
- Export-ready as: PDF (for Marine's review), HTML (for dev handoff)
- Include a "Select this concept" affordance next to each variation (not functional — visual affordance only, e.g., a bordered button reading `SELECT`)

## Iteration cues (for follow-up conversation with Claude Design)

Once the first version is on canvas, I will iterate with inline comments on specific cards:
- "Make Variation D tighter — pull the arch fully inside the square"
- "Variation C: the gold should be slightly warmer, try `#C49A30`"
- "Add a 6th concept that's monochrome (no gold) for print use"
- "Tighten vertical rhythm in the Usage Rules section to 8px"
