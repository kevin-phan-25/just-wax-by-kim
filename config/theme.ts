/**
 * Updated: July 27, 2026
 * Change: Theme tokens updated to the new luxurious warm palette.
 *          Primary is now rich bronze-gold, backgrounds are warm ivory/cream.
 * File: config/theme.ts
 */

import { colors } from "./colors";

export const theme = {
  colors: {
    background: colors.background,
    surface: colors.surface,
    surfaceElevated: colors.surfaceElevated,

    text: colors.text.primary,
    textSecondary: colors.text.secondary,
    textMuted: colors.text.muted,
    textInverse: colors.text.inverse,
    heading: colors.text.heading,

    primary: colors.primary.DEFAULT,
    primaryHover: colors.primary.hover,
    primaryActive: colors.primary.active,
    primaryForeground: colors.primary.foreground,
    primaryMuted: colors.primary.muted,

    accent: colors.accent.gold,
    accentSoft: colors.accent.goldSoft,
    blush: colors.accent.blush,

    border: colors.border.default,
    borderSubtle: colors.border.subtle,
    borderStrong: colors.border.strong,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,

    white: colors.white,
    black: colors.black,
  },

  // Optional: keep existing spacing / radius / etc. intact
  // radius, shadows, fonts can stay as they were
} as const;

export type Theme = typeof theme;
