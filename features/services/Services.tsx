/**
 * -----------------------------------------------------------------------------
 * File: Services.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main luxury services section.
 *
 * Changes:
 * - July 27, 2026
 *   - Rebuilt service experience.
 *
 * -----------------------------------------------------------------------------
 */


import {
SERVICES_CONFIG
} from "./services.constants";


import {
serviceCategories
} from "./services.data";


import ServiceCategory from "./ServiceCategory";

import ServiceGrid from "./ServiceGrid";

import ServicePricing from "./ServicePricing";



export default function Services(){


return (

<section

className="
bg-brand-ivory
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


<div className="
text-center
">


<p className="
text-sm
uppercase
tracking-[0.35em]
text-brand-champagne
">

{SERVICES_CONFIG.eyebrow}

</p>



<h2 className="
mt-5
text-4xl
md:text-5xl
">

{SERVICES_CONFIG.title}

</h2>



<p className="
mx-auto
mt-6
max-w-2xl
text-brand-taupe
">

{SERVICES_CONFIG.description}

</p>


</div>



<div className="
mt-16
grid
gap-8
md:grid-cols-3
">


{

serviceCategories.map((category)=>(


<ServiceCategory

key={category.title}

category={category}

/>


))

}


</div>



<div className="
mt-16
">

<ServiceGrid />

</div>



<ServicePricing />


</div>


</section>

);


}
