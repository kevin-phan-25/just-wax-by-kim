/**
 * ---
 * File: features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury editorial policy card.
 *
 * Updated:
 * • Left aligned body content
 * • Consistent text starting point
 * • Editorial magazine styling
 *
 * ---
 */

import type { PolicySection } from "./policies.types";

interface Props {
  section: PolicySection;
}

export default function PolicySectionCard({
  section,
}: Props) {
  return (
    <article
      className="
        w-full
        text-left
        border-t
        border-[#D8B4A0]/50
        pt-10
      "
    >

      {/* Title */}
      <h2
        className="
          font-serif
          text-3xl
          leading-tight
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



      {/* Content */}
      <div
        className="
          mt-8
          text-base
          leading-8
          text-[#6F5A50]
        "
      >

        {section.intro && (
          <p>
            {section.intro}
          </p>
        )}



        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph.slice(0,32)}
            className="
              mt-5
            "
          >
            {paragraph}
          </p>
        ))}



        {section.note && (
          <p
            className="
              mt-8
              italic
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
