# Prompt consolidé — Génération du logo Sunstone Advisory

> Source : `logos-recraft/prompt-generation.html` + `logos-recraft/concept-square-s-v2-refined.html` + `brand/visual-identity.md`
> Usage : à coller dans un outil de génération d'image (Recraft, Midjourney, DALL·E, Ideogram, Adobe Firefly Vector).
> Le mark cible : composition carrée, dualité Sun (or, haut-droit) / Stone (sombre, bas-centre), S négatif diagonal qui relie les deux.

---

## 0. CONTEXTE & ANATOMIE DU MARK

Marque : **Sunstone Advisory**, cabinet de conseil M&A indépendant à Paris. Ton premium, sobre, finance high-end (références : Lazard, Rothschild, boutiques M&A londoniennes type Ondra Partners).

Le mark est composé de **4 formes plates** dans une composition carrée :

1. **Quart de cercle or — haut-droite** : centre ancré au coin (80,0), rayon ≈ 40 % de la largeur, flush contre les bords haut et droit. Représente le **SOLEIL**. Couleur `#B8922A`.
2. **Secteur sombre haut-gauche** : quart de cercle ancré au coin (0,0), rayon ≈ 60 % de la largeur, arc convexe vers le bas-droit. Forme la moitié haute du S. Couleur `#1C1A18`.
3. **Secteur sombre bas-droite** : quart de cercle ancré au coin (80,80), rayon ≈ 60 % de la largeur, arc convexe vers le haut-gauche. Forme la moitié basse du S. Couleur `#1C1A18`.
4. **Demi-cercle "pierre" — bas centre** : dôme sombre centré horizontalement, bord plat en haut, courbe vers le bas. Rayon ≈ 25 % de la largeur. Légèrement débordant sous le carré. Représente la **PIERRE / arche**. Couleur `#1C1A18`.

Entre les deux secteurs sombres : **corridor en S négatif** (espace blanc/cream) qui flue diagonalement du haut-droit vers le bas-gauche. C'est le liant visuel entre Sun et Stone — **et c'est ce qui donne la lecture SUN + S + STONE = SUNSTONE**.

**Palette stricte** :
- Off-white background : `#F5F3EE`
- Near-black : `#1C1A18`
- Warm gold (or chaud) : `#B8922A`
- AUCUNE autre couleur tolérée.

---

## 1. PROMPT A — Analogie Yin-Yang (recommandé / Midjourney, DALL·E 3, Recraft)

```
Flat vector logomark. A square composition inspired by a simplified yin-yang structure, but rectangular and asymmetric.

The square is divided by an S-shaped negative space (white/cream corridor) that flows diagonally from the upper-right to the lower-left.

Left of the S: a solid near-black (#1C1A18) convex wedge shape occupying the upper-left area.
Right of the S: a solid near-black (#1C1A18) convex wedge shape occupying the lower-right area.

Top-right corner: a solid warm gold (#B8922A) quarter-circle wedge, flush against the top and right edges of the square. This is the SUN.

Bottom center (slightly below the square): a solid near-black filled semicircle, flat edge on top, dome curving downward. This is the STONE / arch.

Completely flat. No gradient, no shadow, no outline stroke, no texture.
Off-white background (#F5F3EE). Corporate identity style.
```

**Negative prompt** :
```
gradient, glow, shadow, bevel, 3D effect, outline stroke, serif letter, decorative, ornate, texture, photorealistic, complex, letterform, typography, circle shape, round logo
```

> Pourquoi ça marche : les IA connaissent le yin-yang. Ancre visuelle forte + corrections (carré, asymétrique, gold dans un coin).

---

## 2. PROMPT B — Description spatiale pure (optimisé Recraft / Adobe Firefly Vector)

```
Minimalist vector brand mark. Square format. Four flat geometric shapes, no stroke, no gradient.

SHAPE 1 — upper-left: a filled dark charcoal (#1C1A18) quarter-circle pie slice, center anchored at the top-left corner of the square, radius equal to 60% of the square width. The curved edge faces the lower-right interior of the square.

SHAPE 2 — upper-right: a filled warm gold (#B8922A) quarter-circle pie slice, center anchored at the top-right corner of the square, radius equal to 40% of the square width. The curved edge faces the lower-left interior.

SHAPE 3 — lower-right: a filled dark charcoal (#1C1A18) quarter-circle pie slice, center anchored at the bottom-right corner, radius equal to 60% of the square width. The curved edge faces the upper-left interior.

SHAPE 4 — bottom-center: a filled dark charcoal (#1C1A18) solid semicircle, horizontally centered below the square's bottom edge, radius 25% of square width, flat edge on top, dome pointing downward.

The three charcoal shapes and one gold shape leave a white S-curved negative space flowing diagonally through the center of the square from upper-right to lower-left.
```

**Negative prompt** :
```
gradient, texture, shadow, glow, stroke, outline, border, rounded corners, circle, oval, text, letter S, 3D, realistic, complex shapes, more than 4 shapes, color other than gold and near-black
```

---

## 3. PROMPT C — Narratif symbolique (optimisé DALL·E 3 / Ideogram)

```
A corporate logomark for a financial advisory firm called Sunstone.

The mark is a square icon made of three flat geometric elements:

1. A golden tan quarter-circle in the top-right corner of the square — symbolizing the SUN rising.

2. Two large dark charcoal quarter-circle shapes: one anchored in the top-left corner, one anchored in the bottom-right corner. Together they form the body of the letter S, with white space between them creating the S curve.

3. A small dark charcoal semicircle arch at the bottom center, like a half-moon or stone arch — symbolizing STONE and stability.

The visual reading: a golden sun (top-right) connected by an S-shaped white ribbon to a stone arch (bottom) — SUN + S-curve + STONE = SUNSTONE.

Flat design, Swiss modernist style, premium finance branding.
Colors: near-black #1C1A18, warm gold #B8922A, off-white background.
```

**Negative prompt** :
```
gradient, shadow, 3D, outline, texture, letterform, decorative elements, blue, complex background
```

---

## 4. PROMPT D — Ultra-court (Midjourney v6, à coller direct)

```
Square flat vector logo icon. Dark charcoal and warm gold. Yin-yang-inspired S-curve division in a square, white S-shaped negative space between two dark quarter-circle masses. Gold quarter-circle sun accent in top-right corner. Small dark semicircle stone arch at bottom center. Swiss modernist, premium finance. --style raw --ar 1:1 --no gradient texture shadow outline 3D
```

> Ajouter `--seed 42` (ou autre valeur fixe) pour générer des variantes cohérentes.

---

## 5. PROMPT E — Variante alternative analytique (issue de concept-square-s-v2-refined)

```
Minimalist flat vector logomark on a white background. A perfect square composition. Three geometric shapes, hard edges, no stroke, no shadow, no gradient.

Shape 1 — top-right corner: a solid golden-tan quarter-circle wedge (color #B8922A), flush against the top and right edges of the square. Represents the sun.

Shape 2 — dark near-black mass (color #1C1A18), composed of two opposing convex arcs that together form a negative-space letter S. The upper arc occupies the upper-left area, curving convexly toward the lower-right. The lower arc occupies the lower-right area, curving convexly toward the upper-left. Between these two arcs, a white S-shaped negative space flows diagonally from top-right to bottom-left.

Shape 3 — bottom-center: a solid near-black filled semicircle (dome shape, flat edge at top, curved edge pointing downward), centered horizontally, sitting at the very base of the composition. Slightly protruding below the square. Represents the stone / rock arch.

The golden quarter-circle (sun) and the black semicircle arch (stone) are visually connected by the S-shaped negative space flowing between them.
Style: Swiss modernist, corporate identity, premium financial advisory brand.
Colors: off-white background #F5F3EE, near-black #1C1A18, warm gold #B8922A.
```

**Negative prompt** :
```
gradient, shadow, glow, stroke, outline, texture, 3D, photorealistic, complex illustration, serif letterform, decorative, ornate, busy, multiple colors, blue, green, red
```

---

## 6. PARAMÈTRES TECHNIQUES PAR OUTIL

### Recraft.ai
- **Style** : Vector illustration
- **Substyle** : Brand identity
- **Couleurs fixées** : `#1C1A18` + `#B8922A`
- **Ratio** : 1:1
- **Itérations** : générer 4, sélectionner le meilleur, utiliser "refine" pour nettoyer

### Midjourney v6
- **Flags** : `--style raw`
- **Ratio** : `--ar 1:1`
- **Qualité** : `--q 2`
- **Négatif** : `--no gradient shadow outline 3D`
- **Seed** : fixer (ex. `--seed 42`) pour générer des variantes cohérentes

### DALL·E 3 / GPT
- Préfixer le prompt par : **"Do not add text."**
- Ajouter : **"Exactly 4 shapes total."**
- Si raté : **"Simplify further."**
- Demander : **"Top-down flat view."**

---

## 7. CRITÈRES DE VALIDATION (à vérifier sur chaque génération)

1. ✅ Composition strictement carrée
2. ✅ Quart de cercle OR (et seulement OR) au coin haut-droit
3. ✅ Deux secteurs sombres (haut-gauche + bas-droit) qui forment ensemble un S négatif blanc en diagonale
4. ✅ Demi-cercle sombre au bas-centre, bord plat en haut, dôme vers le bas
5. ✅ AUCUN texte, lettre, typographie, ni dégradé, ombre, contour, 3D
6. ✅ Palette stricte : `#1C1A18`, `#B8922A`, fond `#F5F3EE`. Aucune autre couleur.
7. ✅ Style Swiss modernist / corporate identity / flat

---

## 8. ORDRE D'UTILISATION RECOMMANDÉ

1. **Commencer par PROMPT A** (analogie Yin-Yang) sur Recraft ou Midjourney → meilleur ratio sortie/effort
2. Si la composition flotte ou rate l'arche : **PROMPT B** (description spatiale pure) sur Recraft
3. Si DALL·E ou Ideogram : **PROMPT C** (narratif)
4. Pour itérer rapidement sur Midjourney : **PROMPT D**
5. **PROMPT E** = backup analytique alternatif si A-D donnent des résultats faibles
