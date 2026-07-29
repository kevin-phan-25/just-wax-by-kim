/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 *
 * Changes:
 * • Refined spacing and composition
 * • Updated to match hero luxury aesthetic
 * • Softer background transition
 * -----------------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
        px-6
        py-24
        md:py-32
      "
    >

      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,169,182,0.18),transparent_55%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          grid
          md:grid-cols-12
          gap-12
          lg:gap-20
          items-center
        "
      >

        {/* Image */}
        <div
          className="
            md:col-span-5
            order-1
          "
        >
          <AboutImage />
        </div>


        {/* Content */}
        <div
          className="
            md:col-span-7
            order-2
          "
        >
          <AboutContent />
        </div>

      </div>

    </section>
  );
}
