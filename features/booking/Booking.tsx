/**
 * -----------------------------------------------------------------------------
 * File: Booking.tsx
 *
 * Description:
 * Luxury booking experience section.
 *
 * Changes:
 * - July 28, 2026
 *   - Unified background with Hero
 *   - Removed ivory override
 *   - Removed duplicate Studio Hours
 *   - Simplified booking flow
 *   - Improved spacing hierarchy
 *
 * -----------------------------------------------------------------------------
 */

import {
  BOOKING_CONFIG
} from "./booking.constants";


import BookingCTA from "./BookingCTA";

import BookingBenefits from "./BookingBenefits";

import BookingWidget from "./BookingWidget";



export default function Booking() {


  return (

    <section

      className="
        bg-brand-cream
        border-t
        border-brand-border/50
        px-6
        py-24
        md:py-32
      "

    >


      <div

        className="
          mx-auto
          max-w-7xl
        "

      >




        {/* Header */}

        <div

          className="
            mx-auto
            max-w-3xl
            text-center
          "

        >



          <p

            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-brand-dusty-pink
            "

          >

            {BOOKING_CONFIG.eyebrow}

          </p>





          <h2

            className="
              mt-5
              font-serif
              text-4xl
              md:text-5xl
              text-brand-espresso
            "

          >

            {BOOKING_CONFIG.title}

          </h2>





          <p

            className="
              mx-auto
              mt-6
              max-w-2xl
              text-brand-taupe
              leading-relaxed
            "

          >

            {BOOKING_CONFIG.description}

          </p>





          <div

            className="
              mt-10
            "

          >

            <BookingCTA />

          </div>




        </div>









        {/* Benefits */}

        <div

          className="
            mt-16
          "

        >

          <BookingBenefits />

        </div>









        {/* Booking Widget */}

        <div

          className="
            mt-16
            mx-auto
            max-w-4xl
          "

        >

          <div

            className="
              rounded-3xl
              border
              border-brand-border
              bg-white/60
              p-8
              shadow-luxury
            "

          >

            <BookingWidget />

          </div>


        </div>





      </div>



    </section>

  );

}
