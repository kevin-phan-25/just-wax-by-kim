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
 *   - Reduced height + adjusted alignment to eliminate large gap under navbar
 *   - Content now sits closer to the top for a tighter, more elegant look
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
        min-h-[70vh]
        md:min-h-[75vh]
        overflow-hidden
        flex
        items-start
        pt-28 md:pt-36
        pb-20
      "
    >
      {/* Background Image */}
      <HeroImage />

      {/* Soft light veil */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-brand-cream/5
          via-transparent
          to-brand-cream/20
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
