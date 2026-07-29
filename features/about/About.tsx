/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section — text elegantly wraps around the portrait.
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
        pb-20
        md:mt-20
        md:pt-16
        md:pb-28
      "
    >
      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1200px)] h-px bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative">
          {/* Portrait — floats right on large screens */}
          <div
            className="
              mb-10 mx-auto
              w-full max-w-[250px] md:max-w-[280px]
              lg:float-right
              lg:ml-12 lg:mb-8
              xl:ml-16 xl:mb-10
            "
          >
            <AboutImage />
          </div>

          {/* Text flows around the image */}
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
