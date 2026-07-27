/**
 * -----------------------------------------------------------------------------
 * File: About.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main About Kim section.
 *
 * Changes:
 * - July 27, 2026
 *   - Created luxury about layout.
 *
 * -----------------------------------------------------------------------------
 */


import AboutContent from "./AboutContent";

import AboutImage from "./AboutImage";


export default function About() {


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
grid
max-w-7xl
items-center
gap-12
md:grid-cols-2
"
>


<AboutImage />


<AboutContent />


</div>


</section>

);

}
