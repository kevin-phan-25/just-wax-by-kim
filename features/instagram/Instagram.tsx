/**
 * -----------------------------------------------------------------------------
 * File: Instagram.tsx
 *
 * Description:
 * Luxury social media showcase section.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Removed restrictive max-width feeling
 * • Full editorial layout
 * • Centered luxury typography
 * • Added better section spacing
 * • Integrated Instagram CTA
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
        bg-[#FCF8F3]

        px-6
        py-28

        md:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          text-center
        "
      >
        {/* Eyebrow */}
        <span
          className="
            inline-block

            uppercase
            tracking-[0.35em]

            text-xs
            font-semibold

            text-[#D8B4A0]
          "
        >
          Social
        </span>


        {/* Title */}
        <h2
          className="
            mt-6

            text-4xl
            md:text-5xl
            lg:text-6xl

            font-medium

            tracking-[-0.04em]

            text-[#3B2A26]
          "
        >
          {INSTAGRAM_CONFIG.title}
        </h2>


        {/* Description */}
        <p
          className="
            mx-auto

            mt-6

            max-w-2xl

            text-base
            md:text-lg

            leading-relaxed

            text-[#6F5A50]
          "
        >
          {INSTAGRAM_CONFIG.description}
        </p>


        {/* Gallery */}
        <div
          className="
            mt-16
            lg:mt-20
          "
        >
          <InstagramGrid />
        </div>


        {/* CTA */}
        <div
          className="
            mt-14

            flex
            justify-center
          "
        >
          <FollowButton />
        </div>

      </div>
    </section>
  );
}
