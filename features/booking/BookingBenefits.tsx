/**
 * -----------------------------------------------------------------------------
 * File: BookingBenefits.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Booking benefit cards.
 *
 * Changes:
 * - July 27, 2026
 *   - Added trust indicators.
 *
 * -----------------------------------------------------------------------------
 */


import {

bookingBenefits

}

from "./booking.data";



export default function BookingBenefits(){


return (

<div

className="
grid
gap-6
md:grid-cols-3
"

>


{

bookingBenefits.map((item)=>(


<div

key={item.title}

className="
rounded-3xl
border
border-brand-border
p-6
"

>


<h3 className="
font-semibold
">

{item.title}

</h3>



<p className="
mt-3
text-sm
text-brand-taupe
">

{item.description}

</p>



</div>


))


}


</div>

);


}
