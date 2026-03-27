# Sunstone Advisory — Architecture du site

## Format général recommandé

**One-pager** (page unique avec ancres de navigation) — le plus adapté à une vitrine premium B2B avec peu de contenu. Navigation sticky en haut, scroll vertical, ancres vers chaque section.

Alternative acceptable : 2 pages (Home + Contact séparé), si Marine veut une page de contact dédiée avec formulaire.

---

## Architecture des sections (dans l'ordre de scroll)

### 1. HEADER / NAVIGATION
- Logo Sunstone Advisory (gauche)
- Navigation : About · Services · Why Sunstone · Contact
- CTA sticky : « Get in touch » (bouton or)
- Fond : transparent sur hero, navy au scroll

---

### 2. HERO
- **Tagline** : *Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.*
- Sous-titre optionnel (court) ou silence visuel
- Un seul CTA : « Get in touch »
- Fond : navy sombre ou blanc très épuré avec typographie forte
- Pas d'image de fond, pas d'illustration — typographie seule

---

### 3. ABOUT SUNSTONE
3 piliers en format carte ou colonnes :
1. Critical transaction support
2. An investor's perspective
3. Hands-on involvement

Chaque pilier = label bold + 1-2 phrases. Pas de bullet points.

---

### 4. STONE / SUN (Approach)
Section visuelle forte — met en scène la dualité de marque.
Format suggéré : 2 colonnes, fond navy, texte blanc/or.
- STONE : Rigorous. Structured. Reliable.
- SUN : Clear. Pragmatic. Easy to work with.

---

### 5. SERVICES
3 colonnes (ou 3 blocs accordéon sur mobile) :
1. M&A Advisory (Buy & Sell)
2. Portfolio Work & Exit Support
3. Fundraising Advisory

Chaque service = titre + liste courte d'éléments (5-6 lignes).
Format : étiquettes, pas de phrases complètes.

---

### 6. WHY SUNSTONE
4 piliers en format label + prose courte :
1. Experienced partner
2. A critical sounding board
3. Hands-on approach
4. Alignment

Fond clair ou léger contraste crème.

---

### 7. FOUNDER
Photo de Marine (si disponible) + bio en 3 paragraphes courts.
Logos Carlyle · Deutsche Bank · Paris Dauphine alignés horizontalement (monochrome gris).
Fond blanc ou crème.

---

### 8. CONTACT
- Titre : « Get in touch » ou « Let's talk »
- Email (lien mailto:)
- Lien LinkedIn
- *Based in Paris, France. Working globally.*
- *You can reach out in French and English.*
- Fond navy (contraste fort pour finir la page)

---

### 9. FOOTER
- Logo minimal
- Copyright Sunstone Advisory 2026
- Email + LinkedIn (répétés)
- Mentions légales (lien)

---

## Considérations mobiles

- Navigation : hamburger menu sur mobile
- Services : 1 colonne, accordéon dépliable
- Hero : tagline sur 2-3 lignes max, CTA visible sans scroll
- STONE/SUN : stacked verticalement sur mobile

---

## Performance & technique

- Pas de vidéo autoplay, pas d'animations lourdes
- Images optimisées (WebP)
- Formulaire contact = simple `mailto:` ou service léger (Formspree, Resend)
- Analytics minimal (respect RGPD) — Plausible ou simple GA4 sans cookie wall
- HTTPS obligatoire
- Temps de chargement < 2s — site statique privilégié
