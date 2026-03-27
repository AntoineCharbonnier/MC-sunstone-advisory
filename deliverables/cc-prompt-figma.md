# Claude Code — Prompt Maître : Wireframe Figma Sunstone Advisory

> **Usage** : Coller ce prompt directement dans Claude Code (CC).
> **Projet** : `/path/to/MC-Sunstone-Advisory/` — adapter le chemin si nécessaire.
> **Figma** : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone?node-id=0-1
> **Prérequis CC** : MCP Figma connecté + plugin ui-ux-pro-max installé.

---

## PROMPT À COLLER DANS CLAUDE CODE

```
Tu travailles sur le projet Sunstone Advisory — site vitrine one-pager pour un cabinet M&A advisory indépendant parisien (Marine Charbonnier, ex-Carlyle / Deutsche Bank).

Ta mission : créer un wireframe complet et pixel-ready dans Figma, en t'appuyant sur le copy validé v7, l'identité visuelle officielle, et l'architecture one-pager documentée.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 0 — DISCOVERY AUTONOME DES SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Avant toute chose :
1. Liste tous les skills disponibles dans ton répertoire de skills (~/.claude/skills/ et tout plugin installé, notamment ui-ux-pro-max).
2. Identifie les skills pertinents pour : wireframing UI, design system, composants Figma, typographie, grilles de mise en page.
3. Lis les SKILL.md de chacun de ces skills pertinents AVANT de commencer à travailler.
4. Liste les outils Figma disponibles dans ton MCP Figma (noms exacts des fonctions/tools exposés).
   — Si le MCP expose des outils write (create_frame, create_text, update_node, etc.) → tu travailleras en mode FIGMA DIRECT.
   — Si le MCP est read-only (get_file, get_node uniquement) → tu travailleras en mode FIGMA PLUGIN (génération de code plugin Figma à exécuter).
   Documente le mode choisi avant de continuer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRIEF PROJET — SOURCE DE VÉRITÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lis UNIQUEMENT ce fichier (brief consolidé — remplace la lecture de 6 fichiers séparés) :
  ./deliverables/figma-brief.md

Ce fichier contient tout ce dont tu as besoin :
- Design tokens (couleurs, typographie, espacements)
- Copy exact par section (9 sections)
- Specs de layout pour chaque section
- Éléments UI récurrents (labels, dots, em-dashes, boutons, badges)
- Données SEO (ancres, meta tags, Schema.org)
- Règles absolues à ne jamais violer

Si tu as besoin d'un détail non couvert par figma-brief.md, alors et seulement alors, consulte les fichiers sources listés à la fin de ce brief.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 1 — RECONNAISSANCE (agents parallèles)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lance 2 agents en PARALLÈLE via l'outil Task :

AGENT 1A — "Figma Explorer"
  Objectif : Cartographier l'état actuel du fichier Figma.
  Mission :
  - Connecte-toi au fichier Figma (file key: u3sdMzjybYKrvQ0SPORWpy, node: 0-1)
  - Inventorie : pages existantes, frames, composants, styles de couleur, styles de texte
  - Identifie ce qui existe déjà vs ce qui est à créer
  - Produis un rapport JSON structuré : { pages[], existingFrames[], colorStyles[], textStyles[], components[] }
  - Sauvegarde le rapport dans : ./deliverables/figma-state.json

AGENT 1B — "Brief Parser"
  Objectif : Structurer le brief en données utilisables par les agents suivants.
  Mission :
  - Lis ./deliverables/figma-brief.md
  - Produis un fichier JSON structuré avec :
    {
      designTokens: { colors: {}, typography: {}, spacing: {} },
      sections: [ { id, name, anchor, layout, components: [] } ],
      uiPatterns: { sectionLabel: {}, accentDot: {}, emDash: {}, ctaButton: {}, logoBadge: {}, verticalBar: {} },
      seoData: { anchors: {}, metaTitle, metaDescription, schema: {} }
    }
  - Sauvegarde dans : ./deliverables/figma-data.json

Attends la completion des deux agents avant de continuer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 2 — DESIGN SYSTEM (séquentiel, bloquant)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lance 1 agent (séquentiel, car les styles créés ici sont nécessaires à toutes les phases suivantes) :

AGENT 2 — "Design System Builder"
  Objectif : Créer tous les styles et composants de base dans Figma.
  Contexte : Utilise figma-data.json (Phase 1B) et le rapport d'état (Phase 1A).

  En MODE FIGMA DIRECT :

  a) Couleurs — crée les color styles suivants :
     - navy / #0F1A2E (primaire dark)
     - navy-mid / #1A2744
     - gold-print / #C8A060 (accents, logos)
     - gold-digital / #FFDF90 (accents sur fond dark)
     - cream / #F5F0E8
     - warm-white / #FAFAF7
     - border-light / #E4DDD0
     - text-body / #3A3A3A
     - text-gray / #7A7A7A

  b) Text styles — crée les styles typographiques :
     - Heading/H1 — Cormorant Garamond (ou Playfair Display), 32px, Regular
     - Heading/H2 — Cormorant Garamond, 22px, Regular
     - Heading/Quote — Cormorant Garamond, 15px, Italic
     - Body/Regular — Inter (ou DM Sans), 14px, Regular, line-height 1.75
     - Body/Small — Inter, 12px, Regular, line-height 1.75
     - Body/Name — Inter, 18px, Medium
     - Label/Section — Inter, 11px, Uppercase, letter-spacing 0.16em, Regular
     - Label/Button — Inter, 12px, Uppercase, letter-spacing 0.1em, Medium

  c) Composants de base — crée des components Figma réutilisables :
     - [C01] Section Label : text "LABEL", style Label/Section, couleur gold-print
     - [C02] Accent Dot : cercle 5×5px, fill gold-print
     - [C03] CTA Button : rectangle navy, texte "GET IN TOUCH" blanc, Label/Button, padding 12px 24px, no border-radius
     - [C04] Section Divider : ligne 100%, height 0.5px, stroke border-light
     - [C05] Card Border : rectangle transparent, stroke 1px border-light
     - [C06] Logo Badge : rectangle transparent, stroke 1px border-light, texte "LOGO" uppercase, padding 4px 10px
     - [C07] Vertical Bar : rectangle 2px × 80px, fill gold-print (pour citation bio)

  En MODE FIGMA PLUGIN :
  Génère un script Figma Plugin (figma.createFrame, figma.createText, etc.) qui crée exactement les styles et composants listés ci-dessus. Sauvegarde dans ./deliverables/figma-plugin-design-system.js avec instructions d'exécution.

  À la fin : sauvegarde un manifest des IDs créés dans ./deliverables/figma-components.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 3 — CONSTRUCTION DES SECTIONS (séquentiel)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lance 1 agent (séquentiel — chaque section doit exister avant d'y ajouter du contenu) :

AGENT 3 — "Section Builder"
  Objectif : Construire les 9 frames de section dans Figma.
  Contexte : Utilise figma-data.json + figma-components.json.
  Contraintes globales :
  - Canvas width : 1440px (desktop), contenu centré, max-width 900px
  - Mobile frame séparé : 390px
  - Fond global : warm-white (#FAFAF7)

  Construit les sections dans l'ordre suivant, section par section :

  [S01] NAV
  - Frame 1440 × 72px, fond transparent (version scrollée : navy)
  - Logo gauche : SUNSTONE ADVISORY — "STONE" en gold-print, uppercase, ls 0.12em, 14px
  - Liens centre : About · Services · Why Sunstone · Contact (Inter 12px, text-gray)
  - CTA droite : composant C03 (GET IN TOUCH)
  - Séparateur bas : C04

  [S02] HERO
  - Frame 1440px × auto, padding 80px 270px 72px (pour centrer sur 900px)
  - Tag : C01 (INDEPENDENT ADVISORY)
  - H1 : texte complet de la tagline, style Heading/H1, max-width 620px, navy
  - Sous-titre : "With the perspective of an investor.", Body/Regular, text-gray, max-width 480px
  - Marge bas 72px, séparateur C04

  [S03] ABOUT SUNSTONE
  - Frame 1440px × auto, padding 64px 270px
  - C01 (ABOUT SUNSTONE) + marge 40px
  - Grid 3 cols égales, gap 32px
  - Chaque col : C02 (dot) + titre body/bold navy + corps Body/Regular text-body
  - [Voir copy exact dans figma-brief.md §3]
  - Séparateur bas : C04

  [S04] OUR APPROACH
  - Frame 1440px × auto, padding 64px 270px, fond navy (#0F1A2E)
  - C01 (OUR APPROACH) couleur gold-digital
  - Grid 2 cols, gap 24px
  - Carte 1 : texte "SUNSTONE" avec "SUN" en gold-digital, corps "Rigorous. Structured. Reliable." en blanc
  - Carte 2 : texte "SUN" en gold-digital, corps "Clear. Pragmatic. Easy to work with." en blanc
  - [Note critique : contraste typographique fort navy/gold — c'est le cœur de la marque]

  [S05] SERVICES
  - Frame 1440px × auto, padding 64px 270px
  - C01 (SERVICES)
  - Grid 3 cols, gap 24px, chaque carte avec C05 (border)
  - Structure carte : header uppercase + C04 fin + liste em-dashes gold-print
  - [Voir copy exact dans figma-brief.md §5]
  - Séparateur bas : C04

  [S06] WHY SUNSTONE
  - Frame 1440px × auto, padding 64px 270px, fond cream (#F5F0E8)
  - C01 (WHY SUNSTONE)
  - Grid 2×2, gap 24px, chaque carte avec C05 (border), fond blanc, padding interne 24px
  - Structure carte : titre Label/Section navy + corps Body/Small text-body
  - [Voir copy exact dans figma-brief.md §6]
  - Séparateur bas : C04

  [S07] FOUNDER / BIO
  - Frame 1440px × auto, padding 64px 270px
  - PAS de section label
  - Grid 2 cols, gap 64px
  - Col gauche : nom (Body/Name, navy) + para1 (Body/Regular) + para2 (Body/Small, text-gray) + 3x C06 (logo badges)
  - Col droite : C07 (vertical bar) + quote (Heading/Quote, italic, navy)
  - [Voir copy exact dans figma-brief.md §7]
  - Séparateur bas : C04

  [S08] CONTACT
  - Frame 1440px × auto, padding 64px 270px
  - Flex space-between, aligné verticalement
  - Gauche : "Let's talk." (Heading/H2, navy) + sous-texte (Body/Regular, text-gray)
  - Droite : C03 (GET IN TOUCH) + email + LinkedIn (Body/Small, text-gray, aligné droite)
  - Séparateur bas : C04

  [S09] FOOTER
  - Frame 1440px × 80px, fond navy
  - Flex space-between
  - Gauche : SUNSTONE ADVISORY (traitement logo, STONE en gold-print)
  - Droite : "Paris, France · © 2026" (Body/Small, text-gray sur fond dark = adapter)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 4 — COUCHE SEO + ANNOTATIONS (parallèle avec Phase 3 si possible)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lance 1 agent en PARALLÈLE avec Agent 3 si le MCP le permet, sinon après :

AGENT 4 — "SEO & Annotations Layer"
  Objectif : Créer une page SEO et les annotations d'intégration dans Figma.

  Dans le fichier Figma, crée une nouvelle page nommée "⚙️ SEO & Dev Specs" contenant :

  a) Frame "Meta Tags" avec :
     - Title : "Sunstone Advisory — M&A, Fundraising & Transaction Advisory"
     - Description : "Independent transaction advisory firm. M&A advisory, fundraising and portfolio work, combining investment banking and private equity experience. Based in Paris, working globally."
     - OG Image spec : 1200×630px, fond navy, tagline centré en blanc
     - Twitter Card : summary_large_image

  b) Frame "Anchor IDs" avec tableau :
     - / (home)
     - #about → Section About Sunstone
     - #approach → Section Our Approach
     - #services → Section Services
     - #why-sunstone → Section Why Sunstone
     - #contact → Section Contact

  c) Frame "Schema.org" avec le JSON structuré (voir figma-brief.md §SEO)

  d) Frame "Keywords Map" avec les mots-clés prioritaires par section :
     - Hero → "independent M&A advisor France", "boutique M&A advisory Paris"
     - About → "M&A advisory mid-market France"
     - Services → "M&A advisory buy sell", "fundraising advisor France", "portfolio company M&A support"
     - Why → "exit preparation private equity France", "add-on acquisition advisory PE"
     - Bio → "Marine Charbonnier", "Sunstone Advisory"

  e) Frame "Dev Handoff" avec :
     - Stack recommandée : Next.js (SSG) ou Framer/Webflow
     - Police sources : Cormorant Garamond (Google Fonts), Inter (Google Fonts)
     - Contact form : mailto: uniquement (pas de backend)
     - Analytics : Plausible (no-cookie) ou GA4 minimal
     - Temps de chargement cible : < 2s (site statique)
     - HTTPS + www → non-www redirect

  f) Dans chaque section du wireframe principal, ajoute des commentaires Figma (annotations) :
     - Nom de l'ancre (#id) en rouge
     - Indication de la balise HTML sémantique à utiliser (section, nav, footer, h1, h2, etc.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 5 — QA & VALIDATION (séquentiel final)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lance 1 agent après completion de toutes les phases précédentes :

AGENT 5 — "QA Reviewer"
  Objectif : Vérifier la cohérence complète du wireframe.

  Checklist de validation :

  □ COPY : Vérifie section par section que le copy dans Figma est identique à figma-brief.md
    — Pas de paraphrase, pas de mot manquant, pas d'ajout non validé

  □ DUALITÉ STONE/SUN : La section Our Approach (S04) rend-elle visuellement la dualité marque ?
    — "SUN" doit être clairement en gold-digital sur fond navy
    — "STONE" doit être en texte blanc/contrasté sur navy

  □ DESIGN TOKENS : Toutes les couleurs et typographies sont-elles cohérentes avec figma-brief.md ?
    — Aucune couleur "inventée" en dehors des tokens définis

  □ RÈGLES ABSOLUES :
    — Aucun bullet point HTML dans les sections About et Why Sunstone (em-dashes uniquement dans Services)
    — Voix "we" sur tout le site (sauf bio = 3ème personne)
    — 3 services exactement (pas 2, pas 4)
    — Pas de testimonials

  □ SEO : Page "⚙️ SEO & Dev Specs" présente et complète ?
    — Meta title + description présents
    — Ancres définies pour toutes les sections
    — Schema.org présent

  □ MOBILE : Frames mobile (390px) présents pour les sections les plus complexes ?
    (About 3-col, Services 3-col, Our Approach 2-col — collapse en 1 col sur mobile)

  Produis un rapport de QA : ./deliverables/figma-qa-report.md
  Format : tableau ✅/⚠️/❌ avec commentaires sur chaque point.
  Si des corrections sont nécessaires, applique-les directement dans Figma avant de conclure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVRABLES ATTENDUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

À la fin de l'ensemble du workflow, tu dois avoir produit :

1. Dans Figma :
   □ Page "Desktop (1440px)" : 9 sections complètes avec copy et styles
   □ Page "Mobile (390px)" : versions adaptées des sections critiques
   □ Page "⚙️ SEO & Dev Specs" : toutes les annotations SEO et specs dev
   □ Styles de couleur définis (9 couleurs)
   □ Styles de texte définis (8 styles)
   □ Components library (7 composants de base)

2. Dans ./deliverables/ :
   □ figma-state.json — état initial du fichier Figma (Phase 1A)
   □ figma-data.json — brief structuré en JSON (Phase 1B)
   □ figma-components.json — manifest des IDs composants créés (Phase 2)
   □ figma-qa-report.md — rapport de QA final (Phase 5)
   □ [Si mode Plugin] figma-plugin-design-system.js + figma-plugin-sections.js

3. Rapport final en console :
   — Lien direct vers le fichier Figma mis à jour
   — Récapitulatif de ce qui a été créé / modifié
   — Points d'attention pour Marine ou le développeur

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÈGLES DE COMPORTEMENT POUR TOUS LES AGENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Source de vérité : figma-brief.md prime sur toute interprétation personnelle
- Ne jamais paraphraser le copy — copier-coller exactement
- Ne jamais inventer de couleurs ou de typographies hors des tokens définis
- Si un outil Figma échoue → logguer l'erreur et continuer avec la section suivante (ne pas bloquer)
- Si tu as un doute sur un arbitrage design → choisir l'option la plus sobre et le signaler dans le QA report
- Maintenir une TodoList visible pour le suivi de progression de chaque agent
```

---

## NOTES D'UTILISATION

### Adapter le chemin projet
Remplacer `./deliverables/` par le chemin absolu correct sur ta machine si CC ne se trouve pas à la racine du projet.

### Si le MCP Figma est read-only
Le prompt gère ce cas automatiquement (mode FIGMA PLUGIN). Les scripts générés seront dans `./deliverables/figma-plugin-*.js` et s'exécutent via Plugins → Development → Run Script dans Figma Desktop.

### Ordre d'exécution des phases
```
Phase 1A ──┐
            ├── (parallel) ──► Phase 2 ──► Phase 3 ──► Phase 5
Phase 1B ──┘                        └──────────────────────────► Phase 4 (si MCP permet parallel writes)
```

### Tokens consommés vs approche naïve
| Approche | Fichiers lus | Tokens estimés |
|----------|-------------|----------------|
| Naïve (6 fichiers séparés par agent) | 6 × 5 agents = 30 lectures | ~45 000 tokens |
| Avec figma-brief.md (ce prompt) | 1 fichier principal | ~8 000 tokens |
| Économie | — | **~83% de réduction** |
