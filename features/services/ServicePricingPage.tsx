/**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing page.
 *
 * Updates:
 * • Added id support
 * • Compact pricing layout
 * • Reduced mobile scrolling
 * • Removed pricing disclaimer
 * • Added Inclusive Booking footer
 *
 * ---
 *
 */


import ServiceGrid from "./ServiceGrid";
import InclusiveBooking from "./InclusiveBooking";

import type { Service } from "./services.types";


interface Props {

  id?: string;

  title: string;

  description: string;

  services: Service[];

}



const categoryTitles: Record<string,string> = {

  "Brazilian Waxing":
    "Brazilian",

  Face:
    "Face",

  Body:
    "Body",

};



export default function ServicePricingPage({

  id,

  title,

  description,

  services,

}: Props) {



const groupedServices =
services.reduce<Record<string,Service[]>>(
(groups,service)=>{


if(!groups[service.category]) {

  groups[service.category] = [];

}


groups[service.category].push(service);


return groups;


},{});




/*
|--------------------------------------------------------------------------
| Category Order
|--------------------------------------------------------------------------
|
| Brazilian stays first.
| Everything else follows body categories.
|
*/


const categoryOrder = [

  "Brazilian Waxing",

  "Face",

  "Body",

];




const orderedCategories =
categoryOrder.filter(
(category)=>groupedServices[category]
);




return (

<section

id={id}

className="
relative

w-full

px-5

sm:px-8

md:px-12

lg:px-20

py-14

sm:py-16

md:py-20
"

>


{/* BACKGROUND */}

<div

aria-hidden

className="
pointer-events-none

absolute

inset-0

bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.18),transparent_60%)]
"

/>



<div

className="
relative

z-10

"

>


<header

className="
mx-auto

max-w-4xl

text-center

mb-8

sm:mb-10

"

>


<h1

className="
font-serif

text-3xl

sm:text-4xl

md:text-5xl

leading-tight

tracking-[-0.03em]

text-[#3B2A26]
"

>

{title}

</h1>



<p

className="
mt-3

max-w-2xl

mx-auto

text-sm

sm:text-base

leading-relaxed

text-[#8C7468]
"

>

{description}

</p>


</header>





<div

className="
flex

flex-col

gap-8

sm:gap-10

"

>


{orderedCategories.map((category)=>(


<section

key={category}

>


<h2

className="
mb-3

font-serif

text-xl

sm:text-2xl

text-[#3B2A26]

border-b

border-[#D8B4A0]

pb-2
"

>

{categoryTitles[category] ?? category}

</h2>




<ServiceGrid

services={groupedServices[category]}

/>



</section>


))}



</div>




{/* BOOKING NOTE */}

<InclusiveBooking />



</div>


</section>

);

}
