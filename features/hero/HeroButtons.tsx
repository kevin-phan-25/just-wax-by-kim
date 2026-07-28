/**
 * -----------------------------------------------------------------------------
 * File: HeroButtons.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Cleaner luxury CTAs
 *   - Centered under the quote
 *
 * -----------------------------------------------------------------------------
 */
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
      <Link
        href="#booking"
        className="
          rounded-full
          bg-brand-gold
          px-8 py-3.5
          text-sm font-medium tracking-wide
          text-white
          transition
          hover:bg-brand-gold/90
          hover:scale-[1.02]
        "
      >
        Book Your Appointment
      </Link>

      <Link
        href="#services"
        className="
          rounded-full
          border border-brand-gold/60
          px-8 py-3.5
          text-sm font-medium tracking-wide
          text-brand-espresso
          transition
          hover:bg-brand-gold
          hover:text-white
          hover:border-brand-gold
        "
      >
        Explore Services
      </Link>
    </div>
  );
}
