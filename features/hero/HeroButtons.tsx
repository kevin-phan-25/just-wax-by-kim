/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroButtons.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Fixed missing button background
 *   - Added luxury pill styling
 *   - Improved secondary button interaction
 *
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-8
        flex
        flex-wrap
        items-center
        justify-center
        gap-4
      "
    >
      {/* Primary CTA */}
      <Link
        href="#booking"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#8C5A6B]
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-white
          shadow-sm
          transition-all
          duration-300
          hover:bg-[#7A4B5B]
          hover:shadow-md
          hover:-translate-y-0.5
        "
      >
        Book Your Appointment
      </Link>


      {/* Secondary CTA */}
      <Link
        href="#services"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-[#8C5A6B]/40
          bg-white/40
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-brand-espresso
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-[#8C5A6B]
          hover:text-white
          hover:border-[#8C5A6B]
          hover:-translate-y-0.5
        "
      >
        Explore Services
      </Link>
    </div>
  );
}
