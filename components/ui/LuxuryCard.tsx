/**
 * -----------------------------------------------------------------------------
 * File: LuxuryCard.tsx
 *
 * Description:
 * Premium brand card component.
 *
 * v1.0.2
 *
 * -----------------------------------------------------------------------------
 */


export default function LuxuryCard({

title,
description

}:{

title:string;

description:string;

}){


return (

<div

className="
rounded-3xl
bg-white/80
backdrop-blur
border
border-brand-gold/20
p-8
shadow-sm
hover:shadow-xl
transition-all
duration-500
"

>


<h3

className="
font-serif
text-2xl
text-brand-black
"

>

{title}

</h3>



<p

className="
mt-4
text-neutral-600
leading-relaxed
"

>

{description}

</p>


</div>

);


}
