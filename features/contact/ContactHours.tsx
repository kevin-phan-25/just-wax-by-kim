/**
 * ---
 * File:
 * features/contact/ContactHours.tsx
 *
 * Description:
 * Luxury studio hours display.
 *
 * Updates:
 * • Standalone contact page optimized
 * • Responsive phone / iPad / desktop
 * • Improved spacing rhythm
 * • Balanced editorial typography
 * • Matches luxury brand system
 *
 * ---
 */

import {
  CONTACT_DATA,
} from "./contact.data";


export default function ContactHours() {

  return (

    <section
      className="
        w-full
      "
    >


      {/* TITLE */}
      <h2
        className="
          font-serif

          text-3xl

          md:text-4xl

          text-center

          lg:text-left

          text-[#3B2A26]
        "
      >
        Studio Hours
      </h2>





      {/* HOURS LIST */}
      <div
        className="
          mt-10

          space-y-5

          w-full

          max-w-md

          mx-auto

          lg:mx-0
        "
      >

        {
          CONTACT_DATA.hours.map((item) => (

            <div
              key={item.day}

              className="
                flex

                items-center

                justify-between

                gap-6

                border-b

                border-[#E8DDD8]

                pb-4
              "
            >

              <span
                className="
                  text-sm

                  sm:text-base

                  text-[#8C7468]
                "
              >
                {item.day}
              </span>



              <span
                className="
                  text-sm

                  sm:text-base

                  font-medium

                  text-right

                  text-[#3B2A26]
                "
              >
                {item.time}
              </span>


            </div>

          ))
        }


      </div>






      {/* DESCRIPTION */}
      <p
        className="
          mt-10

          max-w-md

          mx-auto

          lg:mx-0

          text-center

          lg:text-left

          leading-relaxed

          text-[#8C7468]
        "
      >
        Appointments are available by reservation only.
        Booking ahead is recommended to secure your preferred
        date and time.
      </p>



    </section>

  );

}
