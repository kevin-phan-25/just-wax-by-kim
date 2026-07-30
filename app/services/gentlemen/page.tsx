import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  gentlemenServices,
} from "@/features/services/data/gentlemen.data";


export default function GentlemenServicesPage(){

return (

<main
className="
pt-[168px]
px-6
pb-24
"
>


<section
className="
mx-auto
max-w-7xl
"
>


<div
className="
text-center
max-w-3xl
mx-auto
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
text-[#3B2A26]
"
>
Professional Waxing
<br/>
For Him
</h1>


<p
className="
mt-6
text-lg
text-[#8C7468]
"
>
Luxury grooming services designed for men
who value confidence, comfort, and care.
</p>


</div>



<ServicePricingSection

title="Gentlemen Waxing"

description="
Professional waxing services tailored for men.
"

services={gentlemenServices}

/>


</section>


</main>

);

}
