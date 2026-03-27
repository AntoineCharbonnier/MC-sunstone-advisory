# Wireframe Reference — Sunstone Advisory

> **Source** : `sunstone_advisory_website_mockup.html` (fourni par Antoine, mars 2026)
> **Usage** : Ce document capture la structure, la mise en page et le wording du wireframe HTML de référence.
> ⚠️ **Important** : Les couleurs et typographies de ce wireframe sont des approximations de travail — se référer à [`brand/visual-identity.md`](../brand/visual-identity.md) pour la DA officielle. Ce wireframe est une base de structure et de copy, pas un brief design final.

---

## Structure générale

Le site est un **one-pager vertical** avec 8 sections distinctes, séparées par des lignes fines (0.5px). Largeur max : 900px, centré. Beaucoup d'espace blanc, aucune image.

**Ordre des sections :**
1. Navigation (sticky top)
2. Hero
3. About Sunstone
4. Our Approach
5. Services
6. Why Sunstone
7. Bio / Founder
8. Contact
9. Footer

---

## Section par section

### 1. Navigation

**Layout** : flex, justifié espace-entre. Logo à gauche, CTA à droite.

**Logo** : `SUNSTONE ADVISORY` — le mot "STONE" est mis en accent couleur (or dans le wireframe). Casse : tout en majuscules, espacement large entre lettres.

**CTA** : bouton plein fond navy `GET IN TOUCH` — espacement lettres, minuscule/casse petite.

---

### 2. Hero

**Layout** : bloc seul, padding généreux (80px haut).

**Contenu :**
- **Tag** (au-dessus du titre, en uppercase petit) : `Independent Advisory`
- **Titre H1** : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*
- **Sous-titre** : *With the perspective of an investor.*

**Notes de mise en page** : Le titre a un max-width (~620px), le sous-titre est plus court (~480px). Dans le wireframe, certains mots du titre peuvent être en accent couleur (à arbitrer selon DA).

---

### 3. About Sunstone

**Label de section** : `ABOUT SUNSTONE` (uppercase, petite taille, couleur accent)

**Layout** : 3 colonnes égales, gap 32px.

**3 blocs :**

Chaque bloc a un titre avec un point/dot de couleur accent en préfixe :

| Titre | Corps |
|-------|-------|
| Critical transaction support | Working with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect. |
| An investor's perspective | Most advisors have seen deals from one side only — as a banker or as an investor. Sunstone Advisory brings both perspectives, combining deal execution with private equity experience. |
| Hands-on involvement | A transaction partner embedded in your team — owning streams, driving execution, challenging advisors, and acting as a direct counterpart to management throughout. |

**Détail UI** : le dot de couleur est un cercle plein (5×5px) en début de chaque titre de bloc.

---

### 4. Our Approach

**Label de section** : `OUR APPROACH`

**Layout** : 2 colonnes côte à côte (max-width ~540px), avec bordures fine entre elles. Ressemble à deux cartes adjacentes.

**Contenu des 2 cartes :**

| Carte | Grande lettre | Mots clés |
|-------|--------------|-----------|
| 1 | **SUN**STONE (avec "SUN" en accent) | Rigorous. Structured. Reliable. |
| 2 | **SUN** (en accent) | Clear. Pragmatic. Easy to work with. |

**Note** : La dualité STONE/SUN est un élément de marque fort. STONE = rigueur, SUN = clarté. Ce visuel est à reproduire dans Figma de façon fidèle, en jouant sur le contraste typographique navy/or.

---

### 5. Services

**Label de section** : `SERVICES`

**Layout** : 3 colonnes égales, gap 24px, avec des cartes à bordure fine.

**Structure d'une carte** :
- Titre en header de carte (majuscules, séparé du contenu par une ligne fine)
- Liste d'items avec un tiret `—` en couleur accent en préfixe (pas de bullet HTML standard)

**Contenu des 3 cartes :**

**M&A ADVISORY (BUY & SELL)**
- Process preparation and management
- Due diligence oversight and review
- Valuation, structuring and financing
- Negotiation and documentation
- Closing

**PORTFOLIO WORK & EXIT SUPPORT**
- Value creation execution
- Add-on acquisitions
- Investor and board interactions
- Financing & refinancing
- Equity story and BP refinement
- Exit preparation and process

**FUNDRAISING ADVISORY**
- Process drive and execution
- Equity story and materials
- Q&A preparation and management
- Investor follow-up and tracking
- Term sheet and documentation

---

### 6. Why Sunstone

**Label de section** : `WHY SUNSTONE`

**Layout** : grille 2×2 (4 cartes), gap 24px, avec bordure fine sur chaque carte.

**Structure d'une carte** :
- Titre en gras navy (12px, espacement lettres)
- Corps de texte gris (12px, interligne 1.75)

**4 cartes :**

| Titre | Corps |
|-------|-------|
| Experienced partner | 20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings and fundraisings. |
| A critical sounding board | Beyond process and deliverables, we challenge analysis, pressure-test assumptions and sharpen investment cases — whether assessing an opportunity or preparing for investor scrutiny. |
| Hands-on approach | Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate handled directly — no layers, no dilution. |
| Independent and fully aligned | No conflicts of interest, no proprietary products to push, no cross-selling agendas — fully aligned with your objectives. |

---

### 7. Bio / Founder

**Layout** : 2 colonnes égales, gap 64px — **différent des autres sections** (pas de label de section au-dessus, la section est son propre bloc distinct).

**Colonne gauche** :
- Nom : `Marine Charbonnier` (18px, navy)
- Paragraphe 1 (corps principal) : *A decade in investment banking and private equity — first structuring and executing deals at Deutsche Bank, then assessing, negotiating, owning and selling them as an investor at Carlyle's European Buyout fund. Over a hundred opportunities assessed and 20+ closed.*
- Paragraphe 2 (secondaire, plus petit/grisé) : *Sunstone Advisory is built on that experience, and the conviction that the best transaction support comes from understanding not only how processes work, but how investors really think.*
- **Logos** (rangée de petites étiquettes à bordure fine) : `DEUTSCHE BANK` · `CARLYLE` · `DAUPHINE`

**Colonne droite** :
- Citation avec **barre verticale accent** (border-left 2px) à gauche
- Texte en italique navy :
  > *Rigorous in execution.*
  > *Pragmatic in approach.*
  > *Easy to work with.*

---

### 8. Contact

**Layout** : flex, justifié espace-entre, aligné au centre verticalement.

**Colonne gauche** :
- Titre H3 : `Let's talk.`
- Sous-texte : *Based in Paris, France. Working globally. Reachable in French and English.*

**Colonne droite** (aligné à droite) :
- CTA bouton plein navy : `GET IN TOUCH`
- Détails de contact (texte discret, grisé) :
  - `marine@sunstonadvisory.com`
  - `linkedin.com/in/marinecharbonnier`

---

### 9. Footer

**Layout** : flex, justifié espace-entre, fin de page.

**Gauche** : `SUNSTONE ADVISORY` (logo en texte, "STONE" en accent couleur)
**Droite** : `Paris, France · © 2026`

---

## Tokens de design du wireframe (approximatifs — ne pas réutiliser tels quels)

> Ces valeurs sont celles du wireframe de travail. La DA officielle prime sur ces valeurs.

| Rôle | Valeur wireframe | Correspondance DA |
|------|-----------------|-------------------|
| Navy (fond/texte principal) | `#1a2640` | Voir visual-identity.md |
| Or/accent | `#b8962e` | Voir visual-identity.md |
| Texte secondaire | `#5a6a82` | — |
| Texte très secondaire | `#8a9ab5` | — |
| Bordures fines | `#e0e4ec` | — |
| Fond | `#ffffff` | — |

**Typographie wireframe** :
- `font-family: var(--font-sans)` (non définie — à remplacer par la police DA)
- Hiérarchie : 32px titre hero → 22px titre contact → 18px nom fondatrice → 15px quote → 13-14px corps → 12px cartes/détails → 10-11px labels

**Espacements notables** :
- Padding sections : `64px 48px`
- Padding hero : `80px 48px 72px`
- Gap colonnes bio : `64px`
- Gap services : `24px`
- Gap about : `32px`

---

## Éléments UI récurrents à reproduire dans Figma

1. **Label de section** — uppercase, très petite taille, couleur accent, espacement lettres 0.16em, margin-bottom importante avant le contenu
2. **Dot accent** — cercle plein 5×5px en couleur or, utilisé comme puce dans la section About
3. **Tiret em `—`** — utilisé à la place des bullets dans les listes de services, en couleur accent
4. **Barre verticale accent** — border-left 2px solid or, utilisée pour la citation dans la bio
5. **Logo-badge** — petites étiquettes à bordure fine (Deutsche Bank, Carlyle, Dauphine)
6. **Bouton plein** — fond navy, texte blanc, uppercase, espacement lettres, pas de border-radius
7. **Ligne de séparation** — `0.5px solid #e0e4ec` entre chaque section (très fine, subtile)
