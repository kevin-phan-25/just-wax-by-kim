/**
 * ---
 * File: features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury editorial policy card.
 *
 * Updated:
 * • Unified text alignment
 * • Fixed paragraph indentation
 * • Improved readability
 *
 * ---
 */

import type { PolicySection } from "./policies.types";

interface Props {
  section: PolicySection;
}

export default function PolicySectionCard({ section }: Props) {
  return (
    <article
      className="
        w-full
        flex
        flex-col
        items-center
        border-t
        border-[#D8B4A0]/50
        pt-10
      "
    >

      {/* Title */}
      <h2
        className="
          text-center
          font-serif
          text-3xl
          md:text-4xl
          text-[#3B2A26]
        "
      >
        {section.title}
      </h2>


      {/* Divider */}
      <div
        className="
          mt-5
          h-px
          w-16
          bg-[#D8B4A0]
        "
      />



      {/* Content Wrapper */}
      <div
        className="
          mt-8
          w-full
          max-w-xl
          text-left
        "
      >

        {section.intro && (
          <p
            className="
              text-base
              leading-8
              text-[#6F5A50]
            "
          >
            {section.intro}
          </p>
        )}



        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph.slice(0,32)}
            className="
              mt-5
              text-base
              leading-8
              text-[#6F5A50]
            "
          >
            {paragraph}
          </p>
        ))}



        {section.note && (
          <p
            className="
              mt-8
              text-base
              italic
              leading-8
              text-[#8C7468]
            "
          >
            {section.note}
          </p>
        )}

      </div>

    </article>
  );
}
