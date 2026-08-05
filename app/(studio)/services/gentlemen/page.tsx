/**
 *
 * ---
 * File:
 * app/(studio)/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 *
 * Updates:
 * • Added centered gentlemen hero image
 * • Responsive image sizing
 * • Added existing BookingCTA below pricing
 * • Added existing BookingWidget modal support
 * • Preserved InclusiveBooking section
 *
 * ---
 *
 */

"use client";

import {
  useState,
} from "react";

import ServicePricingPage from "@/features/services/ServicePricingPage";
import InclusiveBooking from "@/features/services/InclusiveBooking";

import BookingCTA from "@/features/booking/BookingCTA";
import BookingWidget from "@/features/booking/BookingWidget";

import {
  gentlemenServices,
} from "@/features/services/data/gentlemen.data";


export default function GentlemenServicesPage() {

  const [
    bookingOpen,
    setBookingOpen,
  ] = useState(false);


  return (
    <>

      {/* GENTLEMEN HERO IMAGE */}
      <section
        className="
          w-full

          bg-[#FBF7F4]

          pt-8

          sm:pt-10

          md:pt-14

          px-5

          sm:px-8

          md:px-10
        "
      >

        <div
          className="
            mx-auto

            flex

            justify-center
          "
        >

          <img
            src="/images/services/gentlemen_on_page.jpg"
            alt="Gentlemen luxury waxing services"
            className="
              w-[85%]

              sm:w-[70%]

              md:w-[55%]

              lg:w-[45%]

              max-w-[650px]

              h-auto

              rounded-[32px]

              object-contain
            "
          />

        </div>

      </section>



      {/* PRICING */}
      <ServicePricingPage
        id="gentlemen-pricing"

        title="Gentlemen Waxing"

        description="
          Professional waxing services focused on comfort,
          confidence, and personalized care.
        "

        services={gentlemenServices}
      />



      {/* BOOKING CTA */}
      <section
        className="
          flex

          justify-center

          py-12

          sm:py-16
        "
      >

        <BookingCTA
          onClick={() =>
            setBookingOpen(true)
          }
        />

      </section>



      {/* BOOKING MODAL */}
      <BookingWidget
        open={bookingOpen}

        onClose={() =>
          setBookingOpen(false)
        }
      />



      {/* INCLUSIVE MESSAGE */}
      <InclusiveBooking />

    </>
  );

}
