/**
 * -----------------------------------------------------------------------------
 * File: Testimonials.tsx
 *
 * Description:
 * Luxury client testimonials section.
 *
 * Changes:
 * - Editorial layout
 * - Improved spacing
 * - Centered presentation
 * -----------------------------------------------------------------------------
 */

import {
  testimonials,
} from "./testimonials.data";

import TestimonialCard from "./TestimonialCard";


export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        bg-[#FCF8F3]
        px-6
        py-32
      "
    >

      <div
        className="
          container-luxury
        "
      >

        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <span
            className="
              uppercase
              tracking-[0.4em]
              text-xs
              font-semibold
              text-[#8C5A6B]
            "
          >
            Client Love
          </span>


          <h2
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            Real experiences from clients who value comfort,
            confidence, and exceptional care.
          </p>

        </header>



        {/* REVIEWS */}
        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
