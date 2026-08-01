/**
 * ------------------------------------------------------------------
 * File: BookingBenefits.tsx
 *
 * Description:
 * Luxury booking benefit cards.
 *
 * Changes:
 * - Soft cards, no hard borders
 * - Centered editorial content
 * - Matches site background blend
 * ------------------------------------------------------------------
 */

import { bookingBenefits } from "./booking.data";

export default function BookingBenefits() {
  return (
    <div
      className="
        grid
        w-full
        gap-6
        md:gap-8
        md:grid-cols-3
      "
    >
      {bookingBenefits.map((item) => (
        <article
          key={item.title}
          className="
            flex
            flex-col
            items-center
            rounded-[28px]
            bg-white/70
            px-7
            py-9
            text-center
            shadow-[0_12px_40px_rgba(59,42,38,0.04)]
            transition-all
            duration-300
            hover:-translate-y-1.5
            hover:bg-white/90
            hover:shadow-[0_20px_50px_rgba(59,42,38,0.08)]
          "
        >
          <span
            className="
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#F6E7E1]
              text-lg
              text-[#8C5A6B]
            "
            aria-hidden="true"
          >
            {item.icon}
          </span>

          <h3
            className="
              font-serif
              text-xl
              md:text-2xl
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              md:text-base
              leading-relaxed
              text-[#8C7468]
            "
          >
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
