/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Contact section.
 *
 * Changes:
 * - v1.0.3
 *   - Added customer communication section.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";

import Section from "@/components/ui/Section";

import Heading from "@/components/ui/Heading";


import ContactInfo from "./ContactInfo";

import ContactHours from "./ContactHours";

import ContactForm from "./ContactForm";


import {

CONTACT_DATA

}

from "./contact.data";



export default function Contact(){


return (


<section id="contact">


<Section>


<Container>



<div

className="
text-center
"

>


<Heading>

Contact Just Wax by Kim

</Heading>



<p

className="
mx-auto
mt-4
max-w-2xl
text-gray-600
"

>

{CONTACT_DATA.description}

</p>


</div>





<div

className="
mt-12
grid
gap-10
md:grid-cols-2
"

>



<div

className="
space-y-10
"

>


<ContactInfo />


<ContactHours />


</div>





<ContactForm />



</div>



</Container>


</Section>


</section>


);


}
