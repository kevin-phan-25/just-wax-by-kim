/**
 * -----------------------------------------------------------------------------
 * File: FAQAccordion.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * FAQ accordion collection.
 *
 * Changes:
 * - v1.0.2
 *   - Added FAQ list renderer.
 *
 * -----------------------------------------------------------------------------
 */


import FAQItem from "./FAQItem";

import {
FAQItemType
}
from "./faq.types";



interface Props {

items:FAQItemType[];

}



export default function FAQAccordion({

items

}:Props){



return (


<div

className="
divide-y
divide-transparent
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
