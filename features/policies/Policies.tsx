/**
 * ---
 * File:
 * features/policies/Policies.tsx
 *
 * Description:
 * Luxury editorial policies presentation.
 *
 * Updates:
 * • Matched FAQ spacing system
 * • Removed manual navbar spacer
 * • Unified section padding
 * • Responsive phone / iPad / desktop spacing
 * • Preserved editorial desktop grid
 * • Removed divider accents
 *
 * ---
 */

import PolicySectionCard from "./PolicySectionCard";
import { POLICIES_CONSTANTS } from "./policies.constants";
import { POLICIES_DATA } from "./policies.data";

export default function Policies() {
  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FBF7F4]

        pt-[168px]

        md:pt-[190px]

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
            {POLICIES_CONSTANTS.eyebrow}
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
            {POLICIES_CONSTANTS.title}
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
            {POLICIES_CONSTANTS.subtitle}
          </p>



          <p
            className="
              mt-4

              max-w-2xl

              text-sm

              sm:text-base

              leading-relaxed

              text-[#8C7468]
            "
          >
            {POLICIES_CONSTANTS.contactNote}
          </p>


        </header>





        {/* DESKTOP EDITORIAL GRID */}
        <div
          className="
            mt-0

            hidden

            xl:grid

            w-full

            grid-cols-[0.3fr_1.7fr_0.15fr_1.7fr_0.3fr]

            gap-x-8

            gap-y-24
          "
        >

          {POLICIES_DATA.map(
            (section,index)=>(
              <div
                key={section.id}
                className={
                  index % 2 === 0
                    ? "col-start-2"
                    : "col-start-4"
                }
              >

                <PolicySectionCard
                  section={section}
                />

              </div>
            )
          )}

        </div>





        {/* TABLET + MOBILE */}
        <div
          className="
            mt-0

            grid

            grid-cols-1

            md:grid-cols-2

            gap-8

            sm:gap-12

            xl:hidden
          "
        >

          {POLICIES_DATA.map(
            (section)=>(
              <PolicySectionCard
                key={section.id}
                section={section}
              />
            )
          )}

        </div>





        {/* CLOSING */}
        <div
          className="
            mt-16

            sm:mt-24

            md:mt-32

            flex

            w-full

            justify-center

            text-center
          "
        >

          <p
            className="
              max-w-3xl

              text-base

              sm:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {POLICIES_CONSTANTS.closing}
          </p>

        </div>


      </div>


    </section>
  );
}
