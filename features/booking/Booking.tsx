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
 * • Removed duplicate booking widget
 * • Single GlossGenius CTA
 * • Centered typography
 * • Responsive spacing
 * • Matches site background
 *
 * ---
 *
 */

import { BOOKING_CONFIG } from "./booking.constants";
import BookingCTA from "./BookingCTA";
import BookingBenefits from "./BookingBenefits";

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


      {/* FULL WIDTH CONTENT */}
      <div
        className="
          w-full
          px-5
          sm:px-8
          md:px-10
          lg:px-16
        "
      >

        {/* HEADER */}
        <header
          className="
            w-full
            flex
            flex-col
            items-center
            justify-center
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
              w-full
              text-center
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-tight
              tracking-[-0.03em]
              text-[#3B2A26]
            "
          >
            {BOOKING_CONFIG.title}
          </h2>


          <p
            className="
              mt-8
              w-full
              text-center
              text-base
              md:text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {BOOKING_CONFIG.description}
          </p>


          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >

            <BookingCTA />


            <p
              className="
                text-center
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
