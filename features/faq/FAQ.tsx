/**
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Standalone luxury FAQ presentation.
 *
 * Updates:
 * • Matched luxury spacing system
 * • Removed divider accents
 * • Centered editorial layout
 * • Improved question breathing room
 * • Responsive phone / iPad / desktop layout
 * • Removed unnecessary width restrictions
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


      {/* Ambient Background */}

      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
        "
      />



      {/* Navbar Clearance */}

      <div
        className="
          h-[190px]

          md:h-[210px]
        "
      />




      {/* CONTENT */}

      <div
        className="
          relative

          z-10

          w-full

          px-5
          md:px-8

          pb-32
          md:pb-40

          flex

          flex-col

          items-center
        "
      >



        {/* HEADER */}

        <header
          className="
            w-full

            max-w-4xl

            mb-16
            md:mb-20

            flex

            flex-col

            items-center

            text-center
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
            Helpful Information
          </p>



          <h1
            className="
              mt-7

              font-serif

              text-4xl

              md:text-5xl

              lg:text-6xl

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

              text-base

              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {FAQ_CONSTANTS.subtitle}
          </p>


        </header>





        {/* FAQ CONTENT */}

        <div
          className="
            w-full

            max-w-4xl
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
