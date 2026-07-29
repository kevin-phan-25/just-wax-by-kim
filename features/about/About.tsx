/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section — text wraps around the portrait.
 *
 * Changes:
 * • Switched from rigid 2-column grid to classic float layout
 * • Text flows around the image on large screens
 * • Full use of section width while staying elegant
 * • Clean 1-inch breathing room after Hero
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
        mt-16
        pt-14
        pb-24
        md:mt-20
        md:pt-16
        md:pb-32
      "
    >
      {/* Section divider */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(92%,1200px)]
          h-px
          bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* 
          Classic editorial float:
          Image sits on the right, text wraps around it.
          On mobile the image stacks above the text.
        */}
        <div className="relative">
          {/* Portrait — floats right on lg+ */}
          <div
            className="
              mb-10
              w-full
              max-w-[260px]
              mx-auto
              md:max-w-[280px]
              lg:float-right
              lg:ml-12
              lg:mb-8
              xl:ml-16
              xl:mb-10
            "
          >
            <AboutImage />
          </div>

          {/* Text content — wraps around the floated image */}
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
