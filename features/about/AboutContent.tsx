/**
 *
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Preserved homepage editorial spacing
 * • Removed unnecessary page-level assumptions
 * • Three-cell editorial layout
 * • Responsive title scaling
 * • Balanced image/text composition
 * • Improved paragraph spacing
 * • Added final luxury slogan statement
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

        pt-10

        sm:pt-12

        md:pt-16

        xl:pt-20

        px-5

        sm:px-8

        md:px-10

        lg:px-16

        xl:px-24
      "
    >
      <div
        className="
          grid

          grid-cols-1

          md:grid-cols-2

          lg:grid-cols-3

          gap-10

          md:gap-12

          lg:gap-16
        "
      >

        {/* HEADER */}
        <header
          className="
            col-span-1

            md:col-span-2

            lg:col-span-3

            flex

            flex-col

            items-center

            text-center

            mb-6

            md:mb-12
          "
        >
          <span
            className="
              uppercase

              tracking-[0.45em]

              text-[10px]

              sm:text-xs

              text-[#8C5A6B]

              mb-5
            "
          >
            {aboutContent.eyebrow}
          </span>

          <h2
            className="
              w-full

              max-w-6xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              lg:text-7xl

              leading-[1.05]

              tracking-[-0.045em]

              text-[#3B2A26]
            "
          >
            {aboutContent.title}
          </h2>
        </header>


        {/* IMAGE CELL */}
        <div
          className="
            w-full

            lg:col-span-1
          "
        >
          <AboutImage />
        </div>


        {/* TEXT CONTENT */}
        <div
          className="
            md:col-span-1

            lg:col-span-2

            w-full

            text-center

            md:text-left

            text-[#75635B]

            text-base

            sm:text-lg

            md:text-xl

            leading-[1.9]
          "
        >
          <div
            className="
              flex

              flex-col

              gap-8

              sm:gap-10

              md:gap-12
            "
          >

            {aboutContent.description.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="
                    tracking-[0.015em]
                  "
                >
                  {paragraph}
                </p>
              )
            )}


            {/* FINAL SLOGAN */}
            {aboutContent.slogan && (
              <p
                className="
                  pt-4

                  text-[#3B2A26]

                  font-semibold

                  tracking-[0.025em]
                "
              >
                {aboutContent.slogan}
              </p>
            )}

          </div>
        </div>

      </div>
    </article>
  );
}
