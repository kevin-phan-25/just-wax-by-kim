/**
 * -----------------------------------------------------------------------------
 * File:
 * Services.tsx
 *
 * Description:
 * Luxury services landing section.
 *
 * -----------------------------------------------------------------------------
 */


import Link from "next/link";

import ServicePricingSection from "./ServicePricingSection";
import ServicePricing from "./ServicePricing";

import {
ladiesServices
} from "./data/ladies.data";


import {
gentlemenServices
} from "./data/gentlemen.data";



export default function Services(){


return (

<section
id="services"
className="
px-6
py-24
"
>


<div
className="
mx-auto
max-w-7xl
"
>


{/* HEADER */}

<div
className="
mx-auto
max-w-3xl
text-center
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
Our Services
</span>



<h2
className="
mt-6
font-serif
text-4xl
md:text-5xl
text-[#3B2A26]
"
>
Luxury Waxing
<br/>
For Everyone
</h2>



<p
className="
mt-6
text-lg
leading-relaxed
text-[#8C7468]
"
>
Personalized waxing experiences designed around confidence,
comfort, and beautifully cared skin.
</p>


</div>



{/* CATEGORY IMAGES */}


<div
className="
mt-16
grid
gap-10
md:grid-cols-2
"
>


<Link
href="#ladies-services"
className="
group
overflow-hidden
rounded-[36px]
"
>


<img
src="/images/ladies-waxing.jpg"
alt="Ladies waxing"
className="
aspect-[4/5]
w-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>


<div
className="
absolute
"
/>


<div
className="
relative
- mt-32
ml-10
pb-10
text-white
"
>

<h3
className="
font-serif
text-5xl
"
>
Ladies
</h3>


<p
className="
mt-3
uppercase
tracking-[0.3em]
text-sm
"
>
View Services
</p>


</div>


</Link>





<Link
href="#gentlemen-services"
className="
group
overflow-hidden
rounded-[36px]
"
>


<img
src="/images/gentlemen-waxing.jpg"
alt="Gentlemen waxing"
className="
aspect-[4/5]
w-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>



<div
className="
relative
- mt-32
ml-10
pb-10
text-white
"
>

<h3
className="
font-serif
text-5xl
"
>
Gentlemen
</h3>


<p
className="
mt-3
uppercase
tracking-[0.3em]
text-sm
"
>
View Services
</p>


</div>


</Link>


</div>



<ServicePricingSection

id="ladies-services"

title="Ladies Waxing"

description="
Luxury waxing services created around comfort,
precision, and confidence.
"

services={ladiesServices}

/>



<ServicePricingSection

id="gentlemen-services"

title="Gentlemen Waxing"

description="
Professional waxing services designed for men
who value confidence and care.
"

services={gentlemenServices}

/>



<ServicePricing />


</div>


</section>

);

}
