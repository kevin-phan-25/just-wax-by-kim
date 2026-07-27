/**
 * -----------------------------------------------------------------------------
 * File: MobileMenu.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Mobile navigation.
 *
 * Changes:
 * - July 27, 2026
 *   - Added mobile menu structure.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {

useState

}

from "react";


import {

navigation

}

from "@/constants/navigation";



export default function MobileMenu(){


const [open,setOpen]=useState(false);



return (

<div className="md:hidden">


<button

aria-label="Open menu"

onClick={()=>setOpen(!open)}

className="
text-2xl
"

>

☰

</button>



{

open && (

<div

className="
absolute
left-0
right-0
top-full
bg-brand-white
p-6
shadow-lg
"

>


<div className="
flex
flex-col
gap-5
"

>


{

navigation.map(item=>(


<a

key={item.label}

href={item.href}

onClick={()=>setOpen(false)}

>

{item.label}

</a>


))


}


</div>


</div>

)

}


</div>

);


}
