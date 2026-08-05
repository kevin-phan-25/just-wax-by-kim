/**
 *
 * ---
 * File:
 * app/(studio)/services/ladies/page.tsx
 *
 * Description:
 * Ladies waxing pricing page.
 *
 * Updates:
 * • Added centered ladies hero image
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
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage() {

  const [
    bookingOpen,
    setBookingOpen,
  ] = useState(false);


  return (
    <>

      {/* LADIES HERO IMAGE */}
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
            src="/images/services/ladies_on_page.jpg"
            alt="Ladies luxury waxing services"
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
        id="ladies-pricing"

        title="Ladies Waxing"

        description="
          Professional waxing services created with precision,
          comfort, and personalized care.
        "

        services={ladiesServices}
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
