/**
 * ------------------------------------------------------------------
 * File: FAQ.tsx
 *
 * Description:
 * Luxury FAQ section.
 *
 * Changes:
 * 
 * - Removed restrictive max width
 * - Full editorial width layout
 * - Centered luxury presentation
 * - Improved spacing rhythm
 *
 * ------------------------------------------------------------------
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
      id={FAQ_CONSTANTS.sectionId}
      className="
        section-padding
        bg-brand-background
      "
    >

      <div
        className="
          container-luxury
        "
      >

        {/* HEADER */}

        <header
          className="
            text-center
            mx-auto
          "
        >

          <h2
            className="
              font-serif
              text-4xl
              md:text-5xl
              text-[#3B2A26]
            "
          >
            {FAQ_CONSTANTS.title}
          </h2>


          <p
            className="
              mt-5
              text-center
              text-[#8C7468]
              leading-relaxed
            "
          >
            {FAQ_CONSTANTS.subtitle}
          </p>

        </header>



        {/* FAQ CONTENT */}

        <div
          className="
            mt-16
            w-full
            rounded-[40px]
            border
            border-[#E8DDD8]
            bg-white/80
            p-8
            md:p-12
            shadow-[0_20px_60px_rgba(59,42,38,0.06)]
          "
        >

          <FAQAccordion
            items={FAQ_DATA}
          />

        </div>


      </div>

    </section>
  );

}
