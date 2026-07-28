/**
 * -----------------------------------------------------------------------------
 * File: Hero.tsx
 *
 * Description:
 * Luxury cinematic hero experience.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed dark grey gradient overlays
 *   - Cleaner, more elegant presentation
 *   - Kept controlled height + premium spacing
 *
 * -----------------------------------------------------------------------------
 */
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[92vh]
        min-h-[720px]
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Background Image */}
      <HeroImage />

      {/* Soft light veil instead of dark gradient (optional – remove if you want pure image) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-brand-cream/10
          via-transparent
          to-brand-cream/30
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          w-full max-w-7xl
          mx-auto
          px-6 lg:px-12
        "
      >
        <HeroContent />
      </div>
    </section>
  );
}
