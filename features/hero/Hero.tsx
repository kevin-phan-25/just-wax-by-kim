/**
 * -----------------------------------------------------------------------------
 * File:
 * Hero.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Added spacing below navbar
 *   - Added breathing room before Mission section
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
        pt-8
        pb-16
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
