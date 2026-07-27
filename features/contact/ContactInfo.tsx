/**
 * -----------------------------------------------------------------------------
 * File: ContactInfo.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Contact information display.
 *
 * Changes:
 * - v1.0.3
 *   - Added luxury contact details.
 *
 * -----------------------------------------------------------------------------
 */


import {

CONTACT_DATA

}

from "./contact.data";



export default function ContactInfo(){


return (


<div

className="
space-y-6
"

>


<div>

<h3

className="
font-serif
text-xl
"

>

Visit The Studio

</h3>


<p

className="
mt-2
text-gray-600
"

>

{CONTACT_DATA.location}

<br/>

{CONTACT_DATA.address}

</p>

</div>





<div>

<h3

className="
font-serif
text-xl
"

>

Contact

</h3>


<p

className="
mt-2
text-gray-600
"

>

{CONTACT_DATA.phone}

<br/>

{CONTACT_DATA.email}

</p>

</div>





<div>

<h3

className="
font-serif
text-xl
"

>

Follow

</h3>


<p

className="
mt-2
text-gray-600
"

>

{CONTACT_DATA.instagram}

</p>

</div>



</div>


);


}
