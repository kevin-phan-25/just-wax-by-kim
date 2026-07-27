/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceCard.tsx
 *
 * Changes:
 * - v1.0.1 luxury cards.
 *
 * -----------------------------------------------------------------------------
 */


export default function ServiceCard({

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
bg-white
p-8
luxury-shadow
hover:-translate-y-2
transition
"


>


<div

className="
mb-5
h-12
w-12
rounded-full
bg-[#E8C7C8]
"


/>



<h3

className="
font-serif
text-2xl
"

>

{title}

</h3>


<p

className="
mt-4
text-gray-600
"

>

{description}

</p>


</div>


);


}
