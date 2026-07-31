/**
 * -----------------------------------------------------------------------------
 * File:
 * features/testimonials/TestimonialCard.tsx
 *
 * Description:
 * Luxury testimonial presentation card.
 *
 * Updated:
 * • Added premium card container
 * • Improved editorial quote styling
 * • Added hover interaction
 * • Refined spacing and typography
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
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8DDD8]
        bg-[#FFFFFF]/70
        px-8
        py-10
        shadow-[0_18px_50px_rgba(59,42,38,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(59,42,38,0.12)]
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

        {
          Array.from({
            length: testimonial.rating,
          }).map((_, index)=>(

            <span
              key={index}
              className="
                text-lg
              "
            >
              ★
            </span>

          ))
        }

      </div>



      {/* Quote */}
      <blockquote
        className="
          mt-8
          text-center
          font-serif
          text-xl
          leading-[1.8]
          text-[#6F5A50]
        "
      >
        “{testimonial.quote}”
      </blockquote>



      {/* Divider */}
      <div
        className="
          mx-auto
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
          text-center
          uppercase
          tracking-[0.28em]
          text-xs
          font-semibold
          text-[#3B2A26]
        "
      >
        {testimonial.name}
      </p>



      {/* Decorative Corner */}
      <div
        className="
          pointer-events-none
          absolute
          right-8
          top-8
          h-12
          w-12
          rounded-full
          bg-[#F6E7E1]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

    </article>

  );

}
