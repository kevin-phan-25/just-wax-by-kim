/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Changes:
 *
 * - Removed fixed width restrictions
 * - Reduced service image size by 50%
 * - Centered service presentation
 * - Preserved luxury editorial styling
 *
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="
        w-full
        px-6
        py-24
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
            text-5xl
            text-[#3B2A26]
          "
        >
          Luxury Waxing
          <br />
          For Everyone
        </h2>


        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          Personalized waxing experiences designed around
          <br />
          confidence, comfort, and beautifully cared skin.
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
        "
      >

        {/* LADIES */}
        <Link
          href="/services/ladies"
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            w-full
          "
        >
          <img
            src="/images/services/ladies-waxing.jpg"
            alt="Ladies waxing"
            className="
              mx-auto
              w-1/2
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />


          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />


          <div
            className="
              absolute
              bottom-10
              left-10
              text-white
            "
          >
            <h3
              className="
                font-serif
                text-5xl
              "
            >
              Ladies
            </h3>

            <p
              className="
                mt-4
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              View Pricing
            </p>

          </div>

        </Link>



        {/* GENTLEMEN */}
        <Link
          href="/services/gentlemen"
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            w-full
          "
        >
          <img
            src="/images/services/gentlemen-waxing.jpg"
            alt="Gentlemen waxing"
            className="
              mx-auto
              w-1/2
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />


          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />


          <div
            className="
              absolute
              bottom-10
              left-10
              text-white
            "
          >
            <h3
              className="
                font-serif
                text-5xl
              "
            >
              Gentlemen
            </h3>

            <p
              className="
                mt-4
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              View Pricing
            </p>

          </div>

        </Link>

      </div>

    </section>
  );
}
