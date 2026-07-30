/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Luxury FAQ section.
 *
 * Changes:
 *
 * - Removed fixed width restrictions
 * - Full width editorial layout
 * - Centered FAQ presentation
 * - Improved luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import FAQAccordion from "./FAQAccordion";

import {
  FAQ_DATA,
} from "./faq.data";

import {
  FAQ_CONSTANTS,
} from "./faq.constants";


export default function FAQ(){


return (

<section

  id={FAQ_CONSTANTS.sectionId}

  className="
    w-full
    px-6
    py-24
  "

>


  {/* HEADER */}

  <div

    className="
      w-full
      text-center
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
        mt-6
        text-lg
        text-[#8C7468]
      "

    >

      {FAQ_CONSTANTS.subtitle}

    </p>


  </div>




  {/* FAQ */}

  <div

    className="
      mt-16
      w-full
    "

  >

    <FAQAccordion

      items={FAQ_DATA}

    />

  </div>



</section>

);

}
