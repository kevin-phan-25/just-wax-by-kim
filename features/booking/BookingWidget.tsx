/**
 * ------------------------------------------------------------------
 * File: BookingWidget.tsx
 *
 * Description:
 * Luxury booking widget placeholder.
 *
 * Changes:
 *
 * - Removed generic placeholder styling
 * - Added premium booking panel layout
 * - Centered editorial typography
 * - Ready for future booking integration
 *
 * ------------------------------------------------------------------
 */


export default function BookingWidget() {

  return (

    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
    >


      <span
        className="
          uppercase
          tracking-[0.35em]
          text-sm
          text-brand-dusty-pink
        "
      >

        Online Booking

      </span>



      <h3
        className="
          mt-5
          font-serif
          text-3xl
          text-brand-espresso
        "
      >

        Reserve Your Appointment

      </h3>



      <p
        className="
          mt-5
          max-w-xl
          leading-relaxed
          text-brand-taupe
        "
      >

        Our online booking experience is being prepared.
        Soon you will be able to schedule your luxury
        waxing appointment directly through our studio.

      </p>



      <div
        className="
          mt-8
          rounded-full
          border
          border-brand-border
          bg-brand-background
          px-8
          py-4
          text-sm
          uppercase
          tracking-[0.25em]
          text-brand-taupe
        "
      >

        Booking Portal Coming Soon

      </div>


    </div>

  );

}
