/**
 * -----------------------------------------------------------------------------
 * File:
 * LuxuryPromise.tsx
 *
 * Description:
 * Emotional luxury positioning section.
 *
 * v1.0.2
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";

import LuxuryCard from "@/components/ui/LuxuryCard";

import FadeIn from "@/components/motion/FadeIn";


const cards=[


{
title:"Comfort First",
description:
"Every appointment is designed around relaxation, privacy, and confidence."
},


{
title:"Premium Care",
description:
"Every detail is intentional, from technique to atmosphere."
},


{
title:"Confidence",
description:
"Leave feeling beautiful, refreshed, and completely yourself."
}


];



export default function LuxuryPromise(){


return (

<section

className="
py-24
bg-brand-cream
"

>


<Container>


<FadeIn>


<div

className="
text-center
max-w-3xl
mx-auto
"

>

<h2

className="
text-4xl
md:text-5xl
font-serif
"

>

More Than Just A Wax

</h2>


<p

className="
mt-5
text-neutral-600
text-lg
"

>

A luxury experience where beauty,
comfort, and confidence meet.

</p>


</div>


</FadeIn>



<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


{

cards.map(card=>(

<LuxuryCard

key={card.title}

title={card.title}

description={card.description}

/>

))

}


</div>


</Container>


</section>

);


}
