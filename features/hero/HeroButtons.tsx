/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroButtons.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Primary and secondary CTAs for the hero section.
 *
 * Changes (July 29, 2026):
 * • Slightly smaller padding and type for better proportion
 * • Consistent hover states with brand palette
 * -----------------------------------------------------------------------------
 */
import Link from "next/link";

export function HeroButtons() {
  return (
    <>
      <Link
        href="#booking"
        className="
          inline-flex items-center justify-center
          rounded-full bg-[#8C5A6B] px-6 py-3
          text-[0.65rem] font-semibold uppercase tracking-[0.18em]
          text-white transition-all duration-300
          hover:bg-[#7A4A5A] hover:-translate-y-0.5
          hover:shadow-[0_12px_28px_rgba(140,90,107,0.26)]
        "
      >
        Book Appointment
      </Link>

      <Link
        href="#services"
        className="
          inline-flex items-center justify-center
          rounded-full border border-[#E8DDD8] bg-white
          px-6 py-3
          text-[0.65rem] font-semibold uppercase tracking-[0.18em]
          text-[#8C5A6B] transition-all duration-300
          hover:border-[#D4A9B6] hover:bg-[#F6E7E1]
        "
      >
        View Services
      </Link>
    </>
  );
}
