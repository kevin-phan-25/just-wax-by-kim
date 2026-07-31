/**
 * ---
 * File: features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Centered luxury policy section.
 *
 * Updated:
 * • Center aligned typography
 * • Improved spacing
 * • Editorial presentation
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
        text-center
        border-t
        border-[#D8B4A0]/50
        pt-12
        flex
        flex-col
        items-center
      "
    >


      {/* TITLE */}
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
          mt-6
          h-px
          w-16
          bg-[#D8B4A0]
        "
      />



      {section.intro && (
        <p
          className="
            mt-8
            max-w-4xl
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
            max-w-4xl
            text-base
            leading-8
            text-[#6F5A50]
          "
        >
          {paragraph}
        </p>
      ))}



      {section.bullets && (
        <ul
          className="
            mt-8
            max-w-4xl
            flex
            flex-col
            items-center
            gap-4
          "
        >

          {section.bullets.map((bullet) => (
            <li
              key={bullet.slice(0,32)}
              className="
                flex
                items-start
                justify-center
                gap-3
                text-center
                text-base
                leading-8
                text-[#6F5A50]
              "
            >

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

              <span>
                {bullet}
              </span>

            </li>
          ))}

        </ul>
      )}



      {section.note && (
        <p
          className="
            mt-8
            max-w-4xl
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
