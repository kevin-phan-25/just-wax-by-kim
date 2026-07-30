/**
 * --------------------------------------------------------------------------
 * File:
 * app/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 *
 * --------------------------------------------------------------------------
 */


import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  gentlemenServices,
} from "@/features/services/data/gentlemen.data";



export default function GentlemenServicesPage(){

return (

<main

className="
  relative

  pt-[216px]

  pb-24
"

>


<div

className="
  container-luxury
"

>


<div

className="
  text-center
  mb-16
"

>


<span

className="
  uppercase
  tracking-[0.4em]
  text-sm
  text-[#8C5A6B]
"

>

Gentlemen Services

</span>



<h1

className="
  mt-6
  font-serif
  text-5xl
  md:text-6xl
  text-[#3B2A26]
"

>

Gentlemen Waxing

</h1>



<p

className="
  mx-auto
  mt-6
  max-w-xl
  text-lg
  leading-relaxed
  text-[#8C7468]
"

>

Professional waxing services designed for men
who value confidence, comfort, and care.

</p>


</div>



<ServicePricingSection

id="gentlemen-pricing"

title="Gentlemen Waxing"

description="
Professional waxing services tailored for men
who value confidence, comfort, and care.
"

services={gentlemenServices}

/>


</div>


</main>

);

}
