/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/Instagram.tsx
 *
 * Description:
 * Luxury studio glimpse — full-width layout, centered text.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Removed max-w-3xl container so grid can span full width
 * • Header/CTA stay centered; grid uses entire space
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
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.2),transparent_55%)]
        "
      />

      <div className="relative w-full">
        {/* Header — centered */}
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
              mx-auto mt-6 max-w-md
              text-[1.05rem] leading-[1.9] text-[#6F5A50]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>
        </div>

        {/* Full-width 2×2 grid */}
        <div className="mt-14 w-full md:mt-16">
          <InstagramGrid />
        </div>

        {/* CTA — centered */}
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
