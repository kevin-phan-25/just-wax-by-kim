/**
 * -----------------------------------------------------------------------------
 * File: TestimonialCard.tsx
 *
 * Description:
 * Luxury testimonial presentation card.
 *
 * Changes:
 * - Editorial quote styling
 * - Softer borders
 * - Improved spacing
 * - Premium typography
 * -----------------------------------------------------------------------------
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
        relative
        flex
        flex-col
        items-center
        text-center
        rounded-[32px]
        border
        border-[#E8DDD8]
        bg-white
        px-8
        py-10
        transition
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(59,42,38,.08)]
      "
    >

      {/* Stars */}
      <div
        className="
          flex
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
              text-lg
            "
          >
            ★
          </span>
        ))}
      </div>


      {/* Quote */}
      <p
        className="
          mt-8
          font-serif
          text-xl
          leading-relaxed
          text-[#6F5A50]
        "
      >
        "{testimonial.quote}"
      </p>


      {/* Divider */}
      <div
        className="
          mt-8
          h-px
          w-12
          bg-[#D8B4A0]
        "
      />


      {/* Name */}
      <p
        className="
          mt-6
          uppercase
          tracking-[0.25em]
          text-sm
          font-semibold
          text-[#3B2A26]
        "
      >
        {testimonial.name}
      </p>

    </article>
  );
}
