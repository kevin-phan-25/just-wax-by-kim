/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services category selector.
 *
 * Changes:
 *
 * - July 30, 2026
 *   • Replaced service cards with category imagery
 *   • Added Ladies / Gentlemen navigation
 *   • Added luxury editorial presentation
 *   • Removed fixed sizing constraints
 *
 * -----------------------------------------------------------------------------
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


      <div
        className="
          mx-auto
          max-w-7xl
        "
      >



        {/* HEADER */}

        <div
          className="
            mx-auto
            max-w-3xl
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
            Luxury Waxing
            <br />
            For Everyone
          </h2>



          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            Personalized waxing experiences designed
            around confidence, comfort, and beautifully
            cared skin.
          </p>


        </div>





        {/* CATEGORY CARDS */}

        <div
          className="
            mt-16

            grid

            gap-10

            md:grid-cols-2
          "
        >




          {/* LADIES */}

          <Link

            href="#ladies-services"

            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
            "

          >


            <img

              src="/images/ladies-waxing.jpg"

              alt="Ladies waxing services"

              className="
                aspect-[4/5]
                w-full
                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
              "

            />



            {/* Overlay */}

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
                  tracking-[0.35em]
                  text-sm
                "

              >

                View Services

              </p>


            </div>



          </Link>







          {/* GENTLEMEN */}

          <Link

            href="#gentlemen-services"

            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
            "

          >


            <img

              src="/images/gentlemen-waxing.jpg"

              alt="Gentlemen waxing services"

              className="
                aspect-[4/5]
                w-full
                object-cover

                transition-transform
                duration-700

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
                  tracking-[0.35em]
                  text-sm
                "

              >

                View Services

              </p>


            </div>



          </Link>





        </div>


      </div>


    </section>

  );

}
