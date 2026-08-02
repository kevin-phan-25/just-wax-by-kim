/**
 *
 * ---
 * File:
 * features/testimonials/TestimonialCard.tsx
 *
 * Description:
 * Luxury testimonial presentation card.
 *
 * Updated:
 * • Mobile-first responsive spacing
 * • Softer boutique appearance
 * • Removed decorative accents
 * • Removed divider lines
 * • Improved typography hierarchy
 * • Better phone / tablet readability
 * • Preserved luxury editorial styling
 *
 * ---
 *
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
        w-full
        rounded-[28px]
        sm:rounded-[32px]
        border
        border-[#E8DDD8]
        bg-white/70
        px-5
        sm:px-8
        py-8
        sm:py-10
        shadow-[0_12px_40px_rgba(59,42,38,0.05)]
        transition-all
        duration-500
        md:hover:-translate-y-2
        md:hover:shadow-[0_25px_70px_rgba(59,42,38,0.10)]
      "
    >

      {/* Stars */}
      <div
        className="
          flex
          justify-center
          gap-1
          text-[#D8B4A0]
        "
      >
        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <span
            key={index}
            className="
              text-base
              sm:text-lg
            "
          >
            ★
          </span>
        ))}
      </div>


      {/* Quote */}
      <blockquote
        className="
          mt-6
          sm:mt-8
          text-center
          font-serif
          text-base
          sm:text-lg
          md:text-xl
          leading-7
          sm:leading-8
          md:leading-[1.7]
          text-[#6F5A50]
        "
      >
        “{testimonial.quote}”
      </blockquote>


      {/* Name */}
      <p
        className="
          mt-8
          text-center
          uppercase
          tracking-[0.25em]
          text-[10px]
          sm:text-xs
          font-semibold
          text-[#3B2A26]
        "
      >
        {testimonial.name}
      </p>

    </article>
  );
}
