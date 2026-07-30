import ServiceCard from "./ServiceCard";
import type { Service } from "./services.types";


interface Props {

title:string;

description:string;

services:Service[];

}


export default function ServicePricingPage({

title,
description,
services,

}:Props){


return (

<section
className="
px-6
py-32
"
>

<div
className="
mx-auto
max-w-7xl
"
>


<header
className="
mx-auto
max-w-3xl
text-center
"
>

<h1
className="
font-serif
text-5xl
text-[#3B2A26]
"
>
{title}
</h1>


<p
className="
mt-6
text-lg
text-[#8C7468]
"
>
{description}
</p>


</header>



<div
className="
mt-16
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"
>

{
services.map(service=>(

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
