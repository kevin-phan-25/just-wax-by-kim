/**
 * -----------------------------------------------------------------------------
 * File: config/theme.ts
 * Global luxury brand theme — Just Wax by Kim
 * Updated: July 29, 2026
 * -----------------------------------------------------------------------------
 */
export const theme = {
  colors: {
    background: "#FCF8F3",
    backgroundSoft: "#F6E7E1",
    foreground: "#3B2A26",
    gold: "#C6A15B",
    rose: "#E8C8BC",
    dustyPink: "#D4A9B6",
    plum: "#8C5A6B",
    taupe: "#8C7468",
    muted: "#9A857A",
    border: "#E8DDD8",
    white: "#FFFFFF",
  },
  radius: {
    card: "28px",
    soft: "24px",
    button: "999px",
  },
  shadow: {
    soft: "0 12px 32px rgba(59, 42, 38, 0.04), 0 2px 8px rgba(59, 42, 38, 0.03)",
    card: "0 24px 70px rgba(59, 42, 38, 0.06)",
    floating: "0 35px 90px rgba(59, 42, 38, 0.08)",
  },
} as const;
