/**
 *
 * ---
 * File:
 * Booking.tsx
 *
 * Description:
 * Luxury booking experience section.
 *
 * Updates:
 * • Full width editorial layout
 * • Removed duplicate messaging
 * • Unified site background (#FBF7F4)
 * • Stronger CTA hierarchy
 * • Preserved id="booking"
 * • Responsive spacing
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";
import BookingCTA from "./BookingCTA";
import BookingBenefits from "./BookingBenefits";
import BookingWidget from "./BookingWidget";

export default function Booking() {
  return (
    <section
      id="booking"
      className="
        w-full
        bg-[#FBF7F4]
      "
    >

      {/* TOP SPACING */}
      <div
        className="
          h-8
          md:h-10
          lg:h-[48px]
        "
      />


      {/* HERO CONTENT */}
      <div
        className="
          w-full
          px-6
          md:px-10
          lg:px-16
        "
      >

        <header
          className="
            mx-auto
            w-full
            text-center
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
            {BOOKING_CONFIG.eyebrow}
          </p>


          <h2
            className="
              mt-6
              mx-auto
              max-w-5xl
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-[1.08]
              tracking-[-0.03em]
              text-[#3B2A26]
            "
          >
            {BOOKING_CONFIG.title}
          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-base
              md:text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {BOOKING_CONFIG.description}
          </p>


          {/* PRIMARY CTA */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <BookingCTA />


            <p
              className="
                text-sm
                text-[#8C7468]
              "
            >
              {BOOKING_CONFIG.reassurance}
            </p>

          </div>

        </header>



        {/* BENEFITS */}
        <div
          className="
            mt-20
            md:mt-24
          "
        >
          <BookingBenefits />
        </div>



        {/* BOOKING EMBED AREA */}
        <div
          className="
            mt-20
            md:mt-24
            w-full
          "
        >
          <BookingWidget />
        </div>


      </div>



      {/* BOTTOM SPACING */}
      <div
        className="
          h-8
          md:h-10
          lg:h-[48px]
        "
      />

    </section>
  );
}
