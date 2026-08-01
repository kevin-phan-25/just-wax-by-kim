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
 * • Matches navbar Book Appointment button
 * • Larger luxury sizing
 * • Transparent background
 * • GlossGenius external link
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";

export default function BookingCTA() {
  return (
    <a
      href={BOOKING_CONFIG.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex

        min-h-[58px]
        md:min-h-[66px]
        xl:min-h-[74px]

        min-w-[220px]
        md:min-w-[240px]
        xl:min-w-[280px]

        items-center
        justify-center

        rounded-full

        border-2
        border-[#8C5A6B]

        px-8
        md:px-10
        xl:px-14

        uppercase

        tracking-[0.22em]

        text-xs
        md:text-sm
        xl:text-base

        font-bold

        whitespace-nowrap

        text-[#8C5A6B]

        transition-all
        duration-300

        hover:bg-[#F6E7E1]
        hover:scale-[1.03]
      "
    >
      {BOOKING_CONFIG.ctaLabel}
    </a>
  );
}
