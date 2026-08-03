/**
 *
 * ---
 * File:
 * features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury editorial policy section.
 *
 * Updates:
 * • Unified brand typography
 * • Matched About / FAQ / Privacy styling
 * • Removed mixed font appearance
 * • Refined spacing rhythm
 * • Preserved responsive behavior
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
    <article
      className="
        w-full
      "
    >


      {/* TITLE */}
      <h2
        className="
          font-serif

          text-2xl
          sm:text-3xl
          md:text-4xl

          leading-tight

          tracking-[-0.025em]

          text-[#3B2A26]
        "
      >
        {section.title}
      </h2>





      {/* INTRO */}
      {section.intro && (

        <p
          className="
            mt-5
            sm:mt-6

            font-sans

            text-sm
            sm:text-base
            md:text-lg

            leading-[1.85]

            tracking-[0.01em]

            text-[#6F5A50]
          "
        >
          {section.intro}
        </p>

      )}






      {/* PARAGRAPHS */}
      {section.paragraphs?.map((paragraph) => (

        <p
          key={paragraph.slice(0,32)}

          className="
            mt-5

            font-sans

            text-sm
            sm:text-base
            md:text-lg

            leading-[1.85]

            tracking-[0.01em]

            text-[#6F5A50]
          "
        >
          {paragraph}
        </p>

      ))}







      {/* BULLET LIST */}
      {section.bullets && (

        <ul
          className="
            mt-7

            space-y-4
          "
        >

          {section.bullets.map((bullet)=>(

            <li
              key={bullet.slice(0,32)}

              className="
                flex

                items-start

                gap-3

                font-sans

                text-sm
                sm:text-base
                md:text-lg

                leading-[1.8]

                tracking-[0.01em]

                text-[#6F5A50]
              "
            >


              {/* SUBTLE ACCENT */}
              <span
                className="
                  mt-1

                  shrink-0

                  font-serif

                  text-base

                  text-[#8C5A6B]
                "
              >
                ♡
              </span>




              <span>
                {bullet}
              </span>


            </li>

          ))}

        </ul>

      )}






      {/* NOTE */}
      {section.note && (

        <p
          className="
            mt-7

            font-sans

            text-sm
            sm:text-base

            italic

            leading-[1.85]

            tracking-[0.01em]

            text-[#8C7468]
          "
        >
          {section.note}
        </p>

      )}



    </article>
  );
}
