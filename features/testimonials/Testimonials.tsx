/**
 *
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury testimonial editorial section.
 *
 * Updates:
 * • Full width editorial layout
 * • Centered header
 * • Five-cell desktop structure
 * • ¾ inch side breathing cells
 * • ½ inch row and column spacing
 * • Removed CTA
 * • Removed divider accents
 * • Luxury Just Wax by Kim theme
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


      {/* FULL WIDTH CONTENT */}
      <div
        className="
          relative
          w-full
          px-5
          sm:px-8
          md:px-10
          xl:px-16
        "
      >


        {/* HEADER */}
        <header
          className="
            w-full
            flex
            flex-col
            items-center
            justify-center
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


          <h2
            className="
              mt-6
              w-full

              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-tight

              text-center

              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h2>


          <p
            className="
              mt-6

              w-full

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



        {/* FIRST ROW */}
        <div
          className="
            w-full

            grid

            grid-cols-1

            md:grid-cols-[0.75fr_1fr_1fr_1fr_0.75fr]

            gap-x-12
            gap-y-12

            md:gap-x-10
            md:gap-y-10
          "
        >

          {/* LEFT BREATHING SPACE */}
          <div
            className="
              hidden
              md:block
            "
          />


          {testimonials
            .slice(0, 3)
            .map((item) => (
              <TestimonialCard
                key={item.id}
                testimonial={item}
              />
            ))}


          {/* RIGHT BREATHING SPACE */}
          <div
            className="
              hidden
              md:block
            "
          />

        </div>



        {/* SECOND ROW */}
        <div
          className="
            mt-12

            w-full

            grid

            grid-cols-1

            md:grid-cols-[0.75fr_1fr_1fr_1fr_0.75fr]

            gap-x-12
            gap-y-12

            md:gap-x-10
            md:gap-y-10
          "
        >

          {/* LEFT BREATHING SPACE */}
          <div
            className="
              hidden
              md:block
            "
          />


          {testimonials
            .slice(3)
            .map((item) => (
              <TestimonialCard
                key={item.id}
                testimonial={item}
              />
            ))}


          {/* EMPTY CENTER ALIGNMENT CELL */}
          <div
            className="
              hidden
              md:block
            "
          />


          {/* RIGHT BREATHING SPACE */}
          <div
            className="
              hidden
              md:block
            "
          />

        </div>


      </div>

    </section>
  );
}
