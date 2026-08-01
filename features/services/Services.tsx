/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed image text overlays
 * • Removed "View Pricing" labels
 * • Expanded image container breathing room
 * • Preserved original image sizing
 * • Improved editorial card presentation
 * • Balanced desktop spacing
 *
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";

export default function Services() {
  return (
    <section
      className="
        w-full
      "
    >

      {/* HEADER */}
      <div
        className="
          w-full
          text-center
        "
      >

        <span
          className="
            uppercase
            tracking-[0.4em]
            text-sm
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
            md:text-5xl

            text-[#3B2A26]
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

          gap-12

          md:grid-cols-2

          justify-items-center

          w-full

          px-6
          md:px-10
          lg:px-16
        "
      >


        {/* LADIES */}
        <Link
          href="/services/ladies"
          className="
            group

            relative

            w-full

            max-w-[520px]

            rounded-[36px]

            bg-[#FCF8F3]

            p-3

            transition-all
            duration-300

            hover:shadow-[0_24px_60px_rgba(59,42,38,0.12)]
          "
        >

          <div
            className="
              overflow-hidden

              rounded-[30px]
            "
          >

            <img
              src="/images/services/ladies-view-pricing.jpg"
              alt="Ladies waxing services"

              className="
                w-full

                aspect-[4/5]

                object-cover

                transition-transform

                duration-500

                group-hover:scale-105
              "
            />

          </div>


        </Link>





        {/* GENTLEMEN */}
        <Link
          href="/services/gentlemen"
          className="
            group

            relative

            w-full

            max-w-[520px]

            rounded-[36px]

            bg-[#FCF8F3]

            p-3

            transition-all
            duration-300

            hover:shadow-[0_24px_60px_rgba(59,42,38,0.12)]
          "
        >

          <div
            className="
              overflow-hidden

              rounded-[30px]
            "
          >

            <img
              src="/images/services/gentlement-view-pricing.jpg"
              alt="Gentlemen waxing services"

              className="
                w-full

                aspect-[4/5]

                object-cover

                transition-transform

                duration-500

                group-hover:scale-105
              "
            />

          </div>


        </Link>


      </div>


    </section>
  );
}
