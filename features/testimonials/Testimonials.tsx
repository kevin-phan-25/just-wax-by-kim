/**
 *
 * ---
 * File:
 * features/testimonials/Testimonials.tsx
 *
 * Description:
 * Luxury responsive testimonials presentation.
 *
 * Updated:
 * • Removed navbar clearance responsibility
 * • Matches FAQ / Gallery / Contact architecture
 * • Mobile-first spacing system
 * • Improved phone readability
 * • Balanced tablet / desktop layout
 * • Preserved luxury editorial styling
 * • Removed redundant booking CTA
 *
 * ---
 */

import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FCF8F3]

        pb-20

        sm:pb-24

        md:pb-32
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />


      {/* CONTENT */}
      <div
        className="
          relative

          z-10

          w-full

          px-5

          sm:px-8

          md:px-10

          lg:px-16

          xl:px-24
        "
      >

        {/* HEADER */}
        <header
          className="
            mx-auto

            w-full

            max-w-5xl

            text-center

            mb-12

            sm:mb-16

            md:mb-20
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              sm:text-sm

              text-[#8C5A6B]
            "
          >
            Client Love
          </p>

          <h1
            className="
              mt-5

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-tight

              tracking-[-0.03em]

              text-[#3B2A26]
            "
          >
            Loved By Our Clients
          </h1>

          <p
            className="
              mt-6

              mx-auto

              max-w-3xl

              text-sm

              sm:text-base

              md:text-lg

              leading-7

              md:leading-relaxed

              text-[#8C7468]
            "
          >
            Real experiences from guests who value comfort,
            confidence, and exceptional care.
          </p>

        </header>


        {/* TESTIMONIAL GRID */}
        <div
          className="
            grid

            w-full

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3

            gap-6

            sm:gap-8

            lg:gap-10
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
