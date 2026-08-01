/**
 * ------------------------------------------------------------------
 * File: Booking.tsx
 *
 * Description:
 * Luxury booking experience section.
 *
 * Changes:
 * - Conversion-focused editorial layout
 * - Blended with site background (#FBF7F4)
 * - Removed divider accents
 * - Stronger hierarchy and CTA placement
 * - Top spacer ½ inch (pairs with Services)
 * - Preserved id="booking" for navbar scroll
 * ------------------------------------------------------------------
 */

import { BOOKING_CONFIG } from "./booking.constants";
import BookingCTA from "./BookingCTA";
import BookingBenefits from "./BookingBenefits";
import BookingWidget from "./BookingWidget";

export default function Booking() {
  return (
    <section
      id="booking"
      className="
        bg-[#FBF7F4]
        pt-0
        pb-16
        md:pb-20
        lg:pb-24
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

      <div className="container-luxury px-5 sm:px-8 md:px-10 lg:px-16">
        {/* HEADER */}
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#8C5A6B]
            "
          >
            {BOOKING_CONFIG.eyebrow}
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-[1.08]
              tracking-[-0.03em]
              text-[#3B2A26]
            "
          >
            {BOOKING_CONFIG.title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              md:text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {BOOKING_CONFIG.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <BookingCTA />
            <p className="text-sm text-[#8C7468]/80">
              {BOOKING_CONFIG.reassurance}
            </p>
          </div>
        </header>

        {/* BENEFITS */}
        <div className="mt-16 md:mt-20">
          <BookingBenefits />
        </div>

        {/* BOOKING WIDGET */}
        <div className="mt-16 md:mt-20 w-full">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
