/**
 * -----------------------------------------------------------------------------
 * File: Booking.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main booking experience section.
 *
 * Changes:
 * - July 27, 2026
 *   - Created luxury booking section.
 *
 * -----------------------------------------------------------------------------
 */


import {

BOOKING_CONFIG

}

from "./booking.constants";


import BookingCTA from "./BookingCTA";

import BookingBenefits from "./BookingBenefits";

import BookingWidget from "./BookingWidget";


import {

businessHours,

cancellationPolicy

}

from "./booking.data";




export default function Booking(){


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


<p className="
uppercase
tracking-[0.35em]
text-sm
text-brand-champagne
">

{BOOKING_CONFIG.eyebrow}

</p>



<h2 className="
mt-5
text-4xl
md:text-5xl
">

{BOOKING_CONFIG.title}

</h2>



<p className="
mx-auto
mt-6
max-w-2xl
text-brand-taupe
">

{BOOKING_CONFIG.description}

</p>



<div className="
mt-8
">

<BookingCTA />

</div>



</div>




<div className="
mt-16
">

<BookingBenefits />

</div>




<div className="
mt-16
grid
gap-10
md:grid-cols-2
">


<BookingWidget />



<div>


<h3 className="
text-2xl
">

Studio Hours

</h3>



<div className="
mt-5
space-y-3
">

{

businessHours.map((item)=>(


<div

key={item.day}

className="
flex
justify-between
text-sm
"

>


<span>

{item.day}

</span>



<span>

{item.hours}

</span>



</div>


))


}

</div>




<p className="
mt-8
text-sm
text-brand-taupe
">

{cancellationPolicy}

</p>



</div>


</div>


</div>


</section>

);


}
