/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed overlay wording
 * • Removed View Pricing labels
 * • Expanded horizontal service cells
 * • Preserved original image size
 * • Blended card background with section
 * • Improved editorial spacing
 * • Uncropped images (full image visible)
 * • No white background on hover
 * • Centered all text
 * • Same navbar clearance as Hero (~¾ inch under nav)
 *
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";

export default function Services() {
  return (
    <section className="w-full bg-transparent">
      {/*
        Spacer = navbar height + 0.75in
        Matches Hero clearance under fixed nav
        nav: 110px → md 140px → xl 168px
      */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[calc(110px+0.75in)]
          md:h-[calc(140px+0.75in)]
          xl:h-[calc(168px+0.75in)]
        "
      />

      {/* HEADER */}
      <div className="w-full flex flex-col items-center text-center">
        <span
          className="
            block
            uppercase
            tracking-[0.4em]
            text-sm
            text-[#8C5A6B]
            text-center
          "
        >
          Our Services
        </span>

        <h2
          className="
            mt-6
            font-serif
            text-4xl
            md:text-5xl
            text-[#3B2A26]
            text-center
          "
        >
          Luxury Waxing For Everyone
        </h2>

        <p
          className="
            mt-6
            mx-auto
            max-w-3xl
            text-base
            md:text-lg
            leading-relaxed
            text-[#8C7468]
            text-center
          "
        >
          Thoughtfully curated waxing experiences that blend
          comfort, precision, and refined care for beautifully
          confident skin.
        </p>
      </div>

      {/* SERVICE OPTIONS */}
      <div
        className="
          mt-16
          grid
          md:grid-cols-2
          gap-10
          xl:gap-16
          w-full
          px-0
          place-items-center
        "
      >
        {/* LADIES */}
        <Link
          href="/services/ladies"
          className="
            group
            w-full
            flex
            justify-center
            py-4
            px-4
            md:px-8
            xl:px-10
            rounded-[36px]
            bg-transparent
            hover:bg-transparent
            transition-transform
            duration-500
          "
        >
          <div
            className="
              overflow-hidden
              rounded-[28px]
              w-full
              max-w-[480px]
              bg-transparent
            "
          >
            <img
              src="/images/services/ladies-view-pricing.jpg"
              alt="Ladies luxury waxing services"
              className="
                w-full
                h-auto
                object-contain
                bg-transparent
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>
        </Link>

        {/* GENTLEMEN */}
        <Link
          href="/services/gentlemen"
          className="
            group
            w-full
            flex
            justify-center
            py-4
            px-4
            md:px-8
            xl:px-10
            rounded-[36px]
            bg-transparent
            hover:bg-transparent
            transition-transform
            duration-500
          "
        >
          <div
            className="
              overflow-hidden
              rounded-[28px]
              w-full
              max-w-[480px]
              bg-transparent
            "
          >
            <img
              src="/images/services/gentlement-view-pricing.jpg"
              alt="Gentlemen luxury waxing services"
              className="
                w-full
                h-auto
                object-contain
                bg-transparent
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
