/**
 *
 * ---
 * File:
 * BookingBenefits.tsx
 *
 * Description:
 * Luxury booking benefit editorial section.
 *
 * Updates:
 * • Removed card styling
 * • Editorial three-column layout
 * • Improved spacing hierarchy
 * • Centered luxury presentation
 * • Responsive mobile/tablet/desktop
 *
 * ---
 *
 */

import { bookingBenefits } from "./booking.data";

export default function BookingBenefits() {
  return (
    <section
      className="
        w-full
      "
    >

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
          md:gap-10
          lg:gap-16
          items-start
        "
      >

        {bookingBenefits.map((item) => (

          <article
            key={item.title}
            className="
              flex
              flex-col
              items-center
              text-center
              px-4
            "
          >

            {/* ICON */}
            <div
              className="
                flex
                items-center
                justify-center
                h-14
                w-14
                rounded-full
                bg-[#E8C8BC]/40
                font-serif
                text-2xl
                text-[#8C5A6B]
              "
            >
              {item.icon}
            </div>



            {/* TITLE */}
            <h3
              className="
                mt-6
                font-serif
                text-2xl
                md:text-3xl
                text-[#3B2A26]
              "
            >
              {item.title}
            </h3>



            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-sm
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

    </section>
  );
}
