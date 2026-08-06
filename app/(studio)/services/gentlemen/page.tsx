/**
 * ---
 * File:
 * app/(studio)/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 *
 * Updates:
 * • Removed inline booking CTA
 * • Added fixed sticky booking bar
 * • Preserved booking widget modal support
 * • Preserved InclusiveBooking section
 * • Responsive image sizing
 * • Responsive luxury layout preserved
 *
 * ---
 */

"use client";

import {
  useState,
} from "react";

import ServicePricingPage from "@/features/services/ServicePricingPage";

import InclusiveBooking from "@/features/services/InclusiveBooking";

import BookingWidget from "@/features/booking/BookingWidget";

import StickyBookingBar from "@/components/layout/StickyBookingBar";

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



      {/* FIXED BOOKING BAR */}

      <StickyBookingBar
        onBookingOpen={() =>
          setBookingOpen(true)
        }
      />



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
