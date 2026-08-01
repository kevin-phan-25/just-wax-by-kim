/**
 * ---
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Standalone luxury FAQ presentation.
 *
 * Updates:
 * • Luxury spacing system
 * • Centered FAQ layout
 * • Responsive phone / tablet / desktop spacing
 * • Removed restrictive width behavior
 * • Improved editorial presentation
 * • Increased separation between questions
 *
 * ---
 */

import FAQAccordion from "./FAQAccordion";

import {
  FAQ_DATA,
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

      {/* Soft background atmosphere */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
        "
      />


      {/* Navbar clearance */}
      <div className="
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

          flex
          flex-col
          items-center
        "
      >


        {/* HEADER */}

        <header
          className="
            w-full

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

              leading-tight

              text-[#3B2A26]
            "
          >
            {FAQ_CONSTANTS.title}
          </h1>



          <p
            className="
              mt-10

              max-w-3xl

              text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {FAQ_CONSTANTS.subtitle}
          </p>


        </header>



        {/* FAQ LIST */}

        <div
          className="
            w-full

            max-w-5xl

            flex
            flex-col

            gap-8

            md:gap-10
          "
        >

          <FAQAccordion
            items={FAQ_DATA}
          />

        </div>


      </div>


    </section>

  );

}
