/**
 *
 * ---
 * File:
 * features/faq/FAQ.tsx
 *
 * Description:
 * Luxury FAQ presentation for Just Wax by Kim.
 *
 * Updates:
 * • Added separate Before Waxing section
 * • Added separate After Wax Care section
 * • Improved editorial layout
 * • Luxury spacing system
 * • Responsive phone / tablet / desktop optimization
 *
 * ---
 *
 */


import FAQAccordion from "./FAQAccordion";

import {
  BEFORE_WAXING_FAQ,
  AFTER_WAX_CARE_FAQ,
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


{/* Background Atmosphere */}

<div
  aria-hidden
  className="
    pointer-events-none
    absolute
    inset-0
    bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
  "
/>



{/* Navbar Clearance */}

<div
  className="
    h-[216px]
    md:h-[230px]
  "
/>



<div
  className="
    relative
    z-10

    w-full

    px-6
    md:px-10
    lg:px-16

    pb-40

    flex
    flex-col
    items-center
  "
>



{/* HEADER */}

<header
  className="
    w-full

    flex
    flex-col
    items-center

    text-center

    mb-24
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
    mt-8

    font-serif

    text-4xl
    md:text-6xl

    leading-tight

    text-[#3B2A26]
  "
>
  {FAQ_CONSTANTS.title}
</h1>



<p
  className="
    mt-10

    max-w-3xl

    text-lg

    leading-relaxed

    text-[#8C7468]
  "
>
  {FAQ_CONSTANTS.subtitle}
</p>


</header>





{/* BEFORE WAXING SECTION */}


<section
  className="
    w-full
    max-w-5xl

    mb-28
  "
>


<div
  className="
    text-center
    mb-14
  "
>

<p
  className="
    uppercase
    tracking-[0.3em]

    text-sm

    text-[#8C5A6B]
  "
>
  Preparation
</p>


<h2
  className="
    mt-5

    font-serif

    text-3xl
    md:text-4xl

    text-[#3B2A26]
  "
>
  Before Your Wax Appointment
</h2>


<p
  className="
    mt-5

    max-w-2xl
    mx-auto

    text-[#8C7468]

    leading-relaxed
  "
>
  Everything you need to know before your visit to ensure the safest,
  smoothest, and most comfortable waxing experience.
</p>


</div>



<FAQAccordion
  items={BEFORE_WAXING_FAQ}
/>


</section>







{/* AFTER CARE SECTION */}


<section
  className="
    w-full
    max-w-5xl
  "
>


<div
  className="
    text-center
    mb-14
  "
>

<p
  className="
    uppercase

    tracking-[0.3em]

    text-sm

    text-[#8C5A6B]
  "
>
  Maintenance
</p>



<h2
  className="
    mt-5

    font-serif

    text-3xl
    md:text-4xl

    text-[#3B2A26]
  "
>
  After Wax Care
</h2>



<p
  className="
    mt-5

    max-w-2xl
    mx-auto

    text-[#8C7468]

    leading-relaxed
  "
>
  Proper aftercare helps protect your skin, maintain smooth results,
  and support healthier waxing results over time.
</p>


</div>



<FAQAccordion
  items={AFTER_WAX_CARE_FAQ}
/>



</section>



</div>


</section>

);

}
