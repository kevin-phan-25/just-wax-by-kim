/**
 * ---
 * File:
 * features/testimonials/TestimonialCard.tsx
 *
 * Description:
 * Luxury testimonial card.
 *
 * Updates:
 * • Softer boutique appearance
 * • Removed decorative accents
 * • Removed divider lines
 * • Improved typography hierarchy
 * • More editorial spacing
 *
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

        w-full

        rounded-[32px]

        bg-white/70

        px-8
        py-10

        shadow-[0_18px_50px_rgba(59,42,38,0.05)]

        transition-all
        duration-500

        hover:-translate-y-2

        hover:shadow-[0_25px_70px_rgba(59,42,38,0.10)]
      "
    >


      {/* STARS */}
      <div
        className="
          flex
          justify-center
          gap-1
          text-[#D4A9B6]
        "
      >

        {Array.from({
          length:testimonial.rating,
        }).map((_,index)=>(

          <span
            key={index}
            className="text-base"
          >
            ★
          </span>

        ))}

      </div>



      {/* QUOTE */}
      <blockquote
        className="
          mt-8

          text-center

          font-serif

          text-lg
          md:text-xl

          leading-[1.8]

          text-[#6F5A50]
        "
      >
        “{testimonial.quote}”
      </blockquote>



      {/* CLIENT NAME */}
      <p
        className="
          mt-8

          text-center

          uppercase

          tracking-[0.3em]

          text-xs

          font-semibold

          text-[#3B2A26]
        "
      >
        {testimonial.name}
      </p>


    </article>

  );

}
