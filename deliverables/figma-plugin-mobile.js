/**
 * Sunstone Advisory — Mobile Wireframe Script (390px)
 * Builds the 3 critical responsive sections on the "Mobile (390px)" page.
 *
 * Sections : About (3-col → stack), Our Approach (2-col → stack), Services (3-col → stack)
 *
 * HOW TO RUN:
 *   1. Open: https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone
 *   2. Plugins → Development → Open Console
 *   3. Paste this script → Enter → wait ~8s
 *
 * PREREQUISITES (must already exist):
 *   - Page named "Mobile (390px)"
 *   - Text styles: Heading/H1, H2, Quote, Body/Regular, Body/Small, Body/Name, Label/Section, Label/Button
 *   - Color variables are referenced by hex (variables can't be applied via plugin API)
 */

(async () => {

// ── FONTS ─────────────────────────────────────────────────────────────────────
await figma.loadFontAsync({ family: "Cormorant Garamond", style: "Regular" });
await figma.loadFontAsync({ family: "Cormorant Garamond", style: "Italic" });
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });

// ── COLORS ────────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1,3), 16) / 255,
    g: parseInt(hex.slice(3,5), 16) / 255,
    b: parseInt(hex.slice(5,7), 16) / 255,
  };
}

const C = {
  navy:        hexToRgb("#0F1A2E"),
  slate:       hexToRgb("#2C3E5A"),
  goldPrint:   hexToRgb("#C8A060"),
  goldDigital: hexToRgb("#FFDF90"),
  cream:       hexToRgb("#F5F0E8"),
  warmWhite:   hexToRgb("#FAFAF7"),
  borderLight: hexToRgb("#E4DDD0"),
  textBody:    hexToRgb("#3A3A3A"),
  textGray:    hexToRgb("#7A7A7A"),
  white:       { r: 1, g: 1, b: 1 },
};

function sf(color)  { return [{ type: "SOLID", color }]; }

// ── TEXT STYLE HELPERS ────────────────────────────────────────────────────────
function getTS(name) {
  return figma.getLocalTextStyles().find(s => s.name === name);
}

function makeText(chars, styleName, color, widthPx) {
  const t = figma.createText();
  const style = getTS(styleName);
  if (style) t.textStyleId = style.id;
  t.characters = chars;
  t.fills = sf(color);
  if (widthPx) {
    t.resize(widthPx, 10);
    t.textAutoResize = "HEIGHT";
  }
  return t;
}

// ── PAGE NAVIGATION ───────────────────────────────────────────────────────────
const mobilePage = figma.root.children.find(p => p.name === "Mobile (390px)");
if (!mobilePage) {
  figma.notify("❌ Page 'Mobile (390px)' not found. Create it first.", { error: true });
  return;
}
await figma.setCurrentPageAsync(mobilePage);

const W = 390;          // mobile canvas width
const PAD_H = 24;       // horizontal padding
const PAD_V = 48;       // vertical padding
const INNER = W - PAD_H * 2; // 342px usable width

let Y_OFFSET = 0;       // tracks vertical position between sections

// ── HELPER: section frame ─────────────────────────────────────────────────────
function createSectionFrame(name, bgColor) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(W, 100); // height will be set at end via HUG
  frame.x = 0;
  frame.y = Y_OFFSET;
  frame.fills = sf(bgColor);
  frame.layoutMode = "VERTICAL";
  frame.paddingLeft  = PAD_H;
  frame.paddingRight = PAD_H;
  frame.paddingTop   = PAD_V;
  frame.paddingBottom = PAD_V;
  frame.itemSpacing  = 0;
  frame.layoutSizingVertical = "HUG";
  return frame;
}

// ── HELPER: section label (gold uppercase) ────────────────────────────────────
function makeSectionLabel(text, color) {
  const t = makeText(text, "Label/Section", color, INNER);
  return t;
}

// ── HELPER: divider ───────────────────────────────────────────────────────────
function makeDivider(strokeColor) {
  const line = figma.createLine();
  line.resize(INNER, 0);
  line.strokes = [{ type: "SOLID", color: strokeColor }];
  line.strokeWeight = 0.5;
  return line;
}

// ── HELPER: spacer ────────────────────────────────────────────────────────────
function makeSpacer(height) {
  const r = figma.createRectangle();
  r.name = "spacer";
  r.resize(INNER, height);
  r.fills = [];
  r.layoutSizingHorizontal = "FILL";
  return r;
}


// ═══════════════════════════════════════════════════════════════════════════════
// S03 — ABOUT SUNSTONE (mobile) — 3 blocks stacked
// ═══════════════════════════════════════════════════════════════════════════════

const aboutFrame = createSectionFrame("M · S03 About Sunstone", C.warmWhite);

// Section label
const aboutLabel = makeSectionLabel("ABOUT SUNSTONE", C.goldPrint);
aboutLabel.layoutSizingHorizontal = "FILL";
aboutFrame.appendChild(aboutLabel);
aboutFrame.appendChild(makeSpacer(32));

const aboutCols = [
  {
    title: "Critical transaction support",
    body: "Sunstone Advisory works with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect.",
  },
  {
    title: "An investor's perspective",
    body: "Most advisors have seen deals from one side of the table — as banker or investor. Sunstone Advisory brings both perspectives, combining years of deal execution with private equity experience in assessing, negotiating, owning and selling companies.",
  },
  {
    title: "Hands-on involvement",
    body: "A transaction partner embedded in your team and acting as a direct counterpart to management throughout the process.",
  },
];

aboutCols.forEach((col, i) => {
  // Row: dot + title inline
  const titleRow = figma.createFrame();
  titleRow.name = `title-row-${i+1}`;
  titleRow.layoutMode = "HORIZONTAL";
  titleRow.itemSpacing = 8;
  titleRow.fills = [];
  titleRow.counterAxisAlignItems = "CENTER";
  titleRow.layoutSizingHorizontal = "FILL";
  titleRow.layoutSizingVertical = "HUG";

  // Accent dot
  const dot = figma.createEllipse();
  dot.name = "accent-dot";
  dot.resize(5, 5);
  dot.fills = sf(C.goldPrint);
  titleRow.appendChild(dot);

  // Title
  const titleText = makeText(col.title, "Body/Regular", C.navy, INNER - 13);
  // Bold weight override
  titleText.fontName = { family: "Inter", style: "SemiBold" };
  titleText.layoutSizingHorizontal = "FILL";
  titleText.textAutoResize = "HEIGHT";
  titleRow.appendChild(titleText);

  aboutFrame.appendChild(titleRow);
  aboutFrame.appendChild(makeSpacer(8));

  // Body
  const bodyText = makeText(col.body, "Body/Small", C.textBody, INNER);
  bodyText.layoutSizingHorizontal = "FILL";
  bodyText.textAutoResize = "HEIGHT";
  aboutFrame.appendChild(bodyText);

  // Gap between columns (not after last)
  if (i < aboutCols.length - 1) aboutFrame.appendChild(makeSpacer(24));
});

aboutFrame.appendChild(makeSpacer(0));
// Bottom divider
const aboutDivider = makeDivider(C.borderLight);
aboutDivider.layoutSizingHorizontal = "FILL";
aboutFrame.appendChild(aboutDivider);

Y_OFFSET += aboutFrame.height;


// ═══════════════════════════════════════════════════════════════════════════════
// S04 — OUR APPROACH (mobile) — 2 cards stacked, navy bg
// ═══════════════════════════════════════════════════════════════════════════════

const approachFrame = createSectionFrame("M · S04 Our Approach", C.navy);

// Section label
const approachLabel = makeSectionLabel("OUR APPROACH", C.goldDigital);
approachLabel.layoutSizingHorizontal = "FILL";
approachFrame.appendChild(approachLabel);
approachFrame.appendChild(makeSpacer(32));

// Card builder
async function makeApproachCard(sunText, stoneText, descriptors) {
  const card = figma.createFrame();
  card.name = `approach-card`;
  card.resize(INNER, 10);
  card.fills = [];
  card.strokes = [{ type: "SOLID", color: C.slate }];
  card.strokeWeight = 1;
  card.strokeAlign = "INSIDE";
  card.layoutMode = "VERTICAL";
  card.paddingLeft  = 20;
  card.paddingRight = 20;
  card.paddingTop   = 20;
  card.paddingBottom = 20;
  card.itemSpacing  = 12;
  card.layoutSizingVertical = "HUG";
  card.layoutSizingHorizontal = "FILL";

  // Logo headline: SUN (gold-digital) + STONE/rest (white)
  const headline = figma.createText();
  const headStyle = getTS("Heading/H2");
  if (headStyle) headline.textStyleId = headStyle.id;
  const fullText = sunText + stoneText;
  headline.characters = fullText;
  headline.setRangeFills(0, sunText.length, sf(C.goldDigital));
  headline.setRangeFills(sunText.length, fullText.length, sf(C.white));
  headline.textAutoResize = "HEIGHT";
  headline.layoutSizingHorizontal = "FILL";
  card.appendChild(headline);

  // Descriptors
  const desc = makeText(descriptors, "Body/Regular", C.textGray, INNER - 40);
  desc.textAutoResize = "HEIGHT";
  desc.layoutSizingHorizontal = "FILL";
  card.appendChild(desc);

  return card;
}

const card1 = await makeApproachCard("SUN", "STONE", "Rigorous. Structured. Reliable.");
approachFrame.appendChild(card1);
approachFrame.appendChild(makeSpacer(16));

const card2 = await makeApproachCard("SUN", "", "Clear. Pragmatic. Easy to work with.");
approachFrame.appendChild(card2);

Y_OFFSET += approachFrame.height;


// ═══════════════════════════════════════════════════════════════════════════════
// S05 — SERVICES (mobile) — 3 cards stacked
// ═══════════════════════════════════════════════════════════════════════════════

const servicesFrame = createSectionFrame("M · S05 Services", C.warmWhite);

// Section label
const servicesLabel = makeSectionLabel("SERVICES", C.goldPrint);
servicesLabel.layoutSizingHorizontal = "FILL";
servicesFrame.appendChild(servicesLabel);
servicesFrame.appendChild(makeSpacer(32));

const services = [
  {
    title: "M&A ADVISORY (BUY & SELL)",
    items: [
      "Process preparation and management",
      "Due diligence oversight and review",
      "Valuation, structuring and financing",
      "Negotiation and documentation",
      "Closing",
    ],
  },
  {
    title: "PORTFOLIO WORK & EXIT SUPPORT",
    items: [
      "Value creation execution",
      "Add-on acquisitions",
      "Investor and board interactions",
      "Financing & refinancing",
      "Equity story and BP refinement",
      "Exit preparation and process",
    ],
  },
  {
    title: "FUNDRAISING ADVISORY",
    items: [
      "Process drive and execution",
      "Equity story and materials",
      "Q&A preparation and management",
      "Investor follow-up and tracking",
      "Term sheet and documentation",
    ],
  },
];

services.forEach((svc, i) => {
  // Card frame
  const card = figma.createFrame();
  card.name = `service-card-${i+1}`;
  card.resize(INNER, 10);
  card.fills = sf(C.warmWhite);
  card.strokes = [{ type: "SOLID", color: C.borderLight }];
  card.strokeWeight = 1;
  card.strokeAlign = "INSIDE";
  card.layoutMode = "VERTICAL";
  card.paddingLeft  = 20;
  card.paddingRight = 20;
  card.paddingTop   = 20;
  card.paddingBottom = 20;
  card.itemSpacing  = 10;
  card.layoutSizingVertical = "HUG";
  card.layoutSizingHorizontal = "FILL";

  // Card title
  const cardTitle = makeText(svc.title, "Label/Section", C.navy, INNER - 40);
  cardTitle.layoutSizingHorizontal = "FILL";
  cardTitle.textAutoResize = "HEIGHT";
  card.appendChild(cardTitle);

  // Separator under title
  const sep = figma.createLine();
  sep.resize(INNER - 40, 0);
  sep.strokes = [{ type: "SOLID", color: C.borderLight }];
  sep.strokeWeight = 0.5;
  sep.layoutSizingHorizontal = "FILL";
  card.appendChild(sep);

  // Items with em-dash (gold) + text
  svc.items.forEach(item => {
    const itemRow = figma.createFrame();
    itemRow.name = "item";
    itemRow.layoutMode = "HORIZONTAL";
    itemRow.itemSpacing = 6;
    itemRow.fills = [];
    itemRow.counterAxisAlignItems = "MIN";
    itemRow.layoutSizingHorizontal = "FILL";
    itemRow.layoutSizingVertical = "HUG";

    // Em-dash in gold
    const dash = makeText("—", "Body/Small", C.goldPrint);
    dash.layoutSizingHorizontal = "FIXED";
    dash.resize(12, 20);
    dash.textAutoResize = "HEIGHT";
    itemRow.appendChild(dash);

    // Item text
    const itemText = makeText(item, "Body/Small", C.textBody, INNER - 40 - 18);
    itemText.layoutSizingHorizontal = "FILL";
    itemText.textAutoResize = "HEIGHT";
    itemRow.appendChild(itemText);

    card.appendChild(itemRow);
  });

  servicesFrame.appendChild(card);
  if (i < services.length - 1) servicesFrame.appendChild(makeSpacer(16));
});

// Bottom divider
servicesFrame.appendChild(makeSpacer(16));
const svcDivider = makeDivider(C.borderLight);
svcDivider.layoutSizingHorizontal = "FILL";
servicesFrame.appendChild(svcDivider);

Y_OFFSET += servicesFrame.height;

// ── DONE ──────────────────────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([aboutFrame, approachFrame, servicesFrame]);
console.log("✅ Mobile sections built:");
console.log("  M · S03 About Sunstone  —  height:", aboutFrame.height, "px");
console.log("  M · S04 Our Approach    —  height:", approachFrame.height, "px");
console.log("  M · S05 Services        —  height:", servicesFrame.height, "px");
figma.notify("✅ Mobile sections ready (About, Approach, Services)");

})();
