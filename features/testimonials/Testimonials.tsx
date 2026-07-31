/**
 * -----------------------------------------------------------------------------
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Standalone luxury testimonials presentation.
 *
 * Updated:
 * • Converted from homepage section
 * • Added full-page editorial layout
 * • Added luxury spacing system
 * • Added responsive testimonial grid
 * -----------------------------------------------------------------------------
 */

import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";


export default function Testimonials() {

  return (

    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        py-20
      "
    >


      {/* Ambient background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.28),transparent_65%)]
        "
      />



      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >


        {/* Header */}
        <header
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-[#8C5A6B]
            "
          >
            Client Love
          </p>



          <h1
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h1>



          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />



          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-[#8C7468]
            "
          >
            Real experiences from clients who value comfort,
            confidence, and exceptional care.
          </p>

        </header>



        {/* Testimonial Grid */}
        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            testimonials.map((item)=>(

              <TestimonialCard
                key={item.id}
                testimonial={item}
              />

            ))
          }

        </div>



        {/* Booking CTA */}
        <div
          className="
            mt-20
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
              px-12
              py-5
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
              text-[#8C5A6B]
              transition
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
