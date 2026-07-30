"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

import {
  navigation,
} from "@/constants/navigation";


const scrollToSection = (
  href:string
)=>{

  const id = href.replace("#","");

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

const pathname = usePathname();

const router = useRouter();


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


// internal section links
if(
href.startsWith("#")
){

// already home
if(
pathname === "/"
){

scrollToSection(href);

}


// from service pages
else{

router.push(`/${href}`);

}


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


<div
className="
relative
h-full
flex
items-center
px-12
"
>


{/* LOGO */}

<div
className="
absolute
left-12
"
>

<Logo />

</div>



{/* NAV */}

<nav

className="
absolute
left-1/2
-translate-x-1/2
hidden
xl:flex
"

>


<ul
className="
flex
items-center
gap-10
"
>


{
navigation.map((link)=>(


<li
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
tracking-[0.16em]
text-[#3B2A26]/80

transition

hover:text-[#8C5A6B]

relative

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



</li>


))

}



</ul>


</nav>





{/* BOOK */}

<div

className="
absolute
right-12
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

hidden

sm:inline-flex

rounded-full

border-2

border-[#8C5A6B]

px-8

py-4

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


</header>



<MobileMenu

open={mobileOpen}

onClose={()=>setMobileOpen(false)}

links={navigation}

/>


</>

);

}
