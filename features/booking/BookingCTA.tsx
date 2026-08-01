/**
 *
 * ---
 * File:
 * BookingCTA.tsx
 *
 * Description:
 * Luxury booking call-to-action.
 *
 * Updates:
 * • Premium brand CTA styling
 * • Matches site luxury theme
 * • Improved hover interaction
 * • Responsive sizing
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";

export default function BookingCTA() {
  return (
    <a
      href={BOOKING_CONFIG.bookingUrl}
      className="
        inline-flex
        items-center
        justify-center

        rounded-full

        px-10
        py-4

        md:px-12
        md:py-5

        bg-[#D4A9B6]

        text-sm
        md:text-base

        font-medium

        tracking-[0.08em]
        uppercase

        text-[#3B2A26]

        transition-all
        duration-500

        hover:bg-[#C6A15B]
        hover:-translate-y-1

        shadow-sm
        hover:shadow-md
      "
    >
      {BOOKING_CONFIG.ctaLabel}
    </a>
  );
}
