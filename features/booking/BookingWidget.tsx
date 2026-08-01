/**
 *
 * ---
 * File:
 * BookingWidget.tsx
 *
 * Description:
 * Luxury booking embed container.
 *
 * Updates:
 * • Removed duplicate booking copy
 * • Removed secondary CTA
 * • GlossGenius-ready structure
 * • Soft luxury presentation
 * • Responsive spacing
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";

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
          rounded-[36px]
          bg-white/40
          px-6
          py-12
          md:px-12
          md:py-16
          text-center
        "
      >

        {/* EYEBROW */}
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



        {/* TITLE */}
        <h3
          className="
            mt-5
            font-serif
            text-3xl
            md:text-4xl
            text-[#3B2A26]
          "
        >
          {BOOKING_CONFIG.widgetTitle}
        </h3>



        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-base
            md:text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          {BOOKING_CONFIG.widgetDescription}
        </p>



        {/* BOOKING EMBED PLACEHOLDER */}
        <div
          className="
            mt-10
            w-full
            min-h-[320px]
            rounded-[28px]
            bg-[#FBF7F4]
            flex
            items-center
            justify-center
            px-6
          "
        >

          <p
            className="
              text-sm
              md:text-base
              text-[#8C7468]
            "
          >
            Booking calendar will appear here.
          </p>

        </div>


      </div>

    </section>
  );
}
