/**
 * -----------------------------------------------------------------------------
 * File: Navbar.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main luxury navigation.
 *
 * Changes:
 * - July 27, 2026
 *   - Added v0.9.0 navbar.
 *
 * -----------------------------------------------------------------------------
 */


import Link from "next/link";


import {

navigation

}

from "@/constants/navigation";


import Logo from "../ui/Logo";


import MobileMenu from "./MobileMenu";



export default function Navbar(){


return (

<header

className="
sticky
top-0
z-50
border-b
border-brand-border
bg-brand-white/90
backdrop-blur
"

>


<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
"

>


<Logo />



<nav

className="
hidden
md:flex
gap-8
"

>


{

navigation.map(item=>(


<Link

key={item.label}

href={item.href}

className="
text-sm
tracking-wide
hover:text-brand-gold
"

>

{item.label}

</Link>


))


}


</nav>



<MobileMenu />


</div>


</header>

);


}
