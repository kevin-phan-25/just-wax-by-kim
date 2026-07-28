/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroButtons.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Replaced gold accent with luxury mauve/plum
 *   - Cleaner feminine luxury CTA styling
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
        gap-4
      "
    >
      <Link
        href="#booking"
        className="
          rounded-full
          bg-brand-plum
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-white
          transition
          duration-300
          hover:bg-brand-plum/90
          hover:scale-[1.02]
        "
      >
        Book Your Appointment
      </Link>

      <Link
        href="#services"
        className="
          rounded-full
          border
          border-brand-plum/40
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-brand-espresso
          transition
          duration-300
          hover:bg-brand-plum
          hover:text-white
          hover:border-brand-plum
        "
      >
        Explore Services
      </Link>
    </div>
  );
}
