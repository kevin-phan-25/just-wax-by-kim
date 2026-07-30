/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Hero-style spacing
 * - Full width editorial layout
 * - 4 column desktop grid
 * - Balanced card sizing
 * - Centered typography
 * -----------------------------------------------------------------------------
 */


import ServiceCard from "./ServiceCard";

import type {
  Service,
} from "./services.types";


interface ServicePricingSectionProps {

  id:string;

  title:string;

  description:string;

  services:Service[];

}



export default function ServicePricingSection({

  id,

  title,

  description,

  services,

}:ServicePricingSectionProps){


return (

<section

id={id}

className="
relative
overflow-hidden
scroll-mt-[168px]
pb-24
"

>


{/* NAVBAR CLEARANCE */}

<div

className="
h-[216px]
"

/>



<div

className="
w-full
px-6
sm:px-10
lg:px-16
"

>



{/* HEADER */}

<div

className="
w-full
text-center
mb-20
"

>


<h1

className="
font-serif
text-4xl
md:text-5xl
lg:text-6xl
font-medium
text-[#3B2A26]
"

>

{title}

</h1>



<p

className="
mx-auto
mt-6
max-w-5xl
text-lg
leading-relaxed
text-[#8C7468]
"

>

{description}

</p>


</div>




{/* GRID */}

<div

className="
grid
w-full
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{

services.map((service)=>(


<ServiceCard

key={service.id}

service={service}

/>


))

}


</div>



</div>



</section>

);

}
