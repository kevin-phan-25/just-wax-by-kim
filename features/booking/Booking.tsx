/**
*

* ---
* File:
* features/booking/Booking.tsx
*
* Description:
* Luxury booking experience section.
*
* Updates:
* • Added luxury booking widget modal
* • Same-page appointment experience
* • Removed external tab behavior
* • Tightened mobile vertical spacing
* • Preserved tablet and desktop spacing
* • Full width editorial layout
* • Responsive phone / iPad / desktop spacing
* • Premium conversion focused layout
* • Centered typography
* • Matches luxury theme system
*
* ---
*

*/

"use client";

import {
useState,
} from "react";

import {
BOOKING_CONFIG,
} from "./booking.constants";

import BookingCTA from "./BookingCTA";

import BookingBenefits from "./BookingBenefits";

import BookingWidget from "./BookingWidget";

export default function Booking() {
const [
widgetOpen,
setWidgetOpen,
] = useState(false);

return (
<section
id="booking"
className="
relative
w-full
overflow-hidden
bg-[#FBF7F4]

```
    pt-10
    sm:pt-16
    md:pt-24
    xl:pt-28

    pb-12
    sm:pb-20
    md:pb-24
  "
>
  {/* CONTENT */}
  <div
    className="
      w-full
      px-5
      sm:px-8
      md:px-10
      lg:px-16
      xl:px-24
    "
  >
    {/* HEADER */}
    <header
      className="
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
          md:text-sm
          text-[#8C5A6B]
        "
      >
        {BOOKING_CONFIG.eyebrow}
      </p>

      <h2
        className="
          mt-4
          sm:mt-6

          max-w-5xl

          font-serif

          text-4xl
          sm:text-5xl
          md:text-6xl

          leading-[1.1]

          tracking-[-0.035em]

          text-[#3B2A26]
        "
      >
        {BOOKING_CONFIG.title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          sm:mt-8

          w-full

          max-w-4xl

          text-center

          text-base
          sm:text-lg

          leading-relaxed

          text-[#8C7468]
        "
      >
        {BOOKING_CONFIG.description}
      </p>

      {/* CTA AREA */}
      <div
        className="
          mt-8
          sm:mt-12

          flex

          flex-col

          items-center

          justify-center

          gap-4
          sm:gap-5
        "
      >
        <BookingCTA
          onClick={() =>
            setWidgetOpen(true)
          }
        />

        <p
          className="
            max-w-xl

            text-center

            text-sm

            leading-relaxed

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
        mt-12
        sm:mt-20
        md:mt-28
      "
    >
      <BookingBenefits />
    </div>
  </div>

  {/* BOOKING WIDGET MODAL */}
  <BookingWidget
    open={widgetOpen}
    onClose={() =>
      setWidgetOpen(false)
    }
  />
</section>
```

);
}
