/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroImage.tsx
 *
 * Description:
 * Luxury hero image container.
 *
 * Changes:
 * - v1.0.1 added visual treatment.
 *
 * -----------------------------------------------------------------------------
 */


export default function HeroImage(){


return (

<div

className="
relative
h-[520px]
rounded-[40px]
overflow-hidden
bg-gradient-to-br
from-[#E8C7C8]
via-[#FAF7F2]
to-[#C9A227]
shadow-2xl
"

>


<div

className="
absolute
inset-0
flex
items-center
justify-center
"

>

<div className="text-center">


<p

className="
font-serif
text-3xl
"

>

Luxury Studio

</p>


<p

className="
mt-3
text-gray-600
"

>

Kim's photo coming soon

</p>


</div>


</div>


</div>


);


}
