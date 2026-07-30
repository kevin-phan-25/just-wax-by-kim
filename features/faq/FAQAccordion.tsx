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
