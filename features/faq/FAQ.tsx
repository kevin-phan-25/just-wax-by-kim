/**
 * -----------------------------------------------------------------------------
 * File: FAQ.tsx
 *
 * Description:
 * Luxury FAQ section.
 *
 * Changes:
 * - Removed restrictive max width
 * - Centered FAQ content
 * - Improved luxury spacing
 * -----------------------------------------------------------------------------
 */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
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
    bg-[#FCF8F3]
    px-6
    py-24
  "
>


  <div
    className="
      mx-auto
      w-full
      text-center
    "
  >


    <h2
      className="
        text-4xl
        md:text-5xl
        font-serif
        text-[#3B2A26]
      "
    >
      {FAQ_CONSTANTS.title}
    </h2>



    <p
      className="
        mx-auto
        mt-4
        max-w-2xl
        text-center
        text-[#8C7468]
      "
    >
      {FAQ_CONSTANTS.subtitle}
    </p>



    <div
      className="
        mx-auto
        mt-12
        w-full
        max-w-5xl
        rounded-[32px]
        bg-white
        p-8
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
