/**
 * -----------------------------------------------------------------------------
 * File:
 * features/instagram/Instagram.tsx
 *
 * Description:
 * Standalone luxury Instagram presentation.
 *
 * Updated:
 * • Matched standalone page spacing system
 * • Added navbar transition spacer
 * • Removed width restrictions
 * • Preserved centered editorial styling
 * • Full-width Instagram presentation
 *
 * -----------------------------------------------------------------------------
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
        w-full
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
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



      {/* Navbar transition spacer */}
      <div
        className="
          h-[216px]
        "
      />



      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          text-center
        "
      >



        {/* HEADER */}
        <header
          className="
            w-full
            mb-16
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



          <h1
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            {INSTAGRAM_CONFIG.title}
          </h1>



          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />



          <p
            className="
              mt-6
              text-lg
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
