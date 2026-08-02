/**
 *
 * ---
 * File:
 * BookingCTA.tsx
 *
 * Description:
 * Luxury booking CTA button.
 *
 * ---
 *
 */


interface BookingCTAProps {

  onClick?: () => void;

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


    uppercase


    tracking-[0.22em]


    text-xs

    md:text-sm


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
