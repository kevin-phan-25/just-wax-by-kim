/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Standalone luxury FAQ presentation.
 *
 * Updated:
 * • Matched ServicePricingSection spacing system
 * • Added navbar transition spacer
 * • Removed width restrictions
 * • Preserved centered typography
 * • Full-width FAQ presentation
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
      bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.28),transparent_65%)]
    "
  />



  {/* Navbar Transition Spacer */}

  <div
    className="
      h-[216px]
    "
  />



  {/* Content */}

  <div
    className="
      relative
      z-10
      w-full
      px-6
      text-center
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
          mt-6
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
        w-full
        mt-20
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
