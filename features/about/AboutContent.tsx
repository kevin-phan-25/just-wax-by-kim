/**
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Responsive luxury editorial layout.
 *
 * Updates:
 * • Three cell desktop grid
 * • Tablet adaptation
 * • Mobile stacking
 * • Centered title
 * • Proper paragraph spacing
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


        {/* TITLE SPANS ALL CELLS */}
        <header
          className="
            col-span-1

            md:col-span-2

            lg:col-span-3

            flex

            flex-col

            items-center

            justify-center

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

              sm:mb-7
            "
          >
            {aboutContent.eyebrow}
          </span>


          <h2
            className="
              w-full

              text-center

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



        {/* CELL 1 */}
        <div
          className="
            w-full

            md:col-span-1

            lg:col-span-1
          "
        >
          <AboutImage />
        </div>




        {/* CONTENT CELLS 2 + 3 */}
        <div
          className="
            md:col-span-1

            lg:col-span-2

            w-full

            flex

            flex-col

            justify-center

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

          </div>


          <p
            className="
              mt-10

              sm:mt-14

              font-serif

              text-2xl

              sm:text-3xl

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
