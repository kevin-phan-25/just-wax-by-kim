/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/Instagram.tsx
 *
 * Description:
 * Luxury studio glimpse section — fully centered.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Centered header, grid, and CTA
 * • No full-bleed width forcing a 4-column strip
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
        lg:py-32
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.2),transparent_55%)]
        "
      />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="text-center">
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
              mx-auto mt-6 max-w-md
              text-[1.05rem] leading-[1.9] text-[#6F5A50]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="mt-14 md:mt-16">
          <InstagramGrid />
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 md:mt-14">
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
