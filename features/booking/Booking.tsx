/**
 * ------------------------------------------------------------------
 * File: Booking.tsx
 *
 * Description:
 * Luxury booking experience section.
 *
 * Changes:
 *
 * - Removed restrictive width sizing
 * - Full editorial layout
 * - Centered typography
 * - Expanded booking widget area
 * - Unified luxury spacing rhythm
 * - Top spacer ½ inch (pairs with Services bottom for 1 inch total gap)
 *
 * ------------------------------------------------------------------
 */

import {
  BOOKING_CONFIG,
} from "./booking.constants";

import BookingCTA from "./BookingCTA";

import BookingBenefits from "./BookingBenefits";

import BookingWidget from "./BookingWidget";


export default function Booking() {

  return (

    <section
      id="booking"
      className="
        bg-brand-background
        border-t
        border-brand-border/50
        section-padding-lg
        pt-0
      "
    >

      {/* ½ inch top spacer — pairs with Services pb-[0.5in] = 1 inch total */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[0.5in]
        "
      />


      <div
        className="
          container-luxury
        "
      >



        {/* HEADER */}

        <header
          className="
            text-center
            mx-auto
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
              mt-6
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


        </header>





        {/* BENEFITS */}

        <div
          className="
            mt-20
          "
        >

          <BookingBenefits />

        </div>





        {/* BOOKING WIDGET */}

        <div
          className="
            mt-20
            w-full
          "
        >

          <div
            className="
              rounded-[40px]
              border
              border-brand-border
              bg-white/80
              p-8
              md:p-12
              shadow-[0_20px_60px_rgba(59,42,38,0.06)]
            "
          >

            <BookingWidget />

          </div>


        </div>



      </div>


    </section>

  );

}
