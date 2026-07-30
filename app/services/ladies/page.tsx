/**
 * -----------------------------------------------------------------------------
 * File:
 * app/services/ladies/page.tsx
 *
 * Description:
 * Ladies waxing pricing page.
 * -----------------------------------------------------------------------------
 */

import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage() {


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

id="ladies-pricing"
  
image="/images/services/ladies-waxing.jpg"
  
title="Ladies Waxing"

description="
Luxury waxing services designed around comfort,
confidence, and beautifully cared skin.
"

services={ladiesServices}

/>


</main>


);


}
