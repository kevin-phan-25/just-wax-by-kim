/**
 * -----------------------------------------------------------------------------
 * File: Hero.tsx
 *
 * Description:
 * Luxury hero experience.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed logo/image from hero
 *   - Rebuilt around the brand quote for a stronger first impression
 *   - Cleaner, more elegant entry experience
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
        min-h-[78vh]
        md:min-h-[85vh]
        flex
        items-center
        justify-center
        px-6
        pt-28
        pb-20
      "
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-[#FDF8F7] to-brand-rose/20" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
}
