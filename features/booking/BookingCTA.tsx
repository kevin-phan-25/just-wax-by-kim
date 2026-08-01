/**
 *
 * ---
 * File:
 * BookingCTA.tsx
 *
 * Description:
 * Luxury GlossGenius booking button.
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

        px-16
        py-5

        md:px-24
        md:py-6

        border
        border-[#C6A15B]

        bg-transparent

        uppercase
        tracking-[0.12em]

        text-sm
        md:text-base

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
