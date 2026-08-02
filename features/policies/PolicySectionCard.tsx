/**
 * ---
 * File:
 * features/policies/PolicySectionCard.tsx
 *
 * Description:
 * Luxury editorial policy card.
 *
 * Updates:
 * • Mobile-first typography
 * • Improved phone readability
 * • Reduced vertical spacing
 * • Responsive title scaling
 * • Refined heart bullet layout
 * • Preserved luxury editorial style
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

          leading-tight

          tracking-[-0.02em]

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
          key={paragraph.slice(0,32)}

          className="
            mt-4
            sm:mt-5

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






      {/* HEART LIST */}
      {section.bullets && (

        <ul
          className="
            mt-6
            sm:mt-8

            space-y-3
            sm:space-y-4
          "
        >

          {section.bullets.map((bullet)=>(

            <li
              key={bullet.slice(0,32)}

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


              {/* HEART ACCENT */}
              <span
                className="
                  mt-[0.2rem]

                  shrink-0

                  font-serif

                  text-base
                  sm:text-lg

                  text-[#8C5A6B]
                "
              >
                ♡
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
            mt-6
            sm:mt-8

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
