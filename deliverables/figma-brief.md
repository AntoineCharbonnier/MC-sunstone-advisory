# Sunstone Advisory — Figma Brief (référence consolidée)

> **Source de vérité unique** pour tout travail Figma ou développement.
> Consolide : copy-final.md + visual-identity.md + wireframe-reference.md + seo.md + structure.md
> Dernière mise à jour : Mars 2026 — Trame v7 définitive.
> ⚠️ Ne pas modifier sans validation Marine Charbonnier.

---

## Fichier Figma

- **URL** : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone?node-id=0-1
- **File Key** : `u3sdMzjybYKrvQ0SPORWpy`
- **Node cible** : `0-1`

---

## Design Tokens

### Couleurs (production-ready)

| Token name       | Hex       | Usage                                    |
|------------------|-----------|------------------------------------------|
| `navy`           | `#0F1A2E` | Fonds dark, texte principal sur clair    |
| `navy-mid`       | `#1A2744` | Fonds secondaires, hover                 |
| `slate`          | `#2C3E5A` | Bordures, séparateurs dark               |
| `gold-print`     | `#C8A060` | Logos, accents print, or "chaud"         |
| `gold-digital`   | `#FFDF90` | Accents sur fond navy, highlights        |
| `cream`          | `#F5F0E8` | Fonds de sections alternées              |
| `warm-white`     | `#FAFAF7` | Background principal                     |
| `border-light`   | `#E4DDD0` | Lignes fines, séparateurs sections       |
| `text-body`      | `#3A3A3A` | Texte courant                            |
| `text-gray`      | `#7A7A7A` | Captions, texte secondaire               |

### Typographie

| Usage       | Famille                          | Fallback     | Taille  | Style           |
|-------------|----------------------------------|--------------|---------|-----------------|
| H1 (hero)   | Cormorant Garamond / Playfair    | Georgia      | 32px    | Regular         |
| H2          | Cormorant Garamond / Playfair    | Georgia      | 22px    | Regular         |
| H3 (contact)| Cormorant Garamond / Playfair    | Georgia      | 22px    | Regular         |
| Body        | Inter / DM Sans                  | sans-serif   | 13–14px | Regular, 1.75lh |
| Label sec.  | Inter / DM Sans                  | sans-serif   | 11px    | Uppercase, ls 0.16em |
| Card body   | Inter / DM Sans                  | sans-serif   | 12px    | Regular, 1.75lh |
| Name (bio)  | Inter / DM Sans                  | sans-serif   | 18px    | Medium          |
| Quote (bio) | Cormorant Garamond               | Georgia      | 15px    | Italic          |

### Espacements

| Zone                    | Valeur         |
|-------------------------|----------------|
| Section padding         | `64px 48px`    |
| Hero padding            | `80px 48px 72px` |
| Max content width       | `900px`        |
| Gap colonnes — About    | `32px`         |
| Gap colonnes — Services | `24px`         |
| Gap colonnes — Why S.   | `24px`         |
| Gap colonnes — Bio      | `64px`         |
| Section divider         | `0.5px solid #E4DDD0` |

### Composants UI récurrents

| Composant          | Specs                                                            |
|--------------------|------------------------------------------------------------------|
| Section label      | Uppercase, 11px, `gold-print`, letter-spacing 0.16em            |
| Accent dot         | Cercle 5×5px, fill `gold-print` (section About uniquement)      |
| Em-dash bullet     | `—` en `gold-print`, replace les bullets dans Services          |
| Vertical bar       | `border-left: 2px solid gold-print` (citation Bio)              |
| Logo badge         | `border: 1px solid #E4DDD0`, uppercase, padding 4px 10px        |
| Button (CTA)       | Fill `navy`, texte blanc, uppercase, ls 0.1em, no border-radius  |
| Section divider    | `0.5px solid #E4DDD0`, full width                               |
| Card border        | `1px solid #E4DDD0` (Services, Why Sunstone)                    |

---

## Architecture one-pager — 9 sections

### 1. NAV (sticky top)
**Layout** : flex, space-between, aligné verticalement
- Logo gauche : `SUN`**STONE** `ADVISORY` (STONE = `gold-print`, uppercase, letter-spacing large)
- Liens centre (discrets) : About · Services · Why Sunstone · Contact
- CTA droite : bouton `GET IN TOUCH` (navy, uppercase)
- Comportement : transparent sur hero → navy au scroll (`#0F1A2E`)

---

### 2. HERO
**Layout** : bloc single, padding `80px 48px 72px`
- Tag : `INDEPENDENT ADVISORY` (section label, gold)
- **H1** : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*
  - max-width ~620px, 32px
- Sous-titre : *With the perspective of an investor.*
  - max-width ~480px, grisé, 14px

---

### 3. ABOUT SUNSTONE
**Layout** : 3 colonnes égales, gap 32px
**Section label** : `ABOUT SUNSTONE`

| Col | Dot | Titre | Copy |
|-----|-----|-------|------|
| 1 | ● | Critical transaction support | Sunstone Advisory works with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect. |
| 2 | ● | An investor's perspective | Most advisors have seen deals from one side of the table — as banker or investor. Sunstone Advisory brings both perspectives, combining years of deal execution with private equity experience in assessing, negotiating, owning and selling companies. |
| 3 | ● | Hands-on involvement | A transaction partner embedded in your team and acting as a direct counterpart to management throughout the process. |

---

### 4. OUR APPROACH
**Layout** : 2 colonnes, fond navy (`#0F1A2E`), texte blanc/gold
**Section label** : `OUR APPROACH`

| Carte | Traitement typo | Descripteurs |
|-------|----------------|--------------|
| 1 | **SUN**STONE (SUN en `gold-digital`) | Rigorous. Structured. Reliable. |
| 2 | **SUN** (en `gold-digital`) | Clear. Pragmatic. Easy to work with. |

*Note DA critique* : La dualité STONE/SUN est le cœur de la marque. Contraste typographique navy/gold maximal.

---

### 5. SERVICES
**Layout** : 3 colonnes égales, gap 24px, cartes à bordure fine
**Section label** : `SERVICES`
Structure carte : titre uppercase + ligne fine séparatrice + liste em-dashes

**M&A ADVISORY (BUY & SELL)**
— Process preparation and management
— Due diligence oversight and review
— Valuation, structuring and financing
— Negotiation and documentation
— Closing

**PORTFOLIO WORK & EXIT SUPPORT**
— Value creation execution
— Add-on acquisitions
— Investor and board interactions
— Financing & refinancing
— Equity story and BP refinement
— Exit preparation and process

**FUNDRAISING ADVISORY**
— Process drive and execution
— Equity story and materials
— Q&A preparation and management
— Investor follow-up and tracking
— Term sheet and documentation

---

### 6. WHY SUNSTONE
**Layout** : grille 2×2, gap 24px, cartes à bordure fine
**Section label** : `WHY SUNSTONE`

| Titre | Copy |
|-------|------|
| Experienced partner | 20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings and fundraisings. |
| A critical sounding board | Beyond process and deliverables, we challenge analysis, pressure-test assumptions and sharpen investment cases — whether assessing an opportunity or preparing for investor scrutiny. |
| Hands-on approach | Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate handled directly — no layers, no dilution. |
| Independent and fully aligned | No conflicts of interest, no proprietary products to push, no cross-selling agendas — fully aligned with your objectives. |

---

### 7. FOUNDER / BIO
**Layout** : 2 colonnes, gap 64px — pas de section label (bloc autonome distinct)

**Colonne gauche** :
- Nom : `Marine Charbonnier` (18px, navy)
- Para 1 : *A decade in investment banking and private equity — first structuring and executing deals at Deutsche Bank, then assessing, negotiating, owning and selling them as an investor at Carlyle's European Buyout fund. Over a hundred opportunities assessed and 20+ closed.*
- Para 2 (12px, gray) : *Sunstone Advisory is built on that experience, and the conviction that the best transaction support comes from understanding not only how processes work, but how investors really think.*
- Logo badges (horizontaux, monochrome) : `DEUTSCHE BANK` · `CARLYLE` · `DAUPHINE`

**Colonne droite** (vertical bar 2px gold-print à gauche) :
> *Rigorous in execution.*
> *Pragmatic in approach.*
> *Easy to work with.*
(15px, italic, Cormorant Garamond, navy)

---

### 8. CONTACT
**Layout** : flex, space-between, aligné verticalement

**Gauche** :
- H3 : `Let's talk.` (22px, Cormorant/Playfair)
- Sous-texte : *Based in Paris, France. Working globally. Reachable in French and English.*

**Droite** (aligné droite) :
- Bouton `GET IN TOUCH` (navy)
- `marine@sunstonadvisory.com`
- `linkedin.com/in/marinecharbonnier`
(texte gris, 12px)

---

### 9. FOOTER
**Layout** : flex, space-between, fond navy
- Gauche : `SUN`**STONE** `ADVISORY` (même traitement logo, STONE en gold)
- Droite : `Paris, France · © 2026`

---

## SEO — Données à annoter dans Figma

### Ancres de navigation (one-pager)
```
#about         → Section About Sunstone
#approach      → Section Our Approach
#services      → Section Services
#why-sunstone  → Section Why Sunstone
#contact       → Section Contact
```

### Meta tags
```html
<title>Sunstone Advisory — M&A, Fundraising & Transaction Advisory</title>
<meta name="description" content="Independent transaction advisory firm. M&A advisory, fundraising and portfolio work, combining investment banking and private equity experience. Based in Paris, working globally." />
<meta property="og:title" content="Sunstone Advisory" />
<meta property="og:description" content="Advisory for high-stakes transactions." />
<meta property="og:image" content="/og-image.png" /> <!-- 1200×630px, navy bg + tagline -->
<link rel="canonical" href="https://sunstoreadvisory.com/" />
```

### Schema.org
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

## Règles absolues (ne jamais violer)

1. **Copy** : Utiliser exclusivement le wording validé ci-dessus — ne pas paraphraser
2. **Voix** : "we/our" sur tout le site ; bio = 3ème personne
3. **Pas de bullet points HTML** — em-dashes `—` uniquement dans Services
4. **Pas de témoignages, pas d'images** — crédibilité via logos + chiffres + précision
5. **3 services exactement** : M&A (Buy&Sell) / Portfolio Work / Fundraising
6. **Logo non finalisé** — utiliser le traitement texte `SUNSTONE ADVISORY` pour l'instant
7. **Minimaliste** : une idée par section, beaucoup d'espace blanc

---

## Références rapides aux fichiers sources

| Besoin | Fichier |
|--------|---------|
| Copy complet annoté | `website/copy-final.md` |
| DA complète + logos SVG | `brand/visual-identity.md` |
| Wireframe section par section | `website/wireframe-reference.md` |
| Positionnement détaillé | `brand/positioning.md` |
| SEO complet | `website/seo.md` |
| Architecture tech | `website/structure.md` |
| Bio Marine | `founder/marine-charbonnier.md` |
