/**
 * -----------------------------------------------------------------------------
 * File: config/typography.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury typography scale for Just Wax by Kim.
 * Designed for elegance, readability, and hierarchy that feels expensive
 * without being loud.
 *
 * Changes:
 * - July 27, 2026
 *   - Expanded from basic sizes into a full luxury hierarchy
 *   - Added display, heading, body, caption, and label scales
 *   - Added tracking, leading, and weight tokens for refined control
 *   - Optimized for both mobile and desktop with sensible breakpoints
 *
 * -----------------------------------------------------------------------------
 */

export const typography = {
  // ─────────────────────────────────────────
  // Display (Hero / Statement)
  // ─────────────────────────────────────────
  display: {
    /** Large hero headlines */
    large: "text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]",
    /** Secondary hero / large statements */
    medium: "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]",
  },

  // ─────────────────────────────────────────
  // Headings
  // ─────────────────────────────────────────
  heading: {
    /** Page / major section titles */
    h1: "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight",
    /** Section titles */
    h2: "text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight",
    /** Subsection titles */
    h3: "text-2xl md:text-3xl font-normal tracking-tight leading-snug",
    /** Card / small section titles */
    h4: "text-xl md:text-2xl font-normal tracking-tight leading-snug",
    /** Overlines / small headings */
    h5: "text-lg md:text-xl font-medium tracking-wide leading-snug",
    /** Tiny labels used as headings */
    h6: "text-base md:text-lg font-medium tracking-wide leading-snug",
  },

  // ─────────────────────────────────────────
  // Body
  // ─────────────────────────────────────────
  body: {
    /** Lead / intro paragraphs */
    large: "text-lg md:text-xl font-normal leading-relaxed tracking-normal",
    /** Default reading text */
    base: "text-base font-normal leading-relaxed tracking-normal",
    /** Secondary / supporting text */
    small: "text-sm font-normal leading-relaxed tracking-normal",
  },

  // ─────────────────────────────────────────
  // UI / Supporting
  // ─────────────────────────────────────────
  caption: "text-xs md:text-sm font-normal leading-normal tracking-wide text-[var(--foreground-muted)]",
  label: "text-xs font-medium uppercase tracking-[0.12em] leading-none",
  overline: "text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] leading-none",

  // ─────────────────────────────────────────
  // Special
  // ─────────────────────────────────────────
  quote: "text-xl md:text-2xl font-light italic leading-relaxed tracking-tight",
  price: "text-2xl md:text-3xl font-light tracking-tight",
} as const;

export type Typography = typeof typography;
