/**
 * -----------------------------------------------------------------------------
 * File: ContactForm.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Contact form UI.
 *
 * Changes:
 * - v1.0.3
 *   - Added customer inquiry form.
 *   - Prepared for future API integration.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


export default function ContactForm(){



return (

<form

className="
space-y-5
"

>


<input

className="
w-full
rounded-xl
border
p-4
outline-none
"

placeholder="Your Name"

/>



<input

className="
w-full
rounded-xl
border
p-4
outline-none
"

placeholder="Email Address"

/>




<input

className="
w-full
rounded-xl
border
p-4
outline-none
"

placeholder="Phone Number"

/>




<textarea

className="
h-32
w-full
rounded-xl
border
p-4
outline-none
"

placeholder="How can Kim help?"

/>




<button

type="submit"

className="
w-full
rounded-xl
bg-brand-gold
px-6
py-4
font-medium
text-white
transition
hover:opacity-90
"

>

Send Message

</button>



</form>


);


}
