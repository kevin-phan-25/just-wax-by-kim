/**
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury client testimonial section.
 *
 * Updates:
 * • Full width editorial layout
 * • Centered typography
 * • Removed width restrictions
 * • Premium spacing system
 * • Matches brand theme
 * ---
 */

import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";


export default function Testimonials() {

return (

<section
  id="reviews"
  className="
    relative

    overflow-hidden

    bg-[#FCF8F3]
  "
>


  {/* NAVBAR CLEARANCE */}
  <div
    className="
      h-[190px]
      md:h-[216px]
    "
  />



  {/* SOFT BACKGROUND */}
  <div
    aria-hidden
    className="
      pointer-events-none

      absolute
      inset-0

      bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.25),transparent_55%)]
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

        mb-16
        md:mb-20
      "
    >

      <p
        className="
          uppercase

          tracking-[0.35em]

          text-xs
          md:text-sm

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
          sm:text-5xl
          md:text-6xl

          leading-tight

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

          text-base
          md:text-lg

          leading-relaxed

          text-[#8C7468]
        "
      >
        Real experiences from clients who value comfort,
        confidence, and exceptional care.
      </p>


    </header>




    {/* TESTIMONIAL GRID */}

    <div
      className="
        w-full

        grid

        grid-cols-1

        md:grid-cols-2

        xl:grid-cols-3

        gap-8
        md:gap-10

        justify-items-center
      "
    >

      {testimonials.map((item)=>(
        <TestimonialCard
          key={item.id}
          testimonial={item}
        />
      ))}

    </div>




    {/* CTA */}

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

          min-h-[66px]

          px-14

          rounded-full

          border-2

          border-[#8C5A6B]

          uppercase

          tracking-[0.22em]

          text-sm

          font-semibold

          text-[#8C5A6B]

          transition-all

          duration-300

          hover:bg-[#F6E7E1]

          hover:scale-[1.03]
        "
      >
        Book Appointment
      </a>

    </div>



  </div>


</section>

);

}
