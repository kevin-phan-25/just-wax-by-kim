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
 * • Refined editorial spacing
 * • Simplified luxury presentation
 * • Improved visual hierarchy
 * • Matches About / FAQ / Policies architecture
 * • Mobile / iPad / desktop optimized
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

          bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.18),transparent_60%)]
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

          pb-20

          sm:pb-24

          md:pb-32
        "
      >




        {/* HEADER */}
        <header
          className="
            mx-auto

            flex

            max-w-5xl

            flex-col

            items-center

            text-center

            mb-12

            md:mb-14
          "
        >

          <p
            className="
              uppercase

              tracking-[0.4em]

              text-[11px]

              sm:text-xs

              text-[#8C5A6B]
            "
          >
            {INSTAGRAM_CONFIG.eyebrow}
          </p>




          <h1
            className="
              mt-5

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.08]

              tracking-[-0.035em]

              text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h1>





          <p
            className="
              mt-5

              max-w-3xl

              text-sm

              sm:text-base

              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>


        </header>







        {/* INSTAGRAM GRID */}
        <div
          className="
            w-full
          "
        >
          <InstagramGrid />
        </div>







        {/* FOLLOW CTA */}
        <div
          className="
            mt-12

            sm:mt-14

            md:mt-16

            flex

            flex-col

            items-center

            gap-5
          "
        >


          <p
            className="
              uppercase

              tracking-[0.35em]

              text-[11px]

              sm:text-xs

              font-medium

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
