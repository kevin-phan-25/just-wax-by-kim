/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
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

p-8

text-center

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

mt-4

leading-relaxed

text-[#8C7468]

"

>

{service.description}

</p>




<div

className="

mt-6

pt-6

border-t

border-[#E8DDD8]

"

>


<span

className="

text-[#8C5A6B]

font-medium

"

>

{service.price}

</span>


</div>


</article>


);

}
