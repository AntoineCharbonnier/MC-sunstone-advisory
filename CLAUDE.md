# Sunstone Advisory — Mémoire Projet Claude

> **Dernière mise à jour** : Mars 2026 — Trame Website v7 (version finale)
> **Client** : Marine Charbonnier
> **Projet** : Création du site web vitrine de Sunstone Advisory, cabinet M&A advisory indépendant basé à Paris

---

## Vue d'ensemble du projet

**Sunstone Advisory** est un cabinet de conseil en transactions (M&A, fundraising, accompagnement de portefeuille) fondé par Marine Charbonnier, ancienne Senior Associate chez Carlyle (PE européen) et Associate chez Deutsche Bank (Investment Banking). L'unicité du positionnement repose sur la double culture IB + PE : Marine a vu les deals des deux côtés de la table.

Le site est une **vitrine de crédibilité** — sobre, premium, en anglais, sans surcharge. Son rôle est de convertir une visite en prise de contact, pas d'expliquer longuement les services.

**Tagline finale** : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*

---

## ⚡ Raccourcis agents — Fichiers clés pour CC

> **Si tu travailles sur Figma, le wireframe ou le développement du site** : commence par lire uniquement ce fichier (il consolide tout) :
> **[`deliverables/figma-brief.md`](deliverables/figma-brief.md)** — Copy v7 + design tokens + layout + SEO en un seul fichier. Ne lis pas les 6 fichiers source séparément sauf si tu as besoin d'un détail non couvert.

> **Prompt maître pour création du wireframe Figma (multi-agents, plan mode)** :
> **[`.claude/commands/figma-wireframe.md`](.claude/commands/figma-wireframe.md)**

> **Fichier Figma du projet** : https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone?node-id=0-1

> **Différences de wording mockup vs v7** : [`wording-review/`](wording-review/) — consulter avant toute intégration

---

## Navigation dans ce dossier

Lis le fichier correspondant à ta tâche en cours :

| Tâche | Fichier à lire |
|-------|---------------|
| **Figma / wireframe / dev (PRIORITÉ)** | **[`deliverables/figma-brief.md`](deliverables/figma-brief.md)** |
| Écrire ou modifier du copy | [`website/copy-final.md`](website/copy-final.md) |
| Intégrer le design / DA / couleurs | [`brand/visual-identity.md`](brand/visual-identity.md) |
| Comprendre le positionnement et la marque | [`brand/positioning.md`](brand/positioning.md) |
| Travailler sur le SEO / URLs / meta | [`website/seo.md`](website/seo.md) |
| Comprendre la structure des pages | [`website/structure.md`](website/structure.md) |
| Retrouver la bio de Marine | [`founder/marine-charbonnier.md`](founder/marine-charbonnier.md) |
| Comprendre pourquoi un choix a été fait | [`strategy/arbitrages.md`](strategy/arbitrages.md) |
| Analyser la concurrence | [`strategy/competitive-landscape.md`](strategy/competitive-landscape.md) |
| Retrouver les documents de travail PDF | [`deliverables/index.md`](deliverables/index.md) |
| Travailler sur le layout Figma / structure visuelle | [`website/wireframe-reference.md`](website/wireframe-reference.md) |

---

## Points critiques à retenir (ne jamais ignorer)

1. **Langue** : le site est intégralement en anglais. Marine peut être contactée en français ou anglais.
2. **Pas de bullet points** dans le copy final — prose et format étiquette/label uniquement.
3. **Pas de témoignages clients** — choix stratégique délibéré. La crédibilité passe par les logos (Carlyle, Deutsche Bank, Dauphine), les chiffres (20+ closed, 100+ assessed) et la précision technique.
4. **3 services** — pas 2 : M&A Advisory (Buy & Sell) / Portfolio Work & Exit Support / Fundraising Advisory.
5. **Voix "we"** sur le site (partner tone), bio en **3ème personne** pour la section fondatrice.
6. **STONE/SUN** est la dualité de marque — navy + or, rigueur + clarté. Ne pas diluer.
7. **Minimaliste** — sections courtes, beaucoup d'espace blanc, aucune surcharge.

---

## Stack technique envisagée

À confirmer avec Marine — suggestions compatibles avec le brief DA :
- Site statique (Next.js / Astro / Hugo) ou no-code premium (Framer, Webflow)
- Une seule page longue (one-pager) ou 3–4 pages max
- Formulaire de contact = ouverture d'un email client (`mailto:`)
- Pas de CMS nécessaire (contenu très stable)

---

## Historique des versions Trame

| Version | Statut | Notes |
|---------|--------|-------|
| v4 | Archivée | Version initiale analysée par agents |
| v5 | Archivée | Intégration des 7 arbitrages stratégiques |
| v6 | Archivée | Structuration 3 services, bio complète |
| **v7** | **✅ Finale** | Copy resserré, bio en 3 bullets, labels Why Sunstone finalisés |
