# Sunstone Advisory — Site vitrine

Site vitrine de Sunstone Advisory, cabinet de conseil M&A indépendant fondé par Marine Charbonnier. Une page, en anglais, sobre et premium — le rôle du site est de convertir une visite en prise de contact, pas d'expliquer longuement les services.

**En ligne depuis le 20 juillet 2026** — [sunstoneadvisory.fr](https://sunstoneadvisory.fr)

## Stack

- HTML/CSS/JS vanilla — pas de framework, pas de build step, pas de CMS
- Police : Plus Jakarta Sans (Google Fonts)
- Analytics : Google Tag Manager (`GTM-55D89GB5`) + GA4, avec Consent Mode v2 et bannière cookies
- Hébergement : OVH mutualisé, Apache (`.htaccess` pour redirections et auth)
- Déploiement : GitHub Actions (`FTP-Deploy-Action`) déclenché à chaque push sur `main`, qui synchronise tout `website/` vers le webroot OVH
- SEO : `robots.txt`, `sitemap.xml`, propriété vérifiée sur Google Search Console

## Structure du repo

- `website/index.html` — homepage live
- `website/waiting-page/` — ancienne page "coming soon", conservée en `noindex` sur `/waiting-page/`
- `website/previews/` — historique des versions de design explorées (`finale-v1` à `v9`, `alt-a` à `j`, `v2/*`)
- `website/assets/` — photos, logos, image de partage (Open Graph)
- `founder/`, `strategy/`, `wording-review/`, `logos*/` — matériel de travail (positionnement, copy, pistes de logo), non déployé sur le site

## Historique

Le design a été exploré en continu de juin à mi-juillet 2026 à travers neuf versions finales successives (V1 à V9) et une dizaine de variantes alternatives, avec allers-retours réguliers avec Marine sur la copy, les photos, le footer et le bloc contact. La V9 (copy définitive) a été verrouillée le 16 juillet 2026.

Le 20 juillet 2026, mise en ligne effective :

- Homepage V9 publiée en production (switcher de version retiré, `robots: index, follow`)
- Ancienne page coming-soon déplacée sur `/waiting-page/` (`noindex, nofollow`)
- Authentification Basic (`.htpasswd`) qui bloquait l'accès public en prod, levée
- `robots.txt` et `sitemap.xml` créés, sitemap soumis et indexation de la homepage demandée sur Search Console
- Redirection 301 `www` → non-`www` (canonicalisation, évite le duplicate content)
- Image de partage (Open Graph) refaite : logo intégré, typographie alignée sur celle du site (Plus Jakarta Sans), texte synchronisé avec le hero
- Balises Open Graph et Twitter Card complétées (`image:type`, `image:alt`) pour un partage propre sur LinkedIn, WhatsApp, Slack, etc.
