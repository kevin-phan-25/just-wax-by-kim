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
 * • Removed max width restriction
 * • Added 3-column editorial layout
 * • Added centered section titles spanning columns
 * • Improved luxury spacing
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

  {/* Background */}
  <div
    aria-hidden
    className="
      absolute
      inset-0
      pointer-events-none
      bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.35),transparent_65%)]
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
      xl:px-16

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

          max-w-4xl

          text-lg

          leading-relaxed

          text-[#8C7468]
        "
      >
        {FAQ_CONSTANTS.subtitle}
      </p>


    </header>





    {/* ============================
        BEFORE WAXING
    ============================ */}


    <div
      className="
        mb-28
      "
    >

      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-3

          items-center

          mb-14
        "
      >

        <div />

        <h2
          className="
            col-span-1
            md:col-span-2

            text-center

            font-serif

            text-3xl
            md:text-4xl

            text-[#3B2A26]
          "
        >
          Before Your Wax
        </h2>


      </div>



      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-8

          w-full
        "
      >

        <div />

        <div>

          <FAQAccordion
            items={BEFORE_WAXING_FAQ}
          />

        </div>


        <div />


      </div>


    </div>







    {/* ============================
        AFTER CARE
    ============================ */}


    <div>


      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-3

          items-center

          mb-14
        "
      >

        <div />


        <h2
          className="
            col-span-1
            md:col-span-2

            text-center

            font-serif

            text-3xl
            md:text-4xl

            text-[#3B2A26]
          "
        >
          Caring For Your Skin
        </h2>


      </div>




      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-8

          w-full
        "
      >

        <div />


        <div>

          <FAQAccordion
            items={AFTER_WAX_CARE_FAQ}
          />

        </div>


        <div />


      </div>


    </div>



  </div>


</section>

);

}
