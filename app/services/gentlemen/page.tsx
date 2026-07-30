/**
 * -----------------------------------------------------------------------------
 * File:
 * app/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 * -----------------------------------------------------------------------------
 */

import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  gentlemenServices,
} from "@/features/services/data/gentlemen.data";


export default function GentlemenServicesPage() {


return (

<main

className="
  w-full
  px-6
  pt-[168px]
  pb-24
"

>


<ServicePricingSection

id="gentlemen-pricing"

image="/images/services/gentlemen-waxing.jpg"

title="Gentlemen Waxing"

description="
Professional waxing services designed for men
who value confidence, comfort, and care.
"

services={gentlemenServices}

/>


</main>


);


}
