/**
 * -----------------------------------------------------------------------------
 * File: ContactHours.tsx
 *
 * Description:
 * Luxury studio hours display.
 *
 * Redesigned:
 * - Boutique spa styling
 * - Elegant visual hierarchy
 * - Icon header
 * - Premium spacing
 *
 * -----------------------------------------------------------------------------
 */

import {
  Clock3,
} from "lucide-react";

const HOURS = [
  {
    day: "Monday – Friday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Saturday",
    time: "9:00 AM – 3:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

export default function ContactHours() {
  return (
    <div>
      {/* Header */}

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-brand-dusty-pink/10
          "
        >
          <Clock3
            size={20}
            className="text-brand-dusty-pink"
          />
        </div>

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.30em]
              text-brand-dusty-pink
            "
          >
            Availability
          </p>

          <h3
            className="
              mt-1
              font-serif
              text-3xl
              text-brand-espresso
            "
          >
            Studio Hours
          </h3>
        </div>
      </div>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-md
          leading-8
          text-brand-taupe
        "
      >
        Every appointment is thoughtfully scheduled to provide a calm,
        unhurried experience with personalized attention from beginning
        to end.
      </p>

      {/* Schedule */}

      <div
        className="
          mt-10
          overflow-hidden
          rounded-3xl
          border
          border-brand-border
          bg-white
        "
      >
        {HOURS.map((item, index) => (
          <div
            key={item.day}
            className={`
              flex
              items-center
              justify-between
              px-8
              py-6
              ${
                index !== HOURS.length - 1
                  ? "border-b border-brand-border/60"
                  : ""
              }
            `}
          >
            <div>
              <p
                className="
                  font-medium
                  text-brand-espresso
                "
              >
                {item.day}
              </p>
            </div>

            <div>
              <span
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  ${
                    item.time === "Closed"
                      ? "bg-gray-100 text-gray-500"
                      : "bg-brand-cream text-brand-espresso"
                  }
                `}
              >
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}

      <div
        className="
          mt-8
          rounded-2xl
          bg-brand-cream/70
          px-6
          py-5
        "
      >
        <p
          className="
            text-sm
            leading-7
            text-brand-taupe
          "
        >
          Appointment times outside regular studio hours may be available
          upon request. Please reach out if you need a time that better
          fits your schedule.
        </p>
      </div>
    </div>
  );
}
