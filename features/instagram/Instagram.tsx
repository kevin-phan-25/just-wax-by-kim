/**
 *
 * ---
 * File:
 * features/instagram/Instagram.tsx
 *
 * Description:
 * Standalone luxury Instagram presentation.
 *
 * Updates:
 * • Navbar clearance handled by app/(studio)/layout.tsx
 * • Phone / iPad / desktop optimization
 * • Full-width editorial layout
 * • Centered luxury typography
 * • Removed restrictive containers
 * • Preserved conversion CTA
 *
 * ---
 *
 */

import {
  INSTAGRAM_CONFIG,
} from "./instagram.constants";

import InstagramGrid from "./InstagramGrid";
import FollowButton from "./FollowButton";

export default function Instagram() {
  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FBF7F4]
      "
    >

      {/* AMBIENT BACKGROUND */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />



      {/* CONTENT */}
      <div
        className="
          relative

          z-10

          w-full

          px-5

          sm:px-8

          md:px-10

          lg:px-16

          xl:px-24

          pb-24

          md:pb-32
        "
      >


        {/* HEADER */}
        <header
          className="
            flex

            w-full

            flex-col

            items-center

            text-center

            mb-14

            md:mb-16
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              md:text-sm

              text-[#8C5A6B]
            "
          >
            {INSTAGRAM_CONFIG.eyebrow}
          </p>



          <h1
            className="
              mt-6

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-tight

              tracking-[-0.03em]

              text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h1>



          <p
            className="
              mt-6

              max-w-3xl

              text-base

              sm:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>

        </header>





        {/* INSTAGRAM GRID */}
        <div className="w-full">
          <InstagramGrid />
        </div>





        {/* FOLLOW CTA */}
        <div
          className="
            mt-14

            md:mt-16

            flex

            flex-col

            items-center

            gap-5

            md:gap-6
          "
        >

          <p
            className="
              uppercase

              tracking-[0.3em]

              text-xs

              font-semibold

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
