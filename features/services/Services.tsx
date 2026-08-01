/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed Ladies / Gentlemen overlay text
 * • Removed View Pricing text
 * • Expanded image cells
 * • Removed max-width restriction
 * • Added editorial spacing around image cards
 * • Centered all typography
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

            text-sm

            text-[#8C5A6B]
          "
        >
          Our Services
        </span>


        <h2
          className="
            mt-6

            w-full

            font-serif

            text-center

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

            w-full
            max-w-3xl

            text-center

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

          w-full

          gap-12
          md:gap-16

          md:grid-cols-2
        "
      >


        {/* LADIES */}

        <Link
          href="/services/ladies"

          className="
            group

            relative

            w-full

            rounded-[36px]

            p-6
            md:p-8

            bg-white

            border
            border-[#E8DDD8]

            transition-all
            duration-500

            hover:border-[#D4A9B6]

            hover:shadow-[0_30px_70px_rgba(59,42,38,0.12)]
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

              alt="Luxury waxing services for women"

              className="
                w-full

                aspect-[4/5]

                object-cover

                transition

                duration-700

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

            rounded-[36px]

            p-6
            md:p-8

            bg-white

            border
            border-[#E8DDD8]

            transition-all
            duration-500

            hover:border-[#D4A9B6]

            hover:shadow-[0_30px_70px_rgba(59,42,38,0.12)]
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

              alt="Luxury waxing services for men"

              className="
                w-full

                aspect-[4/5]

                object-cover

                transition

                duration-700

                group-hover:scale-105
              "
            />

          </div>

        </Link>


      </div>


    </section>
  );
}
