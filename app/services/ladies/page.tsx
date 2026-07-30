import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage(){

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
Ladies Services
</span>


<h1
className="
mt-6
font-serif
text-5xl
text-[#3B2A26]
"
>
Luxury Waxing
<br/>
For Her
</h1>


<p
className="
mt-6
text-lg
text-[#8C7468]
"
>
Personalized waxing services designed around
comfort, confidence, and beautifully cared skin.
</p>


</div>



<ServicePricingSection

id="ladies-pricing"

title="Ladies Waxing"

description="
Premium waxing services created with precision,
comfort, and confidence.
"

services={ladiesServices}

/>


</section>


</main>

);

}
