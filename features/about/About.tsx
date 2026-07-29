/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About — portrait on the right, text wraps around it.
 * Added volume, depth, and richer spacing.
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
        md:py-28
      "
    >
      {/* Soft ambient glow for volume */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,200,188,0.18),transparent_60%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1100px)] h-px bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* 
          Float layout: image on the right, text wraps around it.
          On mobile the image stacks above.
        */}
        <div className="relative">
          {/* Portrait — right side on desktop */}
          <div
            className="
              mb-12 mx-auto
              w-full max-w-[280px] md:max-w-[300px]
              lg:float-right
              lg:ml-14 lg:mb-10
              xl:ml-16
            "
          >
            <AboutImage />
          </div>

          {/* Text content wraps the image */}
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
