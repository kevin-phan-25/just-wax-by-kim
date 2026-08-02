/**
 *
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury responsive testimonials presentation.
 *
 * Updated:
 * • Mobile-first spacing system
 * • Responsive navbar clearance
 * • Improved phone readability
 * • Balanced tablet / desktop layout
 * • Preserved luxury editorial styling
 *
 * ---
 *
 */

import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FBF7F4]
      "
    >

      {/* Navbar clearance */}
      <div
        className="
          h-[120px]
          sm:h-[150px]
          md:h-[190px]
          lg:h-[216px]
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

          pb-32
          md:pb-40
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            w-full
            max-w-5xl

            text-center

            mb-12
            sm:mb-16
            md:mb-20
          "
        >

          <p
            className="
              uppercase
              tracking-[0.35em]

              text-xs
              sm:text-sm

              text-[#8C5A6B]
            "
          >
            Client Love
          </p>



          <h1
            className="
              mt-5

              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-tight

              tracking-[-0.03em]

              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h1>



          <p
            className="
              mt-6

              mx-auto

              max-w-3xl

              text-sm
              sm:text-base
              md:text-lg

              leading-7
              md:leading-relaxed

              text-[#8C7468]
            "
          >
            Real experiences from guests who value comfort,
            confidence, and exceptional care.
          </p>

        </header>



        {/* TESTIMONIAL GRID */}
        <div
          className="
            grid

            w-full

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-6
            sm:gap-8
            lg:gap-10
          "
        >

          {testimonials.map((item) => (

            <TestimonialCard
              key={item.id}
              testimonial={item}
            />

          ))}

        </div>



        {/* BOOKING CTA */}
        <div
          className="
            mt-14
            sm:mt-16
            md:mt-20

            flex
            justify-center
          "
        >

          <a
            href="/#booking"
            className="
              inline-flex

              items-center
              justify-center

              rounded-full

              border-2
              border-[#8C5A6B]

              px-8
              sm:px-12

              py-4
              sm:py-5

              uppercase

              tracking-[0.18em]

              text-xs
              sm:text-sm

              font-semibold

              text-[#8C5A6B]

              transition-all
              duration-300

              hover:bg-[#F6E7E1]
            "
          >
            Book Appointment
          </a>

        </div>


      </div>

    </section>
  );
}
