/**
 * -----------------------------------------------------------------------------
 * File: FAQ.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury FAQ section.
 *
 * Changes:
 * - v1.0.2
 *   - Added customer education section.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";

import Section from "@/components/ui/Section";

import Heading from "@/components/ui/Heading";


import FAQAccordion from "./FAQAccordion";


import {
FAQ_DATA
}
from "./faq.data";


import {
FAQ_CONSTANTS
}
from "./faq.constants";



export default function FAQ(){



return (


<section

id={FAQ_CONSTANTS.sectionId}

>


<Section>



<Container>



<div

className="
mx-auto
max-w-3xl
"

>


<Heading>

{FAQ_CONSTANTS.title}

</Heading>



<p

className="
mt-4
text-center
text-gray-600
"

>

{FAQ_CONSTANTS.subtitle}

</p>



<div

className="
mt-10
rounded-2xl
bg-white
p-6
shadow-sm
"

>


<FAQAccordion

items={FAQ_DATA}

/>



</div>



</div>



</Container>



</Section>



</section>


);


}
