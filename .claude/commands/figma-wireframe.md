# /figma-wireframe — Sunstone Advisory

> Slash command Claude Code. Lancer depuis la racine de MC-Sunstone-Advisory/.
> Prérequis : MCP Figma connecté · plugin ui-ux-pro-max installé.
> Figma : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone?node-id=0-1

---

## ━━ PROMPT ━━

```
/plan

Tu travailles sur le projet Sunstone Advisory.
Fichier Figma : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone (file key : u3sdMzjybYKrvQ0SPORWpy)

═══════════════════════════════════════════════════
MISSION
═══════════════════════════════════════════════════

Créer deux pages autonomes dans le fichier Figma (des "Pages" Figma au sens onglets du fichier — pas des frames, pas des layers) :

  PAGE 1 → "🎨 Mockup — High Fidelity"
  Reproduction fidèle du mockup HTML de référence (sunstone_advisory_website_mockup.html),
  avec les vrais design tokens appliqués (couleurs, typographies, espacements officiels).
  Cette page doit ressembler au site final tel qu'il sera livré.

  PAGE 2 → "📐 Wireframe"
  Version wireframe annotée du même one-pager — palette grise, boîtes, annotations
  techniques, IDs d'ancre, balises HTML sémantiques. Pas de couleurs de marque.

Règle absolue sur le copy : la Trame v7 est la source de vérité.
Si le mockup et la v7 divergent → utiliser la v7 ET documenter la différence.

═══════════════════════════════════════════════════
ÉTAPE 0 — PLAN MODE : RÉFLÉCHIS AVANT TOUT
═══════════════════════════════════════════════════

Ne lance aucun outil, n'écris aucun code, ne touche pas Figma avant d'avoir complété cette étape.

0-A · SKILL DISCOVERY (fais-le maintenant)
  - Liste tous tes skills disponibles (répertoire skills/, plugins installés — notamment ui-ux-pro-max)
  - Lis les SKILL.md de chaque skill pertinent pour : wireframing, design system, layout UI, typographie, Figma
  - Liste précisément tous les outils Figma exposés par ton MCP :
      → Si tu as des outils write (create_page, create_frame, create_text, set_fill, etc.) = MODE DIRECT
      → Si tu as uniquement des outils read (get_file, get_node) = MODE PLUGIN (génère des scripts Figma JS)
  - Documente dans ta réponse planifiée : "Skills utilisés : X, Y" · "Outils Figma disponibles : X, Y" · "Mode : DIRECT ou PLUGIN"

0-B · LECTURE DES SOURCES (dans cet ordre exact, pas d'autre fichier sauf besoin spécifique)
  1. Lis ./deliverables/figma-brief.md → brief consolidé (copy v7 + DA + layout + SEO)
  2. Lis ./website/wireframe-reference.md → structure et wording exact du mockup HTML section par section
  3. Lis ./wording-review/diff-mockup-vs-v7.md → différences déjà identifiées (à compléter)

0-C · PLAN D'EXÉCUTION
  Produis un plan structuré avec :
  - Les pages Figma à créer/réutiliser
  - La liste des agents à lancer (noms, rôles, séquencement, parallélisme)
  - Le traitement prévu pour chaque divergence de wording mockup vs v7
  - Les critères d'acceptation de la Page 1 (HiFi) avant de valider
  - Le plan de retry si la Page 1 n'est pas satisfaisante

  Présente ce plan COMPLET avant d'exécuter quoi que ce soit.
  Attends validation si tu es en mode interactif, sinon procède dès que le plan est solide.

═══════════════════════════════════════════════════
PHASE 1 — RECONNAISSANCE (agents parallèles)
═══════════════════════════════════════════════════

Lance ces 3 agents en PARALLÈLE via Task :

──────────────────────────────────────────
AGENT 1A — "Figma State Explorer"
──────────────────────────────────────────
Mission : cartographier l'état actuel du fichier Figma.

  - Connecte-toi au fichier (file key : u3sdMzjybYKrvQ0SPORWpy)
  - Inventorie : pages existantes (noms, IDs), frames, color styles, text styles, components
  - Identifie si "🎨 Mockup — High Fidelity" et "📐 Wireframe" existent déjà
  - Identifie les styles/composants réutilisables déjà présents vs à créer
  - Sauvegarde le rapport dans ./deliverables/figma-state.json :
    {
      "pages": [{ "id": "", "name": "", "exists": true }],
      "colorStyles": [],
      "textStyles": [],
      "components": [],
      "reusable": [],
      "toCreate": []
    }

──────────────────────────────────────────
AGENT 1B — "Brief Structurer"
──────────────────────────────────────────
Mission : transformer le brief en données JSON exploitables par les agents constructeurs.

  Lis ./deliverables/figma-brief.md et produis ./deliverables/figma-data.json :
  {
    "figmaFile": "u3sdMzjybYKrvQ0SPORWpy",
    "designTokens": {
      "colors": { "navy": "#0F1A2E", "navyMid": "#1A2744", "goldPrint": "#C8A060", "goldDigital": "#FFDF90", "cream": "#F5F0E8", "warmWhite": "#FAFAF7", "borderLight": "#E4DDD0", "textBody": "#3A3A3A", "textGray": "#7A7A7A" },
      "typography": {
        "h1": { "family": "Cormorant Garamond", "size": 32, "weight": "Regular" },
        "h2": { "family": "Cormorant Garamond", "size": 22, "weight": "Regular" },
        "quote": { "family": "Cormorant Garamond", "size": 15, "style": "Italic" },
        "body": { "family": "Inter", "size": 14, "lineHeight": 1.75 },
        "bodySmall": { "family": "Inter", "size": 12, "lineHeight": 1.75 },
        "name": { "family": "Inter", "size": 18, "weight": "Medium" },
        "sectionLabel": { "family": "Inter", "size": 11, "transform": "uppercase", "letterSpacing": "0.16em" },
        "button": { "family": "Inter", "size": 12, "transform": "uppercase", "letterSpacing": "0.10em" }
      },
      "spacing": { "sectionPadding": "64px 48px", "heroPadding": "80px 48px 72px", "maxWidth": 900, "gapAbout": 32, "gapServices": 24, "gapWhy": 24, "gapBio": 64 }
    },
    "sections": [
      { "id": "S01", "name": "NAV", "anchor": null },
      { "id": "S02", "name": "HERO", "anchor": null },
      { "id": "S03", "name": "ABOUT", "anchor": "#about" },
      { "id": "S04", "name": "APPROACH", "anchor": "#approach" },
      { "id": "S05", "name": "SERVICES", "anchor": "#services" },
      { "id": "S06", "name": "WHY_SUNSTONE", "anchor": "#why-sunstone" },
      { "id": "S07", "name": "FOUNDER", "anchor": null },
      { "id": "S08", "name": "CONTACT", "anchor": "#contact" },
      { "id": "S09", "name": "FOOTER", "anchor": null }
    ]
  }

──────────────────────────────────────────
AGENT 1C — "Wording Diff Analyst"
──────────────────────────────────────────
Mission : comparer le wording du mockup HTML avec la Trame v7 et finaliser le diff.

  - Lis ./website/wireframe-reference.md (wording du mockup, section par section)
  - Lis ./website/copy-final.md (copy v7 — source de vérité)
  - Lis ./wording-review/diff-mockup-vs-v7.md (diff existant, à compléter/corriger)
  - Identifie TOUTES les divergences : mots manquants, formulations alternatives, éléments présents dans un seul fichier
  - Mets à jour ./wording-review/diff-mockup-vs-v7.md avec le tableau complet
  - Pour chaque divergence, indique quelle version utiliser dans Figma (toujours v7 sauf exception justifiée)
  - Produis également ./wording-review/copy-pour-figma.md : le copy FINAL à utiliser dans Figma
    (v7 par défaut + exceptions mockup documentées et justifiées)

Attends la complétion des 3 agents de Phase 1 avant de continuer.

═══════════════════════════════════════════════════
PHASE 2 — DESIGN SYSTEM FIGMA (séquentiel, bloquant)
═══════════════════════════════════════════════════

Lance 1 agent. Les styles créés ici sont nécessaires à tout le reste.

──────────────────────────────────────────
AGENT 2 — "Design System Builder"
──────────────────────────────────────────
Contexte : figma-state.json + figma-data.json. Ne recréer que ce qui n'existe pas déjà.

EN MODE DIRECT (outils Figma write disponibles) :

  a) Color Styles — crée dans Figma :
     navy / #0F1A2E · navyMid / #1A2744 · goldPrint / #C8A060 · goldDigital / #FFDF90
     cream / #F5F0E8 · warmWhite / #FAFAF7 · borderLight / #E4DDD0
     textBody / #3A3A3A · textGray / #7A7A7A

  b) Text Styles — crée dans Figma :
     Heading/H1 · Heading/H2 · Heading/Quote · Body/Regular · Body/Small
     Body/Name · Label/Section · Label/Button
     (specs exactes dans figma-data.json → designTokens.typography)

  c) Components — crée dans une page dédiée "🧩 Components" :
     [C01] Section Label   — texte "LABEL", style Label/Section, couleur goldPrint
     [C02] Accent Dot      — cercle 5×5px, fill goldPrint
     [C03] CTA Button      — rect navy, texte "GET IN TOUCH" blanc, Label/Button, padding 12×24, no radius
     [C04] Section Divider — ligne 100% wide, 0.5px, stroke borderLight
     [C05] Card            — rect transparent, stroke 1px borderLight, padding interne 24px
     [C06] Logo Badge      — rect transparent, stroke 1px borderLight, texte uppercase, padding 4×10
     [C07] Vertical Bar    — rect 2×80px, fill goldPrint

EN MODE PLUGIN :
  Génère ./deliverables/figma-plugin-design-system.js avec les appels figma.createText(),
  figma.createRectangle(), figma.createComponent() correspondants.
  Inclure les instructions d'exécution (Figma Desktop → Plugins → Development → Run Script).

  Sauvegarde un manifest ./deliverables/figma-components.json avec tous les IDs/noms créés.

═══════════════════════════════════════════════════
PHASE 3 — PAGE 1 : HIGH FIDELITY MOCKUP (séquentiel)
═══════════════════════════════════════════════════

Lance 1 agent. C'est la page critique — elle doit ressembler au site final.

──────────────────────────────────────────
AGENT 3 — "HiFi Page Builder"
──────────────────────────────────────────
Mission : construire la page "🎨 Mockup — High Fidelity" avec tous les design tokens et le copy v7.

Contexte : figma-data.json · figma-components.json · ./wording-review/copy-pour-figma.md

Crée ou navigue vers la page "🎨 Mockup — High Fidelity" dans le fichier Figma.

PARAMÈTRES GLOBAUX DU CANVAS :
  - Frame Desktop : 1440px wide, hauteur auto (assemble les sections verticalement)
  - Contenu centré, max-width 900px (padding latéral 270px de chaque côté sur 1440px)
  - Background canvas : warmWhite (#FAFAF7)

Construis les 9 sections dans l'ordre strict. Pour chaque section :
  → Crée la frame de section (1440px × hauteur auto)
  → Applique le fond de section si différent de warmWhite
  → Place les éléments UI en respectant les specs de layout de figma-brief.md
  → Place le copy depuis ./wording-review/copy-pour-figma.md (jamais de lorem ipsum)
  → Applique les color styles et text styles créés en Phase 2
  → Ajoute le composant C04 (divider) à la fin de chaque section

─── S01 · NAV ───────────────────────────
  Frame : 1440 × 72px, fond transparent (variante scrollée = navy)
  Layout : flex row, space-between, align center, padding 0 270px
  · Gauche : texte "SUN" (goldPrint) + "STONE ADVISORY" (navy), uppercase, ls 0.12em, 14px, Heading/H2
  · Centre : liens "About · Services · Why Sunstone · Contact" (Body/Small, textGray, gap 32px)
  · Droite : composant C03 (GET IN TOUCH)

─── S02 · HERO ──────────────────────────
  Frame : 1440 × auto, fond warmWhite, padding 80px 270px 72px
  · C01 (INDEPENDENT ADVISORY) en goldPrint, margin-bottom 24px
  · H1 (Heading/H1, navy, max-width 620px) :
    "Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions."
  · Sous-titre (Body/Regular, textGray, max-width 480px, margin-top 20px) :
    "With the perspective of an investor."
  · C04 divider en bas

─── S03 · ABOUT SUNSTONE ────────────────
  Frame : 1440 × auto, fond warmWhite, padding 64px 270px
  · C01 (ABOUT SUNSTONE), margin-bottom 40px
  · Grid 3 colonnes égales, gap 32px
  · Chaque colonne :
    - C02 (dot goldPrint) + texte titre (Body/Regular, navy, bold) inline
    - Corps texte (Body/Regular, textBody) sous le titre
  · Contenu des 3 colonnes : cf. figma-brief.md §3 / copy-pour-figma.md
  · C04 divider en bas

─── S04 · OUR APPROACH ──────────────────
  Frame : 1440 × auto, fond navy (#0F1A2E), padding 64px 270px
  · C01 (OUR APPROACH) en goldDigital, margin-bottom 40px
  · Grid 2 colonnes, gap 0 (bordure fine entre elles : 1px slate #2C3E5A)
  · Carte 1 (padding 32px) :
    - Typo "SUN" en goldDigital + "STONE" en blanc, même ligne, Heading/H2, bold
    - Corps (Body/Regular, textGray) : "Rigorous. Structured. Reliable."
  · Carte 2 (padding 32px) :
    - Typo "SUN" en goldDigital, Heading/H2
    - Corps (Body/Regular, textGray) : "Clear. Pragmatic. Easy to work with."
  ⚠️ CRITIQUE : contraste navy/goldDigital maximal — c'est le cœur visuel de la marque

─── S05 · SERVICES ──────────────────────
  Frame : 1440 × auto, fond warmWhite, padding 64px 270px
  · C01 (SERVICES), margin-bottom 40px
  · Grid 3 colonnes égales, gap 24px
  · Chaque carte = C05 (card avec border) + padding interne 24px :
    - Header : titre uppercase (Label/Section, navy), séparateur C04 fin dessous
    - Liste : items avec "—" en goldPrint + texte (Body/Small, textBody)
  · 3 cartes : M&A ADVISORY (BUY & SELL) / PORTFOLIO WORK & EXIT SUPPORT / FUNDRAISING ADVISORY
  · Copy exact : cf. figma-brief.md §5 / copy-pour-figma.md
  · C04 divider en bas

─── S06 · WHY SUNSTONE ──────────────────
  Frame : 1440 × auto, fond cream (#F5F0E8), padding 64px 270px
  · C01 (WHY SUNSTONE), margin-bottom 40px
  · Grid 2×2 (2 colonnes, 2 rangées), gap 24px
  · Chaque carte = C05 + fond blanc + padding 24px :
    - Titre (Label/Section, navy, bold)
    - Corps (Body/Small, textBody, line-height 1.75)
  · 4 cartes dans l'ordre : Experienced partner / A critical sounding board / Hands-on approach / Independent and fully aligned
  · Copy exact : cf. figma-brief.md §6 / copy-pour-figma.md
  · C04 divider en bas

─── S07 · FOUNDER / BIO ─────────────────
  Frame : 1440 × auto, fond warmWhite, padding 64px 270px
  · PAS de section label au-dessus
  · Grid 2 colonnes, gap 64px

  COLONNE GAUCHE :
  · Nom "Marine Charbonnier" (Body/Name, 18px, navy, medium)
  · Para 1 (Body/Regular, textBody, margin-top 16px)
  · Para 2 (Body/Small, textGray, margin-top 12px)
  · Logos badges (flex row, gap 8px, margin-top 24px) :
    3× C06 avec textes "DEUTSCHE BANK" · "CARLYLE" · "DAUPHINE" (monochrome gray)

  COLONNE DROITE :
  · C07 (barre verticale 2px goldPrint) à gauche du texte
  · Citation (Heading/Quote, 15px, italic, navy, padding-left 16px) :
    "Rigorous in execution.
     Pragmatic in approach.
     Easy to work with."

  · C04 divider en bas

─── S08 · CONTACT ───────────────────────
  Frame : 1440 × auto, fond warmWhite, padding 64px 270px
  · Layout : flex row, space-between, align center

  GAUCHE :
  · "Let's talk." (Heading/H2, 22px, navy)
  · Sous-texte (Body/Regular, textGray, margin-top 12px) :
    "Based in Paris, France. Working globally. Reachable in French and English."

  DROITE (align right) :
  · C03 (GET IN TOUCH)
  · "marine@sunstonadvisory.com" (Body/Small, textGray, margin-top 12px)
  · "linkedin.com/in/marinecharbonnier" (Body/Small, textGray)

  · C04 divider en bas

─── S09 · FOOTER ────────────────────────
  Frame : 1440 × 80px, fond navy (#0F1A2E)
  · Layout : flex row, space-between, align center, padding 0 270px
  · Gauche : "SUN" (goldPrint) + "STONE ADVISORY" (warmWhite), uppercase, ls 0.12em, 14px
  · Droite : "Paris, France · © 2026" (Body/Small, textGray)

VALIDATION INTERNE AGENT 3 :
Après avoir construit toutes les sections, fais une auto-évaluation :
  □ Chaque section a-t-elle son copy exact (pas de lorem, pas de paraphrase) ?
  □ Les couleurs appliquées correspondent-elles aux tokens navy/gold/cream ?
  □ La section Our Approach a-t-elle un fort contraste navy/goldDigital ?
  □ Les 3 cartes Services ont-elles bien les tirets "—" goldPrint ?
  □ La colonne droite Bio a-t-elle la barre verticale goldPrint ?
  □ Le footer est-il en fond navy ?

Si un point échoue → corrige avant de passer à la suite.
Sauvegarde l'URL de la page Figma dans ./deliverables/figma-hifi-url.txt

─────────────────────────────────────────
BOUCLE DE RETRY — PAGE HIFI
─────────────────────────────────────────
Si tu peux obtenir un screenshot ou une prévisualisation du résultat (via MCP Figma ou autre outil disponible) :
  1. Évalue visuellement les points suivants :
     · La hiérarchie typographique est-elle claire ? (H1 grand, labels petits)
     · Les espaces blancs sont-ils généreux ? (pas de sections compressées)
     · La section Approach est-elle visuellement forte avec le contraste navy/or ?
     · Le logo SUNSTONE / STONE est-il bien différencié ?
  2. Si insatisfaisant sur un ou plusieurs points :
     · Identifie précisément les problèmes
     · Corrige section par section
     · Réévalue (max 2 itérations de correction)
     · Note les corrections dans ./deliverables/figma-hifi-iterations.md

═══════════════════════════════════════════════════
PHASE 4 — PAGE 2 : WIREFRAME (parallélisable avec Phase 3 QA)
═══════════════════════════════════════════════════

Lance 1 agent après (ou en parallèle de la QA de la Phase 3 si le MCP le permet sans conflit) :

──────────────────────────────────────────
AGENT 4 — "Wireframe Page Builder"
──────────────────────────────────────────
Mission : construire la page "📐 Wireframe" — version annotée, sans couleurs de marque.

Crée ou navigue vers la page "📐 Wireframe" dans le fichier Figma.

PALETTE WIREFRAME (strictement) :
  · Fond canvas : #FFFFFF
  · Fond sections alternées : #F5F5F5
  · Textes principaux : #1A1A1A
  · Textes secondaires : #666666
  · Boîtes et bordures : #C8C8C8 (stroke 1px)
  · Annotations : #E53935 (rouge) pour IDs et balises HTML
  · Fond sections dark (Approach, Footer) : #E0E0E0 (gris neutre)
  · Accent/attention : #1565C0 (bleu) pour les liens et CTA placeholder

RÈGLES WIREFRAME :
  · Police unique : Inter (ou système) — pas de serif
  · Pas de couleurs de marque (navy, gold, cream → gris)
  · Les boîtes représentent les composants (pas de styling appliqué)
  · Chaque section a son label technique en rouge : "[S01 NAV]", "[S02 HERO]", etc.
  · Chaque section a son anchor ID en rouge : "#about", "#services", etc. (quand applicable)
  · La balise HTML sémantique est annotée en rouge : "<nav>", "<section>", "<footer>", etc.
  · Les colonnes sont représentées par des boîtes gris clair avec leur largeur notée
  · Le copy peut être abrégé (max 2 lignes) — utiliser les vrais titres mais truncater le corps

Construis les mêmes 9 sections mais en version wireframe :

─── W01 · [NAV] <nav> ───────────────────
  · Frame : 1440 × 72px, fond blanc, border-bottom 1px #C8C8C8
  · Boîte gauche (200×24px, gris) : "[LOGO]"
  · Boîte centre (400×16px, gris) : "[About · Services · Why Sunstone · Contact]"
  · Boîte droite (140×36px, stroke #1565C0) : "[CTA: GET IN TOUCH]"
  · Annotation rouge : "[S01 NAV] <nav> sticky — transparent on load → navy on scroll"

─── W02 · [HERO] <section id="home"> ────
  · Frame : 1440 × auto, fond blanc, padding 80px 270px 72px
  · Boîte label : "[TAG: INDEPENDENT ADVISORY]" (petit, rouge)
  · Boîte H1 (max-width 620px, hauteur ~80px, gris clair) : "Advisory for high-stakes transactions..." (texte complet, wrap auto)
  · Boîte sous-titre (max-width 480px, hauteur 24px, gris clair)
  · Annotation rouge : "[S02 HERO] <h1> — tagline v7 — no CTA in hero"

─── W03 · [ABOUT] <section id="about"> ──
  · Frame : 1440 × auto, fond blanc, padding 64px 270px
  · Boîte label rouge "[S03 ABOUT] <section id='about'>"
  · Boîte "[SECTION LABEL: ABOUT SUNSTONE]" (uppercase, gris)
  · 3 boîtes colonnes égales (gap 32px, fond #F5F5F5, 1px border) :
    "[COL 1] · Critical transaction support + copy" / "[COL 2] · An investor's perspective" / "[COL 3] · Hands-on involvement"
  · Annotation rouge : "Grid 3-col, gap 32px — accent dot goldPrint en HiFi"

─── W04 · [APPROACH] <section id="approach"> ────
  · Frame : 1440 × auto, fond #E0E0E0 (représente navy), padding 64px 270px
  · Boîte "[SECTION LABEL: OUR APPROACH]" (gris foncé)
  · 2 boîtes colonnes (fond #C8C8C8, 1px border) :
    "[CARD 1] SUNSTONE — Rigorous. Structured. Reliable." / "[CARD 2] SUN — Clear. Pragmatic. Easy to work with."
  · Annotation rouge : "[S04 APPROACH] fond navy en HiFi — contraste STONE/SUN critique — voir figma-brief.md §4"

─── W05 · [SERVICES] <section id="services"> ────
  · Frame : 1440 × auto, fond blanc, padding 64px 270px
  · "[SECTION LABEL: SERVICES]"
  · 3 boîtes colonnes (1px border #C8C8C8) :
    Chaque carte : "[TITRE SERVICE]" + ligne fine + liste items truncatés (max 3 visible + "...")
  · Annotation rouge : "[S05 SERVICES] 3 cartes — em-dash goldPrint — jamais bullet HTML"

─── W06 · [WHY SUNSTONE] <section id="why-sunstone"> ────
  · Frame : 1440 × auto, fond #F5F5F5 (représente cream), padding 64px 270px
  · "[SECTION LABEL: WHY SUNSTONE]"
  · Grid 2×2 : 4 boîtes (fond blanc, 1px border) avec titres + texte tronqué
  · Annotation rouge : "[S06 WHY] grid 2×2 — fond cream en HiFi"

─── W07 · [FOUNDER] <section> ───────────
  · Frame : 1440 × auto, fond blanc, padding 64px 270px
  · Annotation rouge : "[S07 FOUNDER] — PAS de section label HTML — bloc autonome"
  · 2 boîtes colonnes (gap 64px) :
    Col gauche : "[NOM] Marine Charbonnier" + boîtes texte + 3× "[LOGO BADGE]"
    Col droite : "[VERTICAL BAR goldPrint] + CITATION italique"

─── W08 · [CONTACT] <section id="contact"> ────
  · Frame : 1440 × auto, fond blanc, padding 64px 270px
  · Layout flex space-between
  · Gauche : "[H3: Let's talk.]" + "[Sous-texte]"
  · Droite : "[CTA: GET IN TOUCH]" + "[email]" + "[LinkedIn]"
  · Annotation rouge : "[S08 CONTACT] — mailto: only — no form backend"

─── W09 · [FOOTER] <footer> ─────────────
  · Frame : 1440 × 80px, fond #E0E0E0 (représente navy)
  · "[LOGO text]" gauche · "[Paris, France · © 2026]" droite
  · Annotation rouge : "[S09 FOOTER] fond navy en HiFi"

FRAME ANNEXE — "📋 Annotations & Specs" (sur la même page Wireframe) :
  Crée une frame séparée sur le canvas wireframe avec :
  · Tableau des ancres : S01-S09 → id HTML → balise sémantique
  · Palette HiFi de référence (rectangles colorés annotés)
  · Typographie scale (H1→Label, tailles et familles)
  · Breakpoints : Desktop 1440px · Content 900px · Mobile 390px
  · Note : "Copy source → ./wording-review/copy-pour-figma.md — Diff → ./wording-review/diff-mockup-vs-v7.md"

═══════════════════════════════════════════════════
PHASE 5 — QA CROISÉE FINALE (séquentiel, dernier)
═══════════════════════════════════════════════════

──────────────────────────────────────────
AGENT 5 — "QA Final"
──────────────────────────────────────────
Vérifie les deux pages et produit ./deliverables/figma-qa-report.md.

CHECKLIST PAGE 1 — HIGH FIDELITY :
  □ 9 sections présentes dans l'ordre correct
  □ Copy identique à ./wording-review/copy-pour-figma.md (pas de paraphrase)
  □ Color styles appliqués (navy, gold, cream) et non codés en dur
  □ Text styles appliqués (pas de font size arbitraire)
  □ Section Approach : contraste navy/goldDigital maximal
  □ Section Services : tirets "—" en goldPrint, pas de bullets
  □ Section Bio : barre verticale goldPrint sur la citation
  □ Section Founder : 3 logo badges présents (Deutsche Bank, Carlyle, Dauphine)
  □ Nav : "STONE" en goldPrint différencié du reste du logo
  □ Footer : fond navy, pas warmWhite

CHECKLIST PAGE 2 — WIREFRAME :
  □ Palette exclusivement grise (0 couleur de marque)
  □ Annotations rouges présentes sur chaque section (ID technique + anchor + balise HTML)
  □ Frame "Annotations & Specs" présente
  □ Correspondance structurelle 1:1 avec la page HiFi (même nombre de sections, même ordre)

CHECKLIST WORDING :
  □ ./wording-review/diff-mockup-vs-v7.md complété (toutes divergences documentées)
  □ ./wording-review/copy-pour-figma.md créé et utilisé dans Figma
  □ Aucune divergence non documentée dans les deux pages Figma

Format du rapport QA :
  | Check | Page | Statut | Commentaire |
  |-------|------|--------|-------------|
  | ... | HiFi / Wire | ✅ / ⚠️ / ❌ | ... |

Si des ❌ sont identifiés → les corriger directement dans Figma puis marquer ✅.

═══════════════════════════════════════════════════
LIVRABLES ATTENDUS
═══════════════════════════════════════════════════

DANS FIGMA (fichier u3sdMzjybYKrvQ0SPORWpy) :
  □ Page "🧩 Components" — design system + composants de base
  □ Page "🎨 Mockup — High Fidelity" — 9 sections avec vrais tokens et copy v7
  □ Page "📐 Wireframe" — 9 sections grises + annotations + frame specs

DANS ./wording-review/ :
  □ diff-mockup-vs-v7.md (complété et finalisé)
  □ copy-pour-figma.md (copy définitif utilisé dans Figma)

DANS ./deliverables/ :
  □ figma-state.json (état initial du fichier)
  □ figma-data.json (brief structuré en JSON)
  □ figma-components.json (manifest des composants créés)
  □ figma-hifi-url.txt (URL directe vers la page HiFi)
  □ figma-qa-report.md (rapport de QA final)
  □ figma-hifi-iterations.md (si des corrections ont été nécessaires)

RAPPORT CONSOLE FINAL :
  · URL directe vers la page HiFi dans Figma
  · URL directe vers la page Wireframe dans Figma
  · Résumé des divergences de wording trouvées et traitées
  · Points d'attention pour Marine avant validation

═══════════════════════════════════════════════════
RÈGLES TRANSVERSALES POUR TOUS LES AGENTS
═══════════════════════════════════════════════════

· Source de vérité copy → ./wording-review/copy-pour-figma.md (créé en Phase 1C)
· En cas de doute sur le copy → v7 prime toujours, différence documentée
· En cas de doute sur un arbitrage design → option la plus sobre, signalée dans QA report
· Aucun lorem ipsum, aucune paraphrase, aucun ajout non validé
· Si un outil Figma échoue → logger l'erreur, continuer, noter dans QA report
· Maintenir la TodoList visible à tout moment avec le statut de chaque agent
· Si tu es en MODE PLUGIN → tous les scripts .js sont autonomes et auto-documentés
```
