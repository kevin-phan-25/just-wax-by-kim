/**
 * -----------------------------------------------------------------------------
 * File: ServiceCard.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Individual service display card.
 *
 * Changes:
 * - July 27, 2026
 *   - Added luxury service card.
 *
 * -----------------------------------------------------------------------------
 */


import type {
Service
} from "./services.types";


interface Props {

service: Service;

}



export default function ServiceCard({
service
}: Props) {


return (

<div

className="
group
rounded-3xl
border
border-brand-border
bg-brand-white
p-8
transition
hover:-translate-y-1
"

>


<div className="
flex
items-start
justify-between
gap-4
">


<h3 className="
text-xl
font-semibold
">

{service.name}

</h3>


<p className="
text-brand-gold
font-medium
">

{service.price}

</p>


</div>



<p className="
mt-5
text-sm
leading-relaxed
text-brand-taupe
">

{service.description}

</p>



<div className="
mt-6
text-sm
text-brand-taupe
">

{service.duration}

</div>



</div>

);

}
