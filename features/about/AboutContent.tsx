/**
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Three cell editorial grid
 * • Image anchored left
 * • Content spans center + right
 * • Responsive phone/tablet/desktop
 * • Improved paragraph spacing
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

      {/* Header */}
      <header
        className="
          text-center

          max-w-5xl

          mx-auto

          mb-16
          md:mb-24
        "
      >

        <span
          className="
            block

            uppercase

            tracking-[0.45em]

            text-xs

            text-[#8C5A6B]

            mb-6
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            font-serif

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl

            leading-[1.08]

            tracking-[-0.04em]

            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>

      </header>




      {/* 3 CELL EDITORIAL GRID */}
      <div
        className="
          grid

          grid-cols-1

          lg:grid-cols-3

          gap-12

          lg:gap-16

          items-start
        "
      >


        {/* CELL 1 - IMAGE */}
        <div
          className="
            lg:col-span-1

            w-full
          "
        >

          <AboutImage />

        </div>





        {/* CELL 2 + CELL 3 - CONTENT */}
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

                  md:mb-12

                  tracking-[0.015em]
                "
              >
                {paragraph}
              </p>
            )
          )}



          <p
            className="
              mt-12

              md:mt-20

              font-serif

              text-3xl

              md:text-4xl

              lg:text-5xl

              leading-tight

              text-[#3B2A26]
            "
          >
            A journey built on passion,
            confidence, and making every
            client feel beautiful.
          </p>


        </div>


      </div>


    </article>
  );
}
