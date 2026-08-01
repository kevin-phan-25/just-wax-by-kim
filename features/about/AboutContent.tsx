/**
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Three column editorial grid
 * • Centered title spanning full width
 * • Improved paragraph spacing
 * • Responsive mobile/tablet/desktop
 *
 * ---
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        w-full

        px-5
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-20
      "
    >

      {/* TITLE - SPANS ALL CELLS */}
      <header
        className="
          w-full

          text-center

          mb-16
          md:mb-24
        "
      >

        <span
          className="
            block

            uppercase

            tracking-[0.45em]

            text-[10px]
            sm:text-xs

            text-[#8C5A6B]

            mb-6
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            mx-auto

            max-w-7xl

            font-serif

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl

            leading-[1.05]

            tracking-[-0.04em]

            whitespace-normal

            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>

      </header>



      {/* 3 CELL GRID */}
      <div
        className="
          grid

          grid-cols-1

          lg:grid-cols-3

          gap-10
          lg:gap-14

          items-start
        "
      >


        {/* CELL 1 */}
        <div
          className="
            w-full
          "
        >
          <AboutImage />
        </div>



        {/* CELL 2 + CELL 3 */}
        <div
          className="
            lg:col-span-2

            w-full

            text-center
            lg:text-left

            text-[#75635B]

            text-base
            sm:text-lg
            md:text-xl

            leading-[1.9]
          "
        >

          {aboutContent.description.map(
            (paragraph, index) => (
              <p
                key={index}
                className="
                  mb-8
                  sm:mb-10
                  md:mb-12

                  tracking-[0.015em]
                "
              >
                {paragraph}
              </p>
            )
          )}



          {/* Closing statement */}
          <p
            className="
              mt-12
              md:mt-16

              font-serif

              text-2xl
              sm:text-3xl
              md:text-4xl

              leading-snug

              text-[#3B2A26]
            "
          >
            Confidence begins with feeling beautifully cared for.
          </p>


        </div>


      </div>


    </article>
  );
}
