/**
 *
 * ---
 * File:
 * features/instagram/Instagram.tsx
 *
 * Description:
 * Luxury Instagram journey presentation.
 *
 * Updates:
 * • Shifted from gallery showcase to brand story
 * • Added editorial storytelling spacing
 * • Optimized collage presentation
 * • Mobile / iPad / desktop responsive
 * • Preserved luxury brand system
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

      bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.22),transparent_60%)]
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

      sm:pb-28

      md:pb-36
    "
  >





    {/* HEADER */}
    <header
      className="
        mx-auto

        flex

        max-w-4xl

        flex-col

        items-center

        text-center

        mb-14

        sm:mb-16

        md:mb-20
      "
    >


      <p
        className="
          uppercase

          tracking-[0.45em]

          text-[11px]

          sm:text-xs

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

          sm:text-5xl

          md:text-6xl

          leading-[1.05]

          tracking-[-0.04em]

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








    {/* JOURNEY COLLAGE */}
    <div
      className="
        mx-auto

        w-full

        max-w-6xl
      "
    >

      <InstagramGrid />

    </div>









    {/* FOLLOW CTA */}
    <div
      className="
        mt-16

        sm:mt-20

        md:mt-24

        flex

        flex-col

        items-center

        gap-6
      "
    >



      <p
        className="
          uppercase

          tracking-[0.4em]

          text-[11px]

          sm:text-xs

          font-medium

          text-[#9A857A]
        "
      >
        Stay connected with our latest moments
      </p>





      <FollowButton />



    </div>



  </div>


</section>

);

}
