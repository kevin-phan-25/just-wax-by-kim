/**
 * -----------------------------------------------------------------------------
 * File:
 * Hero.tsx
 *
 * Created:
 * July 27, 2026
 *
 * Description:
 * Luxury hero section.
 *
 * Changes:
 * - v1.0.1 visual redesign.
 *
 * -----------------------------------------------------------------------------
 */


import HeroButtons from "./HeroButtons";



export default function Hero(){


return (


<section

className="
relative
overflow-hidden
bg-[#FAF7F2]
px-6
py-24
md:py-40
"


>


<div

className="
mx-auto
max-w-6xl
grid
gap-12
md:grid-cols-2
items-center
"


>


<div>



<p

className="
uppercase
tracking-[0.4em]
text-sm
text-[#C9A227]
"

>

Luxury Wax Studio

</p>



<h1

className="
mt-6
font-serif
text-5xl
leading-tight
md:text-7xl
"

>

More Than

<br/>

<span className="text-[#C9A227]">

Just a Wax

</span>


</h1>



<p

className="
mt-8
max-w-lg
text-lg
leading-relaxed
text-gray-600
"

>

A premium waxing experience focused on comfort,
confidence, and elegance.

</p>


<HeroButtons />


</div>




<div

className="
relative
h-[500px]
rounded-[40px]
bg-gradient-to-br
from-[#E8C7C8]
to-[#FAF7F2]
luxury-shadow
flex
items-center
justify-center
"


>


<div

className="
text-center
"

>

<p className="
text-2xl
font-serif
">

Luxury Studio

</p>


<p className="
mt-3
text-gray-500
">

Image Coming Soon

</p>


</div>


</div>


</div>


</section>


);


}
