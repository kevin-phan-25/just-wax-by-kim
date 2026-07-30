/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Changes:
 * - Reduced visual size
 * - Added elegant proportions
 * - Prevents oversized cards
 * -----------------------------------------------------------------------------
 */


import type {
Service,
} from "./services.types";


interface ServiceCardProps {

service:Service;

}



export default function ServiceCard({

service,

}:ServiceCardProps){


return (

<article

className="
service-card
w-full
"

>


<p

className="
service-category
"

>

{service.category}

</p>



<h3

className="
service-name
mt-5
font-serif
text-2xl
text-[#3B2A26]
"

>

{service.title}

</h3>



<p

className="
service-description
mt-4
text-base
leading-relaxed
text-[#8C7468]
"

>

{service.description}

</p>



<div

className="
service-price
mt-8
pt-6
"

>

<span

className="
text-xl
font-medium
text-[#8C5A6B]
"

>

{service.price}

</span>


</div>


</article>


);


}
