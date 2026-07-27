/**
 * -----------------------------------------------------------------------------
 * File: Testimonials.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main testimonials section.
 *
 * Changes:
 * - July 27, 2026
 *   - Added customer social proof.
 *
 * -----------------------------------------------------------------------------
 */


import {

testimonials

}

from "./testimonials.data";


import TestimonialCard from "./TestimonialCard";



export default function Testimonials(){



return (


<section

className="
bg-brand-ivory
px-6
py-24
"

>


<div

className="
mx-auto
max-w-7xl
"

>



<div

className="
text-center
"

>


<p

className="
uppercase
tracking-[0.35em]
text-sm
text-brand-champagne
"

>

Client Love

</p>



<h2

className="
mt-5
text-4xl
md:text-5xl
"

>

Loved By Our Clients

</h2>



</div>





<div

className="
mt-16
grid
gap-6
md:grid-cols-3
"

>


{

testimonials.map((item)=>(


<TestimonialCard

key={item.id}

testimonial={item}

/>


))


}


</div>



</div>


</section>


);


}
