/**
 * Updated: July 27, 2026
 * Change: Complete redesign of color scheme for a more elegant, trustworthy, and luxurious feel.
 *          - Warm ivory / cream backgrounds (expensive paper feel)
 *          - Deep warm charcoal for text (trust + readability)
 *          - Rich bronze-gold primary (restrained luxury, high contrast)
 *          - Soft champagne gold for accents
 *          - Quiet blush secondary
 *          - Removed cool grays and bright yellows
 * File: config/colors.ts
 */

export const colors = {
  // ─────────────────────────────────────────
  // Neutrals (warm, never pure gray)
  // ─────────────────────────────────────────
  ivory: {
    50:  "#FDFCFA",
    100: "#FAF8F5", // page background
    200: "#F5F0E8", // surfaces / cards
    300: "#EDE6DB",
    400: "#E5DCD0", // borders
    500: "#D6CBBC",
  },

  charcoal: {
    50:  "#F7F5F3",
    100: "#EBE7E3",
    200: "#D4CDC6",
    300: "#B5AAA0",
    400: "#8A7F74", // muted text
    500: "#6B6159",
    600: "#4A433D",
    700: "#2C2522", // body text
    800: "#1A1614", // headings
    900: "#12100E",
    950: "#0C0A09",
  },

  // ─────────────────────────────────────────
  // Primary — Rich Bronze Gold (trust + luxury)
  // ─────────────────────────────────────────
  gold: {
    50:  "#FBF7F0",
    100: "#F5EBD9",
    200: "#E8D9B8", // light accent / highlights
    300: "#D4B87A",
    400: "#C9A86C", // decorative gold
    500: "#A67C3D",
    600: "#7A5C2E",
    700: "#6B4F24", // primary buttons / CTAs
    800: "#5A411C", // hover
    900: "#3F2E12",
    950: "#241A0A",
  },

  // ─────────────────────────────────────────
  // Secondary — Soft Blush (feminine, quiet)
  // ─────────────────────────────────────────
  blush: {
    50:  "#FBF7F6",
    100: "#F5EDEA",
    200: "#E8D9D4",
    300: "#D4C0B8",
    400: "#C9B0A8",
    500: "#B0948C",
    600: "#8F746C",
    700: "#6F5852",
  },

  // ─────────────────────────────────────────
  // Semantic
  // ─────────────────────────────────────────
  white: "#FFFFFF",
  black: "#0C0A09",

  // Backgrounds
  background: "#FAF8F5",
  surface: "#F5F0E8",
  surfaceElevated: "#FDFCFA",

  // Text
  text: {
    primary: "#2C2522",
    secondary: "#6B6159",
    muted: "#8A7F74",
    inverse: "#FAF8F5",
    heading: "#1A1614",
  },

  // Borders
  border: {
    default: "#E5DCD0",
    subtle: "#EDE6DB",
    strong: "#D6CBBC",
  },

  // Interactive
  primary: {
    DEFAULT: "#6B4F24",
    hover: "#5A411C",
    active: "#3F2E12",
    foreground: "#FFFFFF",
    muted: "#E8D9B8",
  },

  // Accents
  accent: {
    gold: "#C9A86C",
    goldSoft: "#E8D9B8",
    blush: "#D4C0B8",
  },

  // Status (kept muted & warm)
  success: "#5C7A5A",
  warning: "#A67C3D",
  error: "#8B4A42",
  info: "#5A6B7A",
} as const;

export type Colors = typeof colors;
