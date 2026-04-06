# /figma-patch-v2 — Sunstone Advisory · Design v2

> Slash command Claude Code. Lancer depuis la racine de MC-Sunstone-Advisory/.
> Prérequis : MCP Figma connecté.
> Figma : https://www.figma.com/design/2ICR5FTyzE59ZkTVdPZjQB/MC---Sunstone-Advisory
> File key : `2ICR5FTyzE59ZkTVdPZjQB` · Page cible : `Desktop (1440px)`

---

## ━━ CONTEXTE ━━

Le mockup Sunstone Advisory existe dans Figma (frame "Sunstone Advisory — One Pager").
Il faut créer une **version 2** inspirée du site Astraeus Wealth (astraeuswealth.com),
sur deux points précis :

1. **Typographie** — jouer sur les épaisseurs de graisse (weight contrast)
2. **Boîtes/cards** — renforcer les bordures pour structurer les listes

Aucun changement de copy, de couleurs de marque, ni d'architecture de sections.

---

## ━━ PROMPT ━━

```
Tu travailles sur le projet Sunstone Advisory.
Fichier Figma : https://www.figma.com/design/2ICR5FTyzE59ZkTVdPZjQB/MC---Sunstone-Advisory
File key : 2ICR5FTyzE59ZkTVdPZjQB
Page cible : "Desktop (1440px)"
Frame source : "Sunstone Advisory — One Pager"

═══════════════════════════════════════════════════
MISSION
═══════════════════════════════════════════════════

Créer une nouvelle frame "Sunstone Advisory — One Pager v2" dans le fichier Figma,
positionnée à droite de l'originale (x = original.x + original.width + 120).

Cette v2 est une copie de l'originale avec les modifications suivantes appliquées.
L'originale reste INTACTE pour comparaison.

═══════════════════════════════════════════════════
ÉTAPE 0 — SKILL DISCOVERY
═══════════════════════════════════════════════════

Avant toute action :
- Liste tes outils Figma disponibles via le MCP
- Détermine ton mode :
    → MODE DIRECT si tu as des outils write (set_fill, create_frame, update_node, etc.)
    → MODE PLUGIN si tu as uniquement des outils read (get_screenshot, get_metadata, etc.)
- Documente : "Mode retenu : DIRECT ou PLUGIN"

═══════════════════════════════════════════════════
MODIFICATIONS À APPLIQUER (source de vérité)
═══════════════════════════════════════════════════

── MOD 1 · TEXT STYLE "Heading/H1" ──────────────────────────────────────────
Style local Figma concerné : "Heading/H1"
Avant : Cormorant Garamond · Regular · 32px
Après : Cormorant Garamond · SemiBold · 36px
Effet attendu : le titre hero gagne en poids visuel tout en restant dans la même famille serif.
Note : modifier le style local affecte les deux frames (original + v2). C'est voulu.

── MOD 2 · TEXT STYLE "Heading/H2" ──────────────────────────────────────────
Style local Figma concerné : "Heading/H2"
Avant : Cormorant Garamond · Regular · 22px
Après : Cormorant Garamond · SemiBold · 22px
Effet attendu : les titres de section ("Let's talk.", "SUNSTONE"/"SUN" dans Approach) plus affirmés.

── MOD 3 · SERVICES CARDS — bordure ─────────────────────────────────────────
Section concernée : frame nommée "S05 / SERVICES" dans la v2
Cibles : toutes les frames enfants avec layoutMode=VERTICAL, itemSpacing=0 et un stroke existant
  (ce sont les 3 cartes de services : M&A, Portfolio, Fundraising)
Avant : strokeWeight = 1
Après : strokeWeight = 2
strokeAlign : INSIDE (inchangé)

── MOD 4 · SERVICES CARDS — titre ───────────────────────────────────────────
Dans les mêmes 3 cartes Services :
Cible : le premier enfant de type TEXT dans chaque carte (titre uppercase de la carte)
Avant : Inter · Regular (via style Label/Section)
Après : Inter · SemiBold (override direct sur le nœud — ne pas modifier le style global)
Effet attendu : contraste titre/liste à l'intérieur des cartes, comme les feature boxes d'Astraeus.

── MOD 5 · WHY SUNSTONE CARDS — bordure ─────────────────────────────────────
Section concernée : frame nommée "S06 / WHY SUNSTONE" dans la v2
Cibles : toutes les frames enfants avec layoutMode=VERTICAL, itemSpacing=12 et un stroke existant
  (ce sont les 4 cartes : Experienced partner, Critical sounding board, Hands-on, Independent)
Avant : strokeWeight = 1
Après : strokeWeight = 1.5
strokeAlign : INSIDE (inchangé)

── MOD 6 · WHY SUNSTONE CARDS — titre ───────────────────────────────────────
Dans les mêmes 4 cartes Why Sunstone :
Cible : le premier enfant de type TEXT dans chaque carte
Avant : Inter · Medium (via style Label/Section)
Après : Inter · SemiBold (override direct sur le nœud)

── MOD 7 · ABOUT COLUMNS — accent top border ────────────────────────────────
Section concernée : frame nommée "S03 / ABOUT" dans la v2
Cible : le frame enfant en layoutMode=HORIZONTAL contenant exactement 3 colonnes
  → sur chacune des 3 colonnes (frames enfants directs de la grille)
Avant : pas de stroke
Après :
  strokes   = [{ type: "SOLID", color: { r: 0.784, g: 0.627, b: 0.376 } }]  // #C8A060
  strokeTopWeight    = 2
  strokeBottomWeight = 0
  strokeLeftWeight   = 0
  strokeRightWeight  = 0
  strokeAlign = INSIDE
Effet attendu : un trait gold fin en haut de chaque colonne About, pour les cadrer
  sans créer de boîte complète — comme les feature boxes Astraeus.

═══════════════════════════════════════════════════
EXÉCUTION SELON LE MODE
═══════════════════════════════════════════════════

── EN MODE DIRECT ────────────────────────────────────────────────────────────

Applique les 7 modifications via les outils Figma write disponibles.
Séquence recommandée :
  1. Naviguer sur la page "Desktop (1440px)"
  2. Localiser "Sunstone Advisory — One Pager"
  3. Cloner la frame → nommer la copie "Sunstone Advisory — One Pager v2"
  4. Positionner v2 à x = original.x + original.width + 120, y = original.y
  5. Modifier les text styles locaux (MOD 1 et 2) — une seule fois, global
  6. Dans la v2 uniquement : appliquer MOD 3 → 7 nœud par nœud
  7. Zoomer/centrer sur la v2 pour validation visuelle

── EN MODE PLUGIN ────────────────────────────────────────────────────────────

Génère un script Figma console autonome (JavaScript) que tu exécutes via
Plugins → Development → Open Console dans le Figma Desktop.

Le script doit :

(async () => {

  // 1. FONTS
  await Promise.all([
    figma.loadFontAsync({ family: "Cormorant Garamond", style: "Regular" }),
    figma.loadFontAsync({ family: "Cormorant Garamond", style: "Italic" }),
    figma.loadFontAsync({ family: "Cormorant Garamond", style: "SemiBold" }),
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Medium" }),
    figma.loadFontAsync({ family: "Inter", style: "SemiBold" }),
  ]);

  function hexToRgb(hex) {
    return {
      r: parseInt(hex.slice(1,3),16)/255,
      g: parseInt(hex.slice(3,5),16)/255,
      b: parseInt(hex.slice(5,7),16)/255
    };
  }

  const goldPrint = hexToRgb("#C8A060");
  const log = [];

  // 2. TEXT STYLES LOCAUX (MOD 1 + 2 — affecte toutes les instances)
  const h1 = figma.getLocalTextStyles().find(s => s.name === "Heading/H1");
  if (h1) { h1.fontName = { family: "Cormorant Garamond", style: "SemiBold" }; h1.fontSize = 36; log.push("✓ H1 SemiBold 36px"); }

  const h2 = figma.getLocalTextStyles().find(s => s.name === "Heading/H2");
  if (h2) { h2.fontName = { family: "Cormorant Garamond", style: "SemiBold" }; log.push("✓ H2 SemiBold"); }

  // 3. PAGE + WRAPPER
  const page = figma.root.children.find(p => p.name === "Desktop (1440px)");
  if (!page) { figma.notify("❌ Page introuvable"); return; }
  await figma.setCurrentPageAsync(page);

  const original = page.findChild(n => n.name === "Sunstone Advisory — One Pager");
  if (!original) { figma.notify("❌ Frame originale introuvable"); return; }

  // 4. CLONE → V2
  const v2 = original.clone();
  v2.name = "Sunstone Advisory — One Pager v2";
  v2.x = original.x + original.width + 120;
  v2.y = original.y;
  page.appendChild(v2);
  log.push("✓ Frame v2 créée à x=" + v2.x);

  // 5. SERVICES CARDS (MOD 3 + 4)
  const svcSection = v2.findOne(n => n.name === "S05 / SERVICES");
  if (svcSection) {
    const cards = svcSection.findAll(n =>
      n.type === "FRAME" && n.layoutMode === "VERTICAL" &&
      n.itemSpacing === 0 && n.strokes && n.strokes.length > 0
    );
    for (const c of cards) {
      c.strokeWeight = 2;                                                    // MOD 3
      const title = c.children.find(n => n.type === "TEXT");
      if (title) title.setRangeFontName(0, title.characters.length,
        { family: "Inter", style: "SemiBold" });                             // MOD 4
    }
    log.push("✓ Services : " + cards.length + " cartes → 2px + SemiBold");
  }

  // 6. WHY SUNSTONE CARDS (MOD 5 + 6)
  const whySection = v2.findOne(n => n.name === "S06 / WHY SUNSTONE");
  if (whySection) {
    const cards = whySection.findAll(n =>
      n.type === "FRAME" && n.layoutMode === "VERTICAL" &&
      n.itemSpacing === 12 && n.strokes && n.strokes.length > 0
    );
    for (const c of cards) {
      c.strokeWeight = 1.5;                                                  // MOD 5
      const title = c.children.find(n => n.type === "TEXT");
      if (title) title.setRangeFontName(0, title.characters.length,
        { family: "Inter", style: "SemiBold" });                             // MOD 6
    }
    log.push("✓ Why Sunstone : " + cards.length + " cartes → 1.5px + SemiBold");
  }

  // 7. ABOUT COLUMNS — gold top border (MOD 7)
  const aboutSection = v2.findOne(n => n.name === "S03 / ABOUT");
  if (aboutSection) {
    const grid = aboutSection.findOne(n =>
      n.type === "FRAME" && n.layoutMode === "HORIZONTAL" &&
      n.children && n.children.length === 3
    );
    if (grid) {
      for (const col of grid.children) {
        if (col.type !== "FRAME") continue;
        col.strokes = [{ type: "SOLID", color: goldPrint }];
        col.strokeTopWeight = 2; col.strokeBottomWeight = 0;
        col.strokeLeftWeight = 0; col.strokeRightWeight = 0;
        col.strokeAlign = "INSIDE";
      }
      log.push("✓ About : 3 colonnes → gold border-top 2px");
    }
  }

  // 8. ZOOM SUR V2
  figma.viewport.scrollAndZoomIntoView([v2]);

  console.log("\n── PATCH V2 REPORT ──\n" + log.join("\n"));
  figma.notify("✅ v2 créée — " + log.length + " modifications appliquées");

})();

Exécute ce script dans la console Figma et vérifie le résultat via get_screenshot.

═══════════════════════════════════════════════════
VALIDATION FINALE
═══════════════════════════════════════════════════

Après exécution, prends un screenshot de la v2 et vérifie visuellement :

  □ Le titre hero est-il plus épais/grand que dans l'originale ? (H1 SemiBold 36px)
  □ Les cartes Services ont-elles une bordure clairement visible ? (2px)
  □ Les titres des cartes Services sont-ils plus gras que les items de liste ?
  □ Les cartes Why Sunstone ont-elles une bordure légèrement plus épaisse ? (1.5px)
  □ Les 3 colonnes About ont-elles un fin trait gold en haut ?
  □ L'originale est-elle intacte à côté ?

Si un point échoue, diagnostique (mauvais nom de frame ? itemSpacing différent ?)
et applique une correction ciblée.

Rapport final attendu dans la console :
  - Nombre de modifications appliquées
  - Éventuels nœuds non trouvés (avec le nom cherché)
  - URL de la frame v2 : https://www.figma.com/design/2ICR5FTyzE59ZkTVdPZjQB/...?node-id=XX-XX
```
