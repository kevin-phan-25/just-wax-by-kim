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
 * • Removed playful heart styling
 * • Added refined luxury accents
 * • Improved editorial spacing
 * • Enhanced typography hierarchy
 * • Improved mobile readability
 * • Preserved responsive behavior
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

            sm:mt-7

            text-sm

            sm:text-base

            leading-7

            sm:leading-8

            text-[#6F5A50]
          "
        >
          {section.intro}
        </p>
      )}





      {/* PARAGRAPHS */}
      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="
            mt-5

            sm:mt-6

            text-sm

            sm:text-base

            leading-7

            sm:leading-8

            text-[#6F5A50]
          "
        >
          {paragraph}
        </p>
      ))}






      {/* EDITORIAL LIST */}
      {section.bullets && (
        <ul
          className="
            mt-7

            sm:mt-8

            space-y-4

            sm:space-y-5
          "
        >
          {section.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 32)}
              className="
                flex

                items-start

                gap-3

                sm:gap-4

                text-sm

                sm:text-base

                leading-7

                sm:leading-8

                text-[#6F5A50]
              "
            >

              {/* LUXURY ACCENT */}
              <span
                className="
                  mt-[0.45rem]

                  shrink-0

                  text-[10px]

                  sm:text-xs

                  text-[#8C5A6B]
                "
              >
                ✦
              </span>



              {/* TEXT */}
              <span
                className="
                  flex-1
                "
              >
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

            sm:mt-9

            text-sm

            sm:text-base

            italic

            leading-7

            sm:leading-8

            text-[#8C7468]
          "
        >
          {section.note}
        </p>
      )}

    </article>
  );
}
