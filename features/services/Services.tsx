/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed overlay labels
 * • Expanded image presentation
 * • Removed restrictive card styling
 * • Blended image containers into page background
 * • Improved editorial spacing
 * • Preserved image proportions
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

            text-center

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

          grid-cols-1
          md:grid-cols-2

          gap-10
          md:gap-14

          px-0
        "
      >


        {/* LADIES */}

        <Link
          href="/services/ladies"

          className="
            group

            relative

            w-full

            overflow-hidden

            rounded-[36px]

            bg-[#FCF8F3]

            transition-all
            duration-500

            hover:-translate-y-1
          "
        >

          <img
            src="/images/services/ladies-view-pricing.jpg"

            alt="Luxury waxing services"

            className="
              w-full

              aspect-[4/5]

              object-cover

              rounded-[36px]

              transition-transform
              duration-700

              group-hover:scale-[1.03]
            "
          />

        </Link>




        {/* GENTLEMEN */}

        <Link
          href="/services/gentlemen"

          className="
            group

            relative

            w-full

            overflow-hidden

            rounded-[36px]

            bg-[#FCF8F3]

            transition-all
            duration-500

            hover:-translate-y-1
          "
        >

          <img
            src="/images/services/gentlement-view-pricing.jpg"

            alt="Luxury waxing services"

            className="
              w-full

              aspect-[4/5]

              object-cover

              rounded-[36px]

              transition-transform
              duration-700

              group-hover:scale-[1.03]
            "
          />

        </Link>


      </div>


    </section>
  );
}
