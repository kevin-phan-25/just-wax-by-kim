/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroImage.tsx
 *
 * Description:
 * Hero background image.
 *
 * v1.0.2
 *
 * -----------------------------------------------------------------------------
 */


import Image from "next/image";


export default function HeroImage(){


return (

<div

className="
absolute
inset-0
"

>


<Image

src="/hero/hero-main.webp"

alt="Luxury waxing studio"

fill

priority

className="
object-cover
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-r
from-black/60
via-black/30
to-transparent
"

/>


</div>

);


}
