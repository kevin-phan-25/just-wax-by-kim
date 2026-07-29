/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Portrait floats on the right; body text wraps around it.
 * Soft ambient wash + layered depth for volume.
 *
 * Changes:
 * • July 29, 2026 – Full redesign with proper text-wrap around image
 * • July 29, 2026 – Image on the right (float-right)
 * • July 29, 2026 – Controlled container width to avoid empty right space
 * • July 29, 2026 – Safe, visible gap after Hero
 * • July 29, 2026 – Soft radial glow for depth
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
        pt-16
        pb-24
        md:mt-20
        md:pt-20
        md:pb-28
      "
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_75%_30%,rgba(232,200,188,0.18),transparent_55%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1000px)] h-px bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-5xl">
        {/* 
          Float container
          Image sits on the right, text flows around it.
        */}
        <div className="relative">
          {/* Portrait — right side */}
          <div
            className="
              mb-10 mx-auto
              w-full max-w-[260px] sm:max-w-[280px]
              lg:float-right
              lg:ml-12 lg:mb-8
              xl:ml-14
            "
          >
            <AboutImage />
          </div>

          {/* Text wraps the image */}
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
