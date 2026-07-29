/**
 * -----------------------------------------------------------------------------
 * Luxury Brand Colors - Just Wax by Kim
 * -----------------------------------------------------------------------------
 */
export const colors = {
  background: {
    primary: "#FCF8F3",
    secondary: "#F6E7E1",
    card: "#FFFFFF",
  },
  brand: {
    champagne: "#D8B4A0",
    gold: "#C6A15B",
    rose: "#E8C8BC",
    dustyPink: "#D4A9B6",
    plum: "#8C5A6B",
    taupe: "#8C7468",
    espresso: "#3B2A26",
  },
  text: {
    primary: "#3B2A26",
    secondary: "#6F5A50",
    muted: "#9A857A",
  },
  border: {
    light: "#E8DDD8",
  },
} as const;

export type BrandColors = typeof colors;
