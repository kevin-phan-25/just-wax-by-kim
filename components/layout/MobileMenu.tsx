/**
 *
 * ---
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Luxury mobile navigation for Just Wax by Kim.
 *
 * Updates:
 * • Sticky booking CTA opens booking widget
 * • Removed booking section routing
 * • Same-page booking experience
 * • Unified luxury typography system
 * • Improved mobile / tablet spacing
 * • Supports dropdown navigation
 * • Supports anchor scrolling
 * • Fixed responsive navbar offset calculation
 *
 * ---
 *
 */

"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";



type NavLink = {
  readonly label:string;
  readonly href:string;
  readonly description?:string;
};



type NavItem = {
  readonly label:string;
  readonly href:string;
  readonly description?:string;
  readonly dropdown?:readonly NavLink[];
};



interface MobileMenuProps {

  open:boolean;

  onClose:()=>void;

  links:readonly NavItem[];

  onBookingOpen:()=>void;

}





function getNavbarHeight(){

  if(
    typeof window === "undefined"
  ){
    return 140;
  }


  if(
    window.innerWidth >= 1280
  ){
    return 168;
  }


  if(
    window.innerWidth >= 768
  ){
    return 140;
  }


  return 110;

}





function scrollToSection(
  href:string
){

  const id =
    href.split("#")[1];


  if(!id){
    return;
  }


  const element =
    document.getElementById(id);


  if(!element){
    return;
  }


  const position =
    element.getBoundingClientRect().top +
    window.scrollY -
    getNavbarHeight();



  window.scrollTo({

    top:position,

    behavior:"smooth",

  });

}





export function MobileMenu({

  open,

  onClose,

  links,

  onBookingOpen,

}:MobileMenuProps){



const pathname =
usePathname();



const [
expanded,
setExpanded,
] =
useState<string|null>(null);





const handleAnchor = (
  href:string
)=>{


onClose();

setExpanded(null);



if(
  pathname === "/"
){

window.setTimeout(()=>{

scrollToSection(
href
);

},150);


}

else{

window.location.href = href;

}


};





if(!open){

return null;

}





return (

<div

className="

fixed

top-[110px]

md:top-[140px]


inset-x-0

bottom-0


z-50


flex

flex-col


bg-[#FCF8F3]


lg:hidden

"

>


{/* MENU CONTENT */}

<div

className="

flex-1

overflow-y-auto


px-6

sm:px-8


pt-8

pb-10

"

>


<ul

className="

flex

flex-col

gap-6

"

>


{
links.map((link)=>{


const hasDropdown =
Boolean(
link.dropdown?.length
);


const isOpen =
expanded === link.label;



return (

<li

key={link.label}

>


{
hasDropdown ? (

<>


<button

type="button"

onClick={()=>


setExpanded(

isOpen

?

null

:

link.label

)

}

className="

flex

min-h-[64px]

w-full


items-center

justify-center


gap-3


rounded-full


border

border-[#E8DDD8]


bg-white/80


uppercase


tracking-[0.2em]


text-xs


font-semibold


text-[#3B2A26]

"

>

{link.label}


<span

className={`

text-[10px]

transition-transform

duration-300

${
isOpen
?
"rotate-180"
:
""
}

`}

>

▾

</span>


</button>





{
isOpen && (

<ul

className="

mt-5

flex

flex-col

gap-4

"

>


{
link.dropdown?.map((item)=>(


<li

key={item.href}

>


<Link

href={item.href}

onClick={(e)=>{


if(
item.href.includes("#")
){

e.preventDefault();

handleAnchor(
item.href
);

}

else{

onClose();

}


}}

className="

flex

min-h-[70px]


flex-col


items-center


justify-center


rounded-3xl


border

border-[#E8DDD8]


bg-white


px-5


py-4


text-center

"

>


<span

className="

uppercase

tracking-[0.16em]

text-xs

font-semibold

text-[#8C5A6B]

"

>

{item.label}

</span>


{
item.description && (

<span

className="

mt-2

text-[11px]

leading-relaxed

text-[#8C7468]

"

>

{item.description}

</span>

)

}


</Link>


</li>


))

}


</ul>

)

}


</>


)

:


<Link

href={link.href}

onClick={(e)=>{


if(
link.href.includes("#")
){

e.preventDefault();

handleAnchor(
link.href
);

}

else{

onClose();

}


}}

className="

flex

min-h-[64px]


w-full


items-center


justify-center


rounded-full


border


border-[#E8DDD8]


bg-white/80


uppercase


tracking-[0.2em]


text-xs


font-semibold


text-[#3B2A26]

"

>

{link.label}


</Link>


}


</li>


);


})

}


</ul>


</div>





{/* BOOKING CTA */}

<div

className="

shrink-0


bg-[#FCF8F3]


px-6


sm:px-8


py-6

"

>


<button

type="button"

onClick={()=>{

onClose();

onBookingOpen();

}}

className="

flex


min-h-[64px]


w-full


items-center


justify-center


rounded-full


border-2


border-[#8C5A6B]


uppercase


tracking-[0.22em]


text-sm


font-semibold


text-[#8C5A6B]


transition-all


duration-300


hover:bg-[#F6E7E1]


hover:scale-[1.02]

"

>

Book Appointment

</button>


</div>



</div>

);

}
