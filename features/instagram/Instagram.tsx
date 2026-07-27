/**
 * -----------------------------------------------------------------------------
 * File: Instagram.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Instagram experience section.
 *
 * -----------------------------------------------------------------------------
 */


import {

INSTAGRAM_CONFIG

}

from "./instagram.constants";


import InstagramGrid from "./InstagramGrid";


import FollowButton from "./FollowButton";



export default function Instagram(){



return (

<section

className="
bg-brand-white
px-6
py-24
"

>


<div

className="
mx-auto
max-w-7xl
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

Social

</p>



<h2

className="
mt-5
text-4xl
"

>

{INSTAGRAM_CONFIG.title}

</h2>



<p

className="
mt-5
text-brand-taupe
"

>

{INSTAGRAM_CONFIG.description}

</p>



<div

className="
mt-10
"

>

<FollowButton />

</div>




<div

className="
mt-16
"

>

<InstagramGrid />

</div>



</div>


</section>

);


}
