/**
 * -----------------------------------------------------------------------------
 * File: Hero.tsx
 *
 * Description:
 * Luxury hero experience.
 *
 * v1.0.2
 * - Added premium layout.
 * - Added image background.
 * - Added animation layer.
 *
 * -----------------------------------------------------------------------------
 */


import HeroContent from "./HeroContent";

import HeroImage from "./HeroImage";


export default function Hero(){


return (

<section

className="
relative
min-h-screen
flex
items-center
overflow-hidden
"

>


<HeroImage />


<div

className="
relative
z-10
w-full
"

>

<HeroContent />

</div>


</section>

);


}
