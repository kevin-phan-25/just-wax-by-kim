/**
 * -----------------------------------------------------------------------------
 * File:
 * app/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 * -----------------------------------------------------------------------------
 */

import ServicePricingPage from "@/features/services/ServicePricingPage";

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


<ServicePricingPage

id="gentlemen-pricing"

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
