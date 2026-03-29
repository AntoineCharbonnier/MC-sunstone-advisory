/**
 * Sunstone Advisory — SEO & Dev Specs Page Script
 * Builds the "⚙️ SEO & Dev Specs" page in Figma.
 *
 * Run AFTER figma-plugin-sections.js.
 * Same instructions: Plugins → Development → Open Console, paste, Enter.
 */

(async () => {

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Cormorant Garamond", style: "Regular" });

const specsPage = figma.root.children.find(p => p.name === "⚙️ SEO & Dev Specs");
await figma.setCurrentPageAsync(specsPage);

const NAVY   = { r: 0.059, g: 0.102, b: 0.180 };
const GOLD   = { r: 0.784, g: 0.627, b: 0.376 };
const BORDER = { r: 0.894, g: 0.867, b: 0.816 };
const WHITE  = { r: 1, g: 1, b: 1 };
const GRAY   = { r: 0.478, g: 0.478, b: 0.478 };
const BODY   = { r: 0.227, g: 0.227, b: 0.227 };

function sf(c) { return [{ type: "SOLID", color: c }]; }

function getTS(name) {
  return figma.getLocalTextStyles().find(s => s.name === name);
}

function makeLabel(text, x, y) {
  const t = figma.createText();
  t.characters = text;
  t.textStyleId = getTS("Label/Section").id;
  t.fills = sf(GOLD);
  t.x = x; t.y = y;
  return t;
}

function makeBody(text, x, y, w = 600) {
  const t = figma.createText();
  t.characters = text;
  t.textStyleId = getTS("Body/Regular").id;
  t.fills = sf(BODY);
  t.resize(w, 100);
  t.textAutoResize = "HEIGHT";
  t.x = x; t.y = y;
  return t;
}

// ── Frame: Meta Tags ─────────────────────────────────────────────────────────

const metaFrame = figma.createFrame();
metaFrame.name = "Meta Tags";
metaFrame.resize(700, 220);
metaFrame.x = 40; metaFrame.y = 40;
metaFrame.fills = sf(WHITE);
metaFrame.strokes = [{ type: "SOLID", color: BORDER }];
metaFrame.strokeWeight = 1; metaFrame.strokeAlign = "INSIDE";
metaFrame.paddingLeft = 24; metaFrame.paddingRight = 24;
metaFrame.paddingTop = 24; metaFrame.paddingBottom = 24;
metaFrame.layoutMode = "VERTICAL";
metaFrame.itemSpacing = 10;
metaFrame.layoutSizingVertical = "HUG";

const mLabel = figma.createText();
mLabel.characters = "META TAGS";
mLabel.textStyleId = getTS("Label/Section").id;
mLabel.fills = sf(GOLD);
metaFrame.appendChild(mLabel);

const metaContent = [
  "title: Sunstone Advisory — M&A, Fundraising & Transaction Advisory",
  "description: Independent transaction advisory firm. M&A advisory, fundraising and portfolio work, combining investment banking and private equity experience. Based in Paris, working globally.",
  "og:title: Sunstone Advisory",
  "og:description: Advisory for high-stakes transactions.",
  "og:image: /og-image.png (1200×630px — navy bg + tagline centred)",
  "twitter:card: summary_large_image",
  "canonical: https://sunstoreadvisory.com/",
];

for (const line of metaContent) {
  const t = figma.createText();
  t.characters = line;
  t.textStyleId = getTS("Body/Small").id;
  t.fills = sf(BODY);
  t.layoutSizingHorizontal = "FILL";
  t.textAutoResize = "HEIGHT";
  metaFrame.appendChild(t);
}

// ── Frame: Anchor IDs ────────────────────────────────────────────────────────

const anchorsFrame = figma.createFrame();
anchorsFrame.name = "Anchor IDs";
anchorsFrame.resize(360, 260);
anchorsFrame.x = 780; anchorsFrame.y = 40;
anchorsFrame.fills = sf(WHITE);
anchorsFrame.strokes = [{ type: "SOLID", color: BORDER }];
anchorsFrame.strokeWeight = 1; anchorsFrame.strokeAlign = "INSIDE";
anchorsFrame.paddingLeft = 24; anchorsFrame.paddingRight = 24;
anchorsFrame.paddingTop = 24; anchorsFrame.paddingBottom = 24;
anchorsFrame.layoutMode = "VERTICAL";
anchorsFrame.itemSpacing = 10;
anchorsFrame.layoutSizingVertical = "HUG";

const aLabel = figma.createText();
aLabel.characters = "ANCHOR IDs";
aLabel.textStyleId = getTS("Label/Section").id;
aLabel.fills = sf(GOLD);
anchorsFrame.appendChild(aLabel);

const anchors = [
  "/ (home)",
  "#about → About Sunstone",
  "#approach → Our Approach",
  "#services → Services",
  "#why-sunstone → Why Sunstone",
  "#contact → Contact",
];

for (const anchor of anchors) {
  const t = figma.createText();
  t.characters = anchor;
  t.textStyleId = getTS("Body/Small").id;
  t.fills = sf(BODY);
  t.layoutSizingHorizontal = "FILL";
  anchorsFrame.appendChild(t);
}

// ── Frame: Schema.org ────────────────────────────────────────────────────────

const schemaFrame = figma.createFrame();
schemaFrame.name = "Schema.org";
schemaFrame.resize(500, 300);
schemaFrame.x = 40; schemaFrame.y = 340;
schemaFrame.fills = sf({ r: 0.98, g: 0.98, b: 0.97 });
schemaFrame.strokes = [{ type: "SOLID", color: BORDER }];
schemaFrame.strokeWeight = 1; schemaFrame.strokeAlign = "INSIDE";
schemaFrame.paddingLeft = 24; schemaFrame.paddingRight = 24;
schemaFrame.paddingTop = 24; schemaFrame.paddingBottom = 24;
schemaFrame.layoutMode = "VERTICAL";
schemaFrame.itemSpacing = 8;
schemaFrame.layoutSizingVertical = "HUG";

const schemaLabel = figma.createText();
schemaLabel.characters = "SCHEMA.ORG";
schemaLabel.textStyleId = getTS("Label/Section").id;
schemaLabel.fills = sf(GOLD);
schemaFrame.appendChild(schemaLabel);

const schemaText = figma.createText();
schemaText.characters = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sunstone Advisory",
  "founder": { "@type": "Person", "name": "Marine Charbonnier" },
  "address": { "addressLocality": "Paris", "addressCountry": "FR" },
  "areaServed": "Global",
  "knowsLanguage": ["en", "fr"],
  "serviceType": [
    "M&A Advisory",
    "Fundraising Advisory",
    "Portfolio Work & Exit Support"
  ]
}`;
schemaText.textStyleId = getTS("Body/Small").id;
schemaText.fills = sf(BODY);
schemaText.layoutSizingHorizontal = "FILL";
schemaText.textAutoResize = "HEIGHT";
schemaFrame.appendChild(schemaText);

// ── Frame: Keywords Map ──────────────────────────────────────────────────────

const kwFrame = figma.createFrame();
kwFrame.name = "Keywords Map";
kwFrame.resize(500, 300);
kwFrame.x = 580; kwFrame.y = 340;
kwFrame.fills = sf(WHITE);
kwFrame.strokes = [{ type: "SOLID", color: BORDER }];
kwFrame.strokeWeight = 1; kwFrame.strokeAlign = "INSIDE";
kwFrame.paddingLeft = 24; kwFrame.paddingRight = 24;
kwFrame.paddingTop = 24; kwFrame.paddingBottom = 24;
kwFrame.layoutMode = "VERTICAL";
kwFrame.itemSpacing = 8;
kwFrame.layoutSizingVertical = "HUG";

const kwLabel = figma.createText();
kwLabel.characters = "KEYWORDS MAP";
kwLabel.textStyleId = getTS("Label/Section").id;
kwLabel.fills = sf(GOLD);
kwFrame.appendChild(kwLabel);

const kwLines = [
  "Hero → independent M&A advisor France, boutique M&A advisory Paris",
  "About → M&A advisory mid-market France",
  "Services → M&A advisory buy sell, fundraising advisor France,\n  portfolio company M&A support",
  "Why → exit preparation private equity France,\n  add-on acquisition advisory PE",
  "Bio → Marine Charbonnier, Sunstone Advisory",
];
for (const kw of kwLines) {
  const t = figma.createText();
  t.characters = kw;
  t.textStyleId = getTS("Body/Small").id;
  t.fills = sf(BODY);
  t.layoutSizingHorizontal = "FILL";
  t.textAutoResize = "HEIGHT";
  kwFrame.appendChild(t);
}

// ── Frame: Dev Handoff ───────────────────────────────────────────────────────

const devFrame = figma.createFrame();
devFrame.name = "Dev Handoff";
devFrame.resize(700, 300);
devFrame.x = 40; devFrame.y = 720;
devFrame.fills = sf(NAVY);
devFrame.paddingLeft = 24; devFrame.paddingRight = 24;
devFrame.paddingTop = 24; devFrame.paddingBottom = 24;
devFrame.layoutMode = "VERTICAL";
devFrame.itemSpacing = 10;
devFrame.layoutSizingVertical = "HUG";

const devLabel = figma.createText();
devLabel.characters = "DEV HANDOFF";
devLabel.textStyleId = getTS("Label/Section").id;
devLabel.fills = sf(GOLD);
devFrame.appendChild(devLabel);

const devLines = [
  "Stack: Next.js (SSG) or Framer / Webflow",
  "Fonts: Cormorant Garamond + Inter (Google Fonts)",
  "Contact form: mailto: only — no backend required",
  "Analytics: Plausible (cookie-free) or GA4 minimal",
  "Target load time: < 2s (static site)",
  "HTTPS + www → non-www redirect",
  "Hosting: OVH shared or Vercel (static export)",
  "No CMS needed — content is stable",
];
for (const line of devLines) {
  const t = figma.createText();
  t.characters = line;
  t.textStyleId = getTS("Body/Small").id;
  t.fills = sf({ r: 0.8, g: 0.8, b: 0.8 });
  t.layoutSizingHorizontal = "FILL";
  devFrame.appendChild(t);
}

figma.viewport.scrollAndZoomIntoView([metaFrame, anchorsFrame, schemaFrame, kwFrame, devFrame]);
console.log("✅ SEO & Dev Specs page built.");

})();
