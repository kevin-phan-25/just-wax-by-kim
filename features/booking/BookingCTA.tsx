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
 * • Larger premium CTA
 * • Removed mauve fill
 * • Cleaner luxury appearance
 * • Centered presentation
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
        items-center
        justify-center

        rounded-full

        px-14
        py-5

        md:px-20
        md:py-6

        border
        border-[#C6A15B]

        bg-transparent

        text-sm
        md:text-base

        font-medium

        tracking-[0.12em]
        uppercase

        text-[#3B2A26]

        transition-all
        duration-500

        hover:bg-[#C6A15B]
        hover:text-white

        hover:-translate-y-1
      "
    >
      {BOOKING_CONFIG.ctaLabel}
    </a>
  );
}
