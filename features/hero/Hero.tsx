/**
 * -----------------------------------------------------------------------------
 * File:
 * Hero.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Reduced navbar-to-hero spacing by 75%
 *   - Tightened hero vertical height
 *   - Moved content closer to navbar
 *
 * -----------------------------------------------------------------------------
 */

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-0
        flex
        items-start
        justify-center
        px-6
        pt-4
        pb-12
      "
    >
      {/* Soft background glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-brand-cream
          via-[#FDF8F7]
          to-brand-rose/20
        "
      />

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          mx-auto
          text-center
        "
      >
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
}
