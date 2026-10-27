---
name: Lumina Minimalist Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#585f67'
  on-secondary: '#ffffff'
  secondary-container: '#dce3ec'
  on-secondary-container: '#5e656d'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce3ec'
  secondary-fixed-dim: '#c0c7d0'
  on-secondary-fixed: '#151c23'
  on-secondary-fixed-variant: '#40484f'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies an editorial, high-precision aesthetic engineered for digital craftspeople, product thinkers, and senior creatives. The personality is confident, articulate, and surgically clean. It avoids superfluous ornamentation, letting project outcomes, typography, and refined spatial relationships communicate seniority and prestige.

The style is Modern Editorial Minimalism:
- Generous breathing room with high-ratio macro whitespace.
- Precise architectural hierarchy anchored by deep slate typography rather than harsh pure blacks.
- High-intent visual accents via an electric cobalt blue that directs gaze to interactive states and primary achievements.
- Tactile, barely-there structural boundaries (whisper borders and diffused ambient lighting) that feel physical, light, and architectural.

## Colors

The palette is anchored on high-key atmospheric cleanliness, leveraging deliberate contrast ratios for effortless legibility and modern clarity:

- **Canvas & Surfaces:**
  - Base canvas: `#FFFFFF` (Primary surface for stark, crisp presentation).
  - Subtle grounding surface: `#F8FAFC` (Secondary surface for section zoning, backdrops, and card interiors).
  - Raised/Floating surfaces: `#FFFFFF` with ultra-soft atmospheric diffusion.

- **Typography & Neutrals:**
  - Display & Headings: `#0F172A` (Slate 900 — solid, ink-dense grounding).
  - Body & Longform: `#334155` (Slate 700 — balanced optical weight with zero glare).
  - Secondary & Metadata: `#64748B` (Slate 500 — subtle details, timestamps, and captions).
  - Subtle Borders & Dividers: `#E2E8F0` (Slate 200 — hairline boundaries).

- **Brand & Accents:**
  - Primary Action / Accent: `#2563EB` (Cobalt Blue — vibrant, purposeful highlights, interactive links, and focus rings).
  - Interactive Hover: `#1D4ED8` (Deepened Cobalt).
  - Soft Tint / Surface Fill: `#EFF6FF` (Ice Blue Tint — active chips, metric badges, and accent backdrops).

## Typography

The typography system relies exclusively on `Inter` to establish an uncompromising, systematic, and rational layout. Optical sizing and negative letter-spacing on headline scales create an editorial, tailored feel.

- **Display & Headlines:** Tightly tracked headings (`-0.015em` to `-0.03em`) eliminate loose whitespace between glyphs, ensuring punchy titles and impactful lead copy.
- **Body:** Standardized tracking ensures legibility at reading speed across both light backgrounds (`#FFFFFF` and `#F8FAFC`).
- **Labels & Micro-copy:** Uppercase or small tracking adjustments (`+0.04em`) are strictly reserved for `label-sm` when used in pill tags, metric indicators, and section eyebrows.

## Layout & Spacing

The layout is built upon a balanced 12-column grid container capped at `1200px` for optimal longform readability and controlled asset presentation.

- **Breakpoints & Layouts:**
  - **Desktop (1024px+):** 12-column grid, `1.5rem` (`24px`) gutters, outer section margins ranging from `3rem` to `6rem`. Vertical spacing between portfolio case studies uses `space-3xl` (`96px`) to produce deliberate narrative breathing room.
  - **Tablet (768px - 1023px):** 8-column grid, `1.25rem` gutters, outer section margins of `2rem`.
  - **Mobile (< 768px):** 4-column single-stream reflow, `1rem` gutters, `1.25rem` canvas edge margins. Vertical stacks collapse naturally with a minimum element gap of `space-md`.

- **Vertical Rhythm:**
  - Internal card padding operates strictly on `space-lg` (`24px`) or `space-xl` (`40px`).
  - Section dividers use micro gutters accompanied by clean whitespace rather than thick graphical lines.

## Elevation & Depth

Visual hierarchy leverages crisp hairline boundaries combined with natural ambient light, avoiding heavy dropshadows or opaque bevels:

- **Level 0 (Flat/Canvas):** Transparent background or `#F8FAFC` foundation with no shadow.
- **Level 1 (Subtle Cards & Containers):** `#FFFFFF` fill overlaid with a 1px border (`#E2E8F0`). Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Hovered Cards & Interactive Modules):** Border subtly transitions to `#CBD5E1`. Shadow expands softly: `0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modals, Overlays & Sticky Navbars):** `#FFFFFF` with 80% opacity and an active `backdrop-filter: blur(12px)`. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.

## Shapes

The geometric framework is calculated and smooth, leveraging standard `0.5rem` (`8px`) radii for structured containers and interactive elements, while reserving full circular/pill treatment for status trackers and tags:

- **Interactive Core (Inputs, Buttons):** `rounded` (`0.5rem` / `8px`) provides structure without visual hardness.
- **Case Study Cards & Feature Panels:** `rounded-lg` (`1rem` / `16px`) creates comfortable visual framing.
- **Badges, Tags & Floating Nav Indicators:** Pill radius (`9999px`) provides organic contrast against rectangular cards.

## Components

### Buttons
- **Primary:** High-solid fill `#2563EB`, text `#FFFFFF`, font weight 500, radius `8px`. Hover: `#1D4ED8`. Active: scale `0.98`. Focus: `2px` ring `#2563EB` with `2px` offset `#FFFFFF`. Minimum touch target: `44px` height with `20px` horizontal padding.
- **Secondary / Ghost:** Transparent surface with a 1px `#E2E8F0` border, text `#0F172A`. Hover: background `#F8FAFC` with border `#CBD5E1`.

### Tags & Pill Badges
- **Status / Technology Pills:** Height `26px`, horizontal padding `10px`, radius `9999px`. 
- **Palette Variants:**
  - *Accent:* Background `#EFF6FF`, text `#2563EB`, typography `label-sm`.
  - *Neutral:* Background `#F1F5F9`, text `#334155`, typography `label-sm`.

### Cards & Project Showcases
- Surface: `#FFFFFF`. Hairline border: 1px `#E2E8F0`. Padding: `24px` (mobile) to `32px` (desktop).
- Hover behaviour: Subtle `-2px` vertical translation with Elevation Level 2 transition (`200ms ease-out`).
- Media containers inside cards utilize matching nested radius (`calc(1rem - 4px)`).

### Input Fields & Contact Elements
- Height: `44px` minimum. Border: 1px `#E2E8F0`. Background: `#FFFFFF`. Typography: `body-md` in `#0F172A`.
- Placeholder: `#94A3B8`.
- Focus state: Border switches directly to `#2563EB` with a `3px` glow ring in `rgba(37, 99, 235, 0.15)`.

### List Items & Timeline Entries (Experience/Roles)
- Borderless rows separated by soft hairline divider (`1px solid #F1F5F9`).
- Left-aligned role and enterprise headers in `#0F172A`, right-aligned date stamps in `#64748B` (`body-sm`).

### Interactive Links
- `#0F172A` inline text with subtle decorative underline (`underline-offset: 4px`, color `#CBD5E1`).
- Hover shifts color to `#2563EB` and underline opacity to 100%.