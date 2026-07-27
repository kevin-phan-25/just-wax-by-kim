/**
 * -----------------------------------------------------------------------------
 * File: ExperienceCard.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Experience highlight card.
 *
 * Changes:
 * - v1.0.3
 *   - Added luxury feature cards.
 *
 * -----------------------------------------------------------------------------
 */


import {
ExperienceItem
}
from "./experience.types";



interface Props {

item:ExperienceItem;

}



export default function ExperienceCard({

item

}:Props){


return (

<div

className="
rounded-2xl
bg-white
p-6
shadow-sm
transition
hover:shadow-lg
"

>


<div

className="
mb-4
text-brand-gold
font-serif
text-xl
"

>

✦

</div>



<h3

className="
font-serif
text-xl
text-brand-dark
"

>

{item.title}

</h3>



<p

className="
mt-3
text-gray-600
leading-relaxed
"

>

{item.description}

</p>


</div>

);


}
