/**
 *
 * ---
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Luxury responsive mobile navigation.
 *
 * Changes:
 *
 * - July 30, 2026
 *   - Added route-aware section navigation
 *   - Fixed homepage scrolling
 *   - Fixed service page navigation
 *   - Supports Services dropdown
 *
 * ---
 *
 */

"use client";


import { usePathname, useRouter } from "next/navigation";


interface MobileMenuItem {

  label: string;

  href: string;

  dropdown?: readonly MobileMenuItem[];

}



interface MobileMenuProps {

  open: boolean;

  onClose: () => void;

  links: readonly MobileMenuItem[];

}



const scrollToSection = (
  href: string
) => {


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

    top: position,

    behavior:"smooth",

  });


};




export function MobileMenu({

  open,

  onClose,

  links,

}:MobileMenuProps){


const pathname =
usePathname();


const router =
useRouter();




const handleClick = (
  href:string
)=>{


  onClose();



  // dropdown pages
  if(!href.startsWith("#")){

    router.push(href);

    return;

  }



  // homepage section
  if(pathname === "/"){


    setTimeout(()=>{

      scrollToSection(href);

    },50);


    return;

  }



  // other routes
  router.push(`/${href}`);


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

`}

aria-hidden={!open}

>


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

`}

>


<div

className="
flex
flex-col
gap-6
"

>


{
links.map((link)=>(


<div

key={link.href}

className="relative"

>


<button

onClick={()=>handleClick(link.href)}

className="
w-full
text-left

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


</button>



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


<button

key={item.href}

onClick={()=>handleClick(item.href)}

className="
block

rounded-xl

px-4

py-3

text-left

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


</button>


))

}


</div>

)

}


</div>


))

}



<div

className="
mt-10

pt-8

border-t

border-[#E8DDD8]
"

>


<button

onClick={()=>handleClick("#booking")}

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


</button>


</div>


</div>


</div>


</div>


);

}
