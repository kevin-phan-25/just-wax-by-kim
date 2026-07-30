/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * FAQ accordion collection.
 *
 * Changes:
 *
 * - Full width layout
 * - Improved spacing
 * - Luxury editorial presentation
 *
 * -----------------------------------------------------------------------------
 */

import FAQItem from "./FAQItem";

import {
  FAQItemType,
} from "./faq.types";


interface Props {

items: FAQItemType[];

}


export default function FAQAccordion({

items,

}:Props){


return (

<div
  className="
    w-full
    divide-y
    divide-[#E8DDD8]
  "
>

{
items.map(

(item)=>(

<FAQItem
  key={item.id}
  item={item}
/>

)

)

}

</div>

);

}
