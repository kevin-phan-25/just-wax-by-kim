/**
 * -----------------------------------------------------------------------------
 * File: ServiceCard.tsx
 *
 * Description:
 * Luxury service presentation card.
 *
 * v1.0.0 Production:
 * - Uses Service object
 * - Supports future expansion
 * - Keeps pricing and content centralized
 *
 * -----------------------------------------------------------------------------
 */


import { Service } from "./services.types";


interface ServiceCardProps {

  service: Service;

}



export default function ServiceCard({

  service,

}: ServiceCardProps) {


return (

<article

className="
group
rounded-3xl
border
border-brand-gold/20
bg-white
p-8
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
"

>


<div className="space-y-5">


<h3

className="
text-2xl
font-semibold
tracking-wide
text-brand-dark
"

>

{service.title}

</h3>



<p

className="
text-sm
leading-relaxed
text-neutral-600
"

>

{service.description}

</p>



<div

className="
flex
items-center
justify-between
border-t
border-neutral-200
pt-5
"

>


<span

className="
text-xl
font-semibold
text-brand-gold
"

>

{service.price}

</span>



<span

className="
text-sm
text-neutral-500
"

>

{service.duration}

</span>



</div>


</div>


</article>

);


}
