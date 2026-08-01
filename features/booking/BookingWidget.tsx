/**
 * ------------------------------------------------------------------
 * File: BookingWidget.tsx
 *
 * Description:
 * Luxury booking panel (ready for embed / integration).
 *
 * Changes:
 * - Soft panel, no hard border dividers
 * - Clear next-step messaging
 * - Secondary CTA for contact path
 * ------------------------------------------------------------------
 */

import { BOOKING_CONFIG } from "./booking.constants";
import BookingCTA from "./BookingCTA";

export default function BookingWidget() {
  return (
    <div
      className="
        w-full
        rounded-[32px]
        bg-white/75
        px-8
        py-12
        md:px-12
        md:py-14
        text-center
        shadow-[0_16px_50px_rgba(59,42,38,0.05)]
      "
    >
      <span
        className="
          uppercase
          tracking-[0.35em]
          text-[10px]
          sm:text-xs
          text-[#8C5A6B]
        "
      >
        {BOOKING_CONFIG.widgetEyebrow}
      </span>

      <h3
        className="
          mt-4
          font-serif
          text-3xl
          md:text-4xl
          text-[#3B2A26]
        "
      >
        {BOOKING_CONFIG.widgetTitle}
      </h3>

      <p
        className="
          mx-auto
          mt-5
          max-w-xl
          text-base
          md:text-lg
          leading-relaxed
          text-[#8C7468]
        "
      >
        {BOOKING_CONFIG.widgetDescription}
      </p>

      <div className="mt-9 flex flex-col items-center gap-4">
        <BookingCTA />

        <p className="text-sm text-[#8C7468]">
          Prefer to talk first?{" "}
          <a
            href={BOOKING_CONFIG.contactHref}
            className="
              font-medium
              text-[#8C5A6B]
              underline-offset-4
              transition
              hover:underline
            "
          >
            {BOOKING_CONFIG.contactLabel}
          </a>
        </p>
      </div>

      {/*
        Replace this block later with your real booking embed, e.g.:
        <div className="mt-10 w-full" id="booking-embed" />
      */}
    </div>
  );
}
