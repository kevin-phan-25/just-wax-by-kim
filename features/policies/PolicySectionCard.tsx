/**
 *
 * ---
 * File: features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury editorial policy card.
 *
 * Updated:
 * • Removed divider accents
 * • Added heart accent markers
 * • Maintained editorial grid alignment
 * • Improved boutique luxury presentation
 *
 * ---
 *
 */

import type { PolicySection } from "./policies.types";

interface Props {
  section: PolicySection;
}

export default function PolicySectionCard({
  section,
}: Props) {
  return (
    <article>

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


      {/* Intro */}
      {section.intro && (
        <p
          className="
            mt-8
            text-base
            leading-8
            text-[#6F5A50]
          "
        >
          {section.intro}
        </p>
      )}


      {/* Paragraphs */}
      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
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


      {/* Heart List */}
      {section.bullets && (
        <ul
          className="
            mt-8
            space-y-4
          "
        >
          {section.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 32)}
              className="
                flex
                items-start
                gap-4
                text-base
                leading-8
                text-[#6F5A50]
              "
            >
              {/* Heart Accent */}
              <span
                className="
                  mt-[0.35rem]
                  shrink-0
                  font-serif
                  text-lg
                  text-[#8C5A6B]
                "
              >
                ♡
              </span>


              {/* Text */}
              <span>
                {bullet}
              </span>

            </li>
          ))}
        </ul>
      )}


      {/* Note */}
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

    </article>
  );
}
