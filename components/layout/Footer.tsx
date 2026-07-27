/**
 * -----------------------------------------------------------------------------
 * File: Footer.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury footer section.
 *
 * Changes:
 * - July 27, 2026
 *   - Added v0.9.0 footer redesign.
 *
 * -----------------------------------------------------------------------------
 */


import {

business

}

from "@/constants/business";


import {

socialLinks

}

from "@/constants/social";



export default function Footer(){


return (

<footer

className="
bg-brand-black
px-6
py-16
text-white
"

>


<div

className="
mx-auto
max-w-7xl
grid
gap-10
md:grid-cols-3
"

>


<div>


<h2

className="
text-2xl
"

>

{business.name}

</h2>


<p className="
mt-4
text-white/70
"

>

{business.tagline}

</p>


</div>




<div>


<h3>

Connect

</h3>


<div className="
mt-4
space-y-3
"

>


{

socialLinks.map(item=>(


<a

key={item.name}

href={item.url}

className="
block
text-white/70
hover:text-white
"

>

{item.name}

</a>


))


}


</div>


</div>




<div>


<h3>

Contact

</h3>


<p className="
mt-4
text-white/70
"

>

{business.location}

</p>


<p>

{business.phone}

</p>


</div>


</div>



<div

className="
mt-12
border-t
border-white/20
pt-6
text-center
text-sm
text-white/60
"

>


© 2026 {business.name}. All rights reserved.


</div>



</footer>

);


}
