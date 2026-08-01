/**
 *
 * ---
 * File:
 * BookingWidget.tsx
 *
 * Description:
 * Luxury external booking launch.
 *
 * Updates:
 * • Removed placeholder calendar
 * • GlossGenius compatible
 * • Simplified presentation
 * • Centered luxury layout
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";
import BookingCTA from "./BookingCTA";

export default function BookingWidget() {
  return (
    <section
      className="
        w-full
        flex
        justify-center
      "
    >

      <div
        className="
          w-full
          text-center
          py-10
          md:py-14
        "
      >

        <p
          className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-[#8C5A6B]
          "
        >
          {BOOKING_CONFIG.widgetEyebrow}
        </p>


        <h3
          className="
            mt-5
            font-serif
            text-3xl
            md:text-5xl
            text-[#3B2A26]
            whitespace-nowrap
          "
        >
          {BOOKING_CONFIG.widgetTitle}
        </h3>


        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            md:text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          {BOOKING_CONFIG.widgetDescription}
        </p>


        <div
          className="
            mt-10
            flex
            justify-center
          "
        >
          <BookingCTA />
        </div>


      </div>

    </section>
  );
}
