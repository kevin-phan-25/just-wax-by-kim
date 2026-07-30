/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Matches Hero spacing system
 * - Added navbar breathing room
 * - Reduced card presentation width
 * - Centered editorial layout
 * - Removed oversized service grid
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


{/* NAVBAR TRANSITION SPACE */}

<div

className="
h-[216px]
"

/>



<div

className="
container-luxury
"

>



{/* HEADER */}

<div

className="
mx-auto
text-center
max-w-4xl
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
tracking-tight
text-[#3B2A26]
"

>

{title}

</h1>



<p

className="
mt-6
text-lg
leading-relaxed
text-[#8C7468]
"

>

{description}

</p>


</div>




{/* SERVICES */}

<div

className="
flex
justify-center
"

>


<div

className="
grid
w-full
max-w-5xl
grid-cols-1
md:grid-cols-2
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



</div>


</section>


);


}
