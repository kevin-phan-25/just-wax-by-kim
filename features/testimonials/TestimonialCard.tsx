/**
 * -----------------------------------------------------------------------------
 * File: TestimonialCard.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Individual testimonial card.
 *
 * Changes:
 * - July 27, 2026
 *   - Created luxury review card.
 *
 * -----------------------------------------------------------------------------
 */


import type {

Testimonial

}

from "./testimonial.types";



interface Props {

testimonial: Testimonial;

}



export default function TestimonialCard({

testimonial

}: Props){


return (


<div

className="
rounded-3xl
border
border-brand-border
bg-brand-white
p-8
"

>



<div

className="
flex
gap-1
"

>


{

Array.from({

length:testimonial.rating

}).map((_,index)=>(


<span

key={index}

className="
text-brand-gold
"

>

★

</span>


))


}


</div>




<p

className="
mt-6
text-brand-taupe
leading-relaxed
"

>

"{testimonial.quote}"

</p>




<h3

className="
mt-6
font-semibold
"

>

{testimonial.name}

</h3>



</div>


);


}
