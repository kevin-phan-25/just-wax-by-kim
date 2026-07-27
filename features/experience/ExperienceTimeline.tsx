/**
 * -----------------------------------------------------------------------------
 * File: ExperienceTimeline.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Customer journey timeline.
 *
 * Changes:
 * - v1.0.3
 *   - Added appointment journey visualization.
 *
 * -----------------------------------------------------------------------------
 */


import {
EXPERIENCE_TIMELINE
}
from "./experience.data";



export default function ExperienceTimeline(){


return (

<div

className="
mt-12
space-y-8
"

>


{

EXPERIENCE_TIMELINE.map(item=>(


<div

key={item.step}

className="
flex
gap-5
"

>


<div

className="
font-serif
text-brand-gold
text-xl
"

>

{item.step}

</div>


<div>


<h4

className="
font-serif
text-xl
"

>

{item.title}

</h4>


<p

className="
mt-2
text-gray-600
"

>

{item.description}

</p>


</div>



</div>


))

}


</div>

);


}
