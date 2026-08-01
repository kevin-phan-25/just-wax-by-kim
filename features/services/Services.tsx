/**
 * ---
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Full width editorial layout
 * • Removed width restrictions
 * • Centered typography
 * • Responsive phone / iPad / desktop
 * • Removed divider accents
 * • Matched Hero spacing system
 * • Balanced image sizing
 *
 * ---
 */

import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
        py-[0.5in]
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />



      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          w-full

          px-5
          sm:px-8
          md:px-10
          lg:px-16
        "
      >



        {/* HEADER */}
        <header
          className="
            w-full

            flex
            flex-col
            items-center

            text-center
          "
        >

          <span
            className="
              uppercase
              tracking-[0.4em]

              text-xs
              md:text-sm

              text-[#8C5A6B]
            "
          >
            Our Services
          </span>


          <h2
            className="
              mt-6

              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-tight

              text-[#3B2A26]
            "
          >
            Luxury Waxing For Everyone
          </h2>


          <p
            className="
              mt-6

              w-full

              text-base
              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            Thoughtfully curated waxing experiences that blend
            comfort, precision, and refined care for beautifully
            confident skin.
          </p>


        </header>




        {/* SERVICE OPTIONS */}
        <div
          className="
            mt-14
            md:mt-16
            xl:mt-20

            grid

            grid-cols-1
            md:grid-cols-2

            gap-10
            xl:gap-16

            w-full

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

              transition-transform
              duration-500
            "
          >

            <div
              className="
                overflow-hidden

                rounded-[28px]

                w-full
              "
            >

              <img
                src="/images/services/ladies-view-pricing.jpg"
                alt="Ladies luxury waxing services"
                className="
                  w-full

                  h-auto

                  object-contain

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

              transition-transform
              duration-500
            "
          >

            <div
              className="
                overflow-hidden

                rounded-[28px]

                w-full
              "
            >

              <img
                src="/images/services/gentlement-view-pricing.jpg"
                alt="Gentlemen luxury waxing services"
                className="
                  w-full

                  h-auto

                  object-contain

                  transition-transform
                  duration-700

                  group-hover:scale-[1.03]
                "
              />

            </div>

          </Link>


        </div>


      </div>

    </section>
  );
}
