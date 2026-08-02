/**
 *
 * ---
 * File:
 * features/booking/BookingCTA.tsx
 *
 * Description:
 * Luxury booking call-to-action button.
 *
 * Updates:
 * • Converted from external link to widget trigger
 * • Removed new tab behavior
 * • Opens same-page booking modal
 * • Preserved luxury CTA styling
 * • Matches navbar booking button
 *
 * ---
 *
 */


interface BookingCTAProps {

  onClick: () => void;

}




export default function BookingCTA({
  onClick,
}: BookingCTAProps) {


  return (

    <button

      type="button"

      onClick={onClick}

      className="
        inline-flex


        min-h-[64px]

        md:min-h-[72px]

        xl:min-h-[78px]



        min-w-[260px]

        md:min-w-[300px]

        xl:min-w-[340px]



        items-center

        justify-center



        rounded-full



        border-2

        border-[#8C5A6B]



        px-16

        md:px-20

        xl:px-24



        uppercase



        tracking-[0.22em]



        text-xs

        md:text-sm

        xl:text-base



        font-bold



        whitespace-nowrap



        text-[#8C5A6B]



        bg-transparent



        shadow-sm



        transition-all

        duration-500



        hover:bg-[#8C5A6B]

        hover:text-white



        hover:shadow-lg



        hover:-translate-y-1
      "

    >

      Book Your Appointment

    </button>

  );

}
