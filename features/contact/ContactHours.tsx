/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/ContactHours.tsx
 *
 * Description:
 * Luxury studio hours display.
 *
 * Changes:
 * • Standalone page optimized
 * • Improved spacing rhythm
 *
 * -----------------------------------------------------------------------------
 */

import {
  CONTACT_DATA,
} from "./contact.data";


export default function ContactHours() {

  return (
    <div>

      <h2
        className="
          font-serif
          text-3xl
          text-center
          lg:text-left
          text-[#3B2A26]
        "
      >
        Studio Hours
      </h2>


      <div
        className="
          mt-10
          space-y-6
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
              "
            >

              <span
                className="
                  text-[#8C7468]
                "
              >
                {item.day}
              </span>


              <span
                className="
                  font-medium
                  text-[#3B2A26]
                "
              >
                {item.time}
              </span>

            </div>

          ))
        }

      </div>


      <p
        className="
          mt-10
          leading-relaxed
          text-[#8C7468]
        "
      >
        Appointments are available by reservation only.
        Booking ahead is recommended to secure your preferred
        date and time.
      </p>


    </div>
  );
}
