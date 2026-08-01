/**
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury testimonial editorial section.
 *
 * Updates:
 * • Fixed compressed testimonial cards
 * • Added editorial breathing room
 * • Centered header alignment
 * • Five cell desktop layout
 * • Removed CTA
 * • Responsive luxury spacing
 *
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


      {/* Navbar Clearance */}
      <div
        className="
          h-[168px]
          md:h-[190px]
        "
      />



      {/* HEADER */}
      <header
        className="
          w-full
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
          mb-20
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
            w-full
            text-center
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
            text-center
            text-base
            md:text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          Real experiences from guests who appreciate
          comfort, confidence, and thoughtful care.
        </p>

      </header>





      {/* FIVE CELL EDITORIAL GRID */}
      <div
        className="
          w-full

          grid

          grid-cols-1

          lg:grid-cols-[0.75in_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_0.75in]

          gap-x-10
          xl:gap-x-14

          gap-y-12

          pb-12
        "
      >


        {/* LEFT SPACE */}
        <div className="hidden lg:block" />



        {testimonials.slice(0,3).map((item)=>(
          <div
            key={item.id}
            className="
              w-full
              flex
              justify-center
            "
          >
            <TestimonialCard
              testimonial={item}
            />
          </div>
        ))}



        {/* RIGHT SPACE */}
        <div className="hidden lg:block" />


      </div>






      {/* SECOND ROW */}
      {testimonials.length > 3 && (

        <div
          className="
            w-full

            grid

            grid-cols-1

            lg:grid-cols-[0.75in_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_0.75in]

            gap-x-10
            xl:gap-x-14

            pb-32
          "
        >

          <div className="hidden lg:block" />


          {testimonials.slice(3).map((item)=>(

            <div
              key={item.id}
              className="
                w-full
                flex
                justify-center
              "
            >

              <TestimonialCard
                testimonial={item}
              />

            </div>

          ))}


          <div className="hidden lg:block" />

        </div>

      )}


    </section>
  );
}
