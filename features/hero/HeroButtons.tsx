/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroButtons.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Increased CTA bubble size by 25%
 *   - Kept text size unchanged
 *   - Improved luxury button proportions
 *
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        items-center
        justify-center
        gap-5
      "
    >

      <Link
        href="#booking"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#8C5A6B]
          px-16
          py-6
          text-lg
          font-semibold
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-[#734454]
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Book Your Appointment
      </Link>


      <Link
        href="#services"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#8C5A6B]
          px-16
          py-6
          text-lg
          font-semibold
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-[#734454]
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Explore Services
      </Link>

    </div>
  );
}
