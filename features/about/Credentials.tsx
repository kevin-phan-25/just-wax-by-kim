/**
 * -----------------------------------------------------------------------------
 * File: Credentials.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Trust building credential cards.
 *
 * Changes:
 * - July 27, 2026
 *   - Added credential display.
 *
 * -----------------------------------------------------------------------------
 */


import {
credentials
} from "./about.data";


export default function Credentials() {


return (

<div
className="
mt-10
space-y-5
"
>


{

credentials.map((item)=>(


<div
key={item.title}
>


<h3 className="
font-semibold
"
>

{item.title}

</h3>


<p className="
text-sm
text-brand-taupe
"
>

{item.description}

</p>


</div>


))

}


</div>

);

}
