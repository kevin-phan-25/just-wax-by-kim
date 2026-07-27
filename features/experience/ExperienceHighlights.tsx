/**
 * -----------------------------------------------------------------------------
 * File: ExperienceHighlights.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Experience cards layout.
 *
 * Changes:
 * - v1.0.3
 *   - Added responsive luxury grid.
 *
 * -----------------------------------------------------------------------------
 */


import ExperienceCard from "./ExperienceCard";

import {
EXPERIENCE_HIGHLIGHTS
}
from "./experience.data";



export default function ExperienceHighlights(){


return (

<div

className="
grid
gap-6
md:grid-cols-3
"

>


{

EXPERIENCE_HIGHLIGHTS.map(item=>(

<ExperienceCard

key={item.id}

item={item}

/>

))

}


</div>

);


}
