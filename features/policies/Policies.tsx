/**
 * ---
 * File: features/policies/Policies.tsx
 *
 * Description:
 * Luxury editorial policies presentation.
 *
 * Updated:
 * • Maintained 2-column editorial grid
 * • Centered all content
 * • Centered closing message
 * • Matched FAQ / Contact / Gallery spacing system
 * • Full-width luxury layout
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
          flex
          flex-col
          items-center
          text-center
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
              mx-auto
              mt-10
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mx-auto
              mt-10
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
              mx-auto
              mt-6
              max-w-4xl
              text-base
              leading-relaxed
              text-[#8C7468]
            "
          >
            {POLICIES_CONSTANTS.contactNote}
          </p>

        </header>



        {/* POLICY GRID */}
        <div
          className="
            mt-24
            grid
            w-full
            grid-cols-1
            gap-16
            lg:grid-cols-2
          "
        >

          {POLICIES_DATA.map((section) => (
            <PolicySectionCard
              key={section.id}
              section={section}
            />
          ))}

        </div>



        {/* CLOSING MESSAGE */}
        <div
          className="
            mt-32
            w-full
            flex
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
