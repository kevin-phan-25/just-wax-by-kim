/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Standalone luxury FAQ presentation.
 *
 * Updated:
 * • Matched Contact / Gallery / Testimonials spacing system
 * • Added internal navbar clearance (spacer pattern)
 * • Removed width restrictions
 * • Centered FAQ content properly
 * • Preserved editorial typography
 * -----------------------------------------------------------------------------
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
        w-full
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
      "
    >


      {/* Ambient Background */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
        "
      />


      {/* Navbar Transition Spacer */}
      <div className="h-[216px]" />


      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          w-full
          px-6
          text-center
          pb-32
        "
      >


        {/* HEADER */}

        <header
          className="
            w-full
            mb-16
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
              mt-8
              mx-auto
              max-w-3xl
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {FAQ_CONSTANTS.subtitle}
          </p>


        </header>









        {/* FAQ CONTENT */}

        <div
          className="
            mt-20
            mx-auto
            w-full
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






      {/* Bottom Divider */}

      <div
        aria-hidden
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-[#E8DDD8]
        "
      />


    </section>

  );

}
