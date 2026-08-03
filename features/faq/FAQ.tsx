/**
 *
 * ---
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Luxury editorial FAQ presentation.
 *
 * Updates:
 * • Removed card-based layout feeling
 * • Editorial divider FAQ system
 * • Simplified luxury spacing
 * • Responsive mobile / iPad / desktop layout
 * • Improved readability
 * • Balanced FAQ columns
 * • Matches brand design system
 *
 * ---
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
            mx-auto

            max-w-5xl

            text-center

            mb-14

            sm:mb-16

            md:mb-20
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

              mx-auto

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




        {/* FAQ CONTENT */}
        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-2

            gap-12

            lg:gap-20

            xl:gap-24

            mx-auto

            max-w-7xl
          "
        >


          {/* BEFORE WAX */}
          <section
            className="
              w-full
            "
          >

            <h2
              className="
                mb-8

                sm:mb-10

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


            <FAQAccordion
              items={BEFORE_WAXING_FAQ}
            />

          </section>





          {/* AFTER WAX CARE */}
          <section
            className="
              w-full
            "
          >

            <h2
              className="
                mb-8

                sm:mb-10

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


            <FAQAccordion
              items={AFTER_WAX_CARE_FAQ}
            />

          </section>


        </div>


      </div>


    </section>
  );
}
