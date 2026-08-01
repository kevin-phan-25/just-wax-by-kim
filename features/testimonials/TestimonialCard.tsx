/**
 * ---
 * File:
 * features/testimonials/TestimonialCard.tsx
 *
 * Description:
 * Luxury editorial testimonial card.
 *
 * Updates:
 * • Removed divider accents
 * • Removed decorative elements
 * • Softer luxury presentation
 * • Improved quote hierarchy
 * • Better spacing and typography
 * • Matches Just Wax by Kim theme
 * ---
 */

import type { Testimonial } from "./testimonial.types";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {

  return (
    <article
      className="
        group

        flex
        flex-col
        items-center

        w-full

        rounded-[36px]

        bg-white/60

        px-8
        py-12

        md:px-10
        md:py-14

        transition-all
        duration-500

        hover:-translate-y-1

        hover:shadow-[0_25px_70px_rgba(59,42,38,0.08)]
      "
    >

      {/* STARS */}
      <div
        className="
          flex
          items-center
          justify-center

          gap-1

          text-[#C6A15B]

          text-sm
        "
      >
        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <span
            key={index}
          >
            ★
          </span>
        ))}
      </div>



      {/* QUOTE */}
      <blockquote
        className="
          mt-8

          w-full

          text-center

          font-serif

          text-xl

          md:text-2xl

          leading-[1.8]

          text-[#6F5A50]
        "
      >
        “{testimonial.quote}”
      </blockquote>



      {/* CLIENT NAME */}
      <div
        className="
          mt-8

          text-center
        "
      >

        <p
          className="
            uppercase

            tracking-[0.3em]

            text-xs

            font-semibold

            text-[#3B2A26]
          "
        >
          {testimonial.name}
        </p>

      </div>


    </article>
  );
}
