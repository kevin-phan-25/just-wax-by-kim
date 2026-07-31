/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/Instagram.tsx
 *
 * Description:
 * Luxury social / studio glimpse section.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Editorial centered header with thin dividers
 * • Calmer spacing and type scale
 * • Refined grid + follow CTA composition
 * -----------------------------------------------------------------------------
 */
import { INSTAGRAM_CONFIG } from "./instagram.constants";
import InstagramGrid from "./InstagramGrid";
import FollowButton from "./FollowButton";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="
        relative overflow-hidden
        bg-[#FCF8F3]
        px-6 py-24
        md:px-10 md:py-28
        lg:px-16 lg:py-32
      "
    >
      {/* Soft ambient */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.2),transparent_55%)]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              inline-block
              text-[0.68rem] font-semibold uppercase
              tracking-[0.32em] text-[#8C5A6B]
            "
          >
            {INSTAGRAM_CONFIG.eyebrow}
          </span>

          <div className="mx-auto my-6 h-px w-12 bg-[#D4A9B6]" />

          <h2
            className="
              text-[clamp(2rem,4vw,3.25rem)]
              font-medium leading-[1.1]
              tracking-[-0.035em] text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-lg
              text-[1.05rem] leading-[1.9] text-[#6F5A50]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 md:mt-20">
          <InstagramGrid />
        </div>

        {/* Handle + CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 md:mt-16">
          <p
            className="
              text-[0.7rem] font-semibold uppercase
              tracking-[0.28em] text-[#9A857A]
            "
          >
            {INSTAGRAM_CONFIG.handle}
          </p>
          <FollowButton />
        </div>
      </div>
    </section>
  );
}
