/**
 * --------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Centered pricing section heading
 * - Centered description
 * - Removed fixed sizing constraints
 * - Unified luxury spacing
 *
 * --------------------------------------------------------------------------
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

scroll-mt-[168px]

py-24

"

>


<div

className="

container-luxury

"


>


{/* HEADER */}

<div

className="

mx-auto

max-w-3xl

text-center

mb-16

"

>


<h2

className="

font-serif

text-4xl

md:text-5xl

text-[#3B2A26]

"

>

{title}

</h2>



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





{/* SERVICES GRID */}

<div

className="

grid

gap-8

md:grid-cols-2

lg:grid-cols-3

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
