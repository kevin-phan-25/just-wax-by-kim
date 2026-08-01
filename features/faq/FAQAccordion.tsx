/**
 *
 * ---
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * FAQ accordion collection.
 *
 * ---
 *
 */


import FAQItem from "./FAQItem";

import type {
  FAQItemType,
} from "./faq.types";


interface Props {

items: FAQItemType[];

}


export default function FAQAccordion({
items,
}: Props) {


return (

<div
  className="
    flex
    flex-col

    gap-8

    md:gap-10
  "
>


{
items.map((item)=>(

<FAQItem
  key={item.id}
  item={item}
/>

))
}


</div>

);

}
