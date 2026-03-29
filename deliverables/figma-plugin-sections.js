/**
 * Sunstone Advisory — Figma Plugin Script
 * Builds the complete Desktop (1440px) one-pager wireframe.
 *
 * HOW TO RUN:
 *   1. Open the Figma file: https://www.figma.com/design/u3sdMzjybYKrvQ0SPORWpy/Sunstone
 *   2. Go to Plugins → Development → Open Console
 *   3. Paste this entire script and press Enter
 *   4. Wait ~10 seconds — all 9 sections will be built automatically
 *
 * PREREQUISITES (already created by MCP agent):
 *   - Color variables in "Sunstone Colors" collection
 *   - Text styles: Heading/H1, H2, Quote, Body/Regular, Body/Small, Body/Name, Label/Section, Label/Button
 *   - Components: C01–C07 on "🎨 Design System" page
 *   - Pages: Desktop (1440px), Mobile (390px), ⚙️ SEO & Dev Specs, 🎨 Design System
 */

(async () => {

// ── HELPERS ─────────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16) / 255;
  const g = parseInt(hex.slice(3,5), 16) / 255;
  const b = parseInt(hex.slice(5,7), 16) / 255;
  return { r, g, b };
}

const COLORS = {
  navy:         hexToRgb("#0F1A2E"),
  navyMid:      hexToRgb("#1A2744"),
  slate:        hexToRgb("#2C3E5A"),
  goldPrint:    hexToRgb("#C8A060"),
  goldDigital:  hexToRgb("#FFDF90"),
  cream:        hexToRgb("#F5F0E8"),
  warmWhite:    hexToRgb("#FAFAF7"),
  borderLight:  hexToRgb("#E4DDD0"),
  textBody:     hexToRgb("#3A3A3A"),
  textGray:     hexToRgb("#7A7A7A"),
  white:        { r: 1, g: 1, b: 1 },
};

function solidFill(color) {
  return [{ type: "SOLID", color }];
}

function solidStroke(color, weight = 1) {
  return { strokes: [{ type: "SOLID", color }], strokeWeight: weight, strokeAlign: "INSIDE" };
}

async function loadFonts() {
  await figma.loadFontAsync({ family: "Cormorant Garamond", style: "Regular" });
  await figma.loadFontAsync({ family: "Cormorant Garamond", style: "Italic" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
}

function getTextStyle(name) {
  return figma.getLocalTextStyles().find(s => s.name === name);
}

function makeText(content, styleName, color, opts = {}) {
  const t = figma.createText();
  const style = getTextStyle(styleName);
  if (style) t.textStyleId = style.id;
  t.characters = content;
  t.fills = solidFill(color);
  if (opts.maxWidth) t.layoutSizingHorizontal = "FILL";
  if (opts.opacity !== undefined) t.opacity = opts.opacity;
  return t;
}

// Make a text node with a specific character range in a different color
// Used for SUN (gold) + STONE (white) in Our Approach section
async function makeLogoText(fullText, splitAt, color1, color2, styleName) {
  const t = figma.createText();
  const style = getTextStyle(styleName);
  if (style) t.textStyleId = style.id;
  t.characters = fullText;
  t.setRangeFills(0, splitAt, solidFill(color1));
  t.setRangeFills(splitAt, fullText.length, solidFill(color2));
  return t;
}

function makeDivider(width = 1440) {
  const d = figma.createRectangle();
  d.resize(width, 1);
  d.fills = solidFill(COLORS.borderLight);
  d.opacity = 0.8;
  return d;
}

function makeFrame(name, w, h, bg = null) {
  const f = figma.createFrame();
  f.name = name;
  f.resize(w, h);
  if (bg) f.fills = solidFill(bg);
  else f.fills = [];
  return f;
}

// Creates a content wrapper: 1440px wide, content centered, max 900px
function makeSection(name, bgColor, paddingV = 64) {
  const section = figma.createFrame();
  section.name = name;
  section.layoutMode = "VERTICAL";
  section.primaryAxisAlignItems = "CENTER";
  section.counterAxisAlignItems = "CENTER";
  section.paddingTop = paddingV;
  section.paddingBottom = paddingV;
  section.paddingLeft = 270; // (1440 - 900) / 2
  section.paddingRight = 270;
  section.itemSpacing = 0;
  section.resize(1440, 100);
  section.layoutSizingHorizontal = "FIXED";
  section.layoutSizingVertical = "HUG";
  if (bgColor) section.fills = solidFill(bgColor);
  else section.fills = [];
  return section;
}

// Inner content box constrained to 900px
function makeContentBox(name = "content") {
  const box = figma.createFrame();
  box.name = name;
  box.layoutMode = "VERTICAL";
  box.primaryAxisAlignItems = "MIN";
  box.counterAxisAlignItems = "MIN";
  box.itemSpacing = 0;
  box.fills = [];
  box.resize(900, 100);
  box.layoutSizingVertical = "HUG";
  return box;
}

// ── PAGE SETUP ───────────────────────────────────────────────────────────────

const desktopPage = figma.root.children.find(p => p.name === "Desktop (1440px)");
await figma.setCurrentPageAsync(desktopPage);
await loadFonts();

// ── PAGE WRAPPER ─────────────────────────────────────────────────────────────

const wrapper = figma.createFrame();
wrapper.name = "Sunstone Advisory — One Pager";
wrapper.layoutMode = "VERTICAL";
wrapper.primaryAxisAlignItems = "MIN";
wrapper.counterAxisAlignItems = "CENTER";
wrapper.itemSpacing = 0;
wrapper.paddingLeft = 0; wrapper.paddingRight = 0;
wrapper.paddingTop = 0; wrapper.paddingBottom = 0;
wrapper.resize(1440, 100);
wrapper.layoutSizingHorizontal = "FIXED";
wrapper.layoutSizingVertical = "HUG";
wrapper.fills = solidFill(COLORS.warmWhite);
wrapper.x = 0; wrapper.y = 0;

// ── S01: NAV ─────────────────────────────────────────────────────────────────

const nav = figma.createFrame();
nav.name = "S01 / NAV";
nav.layoutMode = "HORIZONTAL";
nav.primaryAxisAlignItems = "SPACE_BETWEEN";
nav.counterAxisAlignItems = "CENTER";
nav.paddingLeft = 48; nav.paddingRight = 48;
nav.paddingTop = 0; nav.paddingBottom = 0;
nav.resize(1440, 72);
nav.fills = [];
nav.layoutSizingHorizontal = "FIXED";
nav.strokes = [{ type: "SOLID", color: COLORS.borderLight }];
nav.strokeWeight = 1;
nav.strokeAlign = "INSIDE";
nav.strokeTopWeight = 0; nav.strokeBottomWeight = 1;
nav.strokeLeftWeight = 0; nav.strokeRightWeight = 0;

// Logo
const navLogo = figma.createText();
navLogo.characters = "SUNSTONE ADVISORY";
navLogo.textStyleId = getTextStyle("Label/Section").id;
navLogo.setRangeFills(0, 3, solidFill(COLORS.goldPrint));    // SUN
navLogo.setRangeFills(3, 17, solidFill(COLORS.navy));         // STONE ADVISORY (remaining)
// Actually: SUN=0..3, STONE=3..8, ' '=8, ADVISORY=9..17
navLogo.setRangeFills(3, 8, solidFill(COLORS.navy));          // STONE in navy

// Nav links
const navLinks = figma.createFrame();
navLinks.layoutMode = "HORIZONTAL";
navLinks.itemSpacing = 32;
navLinks.fills = [];
navLinks.primaryAxisAlignItems = "CENTER";
navLinks.counterAxisAlignItems = "CENTER";
navLinks.layoutSizingHorizontal = "HUG";
navLinks.layoutSizingVertical = "HUG";
for (const link of ["About", "Services", "Why Sunstone", "Contact"]) {
  const lnk = figma.createText();
  lnk.characters = link;
  lnk.textStyleId = getTextStyle("Body/Small").id;
  lnk.fills = solidFill(COLORS.textGray);
  navLinks.appendChild(lnk);
}

// CTA button
const navCta = figma.createFrame();
navCta.layoutMode = "HORIZONTAL";
navCta.primaryAxisAlignItems = "CENTER";
navCta.counterAxisAlignItems = "CENTER";
navCta.paddingLeft = 20; navCta.paddingRight = 20;
navCta.paddingTop = 10; navCta.paddingBottom = 10;
navCta.fills = solidFill(COLORS.navy);
navCta.layoutSizingHorizontal = "HUG";
navCta.layoutSizingVertical = "HUG";
const navCtaText = figma.createText();
navCtaText.characters = "GET IN TOUCH";
navCtaText.textStyleId = getTextStyle("Label/Button").id;
navCtaText.fills = solidFill(COLORS.white);
navCta.appendChild(navCtaText);

nav.appendChild(navLogo);
nav.appendChild(navLinks);
nav.appendChild(navCta);
wrapper.appendChild(nav);
nav.layoutSizingHorizontal = "FILL";

// ── S02: HERO ─────────────────────────────────────────────────────────────────

const hero = figma.createFrame();
hero.name = "S02 / HERO";
hero.layoutMode = "VERTICAL";
hero.primaryAxisAlignItems = "MIN";
hero.counterAxisAlignItems = "MIN";
hero.paddingTop = 80; hero.paddingBottom = 72;
hero.paddingLeft = 270; hero.paddingRight = 270;
hero.itemSpacing = 20;
hero.fills = solidFill(COLORS.warmWhite);
hero.resize(1440, 100);
hero.layoutSizingHorizontal = "FIXED";
hero.layoutSizingVertical = "HUG";

// Tag
const heroTag = figma.createText();
heroTag.characters = "INDEPENDENT ADVISORY";
heroTag.textStyleId = getTextStyle("Label/Section").id;
heroTag.fills = solidFill(COLORS.goldPrint);

// H1
const heroH1 = figma.createFrame();
heroH1.layoutMode = "VERTICAL";
heroH1.fills = [];
heroH1.resize(620, 100);
heroH1.layoutSizingVertical = "HUG";
const heroH1Text = figma.createText();
heroH1Text.characters = "Advisory for high-stakes transactions — M&A, exits, fundraising and ownership transitions.";
heroH1Text.textStyleId = getTextStyle("Heading/H1").id;
heroH1Text.fills = solidFill(COLORS.navy);
heroH1Text.resize(620, 100);
heroH1Text.layoutSizingVertical = "HUG";
heroH1.appendChild(heroH1Text);

// Subtitle
const heroSub = figma.createFrame();
heroSub.layoutMode = "VERTICAL";
heroSub.fills = [];
heroSub.resize(480, 100);
heroSub.layoutSizingVertical = "HUG";
const heroSubText = figma.createText();
heroSubText.characters = "With the perspective of an investor.";
heroSubText.textStyleId = getTextStyle("Body/Regular").id;
heroSubText.fills = solidFill(COLORS.textGray);
heroSubText.resize(480, 100);
heroSubText.layoutSizingVertical = "HUG";
heroSub.appendChild(heroSubText);

hero.appendChild(heroTag);
hero.appendChild(heroH1);
hero.appendChild(heroSub);
wrapper.appendChild(hero);
hero.layoutSizingHorizontal = "FILL";

// Divider after hero
const div02 = makeDivider(1440);
wrapper.appendChild(div02);
div02.layoutSizingHorizontal = "FILL";

// ── S03: ABOUT SUNSTONE ───────────────────────────────────────────────────────

const about = makeSection("S03 / ABOUT SUNSTONE", COLORS.warmWhite, 64);
const aboutContent = makeContentBox("about-content");
aboutContent.itemSpacing = 40;

// Section label
const aboutLabel = figma.createText();
aboutLabel.characters = "ABOUT SUNSTONE";
aboutLabel.textStyleId = getTextStyle("Label/Section").id;
aboutLabel.fills = solidFill(COLORS.goldPrint);
aboutContent.appendChild(aboutLabel);

// 3-col grid
const aboutGrid = figma.createFrame();
aboutGrid.layoutMode = "HORIZONTAL";
aboutGrid.primaryAxisAlignItems = "MIN";
aboutGrid.counterAxisAlignItems = "MIN";
aboutGrid.itemSpacing = 32;
aboutGrid.fills = [];
aboutGrid.resize(900, 100);
aboutGrid.layoutSizingVertical = "HUG";

const aboutCols = [
  {
    title: "Critical transaction support",
    body: "Sunstone Advisory works with companies, founders, family businesses and investors in situations where ownership, leadership and capital intersect."
  },
  {
    title: "An investor's perspective",
    body: "Most advisors have seen deals from one side of the table — as banker or investor. Sunstone Advisory brings both perspectives, combining years of deal execution with private equity experience in assessing, negotiating, owning and selling companies."
  },
  {
    title: "Hands-on involvement",
    body: "A transaction partner embedded in your team and acting as a direct counterpart to management throughout the process."
  }
];

for (const col of aboutCols) {
  const colFrame = figma.createFrame();
  colFrame.layoutMode = "VERTICAL";
  colFrame.itemSpacing = 12;
  colFrame.fills = [];
  colFrame.layoutSizingHorizontal = "FILL";
  colFrame.layoutSizingVertical = "HUG";
  colFrame.primaryAxisAlignItems = "MIN";
  colFrame.counterAxisAlignItems = "MIN";

  // Dot + title row
  const titleRow = figma.createFrame();
  titleRow.layoutMode = "HORIZONTAL";
  titleRow.itemSpacing = 10;
  titleRow.fills = [];
  titleRow.counterAxisAlignItems = "CENTER";
  titleRow.layoutSizingHorizontal = "FILL";
  titleRow.layoutSizingVertical = "HUG";
  const dot = figma.createEllipse();
  dot.resize(5, 5);
  dot.fills = solidFill(COLORS.goldPrint);
  const titleText = figma.createText();
  titleText.characters = col.title;
  titleText.textStyleId = getTextStyle("Body/Regular").id;
  titleText.fills = solidFill(COLORS.navy);
  // make it bold-ish by adjusting fill, keep Inter Regular but use navy for prominence
  titleRow.appendChild(dot);
  titleRow.appendChild(titleText);

  const bodyText = figma.createText();
  bodyText.characters = col.body;
  bodyText.textStyleId = getTextStyle("Body/Regular").id;
  bodyText.fills = solidFill(COLORS.textBody);
  bodyText.layoutSizingHorizontal = "FILL";
  bodyText.layoutSizingVertical = "HUG";
  bodyText.textAutoResize = "HEIGHT";

  colFrame.appendChild(titleRow);
  colFrame.appendChild(bodyText);
  aboutGrid.appendChild(colFrame);
}

aboutContent.appendChild(aboutGrid);
about.appendChild(aboutContent);
aboutContent.layoutSizingHorizontal = "FILL";
wrapper.appendChild(about);
about.layoutSizingHorizontal = "FILL";

const div03 = makeDivider(1440);
wrapper.appendChild(div03);
div03.layoutSizingHorizontal = "FILL";

// ── S04: OUR APPROACH ─────────────────────────────────────────────────────────

const approach = figma.createFrame();
approach.name = "S04 / OUR APPROACH";
approach.layoutMode = "VERTICAL";
approach.primaryAxisAlignItems = "CENTER";
approach.counterAxisAlignItems = "CENTER";
approach.paddingTop = 64; approach.paddingBottom = 64;
approach.paddingLeft = 270; approach.paddingRight = 270;
approach.itemSpacing = 0;
approach.fills = solidFill(COLORS.navy);
approach.resize(1440, 100);
approach.layoutSizingHorizontal = "FIXED";
approach.layoutSizingVertical = "HUG";

const approachContent = makeContentBox("approach-content");
approachContent.itemSpacing = 40;

// Section label (gold-digital on dark)
const approachLabel = figma.createText();
approachLabel.characters = "OUR APPROACH";
approachLabel.textStyleId = getTextStyle("Label/Section").id;
approachLabel.fills = solidFill(COLORS.goldDigital);
approachContent.appendChild(approachLabel);

// 2-col grid
const approachGrid = figma.createFrame();
approachGrid.layoutMode = "HORIZONTAL";
approachGrid.primaryAxisAlignItems = "MIN";
approachGrid.counterAxisAlignItems = "MIN";
approachGrid.itemSpacing = 24;
approachGrid.fills = [];
approachGrid.resize(900, 100);
approachGrid.layoutSizingVertical = "HUG";

// Card 1: SUNSTONE — SUN in gold, STONE in white
const card1 = figma.createFrame();
card1.layoutMode = "VERTICAL";
card1.itemSpacing = 16;
card1.paddingLeft = 32; card1.paddingRight = 32;
card1.paddingTop = 32; card1.paddingBottom = 32;
card1.fills = solidFill(COLORS.navyMid);
card1.strokes = [{ type: "SOLID", color: COLORS.slate }];
card1.strokeWeight = 1; card1.strokeAlign = "INSIDE";
card1.layoutSizingHorizontal = "FILL";
card1.layoutSizingVertical = "HUG";

const card1Heading = figma.createText();
card1Heading.characters = "SUNSTONE";
card1Heading.textStyleId = getTextStyle("Heading/H2").id;
card1Heading.setRangeFills(0, 3, solidFill(COLORS.goldDigital));  // SUN
card1Heading.setRangeFills(3, 8, solidFill(COLORS.white));         // STONE

const card1Body = figma.createText();
card1Body.characters = "Rigorous. Structured. Reliable.";
card1Body.textStyleId = getTextStyle("Body/Regular").id;
card1Body.fills = solidFill({ r: 0.8, g: 0.8, b: 0.8 });
card1Body.layoutSizingHorizontal = "FILL";
card1Body.textAutoResize = "HEIGHT";

card1.appendChild(card1Heading);
card1.appendChild(card1Body);
approachGrid.appendChild(card1);

// Card 2: SUN in gold, descriptor
const card2 = figma.createFrame();
card2.layoutMode = "VERTICAL";
card2.itemSpacing = 16;
card2.paddingLeft = 32; card2.paddingRight = 32;
card2.paddingTop = 32; card2.paddingBottom = 32;
card2.fills = solidFill(COLORS.navyMid);
card2.strokes = [{ type: "SOLID", color: COLORS.slate }];
card2.strokeWeight = 1; card2.strokeAlign = "INSIDE";
card2.layoutSizingHorizontal = "FILL";
card2.layoutSizingVertical = "HUG";

const card2Heading = figma.createText();
card2Heading.characters = "SUN";
card2Heading.textStyleId = getTextStyle("Heading/H2").id;
card2Heading.fills = solidFill(COLORS.goldDigital);

const card2Body = figma.createText();
card2Body.characters = "Clear. Pragmatic. Easy to work with.";
card2Body.textStyleId = getTextStyle("Body/Regular").id;
card2Body.fills = solidFill({ r: 0.8, g: 0.8, b: 0.8 });
card2Body.layoutSizingHorizontal = "FILL";
card2Body.textAutoResize = "HEIGHT";

card2.appendChild(card2Heading);
card2.appendChild(card2Body);
approachGrid.appendChild(card2);

approachContent.appendChild(approachGrid);
approach.appendChild(approachContent);
approachContent.layoutSizingHorizontal = "FILL";
wrapper.appendChild(approach);
approach.layoutSizingHorizontal = "FILL";

// ── S05: SERVICES ─────────────────────────────────────────────────────────────

const services = makeSection("S05 / SERVICES", COLORS.warmWhite, 64);
const servicesContent = makeContentBox("services-content");
servicesContent.itemSpacing = 40;

const servicesLabel = figma.createText();
servicesLabel.characters = "SERVICES";
servicesLabel.textStyleId = getTextStyle("Label/Section").id;
servicesLabel.fills = solidFill(COLORS.goldPrint);
servicesContent.appendChild(servicesLabel);

const servicesGrid = figma.createFrame();
servicesGrid.layoutMode = "HORIZONTAL";
servicesGrid.primaryAxisAlignItems = "MIN";
servicesGrid.counterAxisAlignItems = "MIN";
servicesGrid.itemSpacing = 24;
servicesGrid.fills = [];
servicesGrid.resize(900, 100);
servicesGrid.layoutSizingVertical = "HUG";

const serviceDefs = [
  {
    title: "M&A ADVISORY\n(BUY & SELL)",
    items: [
      "Process preparation and management",
      "Due diligence oversight and review",
      "Valuation, structuring and financing",
      "Negotiation and documentation",
      "Closing"
    ]
  },
  {
    title: "PORTFOLIO WORK\n& EXIT SUPPORT",
    items: [
      "Value creation execution",
      "Add-on acquisitions",
      "Investor and board interactions",
      "Financing & refinancing",
      "Equity story and BP refinement",
      "Exit preparation and process"
    ]
  },
  {
    title: "FUNDRAISING\nADVISORY",
    items: [
      "Process drive and execution",
      "Equity story and materials",
      "Q&A preparation and management",
      "Investor follow-up and tracking",
      "Term sheet and documentation"
    ]
  }
];

for (const svc of serviceDefs) {
  const svcCard = figma.createFrame();
  svcCard.layoutMode = "VERTICAL";
  svcCard.itemSpacing = 0;
  svcCard.paddingLeft = 24; svcCard.paddingRight = 24;
  svcCard.paddingTop = 24; svcCard.paddingBottom = 24;
  svcCard.fills = solidFill(COLORS.white);
  svcCard.strokes = [{ type: "SOLID", color: COLORS.borderLight }];
  svcCard.strokeWeight = 1; svcCard.strokeAlign = "INSIDE";
  svcCard.layoutSizingHorizontal = "FILL";
  svcCard.layoutSizingVertical = "HUG";

  const svcTitle = figma.createText();
  svcTitle.characters = svc.title;
  svcTitle.textStyleId = getTextStyle("Label/Section").id;
  svcTitle.fills = solidFill(COLORS.navy);
  svcTitle.layoutSizingHorizontal = "FILL";
  svcTitle.textAutoResize = "HEIGHT";
  svcCard.appendChild(svcTitle);

  // Thin divider
  const svcDivider = figma.createRectangle();
  svcDivider.resize(200, 1);
  svcDivider.fills = solidFill(COLORS.borderLight);
  svcDivider.y = svcTitle.height + 12;
  svcCard.appendChild(svcDivider);
  svcDivider.layoutSizingHorizontal = "FILL";

  // Spacer
  const sp = figma.createFrame();
  sp.resize(1, 16); sp.fills = []; sp.layoutSizingHorizontal = "FILL";
  svcCard.appendChild(sp);

  // Items with em-dash
  for (const item of svc.items) {
    const itemFrame = figma.createFrame();
    itemFrame.layoutMode = "HORIZONTAL";
    itemFrame.itemSpacing = 8;
    itemFrame.fills = [];
    itemFrame.counterAxisAlignItems = "MIN";
    itemFrame.layoutSizingHorizontal = "FILL";
    itemFrame.layoutSizingVertical = "HUG";
    itemFrame.paddingBottom = 6;

    const dash = figma.createText();
    dash.characters = "—";
    dash.textStyleId = getTextStyle("Body/Small").id;
    dash.fills = solidFill(COLORS.goldPrint);

    const itemText = figma.createText();
    itemText.characters = item;
    itemText.textStyleId = getTextStyle("Body/Small").id;
    itemText.fills = solidFill(COLORS.textBody);
    itemText.layoutSizingHorizontal = "FILL";
    itemText.textAutoResize = "HEIGHT";

    itemFrame.appendChild(dash);
    itemFrame.appendChild(itemText);
    svcCard.appendChild(itemFrame);
  }

  servicesGrid.appendChild(svcCard);
}

servicesContent.appendChild(servicesGrid);
services.appendChild(servicesContent);
servicesContent.layoutSizingHorizontal = "FILL";
wrapper.appendChild(services);
services.layoutSizingHorizontal = "FILL";

const div05 = makeDivider(1440);
wrapper.appendChild(div05);
div05.layoutSizingHorizontal = "FILL";

// ── S06: WHY SUNSTONE ─────────────────────────────────────────────────────────

const whySection = makeSection("S06 / WHY SUNSTONE", COLORS.cream, 64);
const whyContent = makeContentBox("why-content");
whyContent.itemSpacing = 40;

const whyLabel = figma.createText();
whyLabel.characters = "WHY SUNSTONE";
whyLabel.textStyleId = getTextStyle("Label/Section").id;
whyLabel.fills = solidFill(COLORS.goldPrint);
whyContent.appendChild(whyLabel);

// 2x2 grid using two rows
const whyDefs = [
  {
    title: "Experienced partner",
    body: "20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings and fundraisings."
  },
  {
    title: "A critical sounding board",
    body: "Beyond process and deliverables, we challenge analysis, pressure-test assumptions and sharpen investment cases — whether assessing an opportunity or preparing for investor scrutiny."
  },
  {
    title: "Hands-on approach",
    body: "Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate handled directly — no layers, no dilution."
  },
  {
    title: "Independent and fully aligned",
    body: "No conflicts of interest, no proprietary products to push, no cross-selling agendas — fully aligned with your objectives."
  }
];

const whyRow1 = figma.createFrame();
whyRow1.layoutMode = "HORIZONTAL";
whyRow1.itemSpacing = 24;
whyRow1.fills = [];
whyRow1.resize(900, 100);
whyRow1.layoutSizingVertical = "HUG";

const whyRow2 = figma.createFrame();
whyRow2.layoutMode = "HORIZONTAL";
whyRow2.itemSpacing = 24;
whyRow2.fills = [];
whyRow2.resize(900, 100);
whyRow2.layoutSizingVertical = "HUG";

const whyRows = [whyRow1, whyRow2];

for (let i = 0; i < whyDefs.length; i++) {
  const wd = whyDefs[i];
  const whyCard = figma.createFrame();
  whyCard.layoutMode = "VERTICAL";
  whyCard.itemSpacing = 12;
  whyCard.paddingLeft = 24; whyCard.paddingRight = 24;
  whyCard.paddingTop = 24; whyCard.paddingBottom = 24;
  whyCard.fills = solidFill(COLORS.white);
  whyCard.strokes = [{ type: "SOLID", color: COLORS.borderLight }];
  whyCard.strokeWeight = 1; whyCard.strokeAlign = "INSIDE";
  whyCard.layoutSizingHorizontal = "FILL";
  whyCard.layoutSizingVertical = "HUG";

  const cardTitle = figma.createText();
  cardTitle.characters = wd.title.toUpperCase();
  cardTitle.textStyleId = getTextStyle("Label/Section").id;
  cardTitle.fills = solidFill(COLORS.navy);

  const cardBody = figma.createText();
  cardBody.characters = wd.body;
  cardBody.textStyleId = getTextStyle("Body/Small").id;
  cardBody.fills = solidFill(COLORS.textBody);
  cardBody.layoutSizingHorizontal = "FILL";
  cardBody.textAutoResize = "HEIGHT";

  whyCard.appendChild(cardTitle);
  whyCard.appendChild(cardBody);
  whyRows[Math.floor(i / 2)].appendChild(whyCard);
}

const whyGrid = figma.createFrame();
whyGrid.layoutMode = "VERTICAL";
whyGrid.itemSpacing = 24;
whyGrid.fills = [];
whyGrid.resize(900, 100);
whyGrid.layoutSizingVertical = "HUG";
whyGrid.appendChild(whyRow1);
whyGrid.appendChild(whyRow2);
whyRow1.layoutSizingHorizontal = "FILL";
whyRow2.layoutSizingHorizontal = "FILL";

whyContent.appendChild(whyGrid);
whySection.appendChild(whyContent);
whyContent.layoutSizingHorizontal = "FILL";
wrapper.appendChild(whySection);
whySection.layoutSizingHorizontal = "FILL";

const div06 = makeDivider(1440);
wrapper.appendChild(div06);
div06.layoutSizingHorizontal = "FILL";

// ── S07: FOUNDER / BIO ────────────────────────────────────────────────────────

const bio = makeSection("S07 / FOUNDER", COLORS.warmWhite, 64);
const bioContent = makeContentBox("bio-content");
bioContent.itemSpacing = 0;

const bioGrid = figma.createFrame();
bioGrid.layoutMode = "HORIZONTAL";
bioGrid.primaryAxisAlignItems = "MIN";
bioGrid.counterAxisAlignItems = "MIN";
bioGrid.itemSpacing = 64;
bioGrid.fills = [];
bioGrid.resize(900, 100);
bioGrid.layoutSizingVertical = "HUG";

// Left column
const bioLeft = figma.createFrame();
bioLeft.layoutMode = "VERTICAL";
bioLeft.itemSpacing = 16;
bioLeft.fills = [];
bioLeft.layoutSizingHorizontal = "FILL";
bioLeft.layoutSizingVertical = "HUG";

const bioName = figma.createText();
bioName.characters = "Marine Charbonnier";
bioName.textStyleId = getTextStyle("Body/Name").id;
bioName.fills = solidFill(COLORS.navy);

const bioPara1 = figma.createText();
bioPara1.characters = "A decade in investment banking and private equity — first structuring and executing deals at Deutsche Bank, then assessing, negotiating, owning and selling them as an investor at Carlyle's European Buyout fund. Over a hundred opportunities assessed and 20+ closed.";
bioPara1.textStyleId = getTextStyle("Body/Regular").id;
bioPara1.fills = solidFill(COLORS.textBody);
bioPara1.layoutSizingHorizontal = "FILL";
bioPara1.textAutoResize = "HEIGHT";

const bioPara2 = figma.createText();
bioPara2.characters = "Sunstone Advisory is built on that experience, and the conviction that the best transaction support comes from understanding not only how processes work, but how investors really think.";
bioPara2.textStyleId = getTextStyle("Body/Small").id;
bioPara2.fills = solidFill(COLORS.textGray);
bioPara2.layoutSizingHorizontal = "FILL";
bioPara2.textAutoResize = "HEIGHT";

// Logo badges row
const badgesRow = figma.createFrame();
badgesRow.layoutMode = "HORIZONTAL";
badgesRow.itemSpacing = 8;
badgesRow.fills = [];
badgesRow.counterAxisAlignItems = "CENTER";
badgesRow.layoutSizingHorizontal = "HUG";
badgesRow.layoutSizingVertical = "HUG";

for (const badge of ["DEUTSCHE BANK", "CARLYLE", "DAUPHINE"]) {
  const badgeFrame = figma.createFrame();
  badgeFrame.layoutMode = "HORIZONTAL";
  badgeFrame.primaryAxisAlignItems = "CENTER";
  badgeFrame.counterAxisAlignItems = "CENTER";
  badgeFrame.paddingLeft = 10; badgeFrame.paddingRight = 10;
  badgeFrame.paddingTop = 4; badgeFrame.paddingBottom = 4;
  badgeFrame.fills = [];
  badgeFrame.strokes = [{ type: "SOLID", color: COLORS.borderLight }];
  badgeFrame.strokeWeight = 1; badgeFrame.strokeAlign = "INSIDE";
  badgeFrame.layoutSizingHorizontal = "HUG";
  badgeFrame.layoutSizingVertical = "HUG";
  const badgeText = figma.createText();
  badgeText.characters = badge;
  badgeText.textStyleId = getTextStyle("Label/Section").id;
  badgeText.fills = solidFill(COLORS.textBody);
  badgeFrame.appendChild(badgeText);
  badgesRow.appendChild(badgeFrame);
}

bioLeft.appendChild(bioName);
bioLeft.appendChild(bioPara1);
bioLeft.appendChild(bioPara2);
bioLeft.appendChild(badgesRow);

// Right column (vertical bar + quote)
const bioRight = figma.createFrame();
bioRight.layoutMode = "HORIZONTAL";
bioRight.primaryAxisAlignItems = "MIN";
bioRight.counterAxisAlignItems = "MIN";
bioRight.itemSpacing = 20;
bioRight.fills = [];
bioRight.layoutSizingHorizontal = "FILL";
bioRight.layoutSizingVertical = "HUG";

const bioBar = figma.createRectangle();
bioBar.resize(2, 120);
bioBar.fills = solidFill(COLORS.goldPrint);

const bioQuote = figma.createText();
bioQuote.characters = "Rigorous in execution.\nPragmatic in approach.\nEasy to work with.";
bioQuote.textStyleId = getTextStyle("Heading/Quote").id;
bioQuote.fills = solidFill(COLORS.navy);
bioQuote.layoutSizingHorizontal = "FILL";
bioQuote.textAutoResize = "HEIGHT";

bioRight.appendChild(bioBar);
bioRight.appendChild(bioQuote);

bioGrid.appendChild(bioLeft);
bioGrid.appendChild(bioRight);
bioContent.appendChild(bioGrid);
bio.appendChild(bioContent);
bioContent.layoutSizingHorizontal = "FILL";
wrapper.appendChild(bio);
bio.layoutSizingHorizontal = "FILL";

const div07 = makeDivider(1440);
wrapper.appendChild(div07);
div07.layoutSizingHorizontal = "FILL";

// ── S08: CONTACT ──────────────────────────────────────────────────────────────

const contact = figma.createFrame();
contact.name = "S08 / CONTACT";
contact.layoutMode = "HORIZONTAL";
contact.primaryAxisAlignItems = "SPACE_BETWEEN";
contact.counterAxisAlignItems = "CENTER";
contact.paddingTop = 64; contact.paddingBottom = 64;
contact.paddingLeft = 270; contact.paddingRight = 270;
contact.fills = solidFill(COLORS.warmWhite);
contact.resize(1440, 100);
contact.layoutSizingHorizontal = "FIXED";
contact.layoutSizingVertical = "HUG";
contact.itemSpacing = 0;

// Left
const contactLeft = figma.createFrame();
contactLeft.layoutMode = "VERTICAL";
contactLeft.itemSpacing = 12;
contactLeft.fills = [];
contactLeft.layoutSizingHorizontal = "HUG";
contactLeft.layoutSizingVertical = "HUG";

const contactH = figma.createText();
contactH.characters = "Let's talk.";
contactH.textStyleId = getTextStyle("Heading/H2").id;
contactH.fills = solidFill(COLORS.navy);

const contactSub = figma.createText();
contactSub.characters = "Based in Paris, France. Working globally. Reachable in French and English.";
contactSub.textStyleId = getTextStyle("Body/Regular").id;
contactSub.fills = solidFill(COLORS.textGray);

contactLeft.appendChild(contactH);
contactLeft.appendChild(contactSub);

// Right
const contactRight = figma.createFrame();
contactRight.layoutMode = "VERTICAL";
contactRight.itemSpacing = 12;
contactRight.fills = [];
contactRight.primaryAxisAlignItems = "MIN";
contactRight.counterAxisAlignItems = "MAX";
contactRight.layoutSizingHorizontal = "HUG";
contactRight.layoutSizingVertical = "HUG";

const contactCta = figma.createFrame();
contactCta.layoutMode = "HORIZONTAL";
contactCta.primaryAxisAlignItems = "CENTER";
contactCta.counterAxisAlignItems = "CENTER";
contactCta.paddingLeft = 24; contactCta.paddingRight = 24;
contactCta.paddingTop = 12; contactCta.paddingBottom = 12;
contactCta.fills = solidFill(COLORS.navy);
contactCta.layoutSizingHorizontal = "HUG";
contactCta.layoutSizingVertical = "HUG";
const contactCtaText = figma.createText();
contactCtaText.characters = "GET IN TOUCH";
contactCtaText.textStyleId = getTextStyle("Label/Button").id;
contactCtaText.fills = solidFill(COLORS.white);
contactCta.appendChild(contactCtaText);

const contactEmail = figma.createText();
contactEmail.characters = "marine@sunstonadvisory.com";
contactEmail.textStyleId = getTextStyle("Body/Small").id;
contactEmail.fills = solidFill(COLORS.textGray);

const contactLi = figma.createText();
contactLi.characters = "linkedin.com/in/marinecharbonnier";
contactLi.textStyleId = getTextStyle("Body/Small").id;
contactLi.fills = solidFill(COLORS.textGray);

contactRight.appendChild(contactCta);
contactRight.appendChild(contactEmail);
contactRight.appendChild(contactLi);

contact.appendChild(contactLeft);
contact.appendChild(contactRight);
wrapper.appendChild(contact);
contact.layoutSizingHorizontal = "FILL";

const div08 = makeDivider(1440);
wrapper.appendChild(div08);
div08.layoutSizingHorizontal = "FILL";

// ── S09: FOOTER ───────────────────────────────────────────────────────────────

const footer = figma.createFrame();
footer.name = "S09 / FOOTER";
footer.layoutMode = "HORIZONTAL";
footer.primaryAxisAlignItems = "SPACE_BETWEEN";
footer.counterAxisAlignItems = "CENTER";
footer.paddingLeft = 48; footer.paddingRight = 48;
footer.resize(1440, 80);
footer.layoutSizingHorizontal = "FIXED";
footer.fills = solidFill(COLORS.navy);
footer.itemSpacing = 0;

const footerLogo = figma.createText();
footerLogo.characters = "SUNSTONE ADVISORY";
footerLogo.textStyleId = getTextStyle("Label/Section").id;
footerLogo.setRangeFills(0, 3, solidFill(COLORS.goldPrint));  // SUN
footerLogo.setRangeFills(3, 17, solidFill(COLORS.white));      // STONE ADVISORY

const footerCopy = figma.createText();
footerCopy.characters = "Paris, France · © 2026";
footerCopy.textStyleId = getTextStyle("Body/Small").id;
footerCopy.fills = solidFill({ r: 0.5, g: 0.5, b: 0.5 });

footer.appendChild(footerLogo);
footer.appendChild(footerCopy);
wrapper.appendChild(footer);
footer.layoutSizingHorizontal = "FILL";

// ── DONE ─────────────────────────────────────────────────────────────────────

figma.viewport.scrollAndZoomIntoView([wrapper]);

console.log("✅ Sunstone wireframe built! Wrapper ID:", wrapper.id);
return { success: true, wrapperId: wrapper.id };

})();
