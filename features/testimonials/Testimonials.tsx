/**
 *
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury testimonial editorial layout.
 *
 * Updates:
 * • Full width presentation
 * • Five cell editorial spacing
 * • ¾ inch side breathing room
 * • 1 inch review spacing
 * • Centered typography
 * • Removed CTA
 * • Removed width restrictions
 *
 * ---
 *
 */

import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F3]
      "
    >

      {/* Navbar clearance */}
      <div
        className="
          h-[168px]
          md:h-[190px]
        "
      />


      {/* CONTENT */}
      <div
        className="
          w-full
          px-0
          text-center
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
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-center
              whitespace-nowrap
              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h1>


          <p
            className="
              mt-6
              max-w-none
              text-center
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            Real experiences from guests who value comfort,
            confidence, and exceptional care.
          </p>

        </header>



        {/* FIVE CELL EDITORIAL GRID */}
        <div
          className="
            grid

            grid-cols-[0.75in_1fr_1fr_1fr_0.75in]

            gap-x-[1in]
            gap-y-[1in]

            w-full
            items-start
          "
        >


          {/* LEFT BREATHING SPACE */}
          <div />



          {/* TESTIMONIALS */}
          {testimonials.slice(0,3).map((item)=>(
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}



          {/* RIGHT BREATHING SPACE */}
          <div />



          {/* SECOND ROW LEFT SPACE */}
          <div />



          {/* REMAINING TESTIMONIALS */}
          {testimonials.slice(3).map((item)=>(
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}



          {/* EMPTY CELLS */}
          <div />
          <div />

        </div>

      </div>

    </section>
  );
}
