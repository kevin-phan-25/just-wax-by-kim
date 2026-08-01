/**
 * ------------------------------------------------------------------
 * File: BookingCTA.tsx
 *
 * Description:
 * Luxury booking call-to-action.
 *
 * Changes:
 * - Stronger presence
 * - Premium hover
 * - Matches brand dusty pink
 * ------------------------------------------------------------------
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
        min-h-[56px]
        min-w-[240px]
        rounded-full
        bg-[#8C5A6B]
        px-10
        py-4
        uppercase
        tracking-[0.22em]
        text-xs
        sm:text-sm
        font-semibold
        text-white
        shadow-[0_12px_35px_rgba(140,90,107,0.28)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#7A4A5A]
        hover:shadow-[0_18px_45px_rgba(140,90,107,0.35)]
      "
    >
      {BOOKING_CONFIG.ctaLabel}
    </a>
  );
}
