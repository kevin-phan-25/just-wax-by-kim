/**
 *
 * ---
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Luxury FAQ presentation.
 *
 * Updates:
 * • Split FAQ into two premium sections
 * • Before Waxing + After Care layout
 * • Balanced two-column design
 * • Responsive mobile stacking
 * • Centered luxury editorial presentation
 *
 * ---
 *
 */

import FAQAccordion from "./FAQAccordion";

import {
  BEFORE_WAXING_FAQ,
  AFTER_WAX_CARE_FAQ,
} from "./faq.data";

import {
  FAQ_CONSTANTS,
} from "./faq.constants";


export default function FAQ() {

return (

<section
  id="faq"
  className="
    relative
    w-full
    min-h-screen
    overflow-hidden
    bg-[#FCF8F3]
  "
>

  {/* Background atmosphere */}
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
    "
  />


  {/* Navbar spacing */}
  <div
    className="
      h-[216px]
      md:h-[230px]
    "
  />



  <div
    className="
      relative
      z-10

      w-full

      px-6
      md:px-10
      lg:px-16

      pb-40
    "
  >


    {/* HEADER */}

    <header
      className="
        flex
        flex-col
        items-center
        text-center

        mb-20
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
        Helpful Information
      </p>


      <h1
        className="
          mt-8

          font-serif

          text-4xl
          md:text-6xl

          text-[#3B2A26]
        "
      >
        {FAQ_CONSTANTS.title}
      </h1>


      <p
        className="
          mt-8

          max-w-3xl

          text-lg

          leading-relaxed

          text-[#8C7468]
        "
      >
        {FAQ_CONSTANTS.subtitle}
      </p>


    </header>





    {/* TWO FAQ CARDS */}

    <div
      className="
        mx-auto

        grid

        w-full

        max-w-7xl

        grid-cols-1

        lg:grid-cols-2

        gap-10
        lg:gap-14
      "
    >



      {/* BEFORE WAXING */}

      <div
        className="
          rounded-[40px]

          border
          border-[#E8DDD8]

          bg-[#FDF9F5]

          p-8
          md:p-12

          shadow-sm
        "
      >

        <div
          className="
            mb-12

            flex
            flex-col
            items-center

            text-center
          "
        >

          <span
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              text-[#8C5A6B]
            "
          >
            Preparation
          </span>


          <h2
            className="
              mt-5

              font-serif

              text-3xl
              md:text-4xl

              text-[#3B2A26]
            "
          >
            Before Your Wax
          </h2>


          <p
            className="
              mt-5

              max-w-md

              leading-relaxed

              text-[#8C7468]
            "
          >
            Everything you need to know before your appointment
            to ensure beautiful results and a comfortable experience.
          </p>

        </div>


        <FAQAccordion
          items={BEFORE_WAXING_FAQ}
        />

      </div>





      {/* AFTER CARE */}

      <div
        className="
          rounded-[40px]

          border
          border-[#E8DDD8]

          bg-[#FDF9F5]

          p-8
          md:p-12

          shadow-sm
        "
      >

        <div
          className="
            mb-12

            flex
            flex-col
            items-center

            text-center
          "
        >

          <span
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              text-[#8C5A6B]
            "
          >
            Aftercare
          </span>


          <h2
            className="
              mt-5

              font-serif

              text-3xl
              md:text-4xl

              text-[#3B2A26]
            "
          >
            Caring For Your Skin
          </h2>


          <p
            className="
              mt-5

              max-w-md

              leading-relaxed

              text-[#8C7468]
            "
          >
            Simple aftercare steps that help maintain
            smooth, healthy, radiant skin.
          </p>


        </div>


        <FAQAccordion
          items={AFTER_WAX_CARE_FAQ}
        />


      </div>



    </div>


  </div>


</section>

);

}
