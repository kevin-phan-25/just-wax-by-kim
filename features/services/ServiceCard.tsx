/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Changes:
 * - Removed fixed sizing
 * - Full width card
 * - Cleaner editorial spacing
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

}: ServiceCardProps){


return (

<article

className="
  w-full
  text-center

  p-8

  transition-all
  duration-300
"

>


<h3

className="
  font-serif
  text-2xl
  text-[#3B2A26]
"

>

{service.title}

</h3>



<p

className="
  mt-5
  leading-relaxed
  text-[#8C7468]
"

>

{service.description}

</p>




<div

className="
  mt-8
  pt-6

  border-t
  border-[#E8DDD8]

"

>

<span

className="
  text-[#8C5A6B]
  font-medium
  text-lg
"

>

{service.price}

</span>


</div>



</article>


);


}
