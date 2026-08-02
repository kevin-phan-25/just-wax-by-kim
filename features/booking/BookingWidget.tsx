/**
 *
 * ---
 * File:
 * BookingWidget.tsx
 *
 * Description:
 * Luxury booking modal container.
 *
 * Updates:
 * • Luxury themed modal
 * • GlossGenius ready
 * • Responsive mobile/tablet/desktop
 * • Preserves brand styling
 *
 * ---
 *
 */

"use client";


import { X } from "lucide-react";


interface BookingWidgetProps {

  open: boolean;

  onClose: () => void;

}



export default function BookingWidget({
  open,
  onClose,
}: BookingWidgetProps) {


  if (!open) {
    return null;
  }



  return (

    <>


      {/* BACKDROP */}
      <div
        className="
          fixed

          inset-0

          z-[100]

          bg-[#3B2A26]/40

          backdrop-blur-sm
        "

        onClick={onClose}
      />




      {/* MODAL */}
      <div
        className="
          fixed

          left-1/2

          top-1/2

          z-[110]

          w-[92%]

          max-w-4xl

          -translate-x-1/2

          -translate-y-1/2

          overflow-hidden

          rounded-[36px]

          border

          border-[#E8DDD8]

          bg-[#FCF8F3]

          shadow-[0_40px_120px_rgba(59,42,38,0.25)]
        "
      >



        {/* HEADER */}
        <div
          className="
            flex

            items-center

            justify-between

            border-b

            border-[#E8DDD8]

            px-6

            py-6

            sm:px-10
          "
        >


          <div>

            <p
              className="
                uppercase

                tracking-[0.35em]

                text-xs

                text-[#8C5A6B]
              "
            >
              Reserve Your Experience
            </p>



            <h2
              className="
                mt-3

                font-serif

                text-2xl

                sm:text-3xl

                text-[#3B2A26]
              "
            >
              Book Your Appointment
            </h2>


          </div>




          <button
            type="button"

            onClick={onClose}

            className="
              flex

              h-10

              w-10

              items-center

              justify-center

              rounded-full

              border

              border-[#E8DDD8]

              bg-white

              text-[#3B2A26]

              transition

              hover:bg-[#F6E7E1]
            "
          >

            <X size={18}/>

          </button>



        </div>





        {/* GLOSSGENIUS AREA */}
        <div
          className="
            min-h-[600px]

            bg-white/40

            p-6

            sm:p-10
          "
        >


          {/* 
            FUTURE GLOSSGENIUS EMBED

            Replace this area with:

            <iframe
              src={BOOKING_CONFIG.bookingUrl}
            />

            once GlossGenius provides embed support.
          */}


          <div
            className="
              flex

              h-full

              min-h-[500px]

              items-center

              justify-center

              rounded-[28px]

              border

              border-[#E8DDD8]

              bg-[#FCF8F3]

              text-center

              px-6
            "
          >


            <div>

              <h3
                className="
                  font-serif

                  text-3xl

                  text-[#3B2A26]
                "
              >
                Your Booking Experience
              </h3>


              <p
                className="
                  mt-5

                  max-w-md

                  text-[#8C7468]

                  leading-relaxed
                "
              >
                Your GlossGenius scheduling experience will appear here once your booking link is connected.
              </p>


            </div>


          </div>


        </div>



      </div>


    </>

  );

}
