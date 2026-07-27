/**
 * -----------------------------------------------------------------------------
 * File:
 * About.tsx
 *
 * Changes:
 * - v1.0.1 luxury about redesign.
 *
 * -----------------------------------------------------------------------------
 */


import AboutContent from "./AboutContent";

import AboutImage from "./AboutImage";



export default function About(){


return (


<section

id="about"

className="
bg-white
px-6
py-24
"


>


<div

className="
mx-auto
max-w-6xl
grid
md:grid-cols-2
gap-16
items-center
"


>


<AboutImage />

<AboutContent />


</div>


</section>


);


}
