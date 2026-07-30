 /**
  ---
 File:
 features/services/Services.tsx

 Description:
 Luxury services introduction section.

 Changes:
 - Removed fixed width restrictions
 - Reduced service card sizing
 - Improved luxury messaging
 - Centered service presentation
 - Preserved editorial styling
 ---
 */

import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="
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
            text-lg
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
            max-w-md
          "
        >

          <img
            src="/images/services/ladies-waxing.jpg"
            alt="Ladies waxing"
            className="
              w-full
              aspect-[4/5]
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
              via-black/10
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
                text-4xl
                md:text-5xl
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
            max-w-md
          "
        >

          <img
            src="/images/services/gentlemen-waxing.jpg"
            alt="Gentlemen waxing"
            className="
              w-full
              aspect-[4/5]
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
              via-black/10
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
                text-4xl
                md:text-5xl
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
