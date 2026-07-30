/**
 * --------------------------------------------------------------------------
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Luxury responsive mobile navigation.
 *
 * Changes:
 * - July 30, 2026
 *   - Added route-aware section navigation
 *   - Supports service page routing
 *   - Supports Services dropdown
 *   - Keeps luxury styling
 *
 * --------------------------------------------------------------------------
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


interface MobileMenuItem {

  label:string;

  href:string;

  dropdown?: readonly MobileMenuItem[];

}



interface MobileMenuProps {

  open:boolean;

  onClose:()=>void;

  links: readonly MobileMenuItem[];

}



const scrollToSection = (
  href:string
)=>{


const id =
href.replace("#","");


const element =
document.getElementById(id);


if(!element) return;


const navbarHeight = 168;


const position =
element.getBoundingClientRect().top +
window.scrollY -
navbarHeight;



window.scrollTo({

top:position,

behavior:"smooth",

});


};




export function MobileMenu({

open,

onClose,

links,

}:MobileMenuProps){


const pathname = usePathname();

const router = useRouter();



const handleClick = (
href:string
)=>{


onClose();



if(
href.startsWith("#")
){


// already homepage

if(
pathname === "/"
){

scrollToSection(href);

}


// service pages

else{

router.push(`/${href}`);

}


}

};



return (

<div

className={`

fixed

inset-0

z-40

xl:hidden


transition-opacity

duration-300


${
open

?

"opacity-100 pointer-events-auto"

:

"opacity-0 pointer-events-none"

}

`

}

aria-hidden={!open}

>


{/* BACKDROP */}

<button

type="button"

aria-label="Close menu"

onClick={onClose}

className="

absolute

inset-0

bg-black/20

backdrop-blur-sm

"

/>



{/* MENU PANEL */}

<div

className={`

absolute

top-[168px]

left-4

right-4


rounded-[32px]


border

border-[#E8DDD8]


bg-[#FCF8F3]/95


backdrop-blur-xl


shadow-[0_20px_60px_rgba(59,42,38,0.12)]


px-8

py-10


transition-transform

duration-300


${
open

?

"translate-y-0"

:

"-translate-y-6"

}

`

}

>


<ul

className="

flex

flex-col

gap-6

"

>


{
links.map((link)=>(


<li

key={link.href}

className="relative"

>


<Link

href={

link.href.startsWith("#")

?

pathname === "/"

?

link.href

:

`/${link.href}`

:

link.href

}

onClick={(e)=>{


if(
link.href.startsWith("#")
){

e.preventDefault();

handleClick(
link.href
);

}


}}

className="

block


text-[0.82rem]


font-semibold


uppercase


tracking-[0.24em]


text-[#3B2A26]


transition-colors


hover:text-[#8C5A6B]

"

>

{link.label}



{
link.dropdown && (

<span

className="

ml-2

text-[#8C5A6B]

"

>

▾

</span>

)

}

</Link>





{/* SERVICES DROPDOWN */}

{
link.dropdown && (

<div

className="

mt-4

ml-4

flex

flex-col

gap-3

border-l

border-[#E8DDD8]

pl-5

"

>


{
link.dropdown.map((item)=>(


<Link

key={item.href}

href={item.href}

onClick={onClose}

className="

block


rounded-xl


px-4

py-3


text-xs


uppercase


tracking-[0.22em]


text-[#3B2A26]


hover:bg-[#F6E7E1]


hover:text-[#8C5A6B]


transition

"

>

{item.label}

</Link>


))

}


</div>

)

}



</li>


))

}



</ul>





{/* BOOK BUTTON */}

<div

className="

mt-10

pt-8

border-t

border-[#E8DDD8]

"

>


<Link

href={

pathname === "/"

?

"#booking"

:

"/#booking"

}

onClick={(e)=>{


onClose();


if(
pathname === "/"
){

e.preventDefault();

scrollToSection("#booking");

}


}}

className="

block

w-full

rounded-full

border-2

border-[#8C5A6B]


px-6

py-4


text-center


uppercase


tracking-[0.18em]


text-sm


text-[#8C5A6B]


hover:bg-[#F6E7E1]


transition

"

>

Book Appointment

</Link>


</div>



</div>


</div>

);

}
