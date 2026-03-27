# Sunstone Advisory — Stratégie SEO

## Contexte

Site vitrine one-pager B2B. L'objectif SEO est **secondaire à la crédibilité** — les clients de Marine arriveront majoritairement par réseau, référencement direct ou LinkedIn. Néanmoins, une base SEO solide est indispensable pour la visibilité sur les recherches qualifiées.

---

## Mots-clés cibles prioritaires

### Cluster 1 — M&A Advisory indépendant
| Mot-clé | Intention |
|---------|-----------|
| `independent M&A advisor France` | Recherche directe de prestataire |
| `boutique M&A advisory Paris` | Géolocalisation + positionnement |
| `M&A advisory mid-market France` | Segment de marché |
| `conseiller en cession acquisition PME` | Cible fondateur PME (FR) |
| `conseil en cession entreprise France` | Cible cédant (FR) |

### Cluster 2 — Fundraising
| Mot-clé | Intention |
|---------|-----------|
| `fundraising advisor France` | Recherche directe |
| `conseil en levée de fonds France` | Cible entrepreneur (FR) |
| `equity story preparation France` | Long-tail qualifié |
| `investor materials advisory` | Recherche internationale |

### Cluster 3 — Portfolio / PE (cas d'usage différenciant)
| Mot-clé | Intention |
|---------|-----------|
| `portfolio company M&A support` | PE fund cherchant support portcos |
| `add-on acquisition advisory PE` | Long-tail très qualifié |
| `exit preparation private equity France` | Très qualifié |
| `PE portco M&A advisor` | Niche différenciante |

### Cluster 4 — Marque / directes
| Mot-clé | Intention |
|---------|-----------|
| `Sunstone Advisory` | Marque |
| `Marine Charbonnier` | Fondatrice |
| `sunstoreadvisory.com` | Domaine |

---

## Architecture URL (si multi-pages)

```
/                        → Home (hero + about + approach)
/services                → Services (3 catégories)
/why-sunstone            → Why Sunstone (4 piliers)
/about                   → Founder bio
/contact                 → Contact
```

Pour un one-pager : ancres `#services`, `#about`, `#why-sunstone`, `#contact`

---

## Balises title recommandées

| Page | Title |
|------|-------|
| Home | `Sunstone Advisory — M&A, Fundraising & Transaction Advisory` |
| Services | `Services — M&A Advisory, Portfolio Work & Fundraising | Sunstone Advisory` |
| About | `Marine Charbonnier — Founder | Sunstone Advisory` |
| Contact | `Get in Touch | Sunstone Advisory` |

---

## Meta descriptions

**Home** :
```
Independent transaction advisory firm. M&A advisory, fundraising and portfolio work, combining 10 years of investment banking and private equity experience. Based in Paris, working globally.
```

**Services** :
```
Sunstone Advisory offers M&A advisory (buy & sell), portfolio work & exit support, and fundraising advisory — senior, hands-on, no layers.
```

---

## Données structurées (Schema.org) recommandées

```json
{
  "@type": "ProfessionalService",
  "name": "Sunstone Advisory",
  "founder": "Marine Charbonnier",
  "address": { "addressLocality": "Paris", "addressCountry": "FR" },
  "areaServed": "Global",
  "knowsLanguage": ["en", "fr"],
  "serviceType": ["M&A Advisory", "Fundraising Advisory", "Portfolio Work"]
}
```

---

## SEO technique

- `robots.txt` : autoriser tout, bloquer `/admin` si applicable
- `sitemap.xml` : générer automatiquement
- Open Graph tags : image = logo navy + tagline (1200×630px)
- Twitter Card : `summary_large_image`
- Canonical URL sur toutes les pages
- Pas de pages dupliquées FR/EN (site en anglais uniquement)
- HTTPS + redirections www → non-www (ou l'inverse, à choisir et tenir)

---

## LinkedIn (canal principal)

Le SEO secondaire de Marine passe par LinkedIn :
- URL de profil personnalisée : `linkedin.com/in/marine-charbonnier`
- Titre LinkedIn aligné avec le positionnement du site
- Le site doit être listé dans la section "Site web" du profil LinkedIn
- Posts réguliers sur les transactions → notoriété + SEO indirect (backlinks)
