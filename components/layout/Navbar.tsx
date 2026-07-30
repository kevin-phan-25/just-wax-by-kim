/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation.
 *
 * Changes:
 *
 * - July 30, 2026
 * - Kept single-row navigation layout
 * - Increased Book Appointment CTA size
 * - Improved nav spacing balance
 * - Preserved Hero clearance spacing
 *
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

import {
  navigation,
} from "@/constants/navigation";



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





export default function Navbar(){

const pathname =
usePathname();

const router =
useRouter();


const [
scrolled,
setScrolled,
]=useState(false);


const [
mobileOpen,
setMobileOpen,
]=useState(false);




useEffect(()=>{


const handleScroll = ()=>{

setScrolled(
window.scrollY > 16
);

};


handleScroll();


window.addEventListener(
"scroll",
handleScroll,
{
passive:true
}
);


return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





const handleNavigation = (
href:string
)=>{


if(
href.startsWith("#")
){


if(
pathname === "/"
){

scrollToSection(href);

}
else{

router.push(
`/${href}`
);

}


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


h-[168px]


transition-all
duration-500


${
scrolled

?

"bg-[#FCF8F3]/95 backdrop-blur-xl border-b border-[#E8DDD8]"

:

"bg-[#FCF8F3]/90 backdrop-blur-md"

}

`}

>




{/* MAIN NAV ROW */}

<div

className="

relative

h-full

flex

items-center

"

>




{/* LOGO */}

<div

className="

absolute

left-8

"

>

<Logo />

</div>







{/* DESKTOP NAVIGATION */}

<div

className="

absolute

left-1/2

-translate-x-1/2


hidden

xl:flex


items-center


gap-6

"

>


{
navigation.map((link)=>(


<div

key={link.href}

className="

relative

group

"

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


handleNavigation(
link.href
);


}


}}



className="

uppercase

font-semibold


tracking-[0.14em]


text-xs


text-[#3B2A26]/80


transition


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






{/* DROPDOWN */}

{

link.dropdown && (

<div

className="


absolute


left-1/2


top-full


mt-6


-translate-x-1/2



w-72


rounded-[32px]


border


border-[#E8DDD8]


bg-[#FCF8F3]


p-4



shadow-[0_20px_60px_rgba(59,42,38,0.12)]



opacity-0


invisible



group-hover:opacity-100


group-hover:visible



transition-all


duration-300


"

>


{
link.dropdown.map((item)=>(


<Link

key={item.href}

href={item.href}


className="

flex

items-center

justify-center


rounded-2xl


px-6

py-5



text-center



uppercase



tracking-[0.22em]



text-xs



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


</div>


))

}



</div>







{/* BOOK BUTTON */}

<div

className="

absolute

right-8

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


if(
pathname === "/"
){

e.preventDefault();


scrollToSection(
"#booking"
);

}


}}



className="

hidden

sm:inline-flex


items-center

justify-center



rounded-full



border-2


border-[#8C5A6B]



px-10



py-4



uppercase



tracking-[0.20em]



text-sm



font-semibold



text-[#8C5A6B]



bg-[#FCF8F3]



shadow-[0_8px_30px_rgba(59,42,38,0.08)]



hover:bg-[#F6E7E1]



transition

"

>


Book Appointment


</Link>


</div>







{/* MOBILE MENU */}

<MobileMenu

open={mobileOpen}

onClose={()=>setMobileOpen(false)}

links={navigation}

/>


</div>



</nav>


</>

);

}
