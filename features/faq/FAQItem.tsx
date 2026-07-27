/**
 * -----------------------------------------------------------------------------
 * File: FAQItem.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Individual FAQ accordion item.
 *
 * Changes:
 * - v1.0.2
 *   - Added animated expandable FAQ item.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
Plus,
Minus
}
from "lucide-react";


import {
useState
}
from "react";


import {
FAQItemType
}
from "./faq.types";



interface Props {

item:FAQItemType;

}



export default function FAQItem({

item

}:Props){


const [

open,

setOpen

]

=

useState(false);



return (


<div

className="
border-b
border-brand-champagne
py-5
"

>



<button

onClick={()=>setOpen(!open)}

className="
flex
w-full
items-center
justify-between
text-left
"

>



<h3

className="
font-serif
text-lg
text-brand-dark
"

>

{item.question}

</h3>



{

open ?

(

<Minus size={20}/>

)

:

(

<Plus size={20}/>

)

}



</button>




{

open &&

(

<p

className="
mt-4
leading-relaxed
text-gray-600
"

>

{item.answer}

</p>

)

}



</div>


);


}
