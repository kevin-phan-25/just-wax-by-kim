/**
 * --------------------------------------------------------------------------
 * File:
 * features/instagram/Instagram.tsx
 *
 * Description:
 * Standalone luxury Instagram presentation.
 *
 * Changes:
 * • Converted from homepage section
 * • Added full-page editorial layout
 * • Added luxury ambient background
 * • Improved spacing rhythm
 * • Increased gallery presence
 *
 * --------------------------------------------------------------------------
 */

import {
  INSTAGRAM_CONFIG,
} from "./instagram.constants";

import InstagramGrid from "./InstagramGrid";
import FollowButton from "./FollowButton";


export default function Instagram() {

  return (

    <section
      id="instagram"
      className="
        relative

        overflow-hidden

        min-h-screen

        bg-[#FCF8F3]

        py-32
      "
    >

      {/* Ambient Background */}

      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.35),transparent_65%)]
        "
      />



      <div
        className="
          relative

          z-10

          mx-auto

          max-w-7xl

          px-6
        "
      >


        {/* HEADER */}

        <header
          className="
            mx-auto

            max-w-4xl

            text-center
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-sm

              text-[#8C5A6B]
            "
          >
            {INSTAGRAM_CONFIG.eyebrow}
          </p>



          <div
            className="
              mx-auto

              my-8

              h-px

              w-24

              bg-[#D8B4A0]
            "
          />



          <h1
            className="
              font-serif

              text-4xl

              md:text-6xl

              leading-tight

              text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h1>



          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-[#8C7468]
            "
          >
            {INSTAGRAM_CONFIG.description}
          </p>


        </header>





        {/* INSTAGRAM GRID */}

        <div
          className="
            mx-auto

            mt-20

            max-w-5xl
          "
        >

          <InstagramGrid />

        </div>





        {/* FOLLOW CTA */}

        <div
          className="
            mt-16

            flex

            flex-col

            items-center

            gap-6
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
