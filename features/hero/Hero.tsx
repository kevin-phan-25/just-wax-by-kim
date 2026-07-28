/**
 * -----------------------------------------------------------------------------
 * File:
 * Hero.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Fixed navbar-to-hero spacing
 *   - Fixed hero-to-mission spacing
 *   - Unified background color
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
        px-6
        pt-24
        pb-20
        bg-gradient-to-b
        from-brand-cream
        via-[#FDF8F7]
        to-brand-rose/20
      "
    >

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
