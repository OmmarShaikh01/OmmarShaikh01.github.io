# Design Guidelines — "Obermann" Editorial-Luxury System

Design system extracted from the **OBERMANN WEB DESIGN** hero reference, with the
**typography merged from the *Oak & Grid* reference**. A dark, editorial,
understated-luxury aesthetic: one moody color field, disciplined monochrome, generous
whitespace, and an expressive **display-serif + neutral-sans** type pairing.

> **Note on values:** Hex colors and spacing below are sampled visually from the
> reference screenshot. They are close, drop-in-ready approximations meant as a
> documented starting point — fine-tune against brand assets if available.
>
> Tokens use the same Tailwind v4 `@theme` custom-property naming already used in
> [`src/index.css`](src/index.css), so this system can be adopted without renaming.

---

## 1. Design Philosophy

| Principle | What it means here |
|-----------|--------------------|
| **Understated luxury** | High-end feel comes from restraint, not decoration. Nothing shouts except the copy. |
| **Editorial minimalism** | Magazine-like: big confident headline, wide margins, micro-labels in the corners. |
| **Monochrome discipline** | The whole palette is essentially one maroon field + warm neutrals. Additional accents are near-zero. |
| **The color *is* the accent** | The aubergine gradient does all the emotional work — no competing accent color. |
| **Airy by default** | Large vertical rhythm; content breathes in the center of a full viewport. |
| **Framed canvas** | The page sits inset with rounded corners, like artwork in a mat/frame. |
| **Bold, direct voice** | Copy is punchy and premium ("ENOUGH WITH AVERAGE"). Visuals stay quiet so the words carry. |

---

## 2. Color Palette

### Core roles

| Role | Hex | Usage |
|------|-----|-------|
| Background glow (light source) | `#3A1420` | Upper-center of the radial/diagonal gradient — the aubergine "glow". |
| Background deep | `#1A0A10` | Mid-field maroon. |
| Background edge | `#0D0507` | Falls off to near-black at corners; feeds the vignette. |
| Text primary | `#F3EEEA` | Headline + primary copy. Warm off-white, never pure `#FFFFFF`. |
| Text secondary / muted | `#B9A9AE` | Eyebrow, sub-headline, nav, micro-labels. Mauve-tinted grey. |
| CTA fill | `#ECE6E1` | Cream pill button — the only high-contrast surface on the page. |
| CTA text | `#141013` | Near-black label inside the cream button. |
| Divider / hairline | `rgba(243,238,234,0.12)` | Thin vertical rule in the navbar, subtle separators. |
| Border subtle | `rgba(243,238,234,0.08)` | Low-opacity white edges on surfaces derived from the field. |

### Background treatment

- **Gradient:** radial/diagonal with the light source in the **upper-center**, e.g.
  `radial-gradient(120% 120% at 50% 15%, #3A1420 0%, #1A0A10 45%, #0D0507 100%)`.
- **Vignette:** darken the corners/edges for the framed look — a second
  `radial-gradient(..., transparent 60%, rgba(0,0,0,0.45) 100%)` overlay works well.
- **Accent strategy:** avoid introducing a second saturated hue. If a status/interactive
  accent is ever required, tint it *within* the warm-neutral family rather than adding blue/green.

---

## 3. Typography

> **Merged system.** The type layer combines both references: the expressive
> **display serif** headline from *Oak & Grid* with the **grotesque/geometric sans**
> utility layer from *Obermann*. The result is a classic editorial pairing — a
> high-contrast serif carries the voice; a neutral sans handles everything functional.

### Two families

**Display serif — headlines & wordmark.** A high-contrast, "fashion-editorial" serif with
dramatic thick/thin strokes and elegant terminals (the *Oak & Grid* headline reads like
**Canela / PP Editorial New / Ogg**). Closest Google-Fonts matches:

```css
--font-heading: "Fraunces", "Playfair Display", "Cormorant", Georgia, "Times New Roman", serif;
```

- Lead: **Fraunces** (variable; soft, high-contrast display serif — closest character).
- Alt: **Playfair Display** (crisper didone) or **Cormorant** (lighter, more delicate).
- Set headlines in **sentence case**, **tight/near-zero tracking**, tight leading (~0.95–1.05).
  Let the letterforms — not the spacing — carry the elegance.

**Utility sans — eyebrow, nav, body, labels, buttons.** A neutral grotesque/geometric sans
for everything that must stay quiet and legible:

```css
--font-body: "Inter", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-sans: "Inter", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

- Lead: **Inter** (neutral grotesque, matches *Oak & Grid*).
- Alt: **Outfit** / **Space Grotesk** for a more geometric take (the *Obermann* flavor).

> **Loading:** swap the Google Fonts `<link>` in [`index.html`](index.html) for
> `Fraunces` + `Inter` (drop the current `Inter`/`Outfit`-only set) if this system is adopted.

### Pairing rules

- **One serif, one sans — never a third family.** The serif is expressive; the sans is invisible.
- **Contrast the roles:** big serif headline ↔ small, restrained sans labels.
- **Accent inside type:** an italic/swash **ampersand or key glyph in the accent color**
  (as in the `Oak&Grid` wordmark) is the *one* permitted typographic flourish.

### Tracking — reconciling the two references

The references disagree on small-label tracking; pick one lane and hold it consistently:

- **Editorial lane (recommended — Oak & Grid):** modest tracking everywhere; eyebrow in Sentence/Title case.
- **Modern lane (Obermann):** wide `0.15–0.25em` tracking on small UPPERCASE labels (eyebrow, button, logo).

The serif headline stays **tight-tracked in both lanes**.

### Type scale

| Role | Family | Size (desktop) | Weight | Letter-spacing | Case | Color |
|------|--------|----------------|--------|----------------|------|-------|
| Eyebrow (`Creative Design Agency`) | sans | 14–16px | 400 | `0.02em` (or `0.2em` in Modern lane) | Sentence / UPPERCASE | secondary |
| Hero headline | **serif** | 72–120px | 400–500 | `0` (tight) | Sentence case | primary |
| Sub-headline / body | sans | 16–18px | 400 | `0` | Sentence case | secondary |
| Nav links | sans | 14–15px | 400–500 | `0.01em` | Sentence case | secondary → primary on hover |
| Button label (`View Our Work ↗`) | sans | 13–14px | 500–600 | `0.02em` | Sentence case | per button |
| Logo / wordmark (`Oak&Grid`) | **serif** | 22–26px | 500 | `0` | Title case + accent ampersand | primary |
| Micro-label | sans | 11–12px | 400 | `0.05em` | lowercase | muted |

Measure: let the serif headline run long and confident; keep sub-headline/body to ~45–65ch.

---

## 4. Spacing & Layout

### Grid & structure

- **Hero:** full viewport height (`100vh` / `100dvh`), content centered on **both** axes.
- **Navbar:** fixed top, three logical zones —
  `logo (left) · nav links (right-of-center) · utility icons + EN/DE toggle (far right)`,
  with a **thin vertical divider** (`rgba(243,238,234,0.12)`) between the nav links and the icon cluster.
- **Micro-label:** `scroll to explore` anchored bottom-left of the hero.
- **Watermark:** an oversized, very faint geometric **diamond / rotated-square** brand mark
  centered behind the hero content (opacity ~0.04–0.08).
- **Canvas frame:** the whole page/viewport is inset with rounded corners (`~16–24px` radius),
  reading as artwork in a mat.

### Vertical rhythm (hero stack)

Generous, escalating gaps top-to-bottom:

```
eyebrow
  ↓  24–32px
headline
  ↓  24–28px
sub-headline
  ↓  40–48px
CTA button
```

### Spacing scale (suggested)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px). Section padding is large — lean toward
`96–128px` block padding for the airy quality.

---

## 5. Components

### Pill CTA button
- Shape: **fully rounded** (`border-radius: 9999px`).
- Fill: cream `#ECE6E1`; label: near-black `#141013`, uppercase, `0.15em` tracking, 600 weight.
- Padding: ~`14px 32px`.
- Hover: slight brighten to `#FFFFFF` and/or ~`translateY(-1px)`; keep it subtle.

### Text nav links
- Default: secondary color, medium weight.
- Active (e.g. `Home`): primary color with a short **underline** beneath the label.
- Hover: fade to primary color + underline grows in (left-to-right) — keep transitions ~200ms.

### Icon buttons (mail / phone)
- Line-style glyphs in secondary color; hover lifts to primary.
- Sit to the right of the vertical divider.

### Language switcher (EN / DE)
- Two inline labels; **active language brighter** (primary), inactive muted (secondary).
- No box/pill — just weight/opacity difference.

### Logo lockup
- `<>` code-bracket glyph + `OBERMANN WEB DESIGN` wordmark, uppercase, tracked.

---

## 6. Motion & Effects

| Effect | Spec |
|--------|------|
| Vignette | Static radial darkening at edges for depth/frame. |
| Watermark | Faint, static geometric mark behind hero; optionally a very slow drift/parallax. |
| Reveal on scroll | Subtle fade-in (opacity 0 → 1). Mirrors the existing `.reveal` utility in [`src/index.css`](src/index.css). |
| Easing | Smooth, gentle — e.g. `cubic-bezier(0.2, 0, 0.38, 0.9)`, durations `200–400ms`. |
| Hover states | Small, understated (brighten / 1px lift). No bounce, no large scale. |

Keep motion quiet — the aesthetic is calm confidence, not animation flourish.

---

## 7. Voice & Tone

- **Bold, direct, premium.** Short declaratives that challenge mediocrity.
- Reference copy: *"ENOUGH WITH AVERAGE"* → *"Your Website Can Do More"* →
  *"For brands that want to appear online just as high-end as they truly are."*
- Pattern: **provocation (eyebrow) → promise (headline) → positioning (sub-headline) → action (CTA).**
- Sentence case for supporting copy; UPPERCASE + tracking reserved for labels/eyebrows.

---

## 8. Reusable `@theme` Token Block

Drop-in Tailwind v4 theme using the repo's existing custom-property names
(see [`src/index.css`](src/index.css)). Adopting the aesthetic = replacing the current
Carbon values with these.

```css
@theme {
  /* Backgrounds (maroon field) */
  --color-bg-primary: #1A0A10;   /* mid-field maroon */
  --color-bg-secondary: #0D0507; /* deep edge / vignette base */
  --color-bg-card: #241017;      /* raised surface tint */
  --color-bg-card-hover: #2E141D;

  /* "Accent" = the cream CTA (the field itself is the real accent) */
  --color-accent: #ECE6E1;
  --color-accent-hover: #FFFFFF;

  /* Text */
  --color-text-primary: #F3EEEA;   /* warm off-white */
  --color-text-secondary: #B9A9AE; /* mauve-grey */
  --color-text-muted: #8C7B81;
  --color-text-inverse: #141013;   /* dark text on cream */

  /* Borders / hairlines */
  --color-border-subtle: rgba(243, 238, 234, 0.08);
  --color-border-strong: rgba(243, 238, 234, 0.16);
  --color-border-accent: #ECE6E1;

  /* Typography — serif display + sans utility (merged) */
  --font-heading: "Fraunces", "Playfair Display", Georgia, serif;
  --font-body:    "Inter", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-sans:    "Inter", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Radius — pill CTA + framed canvas (opposite of Carbon's sharp 0px) */
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-sm: 8px;

  /* Shadows — minimal; depth comes from the gradient/vignette, not drop shadows */
  --shadow-card: 0 20px 60px rgba(0, 0, 0, 0.45);
  --shadow-card-hover: 0 24px 72px rgba(0, 0, 0, 0.55);
  --shadow-accent: none;
  --shadow-accent-hover: none;
}
```

Suggested background utility:

```css
body {
  background:
    radial-gradient(120% 120% at 50% 15%, #3A1420 0%, #1A0A10 45%, #0D0507 100%),
    radial-gradient(120% 120% at 50% 50%, transparent 60%, rgba(0,0,0,0.45) 100%);
  background-blend-mode: normal;
}
```

---

### Quick reference card

- **Mood:** dark editorial luxury · quiet · framed.
- **Color:** aubergine field + warm off-white + cream CTA. No second accent.
- **Type:** display-serif headline (sentence case, tight tracking) + neutral sans utility; one accent-colored glyph (e.g. `&`) allowed.
- **Layout:** centered full-viewport hero, corner micro-labels, faint diamond watermark.
- **Motion:** subtle fades and 1px lifts only.
- **Voice:** bold, direct, premium.
