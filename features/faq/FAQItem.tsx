"use client";

import {
  Plus,
  Minus,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  FAQItemType,
} from "./faq.types";


interface Props {

item: FAQItemType;

}


export default function FAQItem({

item,

}:Props){


const [
open,
setOpen
]=useState(false);



return (

<div
  className="
    py-8
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


<span
  className="
    font-serif
    text-xl
    text-[#3B2A26]
  "
>

{item.question}

</span>


{
open

?

<Minus
  size={22}
  className="text-[#8C5A6B]"
/>

:

<Plus
  size={22}
  className="text-[#8C5A6B]"
/>

}


</button>



{
open &&

<div
  className="
    mt-5
    max-w-4xl
    text-[#8C7468]
    leading-relaxed
  "
>

{item.answer}

</div>

}


</div>

);

}
