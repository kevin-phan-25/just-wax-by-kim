/**
 * -----------------------------------------------------------------------------
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury testimonials section.
 *
 * Changes:
 *
 * - Removed fixed width restrictions
 * - Centered section typography
 * - Expanded testimonial presentation
 * - Improved luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import {
  testimonials,
} from "./testimonials.data";

import TestimonialCard from "./TestimonialCard";


export default function Testimonials(){

return (

<section
  id="testimonials"
  className="
    bg-brand-ivory
    px-6
    py-24
    w-full
  "
>


  {/* HEADER */}
  <div
    className="
      w-full
      text-center
    "
  >

    <span
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-brand-champagne
      "
    >
      Client Love
    </span>


    <h2
      className="
        mt-5
        font-serif
        text-4xl
        md:text-5xl
        text-[#3B2A26]
      "
    >
      Loved By Our Clients
    </h2>


    <p
      className="
        mt-6
        text-lg
        text-[#8C7468]
        text-center
      "
    >
      Real experiences from clients who value comfort,
      confidence, and exceptional care.
    </p>


  </div>



  {/* TESTIMONIAL GRID */}
  <div
    className="
      mt-16
      grid
      w-full
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
    "
  >

    {
      testimonials.map((item)=>(

        <TestimonialCard
          key={item.id}
          testimonial={item}
        />

      ))
    }


  </div>


</section>

);

}
