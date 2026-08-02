/**
 * ---
 * File:
 * features/policies/Policies.tsx
 *
 * Description:
 * Luxury editorial policies presentation.
 *
 * Updates:
 * • Mobile-first editorial layout
 * • Improved phone readability
 * • Reduced excessive spacing
 * • Responsive typography scaling
 * • Preserved desktop 5-column editorial layout
 * • Balanced tablet/mobile stacking
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
        w-full
        bg-[#FBF7F4]
      "
    >

      {/* Navbar Transition Spacer */}
      <div
        className="
          h-[140px]
          sm:h-[170px]
          md:h-[216px]
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
          xl:px-16

          pb-20
          sm:pb-28
          md:pb-40
        "
      >


        {/* HEADER */}
        <header
          className="
            flex
            w-full
            flex-col
            items-center
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[0.35em]

              text-[11px]
              sm:text-xs

              text-[#8C5A6B]
            "
          >
            {POLICIES_CONSTANTS.eyebrow}
          </p>


          <h1
            className="
              mt-6

              font-serif

              text-3xl
              sm:text-4xl
              md:text-6xl
              xl:text-7xl

              leading-[1.1]

              tracking-[-0.03em]

              text-[#3B2A26]
            "
          >
            {POLICIES_CONSTANTS.title}
          </h1>


          <p
            className="
              mt-6
              sm:mt-8

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
              sm:mt-6

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
            mt-20
            xl:mt-24

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
            mt-14
            sm:mt-20

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
