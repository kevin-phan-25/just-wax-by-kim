/**
 * -----------------------------------------------------------------------------
 * File: ContactHours.tsx
 *
 * Description:
 * Luxury studio hours.
 *
 * Changes:
 * - July 30, 2026
 *   • Removed fixed sizing
 *   • Matches editorial luxury theme
 *   • Uses global typography
 * -----------------------------------------------------------------------------
 */

import { CONTACT_DATA } from "./contact.data";

export default function ContactHours() {
  return (
    <section>
      <h3
        className="
          font-serif
          text-2xl
          text-brand-espresso
        "
      >
        Studio Hours
      </h3>

      <div
        className="
          mt-6
          space-y-5
        "
      >
        {CONTACT_DATA.hours.map((item) => (
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
                text-brand-taupe
              "
            >
              {item.day}
            </span>

            <span
              className="
                font-medium
                text-brand-espresso
              "
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>

      <p
        className="
          mt-8
          leading-relaxed
          text-brand-taupe
        "
      >
        Appointments are available by reservation only.
        Booking in advance is recommended to secure your
        preferred date and time.
      </p>
    </section>
  );
}
