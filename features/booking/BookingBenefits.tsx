/**
 * ------------------------------------------------------------------
 * File: BookingBenefits.tsx
 *
 * Description:
 * Luxury booking benefit cards.
 *
 * Changes:
 *
 * - Expanded card presentation
 * - Added luxury editorial styling
 * - Centered content
 * - Improved spacing
 * - Matches Services/Testimonial theme
 *
 * ------------------------------------------------------------------
 */

import {
  bookingBenefits,
} from "./booking.data";


export default function BookingBenefits() {

  return (

    <div
      className="
        grid
        w-full
        gap-8
        md:grid-cols-3
      "
    >

      {
        bookingBenefits.map((item) => (

          <article
            key={item.title}
            className="
              flex
              flex-col
              items-center
              rounded-[32px]
              border
              border-brand-border
              bg-white/80
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(59,42,38,0.08)]
            "
          >

            <h3
              className="
                font-serif
                text-2xl
                text-brand-espresso
              "
            >

              {item.title}

            </h3>


            <p
              className="
                mt-4
                leading-relaxed
                text-brand-taupe
              "
            >

              {item.description}

            </p>


          </article>

        ))
      }


    </div>

  );

}
