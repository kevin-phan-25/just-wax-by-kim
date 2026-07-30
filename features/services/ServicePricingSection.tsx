/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Removed fixed width restrictions
 * - Full width luxury layout
 * - Centered heading + description
 * - Responsive service grid
 * -----------------------------------------------------------------------------
 */

import ServiceCard from "./ServiceCard";

import type {
  Service,
} from "./services.types";


interface ServicePricingSectionProps {

  id: string;

  title: string;

  description: string;

  services: Service[];

}



export default function ServicePricingSection({

  id,

  title,

  description,

  services,

}: ServicePricingSectionProps) {


return (

<section

id={id}

className="
scroll-mt-[168px]
w-full
py-24
"

>


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
mx-auto
mb-16
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
mx-auto
mt-6
max-w-4xl
text-lg
leading-relaxed
text-[#8C7468]
"

>

{description}

</p>


</div>




{/* SERVICE GRID */}

<div

className="
grid
w-full
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
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
