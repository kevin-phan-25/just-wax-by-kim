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
 * • Removed navbar clearance responsibility
 * • Navbar spacing handled by studio layout
 * • Unified luxury spacing system
 * • Added 4-cell editorial grid
 * • Mobile / iPad / desktop optimization
 * • Balanced FAQ columns
 * • Removed divider accents
 * • Matches brand layout system
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
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FBF7F4]

        pb-20

        sm:pb-24

        md:pb-32
      "
    >

      {/* Ambient Background */}
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
        "
      >


        {/* HEADER */}
        <header
          className="
            flex

            flex-col

            items-center

            text-center

            mb-16

            md:mb-24
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              sm:text-sm

              text-[#8C5A6B]
            "
          >
            Helpful Information
          </p>



          <h1
            className="
              mt-6

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.1]

              tracking-[-0.035em]

              text-[#3B2A26]
            "
          >
            {FAQ_CONSTANTS.title}
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
            {FAQ_CONSTANTS.subtitle}
          </p>


        </header>





        {/* FOUR CELL EDITORIAL GRID */}
        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-[0.75in_1fr_1fr_0.75in]

            gap-y-14

            lg:gap-x-10

            w-full

            items-start
          "
        >


          {/* LEFT BREATHING SPACE */}
          <div
            className="
              hidden

              lg:block
            "
          />




          {/* BEFORE WAX */}
          <div
            className="
              w-full

              flex

              flex-col

              items-center

              px-2

              sm:px-6
            "
          >

            <h2
              className="
                mb-10

                text-center

                font-serif

                text-3xl

                md:text-4xl

                leading-tight

                text-[#3B2A26]
              "
            >
              Before Your Wax
            </h2>



            <div
              className="
                w-full

                max-w-xl
              "
            >
              <FAQAccordion
                items={BEFORE_WAXING_FAQ}
              />
            </div>


          </div>






          {/* AFTER WAX CARE */}
          <div
            className="
              w-full

              flex

              flex-col

              items-center

              px-2

              sm:px-6
            "
          >

            <h2
              className="
                mb-10

                text-center

                font-serif

                text-3xl

                md:text-4xl

                leading-tight

                text-[#3B2A26]
              "
            >
              Caring For Your Skin
            </h2>



            <div
              className="
                w-full

                max-w-xl
              "
            >
              <FAQAccordion
                items={AFTER_WAX_CARE_FAQ}
              />
            </div>


          </div>





          {/* RIGHT BREATHING SPACE */}
          <div
            className="
              hidden

              lg:block
            "
          />


        </div>


      </div>


    </section>
  );
}
