# Sunstone Advisory — Mémoire Projet Claude

**Langue** : toujours répondre en français à Antoine sur ce projet.

**Autonomie** : si tu détectes une amélioration technique évidente sur ce projet (bug, incohérence, fix SEO/robots/URL...), l'appliquer directement sans demander confirmation, sauf action risquée (destructrice, irréversible, visible publiquement sans retour arrière facile).

> **Dernière mise à jour** : Mars 2026 — Trame Website v7 (version finale)
> **Client** : Marine Charbonnier
> **Projet** : Création du site web vitrine de Sunstone Advisory, cabinet M&A advisory indépendant basé à Paris

---

## Vue d'ensemble du projet

**Sunstone Advisory** est un cabinet de conseil en transactions (M&A, fundraising, accompagnement de portefeuille) fondé par Marine Charbonnier, ancienne Senior Associate chez Carlyle (PE européen) et Associate chez Deutsche Bank (Investment Banking). L'unicité du positionnement repose sur la double culture IB + PE : Marine a vu les deals des deux côtés de la table.

Le site est une **vitrine de crédibilité** — sobre, premium, en anglais, sans surcharge. Son rôle est de convertir une visite en prise de contact, pas d'expliquer longuement les services.

**Tagline finale** : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*

---

## ⚡ Navigation & raccourcis agents → `_memory/navigation-projet.md`

Lire si : session nouvelle ou besoin de savoir quel fichier source consulter.

**Raccourci critique** : pour Figma/wireframe/dev → lire [`deliverables/figma-brief.md`](deliverables/figma-brief.md) en priorité (consolide tout).

---

## Règles contenu & voix → `_memory/regles-contenu.md`

Lire si : tâche touche copy, design, structure du site, voix de la marque, ou intégration Figma.

**Règles clés** : site en anglais · pas de bullet points · pas de témoignages · 3 services · voix "we" · navy+or · minimaliste.

---

## Stack technique envisagée

À confirmer avec Marine — suggestions compatibles avec le brief DA :
- Site statique (Next.js / Astro / Hugo) ou no-code premium (Framer, Webflow)
- Une seule page longue (one-pager) ou 3–4 pages max
- Formulaire de contact = ouverture d'un email client (`mailto:`)
- Pas de CMS nécessaire (contenu très stable)
