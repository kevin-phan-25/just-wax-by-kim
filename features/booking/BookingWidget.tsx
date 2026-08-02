/**
 *
 * ---
 * File:
 * features/booking/BookingWidget.tsx
 *
 * Description:
 * Luxury embedded booking experience.
 *
 * Updates:
 * • Same-page booking modal
 * • GlossGenius iframe support
 * • Luxury editorial styling
 * • Responsive mobile/tablet/desktop layout
 * • Background scroll protection
 * • Premium close interaction
 *
 * ---
 *
 */

"use client";


import {
  useEffect,
} from "react";


import {
  BOOKING_CONFIG,
} from "./booking.constants";




interface BookingWidgetProps {

  open: boolean;

  onClose: () => void;

}





export default function BookingWidget({

  open,

  onClose,

}: BookingWidgetProps) {





  useEffect(()=>{


    if(!open){

      document.body.style.overflow = "";

      return;

    }



    document.body.style.overflow = "hidden";




    return()=>{

      document.body.style.overflow = "";

    };


  },[
    open
  ]);







  if(!open){

    return null;

  }






  return (

    <div

      className="
        fixed

        inset-0

        z-[100]


        flex

        items-center

        justify-center



        bg-[#3B2A26]/40



        backdrop-blur-sm



        px-4

        sm:px-6
      "

      onClick={onClose}

    >





      {/* MODAL */}

      <div

        className="
          relative


          w-full


          max-w-3xl



          h-[85vh]


          overflow-hidden



          rounded-[36px]



          border



          border-[#E8DDD8]



          bg-[#FCF8F3]



          shadow-[0_30px_100px_rgba(59,42,38,0.25)]



          animate-in

          fade-in

          zoom-in-95

          duration-300
        "

        onClick={(e)=>
          e.stopPropagation()
        }

      >






        {/* HEADER */}

        <div

          className="
            absolute


            left-0

            right-0


            top-0


            z-10



            flex

            justify-between

            items-center



            px-6

            py-5



            bg-[#FCF8F3]/90



            backdrop-blur-md



            border-b

            border-[#E8DDD8]
          "

        >




          <div>


            <p

              className="
                uppercase

                tracking-[0.35em]

                text-[10px]

                text-[#8C5A6B]
              "

            >

              Reserve Your Experience

            </p>


            <h3

              className="
                mt-1

                font-serif

                text-xl

                text-[#3B2A26]
              "

            >

              Book Your Appointment

            </h3>


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



              text-lg



              text-[#3B2A26]



              transition



              hover:bg-[#F6E7E1]
            "

            aria-label="Close booking"

          >

            ×


          </button>




        </div>









        {/* GLOSSGENIUS */}

        <iframe

          src={
            BOOKING_CONFIG.bookingUrl
          }


          title="Book appointment"


          className="
            h-full

            w-full


            pt-[82px]
          "


          frameBorder="0"


          loading="lazy"

        />





      </div>





    </div>

  );

}
