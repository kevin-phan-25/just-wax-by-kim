/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Changes:
 * - Removed fixed sizing restrictions
 * - Uses full available grid width
 * - Improved luxury spacing
 * - Balanced typography
 * - Keeps gender-neutral service presentation
 * -----------------------------------------------------------------------------
 */


import type {
  Service,
} from "./services.types";


interface ServiceCardProps {

  service: Service;

}



export default function ServiceCard({

  service,

}: ServiceCardProps) {


return (

<article

className="
service-card
w-full
flex
flex-col
items-center
text-center
"

>


{/* SERVICE CATEGORY */}

<p

className="
service-category
"

>

{service.category}

</p>



{/* SERVICE TITLE */}

<h3

className="
service-name
mt-6
font-serif
text-2xl
md:text-3xl
font-medium
text-[#3B2A26]
"

>

{service.title}

</h3>



{/* DESCRIPTION */}

<p

className="
service-description
mt-5
max-w-xl
text-base
leading-relaxed
text-[#8C7468]
"

>

{service.description}

</p>



{/* PRICING */}

<div

className="
service-price
mt-auto
pt-8
w-full
border-t
border-[#E8DDD8]
flex
flex-col
items-center
gap-2
"

>


<span

className="
text-sm
uppercase
tracking-[0.25em]
text-[#9A857A]
"

>

Starting At

</span>



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
