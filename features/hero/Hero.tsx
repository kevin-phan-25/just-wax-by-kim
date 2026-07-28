/**
 * -----------------------------------------------------------------------------
 * File: Hero.tsx
 *
 * Description:
 * Luxury cinematic hero experience.
 *
 * v2.0.0
 * - Redesigned luxury layout.
 * - Added controlled viewport height.
 * - Added premium spacing.
 * - Added content container.
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


      {/* Luxury Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/40
          via-black/20
          to-transparent
        "
      />


      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
        "
      >

        <HeroContent />

      </div>


    </section>

  );

}
