/**
 *
 * ---
 * File:
 * features/booking/BookingModal.tsx
 *
 * Description:
 * Luxury GlossGenius booking experience modal.
 *
 * Updates:
 * • Premium editorial styling
 * • Matches Just Wax by Kim theme
 * • Branded booking header
 * • Soft luxury backdrop
 * • Responsive mobile/tablet/desktop
 *
 * ---
 *
 */

"use client";

import {
  useEffect,
} from "react";


interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
}



export default function BookingModal({
  open,
  onClose,
  url,
}: BookingModalProps) {


useEffect(() => {

  if (!open) return;


  document.body.style.overflow = "hidden";


  return () => {

    document.body.style.overflow = "";

  };


},[
  open
]);



if (!open) return null;



return (

<div
className="
fixed

inset-0

z-[100]


flex

items-center

justify-center


bg-[#3B2A26]/45


backdrop-blur-xl


px-4

sm:px-6
"
>


{/* BACKDROP */}

<button

type="button"

aria-label="Close booking"

onClick={onClose}

className="
absolute

inset-0
"
/>





{/* BOOKING CARD */}

<div

className="
relative

z-10


flex

h-[90vh]

max-h-[900px]

w-full

max-w-5xl


flex-col



overflow-hidden


rounded-[36px]


border

border-[#E8DDD8]


bg-[#FCF8F3]


shadow-[0_30px_100px_rgba(59,42,38,0.25)]
"

>





{/* HEADER */}

<div

className="
relative


flex

shrink-0

flex-col

items-center


border-b

border-[#E8DDD8]


px-6

py-7


text-center


sm:px-10

sm:py-8
"

>


{/* Ambient Glow */}

<div

aria-hidden

className="
pointer-events-none

absolute

inset-0


bg-[radial-gradient(circle_at_center,rgba(232,200,188,0.35),transparent_65%)]
"

/>





<div
className="
relative

z-10
"
>

<p

className="
uppercase

tracking-[0.4em]

text-[10px]

sm:text-xs

text-[#8C5A6B]
"

>
Reserve Your Experience
</p>




<h2

className="
mt-3

font-serif

text-3xl

sm:text-4xl

tracking-[-0.03em]

text-[#3B2A26]
"

>
Book Your Appointment
</h2>



<p

className="
mt-3

max-w-xl

text-sm

sm:text-base

leading-relaxed

text-[#8C7468]
"

>
Choose your service, preferred date, and time. 
We’ll take care of the rest.
</p>


</div>




{/* CLOSE */}

<button

type="button"

onClick={onClose}

className="
absolute


right-5

top-5



flex

h-10

w-10


items-center

justify-center



rounded-full



border

border-[#E8DDD8]


bg-white



text-lg



text-[#3B2A26]



transition



hover:bg-[#F6E7E1]
"

>
×
</button>


</div>







{/* GLOSSGENIUS FRAME */}

<div

className="
flex-1

overflow-hidden

bg-white
"

>

<iframe

src={url}

title="Just Wax by Kim Booking"

className="
h-full

w-full

border-0
"

/>

</div>






</div>


</div>

);

}
