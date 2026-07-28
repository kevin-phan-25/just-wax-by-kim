/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroContent.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed logo
 *   - Centered around brand quote
 *   - Replaced gold accent with plum luxury accent
 *
 * -----------------------------------------------------------------------------
 */

export default function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* Eyebrow */}
      <p
        className="
          text-xs
          md:text-sm
          uppercase
          tracking-[0.35em]
          text-brand-plum
        "
      >
        Luxury Wax Studio
      </p>
