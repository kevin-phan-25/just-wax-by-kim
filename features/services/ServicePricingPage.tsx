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
 * • Compact luxury menu layout
 * • Reduced mobile scrolling
 * • Category separation
 * • Removed pricing disclaimer
 *
 * ---
 *
 */


import ServiceGrid from "./ServiceGrid";
import type { Service } from "./services.types";


interface Props {

  id?: string;

  title:string;

  description:string;

  services:Service[];

}



const categoryTitles: Record<string,string> = {

  "Brazilian Waxing":
    "Brazilian & Bikini",

  "Male Brazilian":
    "Male Brazilian",

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

}:Props){


const groupedServices =
services.reduce<Record<string,Service[]>>(
(groups,service)=>{


if(!groups[service.category]){
  groups[service.category]=[];
}


groups[service.category].push(service);


return groups;


},{});



const categoryOrder = [

"Brazilian Waxing",

"Male Brazilian",

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

py-16

sm:py-20
"
>


{/* BACKGROUND */}

<div
aria-hidden
className="
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

mb-10

sm:mb-14
"
>


<h1
className="
font-serif

text-3xl

sm:text-4xl

md:text-5xl

leading-tight

text-[#3B2A26]
"
>
{title}
</h1>


<p
className="
mt-3

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

gap-10

sm:gap-14
"
>


{orderedCategories.map((category)=>(


<section
key={category}
>


<h2
className="
mb-4

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


</div>


</section>

);

}
