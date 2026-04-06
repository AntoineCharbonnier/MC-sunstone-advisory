/**
 * SUNSTONE ADVISORY — Figma Patch v2
 * Inspiré par Astraeus Wealth (astraeuswealth.com)
 *
 * Changements appliqués :
 *   1. Typographie — H1 : Cormorant Garamond Regular 32px → SemiBold 36px
 *   2. Typographie — H2 : Regular → SemiBold (sections headers)
 *   3. Services cards — bordure 1px → 2px (plus de présence)
 *   4. Services cards — titre en Inter SemiBold (poids Astraeus)
 *   5. Why Sunstone cards — bordure 1px → 1.5px
 *   6. Why Sunstone cards — titre en Inter SemiBold
 *   7. About columns — ajout d'un léger border-top gold (2px) pour structurer
 *
 * HOW TO RUN :
 *   1. Ouvrir le fichier Figma :
 *      https://www.figma.com/design/2ICR5FTyzE59ZkTVdPZjQB/MC---Sunstone-Advisory
 *   2. Aller dans Plugins → Development → Open Console
 *   3. Coller ce script et appuyer sur Entrée
 *   4. Attendre ~5 secondes — une frame "v2" apparaît à droite du mockup original
 *
 * RÉSULTAT : un nouveau frame "Sunstone Advisory — One Pager v2" est créé.
 * L'original reste intact pour comparaison.
 */

(async () => {

// ── HELPERS ──────────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16) / 255;
  const g = parseInt(hex.slice(3,5), 16) / 255;
  const b = parseInt(hex.slice(5,7), 16) / 255;
  return { r, g, b };
}

const C = {
  navy:        hexToRgb("#0F1A2E"),
  goldPrint:   hexToRgb("#C8A060"),
  borderLight: hexToRgb("#E4DDD0"),
  textBody:    hexToRgb("#3A3A3A"),
  white:       { r: 1, g: 1, b: 1 },
};

const report = [];

// ── 1. LOAD FONTS ─────────────────────────────────────────────────────────────

await Promise.all([
  figma.loadFontAsync({ family: "Cormorant Garamond", style: "Regular" }),
  figma.loadFontAsync({ family: "Cormorant Garamond", style: "Italic" }),
  figma.loadFontAsync({ family: "Cormorant Garamond", style: "SemiBold" }),
  figma.loadFontAsync({ family: "Inter", style: "Regular" }),
  figma.loadFontAsync({ family: "Inter", style: "Medium" }),
  figma.loadFontAsync({ family: "Inter", style: "SemiBold" }),
]);

// ── 2. NAVIGATE TO DESKTOP PAGE ───────────────────────────────────────────────

const page = figma.root.children.find(p => p.name === "Desktop (1440px)");
if (!page) { figma.notify("❌ Page 'Desktop (1440px)' introuvable"); return; }
await figma.setCurrentPageAsync(page);

const original = page.findChild(n => n.name === "Sunstone Advisory — One Pager");
if (!original) { figma.notify("❌ Frame principal introuvable"); return; }

// ── 3. CLONE → CREATE V2 ─────────────────────────────────────────────────────

const v2 = original.clone();
v2.name = "Sunstone Advisory — One Pager v2";
v2.x = original.x + original.width + 120; // positionner à droite de l'original
v2.y = original.y;
page.appendChild(v2);
report.push("✓ Frame v2 créée à x=" + v2.x);

// ── 4. MISE À JOUR DES TEXT STYLES LOCAUX ────────────────────────────────────
//   On met à jour les styles locaux — ça s'applique aussi à l'original.
//   Si tu veux préserver l'original, commente ce bloc.

const h1Style = figma.getLocalTextStyles().find(s => s.name === "Heading/H1");
if (h1Style) {
  h1Style.fontName = { family: "Cormorant Garamond", style: "SemiBold" };
  h1Style.fontSize = 36;
  report.push("✓ Heading/H1 : Regular 32px → SemiBold 36px");
}

const h2Style = figma.getLocalTextStyles().find(s => s.name === "Heading/H2");
if (h2Style) {
  h2Style.fontName = { family: "Cormorant Garamond", style: "SemiBold" };
  report.push("✓ Heading/H2 : Regular → SemiBold");
}

// ── 5. SERVICES CARDS — 2px border + SemiBold titles ─────────────────────────

const svcSection = v2.findOne(n => n.name === "S05 / SERVICES");
if (svcSection) {
  // Les cartes Services ont itemSpacing=0 et un stroke (la grille elle-même n'en a pas)
  const svcCards = svcSection.findAll(n =>
    n.type === "FRAME" &&
    n.layoutMode === "VERTICAL" &&
    n.itemSpacing === 0 &&
    n.strokes && n.strokes.length > 0
  );

  let cardCount = 0;
  for (const card of svcCards) {
    // Bordure plus épaisse (effet Astraeus)
    card.strokeWeight = 2;
    card.strokeAlign = "INSIDE";

    // Titre de carte → Inter SemiBold
    const titleNode = card.children.find(n => n.type === "TEXT");
    if (titleNode) {
      titleNode.setRangeFontName(
        0,
        titleNode.characters.length,
        { family: "Inter", style: "SemiBold" }
      );
    }
    cardCount++;
  }
  report.push(`✓ Services : ${cardCount} cartes → 2px border + Inter SemiBold`);
} else {
  report.push("⚠ Section S05 / SERVICES non trouvée dans la v2");
}

// ── 6. WHY SUNSTONE CARDS — 1.5px border + SemiBold titles ──────────────────

const whySection = v2.findOne(n => n.name === "S06 / WHY SUNSTONE");
if (whySection) {
  // Les cartes Why Sunstone ont itemSpacing=12
  const whyCards = whySection.findAll(n =>
    n.type === "FRAME" &&
    n.layoutMode === "VERTICAL" &&
    n.itemSpacing === 12 &&
    n.strokes && n.strokes.length > 0
  );

  let cardCount = 0;
  for (const card of whyCards) {
    card.strokeWeight = 1.5;
    card.strokeAlign = "INSIDE";

    // Titre de carte → Inter SemiBold
    const titleNode = card.children.find(n => n.type === "TEXT");
    if (titleNode) {
      titleNode.setRangeFontName(
        0,
        titleNode.characters.length,
        { family: "Inter", style: "SemiBold" }
      );
    }
    cardCount++;
  }
  report.push(`✓ Why Sunstone : ${cardCount} cartes → 1.5px border + Inter SemiBold`);
} else {
  report.push("⚠ Section S06 / WHY SUNSTONE non trouvée dans la v2");
}

// ── 7. ABOUT COLUMNS — ajout d'un accent top border gold ─────────────────────
//   Les 3 colonnes About reçoivent un trait gold en haut (2px) pour les structurer
//   comme les feature boxes d'Astraeus.

const aboutSection = v2.findOne(n => n.name === "S03 / ABOUT");
if (aboutSection) {
  // Colonnes About : frames horizontales sans stroke, avec itemSpacing
  // Elles sont dans un frame horizontal (la grille 3 cols)
  const aboutGrid = aboutSection.findOne(n =>
    n.type === "FRAME" &&
    n.layoutMode === "HORIZONTAL" &&
    n.children && n.children.length === 3
  );

  if (aboutGrid) {
    for (const col of aboutGrid.children) {
      if (col.type !== "FRAME") continue;
      col.strokes = [{ type: "SOLID", color: C.goldPrint }];
      col.strokeWeight = 2;
      col.strokeAlign = "INSIDE";
      // Appliquer seulement en haut (les autres côtés à 0)
      col.strokeTopWeight    = 2;
      col.strokeBottomWeight = 0;
      col.strokeLeftWeight   = 0;
      col.strokeRightWeight  = 0;
    }
    report.push("✓ About : 3 colonnes → gold border-top 2px");
  }
} else {
  report.push("⚠ Section S03 / ABOUT non trouvée — vérifier le nom exact de la frame");
}

// ── 8. SCROLL TO V2 ──────────────────────────────────────────────────────────

figma.viewport.scrollAndZoomIntoView([v2]);

// ── RAPPORT FINAL ─────────────────────────────────────────────────────────────

const summary = report.join("\n");
console.log("\n── SUNSTONE v2 PATCH REPORT ──\n" + summary + "\n");
figma.notify("✅ v2 créée ! " + report.length + " modifications appliquées.");

})();
