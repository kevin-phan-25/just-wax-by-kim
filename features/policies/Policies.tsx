/**
 * -----------------------------------------------------------------------------
 * File: features/policies/Policies.tsx
 *
 * Description:
 * Standalone luxury policies presentation.
 *
 * Updated:
 * • Matched FAQ / Contact / Gallery spacing system
 * • Navbar transition spacer
 * • Full-width, centered editorial layout
 * -----------------------------------------------------------------------------
 */

import PolicySectionCard from "./PolicySectionCard";
import { POLICIES_CONSTANTS } from "./policies.constants";
import { POLICIES_DATA } from "./policies.data";

export default function Policies() {
  return (
    <section
      id="policies"
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
            mb-20
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
              text-4xl
              md:text-6xl
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
              mt-10
              mx-auto
              max-w-3xl
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
              max-w-3xl
              text-base
              leading-relaxed
              text-[#8C7468]
            "
          >
            {POLICIES_CONSTANTS.contactNote}
          </p>
        </header>

        {/* POLICY SECTIONS */}
        <div
          className="
            mt-8
            w-full
            max-w-4xl
            flex
            flex-col
            gap-10
          "
        >
          {POLICIES_DATA.map((section) => (
            <PolicySectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* CLOSING */}
        <div
          className="
            mt-20
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div className="mx-auto mb-8 h-px w-24 bg-[#D8B4A0]" />
          <p className="text-lg leading-relaxed text-[#8C7468]">
            {POLICIES_CONSTANTS.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
