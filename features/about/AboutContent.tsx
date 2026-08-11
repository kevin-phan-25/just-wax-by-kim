/**
 * -----------------------------------------------------------------------------
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
 * • Places eyebrow between title and description
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        w-full
        px-5
        pt-6
        sm:px-8
        sm:pt-12
        md:px-10
        md:pt-16
        lg:px-16
        xl:px-24
        xl:pt-20
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          md:gap-12
          lg:grid-cols-3
          lg:gap-16
        "
      >
        {/* HEADER */}
        <header
          className="
            col-span-1
            mb-4
            flex
            flex-col
            items-center
            text-center
            md:col-span-2
            md:mb-12
            lg:col-span-3
          "
        >
          {/* TITLE */}
          <h2
            className="
              w-full
              max-w-6xl
              font-serif
              text-4xl
              leading-[1.05]
              tracking-[-0.045em]
              text-[#3B2A26]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {aboutContent.title}
          </h2>

          {/* EYEBROW */}
          <span
            className="
              mt-4
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-[#8C5A6B]
              sm:mt-7
              sm:text-xs
              md:mt-8
            "
          >
            {aboutContent.eyebrow}
          </span>
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
            w-full
            text-center
            text-base
            leading-[1.9]
            text-[#75635B]
            md:col-span-1
            md:text-left
            md:text-lg
            lg:col-span-2
            lg:text-xl
            sm:text-lg
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
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
        </div>
      </div>
    </article>
  );
}

