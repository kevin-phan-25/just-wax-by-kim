/**
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury testimonial editorial section.
 *
 * Updates:
 * • Five cell editorial layout
 * • Left/right breathing space cells
 * • Removed width restrictions
 * • Removed divider accents
 * • Removed redundant booking CTA
 * • Centered headers
 * • Softer luxury presentation
 * • Responsive mobile/tablet/desktop
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

      {/* Navbar clearance */}
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
          px-6
          text-center
          mb-16
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
            mx-auto
            mt-6
            max-w-3xl
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




      {/* TESTIMONIAL GRID */}
      <div
        className="
          w-full

          grid

          grid-cols-1

          lg:grid-cols-[0.75in_1fr_1fr_1fr_0.75in]

          gap-8

          pb-12
        "
      >

        {/* LEFT BREATHING SPACE */}
        <div className="hidden lg:block" />


        {testimonials.slice(0,3).map((item)=>(
          <TestimonialCard
            key={item.id}
            testimonial={item}
          />
        ))}


        {/* RIGHT BREATHING SPACE */}
        <div className="hidden lg:block" />

      </div>





      {/* SECOND ROW */}
      {testimonials.length > 3 && (

        <div
          className="
            w-full

            grid

            grid-cols-1

            lg:grid-cols-[0.75in_1fr_1fr_1fr_0.75in]

            gap-8

            pb-32
          "
        >

          {/* LEFT BREATHING SPACE */}
          <div className="hidden lg:block" />


          {testimonials.slice(3).map((item)=>(

            <TestimonialCard
              key={item.id}
              testimonial={item}
            />

          ))}


          {/* RIGHT BREATHING SPACE */}
          <div className="hidden lg:block" />

        </div>

      )}


    </section>
  );
}
