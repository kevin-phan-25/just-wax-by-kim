/**
 * -----------------------------------------------------------------------------
 * File: Logo.tsx
 *
 * Description:
 * Luxury brand logo component.
 *
 * Just Wax by Kim
 *
 * -----------------------------------------------------------------------------
 */


import Image from "next/image";


interface LogoProps {

  size?: "sm" | "md" | "lg";

}



export default function Logo({

  size = "md",

}: LogoProps) {



const sizes = {


  sm: {

    width: 130,

    height: 90,

  },


  md: {

    width: 180,

    height: 120,

  },


  lg: {

    width: 280,

    height: 180,

  },


};



return (

<div

className="
flex
items-center
justify-center
"

>


<Image

src="/logo/just-wax-by-kim.png"

alt="Just Wax by Kim - More Than Just A Wax"

width={sizes[size].width}

height={sizes[size].height}

priority

className="
object-contain
"

/>


</div>

);


}
