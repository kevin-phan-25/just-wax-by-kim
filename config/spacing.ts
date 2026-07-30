/**
 * -----------------------------------------------------------------------------
 * File: config/spacing.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Global spacing scale — responsive where possible so layout
 * breathes on large screens and tightens on small ones.
 *
 * Changes:
 * - July 28, 2026
 *   - Increased section spacing for a more luxurious, open feel
 * - July 29, 2026
 *   - Replaced fixed rem values with clamp() for near auto-scaling
 *   - Added gutter, gap, navClearance tokens
 * -----------------------------------------------------------------------------
 */
export const spacing = {
  /** Vertical padding for major page sections */
  section: "clamp(4rem, 6vw + 2rem, 7rem)",

  /** Tighter section padding for stacked mobile layouts */
  sectionMobile: "clamp(3rem, 5vw + 1.5rem, 5rem)",

  /** Max width of the main content column */
  container: "min(100%, 80rem)",

  /** Horizontal page gutter */
  gutter: "clamp(1.25rem, 3vw, 2.5rem)",

  /** Inner padding for cards / panels */
  card: "clamp(1.25rem, 2vw + 0.5rem, 2rem)",

  /** Gap between grid / flex items */
  gap: "clamp(1.5rem, 3vw, 2.75rem)",

  /** Space under fixed navbar before page content */
  navClearance: "clamp(5.5rem, 10vh, 8rem)",
} as const;

export type Spacing = typeof spacing;
