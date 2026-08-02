/**
 *
 * ---
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Updates:
 * • Fixed homepage scrolling
 * • Navbar remains fixed
 * • Booking CTA opens luxury booking widget
 * • Removed external booking redirect
 * • Preserved dropdown behavior
 * • Responsive desktop/tablet/mobile spacing
 *
 * ---
 *
 */

"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  Logo,
} from "@/components/ui/Logo";

import {
  MobileMenu,
} from "@/components/layout/MobileMenu";

import {
  navigation,
} from "@/constants/navigation";

import {
  BookingWidget,
} from "@/features/booking";



function getNavbarHeight() {

  if (
    typeof window === "undefined"
  ) {
    return 168;
  }


  if (
    window.innerWidth >= 1280
  ) {
    return 168;
  }


  if (
    window.innerWidth >= 768
  ) {
    return 140;
  }


  return 110;

}



function scrollToSection(
  href:string
) {

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



export default function Navbar(){

const pathname =
usePathname();



const [
scrolled,
setScrolled,
] =
useState(false);



const [
mobileOpen,
setMobileOpen,
] =
useState(false);



const [
openDropdown,
setOpenDropdown,
] =
useState<string|null>(null);



const [
bookingOpen,
setBookingOpen,
] =
useState(false);



useEffect(()=>{


const handleScroll = ()=>{

setScrolled(
window.scrollY > 20
);

};



handleScroll();



window.addEventListener(
"scroll",
handleScroll,
{
passive:true,
}
);



return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);




useEffect(()=>{

document.body.style.overflow =
mobileOpen || bookingOpen
? "hidden"
: "";


return ()=>{

document.body.style.overflow =
"";

};

},[
mobileOpen,
bookingOpen,
]);





const handleNavigation = (
e:React.MouseEvent,
href:string
)=>{


if(
!href.includes("#")
){
return;
}



if(
pathname === "/"
){

e.preventDefault();


scrollToSection(
href
);


setOpenDropdown(null);

}


};




return (

<>


<nav

className={`

fixed

top-0

left-0

right-0

z-50


h-[110px]

md:h-[140px]

xl:h-[168px]


transition-all

duration-500


${
scrolled

?

"bg-[#FCF8F3]/95 backdrop-blur-xl"

:

"bg-[#FCF8F3]/90 backdrop-blur-md"

}

`}

>


{/* LOGO */}

<div

className="

absolute

left-6

md:left-10

xl:left-14


top-1/2

-translate-y-1/2

z-10

"

>

<Logo priority />

</div>





{/* DESKTOP NAV */}

<div

className="

hidden

lg:flex


absolute

left-1/2

top-1/2


-translate-x-1/2

-translate-y-1/2


items-center

gap-7

xl:gap-10

whitespace-nowrap

"

>


{
navigation.map((link)=>{


const hasDropdown =
Boolean(
link.dropdown?.length
);


const isOpen =
openDropdown === link.label;



if(hasDropdown){

return (

<div

key={link.label}

className="relative"

onMouseEnter={()=>setOpenDropdown(link.label)}

onMouseLeave={()=>setOpenDropdown(null)}

>


<Link

href={link.href}

onClick={(e)=>
handleNavigation(
e,
link.href
)
}

className="

uppercase

tracking-[0.18em]

text-xs

font-semibold

text-[#3B2A26]/80

hover:text-[#8C5A6B]

transition

"

>

{link.label}

</Link>



{
isOpen && (

<div

className="

absolute

left-1/2

top-full

pt-6

-translate-x-1/2

"

>

<div

className="

min-w-[270px]

rounded-3xl

border

border-[#E8DDD8]

bg-[#FCF8F3]

p-4

shadow-xl

"

>

{
link.dropdown?.map(item=>(

<Link

key={item.href}

href={item.href}

onClick={(e)=>{

handleNavigation(
e,
item.href
);

setOpenDropdown(null);

}}

className="

block

rounded-2xl

px-5

py-4

text-center

hover:bg-[#F6E7E1]

"

>

<span

className="

uppercase

tracking-[0.15em]

text-xs

font-semibold

text-[#3B2A26]

"

>

{item.label}

</span>

</Link>

))
}

</div>

</div>

)
}


</div>

);


}



return (

<Link

key={link.href}

href={link.href}

onClick={(e)=>
handleNavigation(
e,
link.href
)
}

className="

uppercase

tracking-[0.18em]

text-xs

font-semibold

text-[#3B2A26]/80

hover:text-[#8C5A6B]

transition

"

>

{link.label}

</Link>

);


})
}



</div>







{/* BOOKING CTA */}

<div

className="

absolute

right-6

md:right-10

xl:right-14


top-1/2

-translate-y-1/2


flex

items-center

"

>


<button

type="button"

onClick={()=>setBookingOpen(true)}

className="

hidden

sm:inline-flex


min-h-[64px]

md:min-h-[70px]

xl:min-h-[78px]


min-w-[220px]

md:min-w-[260px]

xl:min-w-[300px]


items-center

justify-center


rounded-full


border-2

border-[#8C5A6B]


uppercase


tracking-[0.24em]


text-sm


font-semibold


text-[#8C5A6B]


transition-all


hover:bg-[#F6E7E1]

hover:scale-[1.03]

"

>

Book Appointment

</button>





<button

type="button"

onClick={()=>setMobileOpen(!mobileOpen)}

className="

lg:hidden

ml-4

flex

h-12

w-12

items-center

justify-center


rounded-full


border

border-[#E8DDD8]


bg-white


text-[#3B2A26]

"

>

☰

</button>


</div>



</nav>





<MobileMenu

open={mobileOpen}

onClose={()=>setMobileOpen(false)}

links={navigation}

/>





{/* BOOKING WIDGET */}

<BookingWidget

open={bookingOpen}

onClose={()=>
setBookingOpen(false)
}

/>


</>

);

}
