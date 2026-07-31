/**
 * ---
 * File: features/policies/Policies.tsx
 *
 * Description:
 * Luxury editorial policies presentation.
 *
 * Updated:
 * • Reduced empty spacer columns
 * • Expanded policy content columns
 * • 4-column editorial magazine layout
 * • Responsive mobile fallback
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
        overflow-hidden
        bg-[#FAF7F3]
      "
    >

      {/* Navbar Transition Spacer */}
      <div className="h-[216px]" />


      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          pb-40
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
              text-sm
              text-[#8C5A6B]
            "
          >
            {POLICIES_CONSTANTS.eyebrow}
          </p>


          <h1
            className="
              mt-8
              font-serif
              text-5xl
              md:text-7xl
              leading-tight
              text-[#3B2A26]
            "
          >
            {POLICIES_CONSTANTS.title}
          </h1>


          <div
            className="
              mt-10
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mt-10
              mx-auto
              max-w-5xl
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {POLICIES_CONSTANTS.subtitle}
          </p>


          <p
            className="
              mt-6
              mx-auto
              max-w-4xl
              text-base
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
            mt-24

            hidden
            w-full

            grid
            grid-cols-[0.25fr_1.75fr_0.25fr_1.75fr]

            gap-x-8
            gap-y-24

            lg:grid
          "
        >

          {POLICIES_DATA.map((section, index) => (
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
          ))}

        </div>



        {/* MOBILE / TABLET */}
        <div
          className="
            mt-20

            grid
            grid-cols-1

            gap-20

            lg:hidden
          "
        >

          {POLICIES_DATA.map((section) => (
            <PolicySectionCard
              key={section.id}
              section={section}
            />
          ))}

        </div>



        {/* CLOSING */}
        <div
          className="
            mt-32
            flex
            w-full
            flex-col
            items-center
            text-center
          "
        >

          <div
            className="
              mb-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mx-auto
              max-w-5xl
              text-lg
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
