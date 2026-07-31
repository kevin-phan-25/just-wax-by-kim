/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/Instagram.tsx
 *
 * Description:
 * Luxury studio glimpse — centered editorial layout.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Restored editorial width control
 * • Centered all typography
 * • Reduced oversized gallery appearance
 * • Maintained luxury spacing
 * -----------------------------------------------------------------------------
 */

import { INSTAGRAM_CONFIG } from "./instagram.constants";
import InstagramGrid from "./InstagramGrid";
import FollowButton from "./FollowButton";

export default function Instagram() {
  return (
    <section
      className="
        px-6
        py-24
        md:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          text-center
        "
      >
        {/* HEADER */}
        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <span
            className="
              inline-block
              text-[0.68rem]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#8C5A6B]
            "
          >
            {INSTAGRAM_CONFIG.eyebrow}
          </span>

          <div
            className="
              mx-auto
              my-6
              h-px
              w-12
              bg-[#D4A9B6]
            "
          />

          <h2
            className="
              text-[clamp(2rem,4vw,3.25rem)]
              font-medium
              leading-[1.1]
              tracking-[-0.035em]
              text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-center
              text-[1.05rem]
              leading-[1.9]
              text-[#6F5A50]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>
        </div>


        {/* IMAGE GRID */}
        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            md:mt-16
          "
        >
          <InstagramGrid />
        </div>


        {/* CTA */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-5
          "
        >
          <p
            className="
              text-center
              text-[0.7rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#9A857A]
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
