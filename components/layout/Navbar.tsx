/**
 *
 * ---
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive website navigation.
 *
 * Changes:
 *
 * - July 30, 2026
 *   - Increased navbar breathing room
 *   - Enlarged Book Appointment button
 *   - Improved luxury spacing
 *   - Fixed anchor navigation routing
 *   - Updated scroll offset
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
  useRouter,
} from "next/navigation";


import { Logo } from "@/components/ui/Logo";

import { MobileMenu } from "@/components/layout/MobileMenu";


import {
  navigation,
} from "@/constants/navigation";



const NAVBAR_HEIGHT = 200;



const scrollToSection = (
  href:string
)=>{


  const id =
    href.replace("#","");


  const element =
    document.getElementById(id);


  if(!element) return;



  const position =
    element.getBoundingClientRect().top +
    window.scrollY -
    NAVBAR_HEIGHT;



  window.scrollTo({

    top: position,

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
] = useState(false);



const [
mobileOpen,
setMobileOpen,
] = useState(false);





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


if(!href.startsWith("#")){

return;

}



if(pathname === "/"){


setTimeout(()=>{

scrollToSection(href);

},50);


}

else{


router.push(`/${href}`);


}


};







return (

<>


<header

className={`

fixed

top-0

left-0

right-0

z-50


h-[200px]


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





{/* LOGO */}

<div

className="

absolute

left-10

top-1/2

-translate-y-1/2

"

>

<Logo />

</div>







{/* DESKTOP NAV */}

<nav

className="

absolute

left-1/2

top-1/2

-translate-x-1/2

-translate-y-1/2


hidden

xl:flex


items-center


gap-10

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


if(link.href.startsWith("#")){


e.preventDefault();


handleNavigation(
link.href
);


}


}}



className="

uppercase

font-semibold

tracking-[0.16em]

text-sm

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

justify-center

items-center


rounded-2xl


px-6


py-5


text-center


uppercase


tracking-[0.25em]


text-sm


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


</nav>







{/* BOOK APPOINTMENT */}

<div

className="

absolute

right-10

top-1/2

-translate-y-1/2

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


if(pathname === "/"){


e.preventDefault();


scrollToSection("#booking");


}


}}



className="


inline-flex


items-center


justify-center



min-w-[260px]



rounded-full



border-2



border-[#8C5A6B]



px-12



py-6



uppercase



tracking-[0.22em]



text-base



font-semibold



text-[#8C5A6B]



hover:bg-[#F6E7E1]



transition



shadow-[0_12px_35px_rgba(59,42,38,0.10)]


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


</header>


</>

);

}
