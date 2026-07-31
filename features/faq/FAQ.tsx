/**
 *
 * ---
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Standalone luxury FAQ presentation.
 *
 * Changes:
 * • Converted from homepage section
 * • Added full-page editorial layout
 * • Added luxury ambient background
 * • Removed dashboard-style appearance
 * • Added booking conversion CTA
 * • Improved spacing rhythm
 *
 * ---
 *
 */

import FAQAccordion from "./FAQAccordion";

import {
  FAQ_DATA,
} from "./faq.data";

import {
  FAQ_CONSTANTS,
} from "./faq.constants";


export default function FAQ() {

  return (

    <section
      id="faq"
      className="
        relative
        overflow-hidden
        py-24
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.28),transparent_65%)]
        "
      />


      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-[#8C5A6B]
            "
          >
            Helpful Information
          </p>


          <h1
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            {FAQ_CONSTANTS.title}
          </h1>


          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-[#8C7468]
            "
          >
            {FAQ_CONSTANTS.subtitle}
          </p>

        </header>



        {/* FAQ LIST */}
        <div
          className="
            mx-auto
            mt-20
            max-w-5xl
          "
        >

          <FAQAccordion
            items={FAQ_DATA}
          />

        </div>



        {/* CTA */}
        <div
          className="
            mt-20
            flex
            justify-center
          "
        >

          <a
            href="/#booking"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border-2
              border-[#8C5A6B]
              px-12
              py-5
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
              text-[#8C5A6B]
              transition
              hover:bg-[#F6E7E1]
            "
          >
            Book Appointment
          </a>

        </div>


      </div>

    </section>

  );

}
