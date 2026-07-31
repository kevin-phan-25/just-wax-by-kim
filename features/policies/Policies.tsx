/**
 * ---
 * File: features/policies/Policies.tsx
 *
 * Description:
 * Luxury editorial policies presentation.
 *
 * Updated:
 * • Full-width editorial layout
 * • Removed content width restrictions
 * • Premium spacing system
 * • Improved client-focused presentation
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

      {/* Navbar Transition */}
      <div className="h-[216px]" />


      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          pb-40
        "
      >

        {/* Header */}
        <header
          className="
            mx-auto
            w-full
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



        {/* Policies */}
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



        {/* Closing */}
        <div
          className="
            mx-auto
            mt-32
            w-full
            text-center
          "
        >

          <div
            className="
              mx-auto
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
