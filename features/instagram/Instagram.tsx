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
 * • Removed restrictive text sizing
 * • Centered all content
 * • Improved editorial spacing
 * • Full width luxury layout
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
          w-full

          text-center
        "
      >

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
          {INSTAGRAM_CONFIG.eyebrow}
        </span>


        <h2
          className="
            mt-6

            text-center

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


        <p
          className="
            mt-6

            mx-auto

            text-center

            text-base
            md:text-lg

            leading-relaxed

            text-[#6F5A50]
          "
        >
          {INSTAGRAM_CONFIG.description}
        </p>


        <div
          className="
            mt-16
          "
        >
          <InstagramGrid />
        </div>


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
