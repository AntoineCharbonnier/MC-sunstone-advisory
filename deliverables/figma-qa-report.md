# Sunstone Advisory — Figma QA Report
> Mis à jour : 2026-03-28 — compte Pro adobe@lumini.fr, fichier 2ICR5FTyzE59ZkTVdPZjQB

---

## Vue d'ensemble

| Phase | Statut | Notes |
|-------|--------|-------|
| Phase 2 — Design System | ✅ Fait (Figma) | 10 variables couleur, 8 text styles, 7 composants |
| Phase 3 — Desktop sections | ⚠️ Script exécuté | Vérifier visuellement dans Figma |
| Phase 4 — SEO page | ⚠️ Script exécuté | Vérifier visuellement dans Figma |
| Phase 5 — Mobile sections | ⚠️ Script prêt | Exécuter `figma-plugin-mobile.js` |
| Phase 6 — QA croisée | ⏳ En attente | Après exécution du script mobile |

---

## Connexion MCP Figma

| Paramètre | Valeur |
|-----------|--------|
| Compte | `adobe@lumini.fr` |
| Plan | Pro (pages illimitées) |
| Token | configuré dans `.claude/settings.local.json` via `FIGMA_ACCESS_TOKEN` |
| Nouveau fichier | `2ICR5FTyzE59ZkTVdPZjQB` |
| URL | https://www.figma.com/design/2ICR5FTyzE59ZkTVdPZjQB/MC---Sunstone-Advisory |
| Statut | ⚠️ Token en place — actif après redémarrage de Claude Code |

> ⚠️ Sécurité : révoquer et regénérer le token depuis figma.com → Settings → Security → Personal Access Tokens.

---

## Structure des pages (compte Pro — pages illimitées)

| Page | Contenu | Statut |
|------|---------|--------|
| `🖥️ Desktop (1440px)` | 9 sections desktop | ⚠️ À vérifier après exécution script |
| `📱 Mobile (390px)` | 3 sections critiques mobile | ⏳ Script prêt |
| `⚙️ SEO & Dev Specs` | Meta, anchors, schema.org, keywords, dev handoff | ⚠️ À vérifier |
| `🎨 Design System` | Variables couleur, text styles, 7 composants | ✅ Créé via MCP |

Pas de contrainte de pages — conserver les 4 pages distinctes.

---

## Assets en place (vérifiés via MCP — session précédente)

### Variables couleur — collection "Sunstone Colors"
| Token | Hex | ID |
|-------|-----|----|
| navy | #0F1A2E | VariableID:8:3 |
| navy-mid | #1A2744 | VariableID:8:4 |
| slate | #2C3E5A | VariableID:8:5 |
| gold-print | #C8A060 | VariableID:8:6 |
| gold-digital | #FFDF90 | VariableID:8:7 |
| cream | #F5F0E8 | VariableID:8:8 |
| warm-white | #FAFAF7 | VariableID:8:9 |
| border-light | #E4DDD0 | VariableID:8:10 |
| text-body | #3A3A3A | VariableID:8:11 |
| text-gray | #7A7A7A | VariableID:8:12 |

### Text Styles (8)
| Style | Police | Taille | ID |
|-------|--------|--------|----|
| Heading/H1 | Cormorant Garamond Regular | 32px | S:f69b6a0e… |
| Heading/H2 | Cormorant Garamond Regular | 22px | S:b09820ec… |
| Heading/Quote | Cormorant Garamond Italic | 15px | S:d785462b… |
| Body/Regular | Inter Regular | 14px, lh 1.75 | S:055da457… |
| Body/Small | Inter Regular | 12px, lh 1.75 | S:fee1355f… |
| Body/Name | Inter Medium | 18px | S:7c63de71… |
| Label/Section | Inter Regular | 11px, uppercase, ls 0.16em | S:1a3073cb… |
| Label/Button | Inter Medium | 12px, uppercase, ls 0.1em | S:6bddb3d4… |

### Composants (7)
| ID | Nom | Node ID |
|----|-----|---------|
| C01 | Section Label | 11:2 |
| C02 | Accent Dot | 11:4 |
| C03 | CTA Button (GET IN TOUCH) | 11:6 |
| C04 | Section Divider | 11:8 |
| C05 | Card Border | 11:10 |
| C06 | Logo Badge | 11:11 |
| C07 | Vertical Bar | 11:13 |

---

## Scripts à exécuter

### 1. `figma-plugin-sections.js` — Desktop 9 sections
> Statut : ⚠️ Exécuté — vérifier visuellement

Sections construites :
- S01 NAV — logo SUN(gold)/STONE(navy), liens, CTA
- S02 HERO — tag + H1 + subtitle
- S03 ABOUT — 3 colonnes avec dots
- S04 OUR APPROACH — fond navy, SUN(gold-digital)/STONE, 2 cartes
- S05 SERVICES — 3 cartes avec em-dashes gold
- S06 WHY SUNSTONE — grille 2×2, fond cream
- S07 FOUNDER — bio 2 colonnes + barre gold + citation
- S08 CONTACT — Let's talk / CTA + coordonnées
- S09 FOOTER — fond navy, logo + copyright

### 2. `figma-plugin-seo-page.js` — SEO & Dev Specs
> Statut : ⚠️ Exécuté — vérifier visuellement

Frames construites : Meta Tags · Anchor IDs · Schema.org · Keywords Map · Dev Handoff

### 3. `figma-plugin-mobile.js` — Mobile 390px (3 sections critiques) ← NOUVEAU
> Statut : ⏳ À exécuter

Sections à construire sur la page "Mobile (390px)" :
- M · S03 About Sunstone — 3 blocs empilés (dot + titre + corps)
- M · S04 Our Approach — 2 cartes empilées, fond navy, SUN(gold-digital)
- M · S05 Services — 3 cartes empilées avec em-dashes

---

## Checklist QA — à compléter après exécution du script mobile

### Desktop (1440px)
- [ ] H1 exact : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*
- [ ] 3 services uniquement (M&A / Portfolio / Fundraising) — pas 2, pas 4
- [ ] Why Sunstone : 4 cartes en grille 2×2
- [ ] SUN en gold-print dans NAV/FOOTER (sections claires)
- [ ] SUN en gold-digital dans OUR APPROACH (section navy)
- [ ] Em-dashes "—" gold dans Services — pas de bullets HTML
- [ ] Barre verticale 2px gold-print sur la citation Bio
- [ ] Badges : DEUTSCHE BANK · CARLYLE · DAUPHINE
- [ ] Footer fond navy — pas warm-white
- [ ] Voix "we" partout sauf Bio (3ème personne)

### Mobile (390px) — après script
- [ ] 3 sections construites : About · Approach · Services
- [ ] About : dots gold + 3 blocs empilés avec gap 24px
- [ ] Approach : fond navy, SUN(gold-digital), 2 cartes empilées
- [ ] Services : 3 cartes empilées avec em-dashes gold

### SEO & Dev Specs
- [ ] Meta title : *Sunstone Advisory — M&A, Fundraising & Transaction Advisory*
- [ ] 5 ancres présentes (#about, #approach, #services, #why-sunstone, #contact)
- [ ] Schema.org JSON présent et complet

### Design Tokens (vérification cross)
- [ ] Pas de hex codés en dur hors des tokens définis
- [ ] Tous les fonds de section conformes (cream → Why, navy → Approach/Footer, warm-white → reste)

---

## Comment exécuter un script

1. Ouvrir Figma Desktop : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone
2. Menu → Plugins → Development → Open Console
3. Coller le contenu du fichier .js → Entrée → attendre ~8s
4. Si une section échoue : re-coller uniquement son bloc (chaque section est autonome)

---

## Notes pour Marine / développeur

- Logo : traitement typographique (SUNSTONE ADVISORY) — à remplacer par le SVG final si livré
- Aucune image dans le wireframe — crédibilité via logos + chiffres
- Fonts : Google Fonts (Cormorant Garamond + Inter) — pas de licence
- Contact : mailto: uniquement — pas de backend
- Hébergement suggéré : Vercel (export statique Next.js) ou Framer
