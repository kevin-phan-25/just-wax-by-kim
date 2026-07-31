/**
 * ---
 * File: features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury centered policy card.
 *
 * Updated:
 * • Maintained editorial grid layout
 * • Centered section presentation
 * • Fixed bullet alignment
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
        text-center
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
          md:text-4xl
          text-[#3B2A26]
        "
      >
        {section.title}
      </h2>


      {/* Divider */}
      <div
        className="
          mx-auto
          mt-5
          h-px
          w-16
          bg-[#D8B4A0]
        "
      />



      {/* Intro */}
      {section.intro && (
        <p
          className="
            mt-8
            max-w-xl
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
            max-w-xl
            text-base
            leading-8
            text-[#6F5A50]
          "
        >
          {paragraph}
        </p>
      ))}



      {/* Bullet List */}
      {section.bullets && (
        <ul
          className="
            mt-8
            mx-auto
            max-w-xl
            space-y-4
            text-left
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

              {/* Bullet */}
              <span
                className="
                  mt-3
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#8C5A6B]
                "
              />


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
            max-w-xl
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
