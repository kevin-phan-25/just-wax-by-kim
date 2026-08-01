/**
 *
 * ---
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed image text overlays
 * • Removed View Pricing labels
 * • Increased image card sizing
 * • Improved luxury editorial presentation
 * • Full image focus design
 *
 * ---
 *
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






      {/* SERVICE IMAGE OPTIONS */}


      <div
        className="
          mt-16

          grid

          gap-12

          md:grid-cols-2

          justify-items-center
        "
      >





        {/* LADIES IMAGE */}


        <Link
          href="/services/ladies"

          className="
            group

            relative

            overflow-hidden

            rounded-[36px]

            w-full

            max-w-[560px]

            aspect-[4/5]
          "
        >

          <img
            src="/images/services/ladies-view-pricing.jpg"

            alt="Ladies waxing services"

            className="
              absolute

              inset-0

              h-full

              w-full

              object-cover

              transition-all

              duration-700

              group-hover:scale-105
            "
          />

        </Link>







        {/* GENTLEMEN IMAGE */}


        <Link
          href="/services/gentlemen"

          className="
            group

            relative

            overflow-hidden

            rounded-[36px]

            w-full

            max-w-[560px]

            aspect-[4/5]
          "
        >

          <img
            src="/images/services/gentlement-view-pricing.jpg"

            alt="Gentlemen waxing services"

            className="
              absolute

              inset-0

              h-full

              w-full

              object-cover

              transition-all

              duration-700

              group-hover:scale-105
            "
          />

        </Link>




      </div>


    </section>

  );

}
