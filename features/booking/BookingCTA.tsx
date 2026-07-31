/**
 * ------------------------------------------------------------------
 * File: BookingCTA.tsx
 *
 * Description:
 * Luxury booking call-to-action.
 *
 * Changes:
 *
 * - Updated to luxury theme colors
 * - Increased CTA presence
 * - Improved spacing
 * - Added premium hover interaction
 *
 * ------------------------------------------------------------------
 */

import {
  BOOKING_CONFIG,
} from "./booking.constants";


export default function BookingCTA() {

  return (

    <a
      href={BOOKING_CONFIG.bookingUrl}

      className="
        inline-flex
        items-center
        justify-center

        rounded-full

        bg-brand-dusty-pink

        px-12
        py-5

        uppercase
        tracking-[0.22em]

        text-sm
        font-semibold

        text-white

        shadow-[0_12px_35px_rgba(59,42,38,0.12)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-brand-plum
        hover:shadow-[0_20px_45px_rgba(59,42,38,0.16)]
      "
    >

      Book Your Appointment

    </a>

  );

}
