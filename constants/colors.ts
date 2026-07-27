/**
 * Updated: July 27, 2026
 * Change: Mirrored the new elegant / luxurious palette from config/colors.ts
 *          for use in components and data files that import from constants.
 * File: constants/colors.ts
 */

export const COLORS = {
  // Neutrals
  ivory: "#FAF8F5",
  cream: "#F5F0E8",
  border: "#E5DCD0",
  muted: "#8A7F74",
  body: "#2C2522",
  heading: "#1A1614",

  // Gold
  gold: "#6B4F24",
  goldHover: "#5A411C",
  goldAccent: "#C9A86C",
  goldSoft: "#E8D9B8",

  // Blush
  blush: "#D4C0B8",
  blushSoft: "#E8D9D4",

  // Base
  white: "#FFFFFF",
  black: "#0C0A09",

  // Semantic shortcuts
  background: "#FAF8F5",
  surface: "#F5F0E8",
  primary: "#6B4F24",
  primaryHover: "#5A411C",
  text: "#2C2522",
  textMuted: "#8A7F74",
} as const;
