/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroContent.tsx
 *
 * v1.0.2
 *
 * Luxury hero messaging.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";

import FadeIn from "@/components/motion/FadeIn";

import HeroButtons from "./HeroButtons";


export default function HeroContent(){


return (

<Container>


<FadeIn>


<p

className="
uppercase
tracking-[0.3em]
text-sm
text-brand-gold
"

>

Luxury Wax Studio

</p>



<h1

className="
mt-6
text-5xl
md:text-7xl
font-serif
text-white
leading-tight
"

>

More Than

<br/>

Just A Wax

</h1>



<p

className="
mt-6
max-w-xl
text-lg
text-white/80
"

>

A premium waxing experience focused on comfort,
confidence, and elegance.

</p>



<HeroButtons />


</FadeIn>


</Container>

);


}
