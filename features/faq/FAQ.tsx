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
 * • Removed width restrictions
 * • Added 2-column luxury layout
 * • Centered FAQ sections
 * • Improved desktop spacing
 * • Responsive mobile stacking
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
      absolute
      inset-0

      pointer-events-none

      bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.35),transparent_65%)]
    "
  />


  {/* Navbar clearance */}
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
      xl:px-20

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

        mb-24
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

          w-full

          text-lg

          leading-relaxed

          text-[#8C7468]
        "
      >
        {FAQ_CONSTANTS.subtitle}
      </p>


    </header>





    {/* FAQ TWO COLUMN GRID */}

    <div
      className="
        grid

        grid-cols-1

        lg:grid-cols-2

        gap-12
        xl:gap-20

        w-full
      "
    >



      {/* BEFORE WAX */}

      <div
        className="
          flex
          flex-col
          items-center

          w-full
        "
      >

        <h2
          className="
            mb-12

            text-center

            font-serif

            text-3xl
            md:text-4xl

            text-[#3B2A26]
          "
        >
          Before Your Wax
        </h2>



        <div
          className="
            w-full
          "
        >

          <FAQAccordion
            items={BEFORE_WAXING_FAQ}
          />

        </div>


      </div>





      {/* AFTER CARE */}

      <div
        className="
          flex
          flex-col
          items-center

          w-full
        "
      >

        <h2
          className="
            mb-12

            text-center

            font-serif

            text-3xl
            md:text-4xl

            text-[#3B2A26]
          "
        >
          Caring For Your Skin
        </h2>



        <div
          className="
            w-full
          "
        >

          <FAQAccordion
            items={AFTER_WAX_CARE_FAQ}
          />

        </div>


      </div>



    </div>


  </div>


</section>

);

}
