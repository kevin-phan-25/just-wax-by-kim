/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroButtons.tsx
 *
 * Changes:
 * - v1.0.1 luxury CTA styling.
 *
 * -----------------------------------------------------------------------------
 */


import Link from "next/link";



export default function HeroButtons(){


return (


<div

className="
mt-10
flex
gap-4
flex-wrap
"


>


<Link

href="#booking"

className="
rounded-full
bg-[#C9A227]
px-8
py-4
text-white
transition
hover:scale-105
"

>

Book Your Appointment

</Link>



<Link

href="#services"

className="
rounded-full
border
border-[#C9A227]
px-8
py-4
hover:bg-[#C9A227]
hover:text-white
transition
"

>

Explore Services

</Link>



</div>


);


}
