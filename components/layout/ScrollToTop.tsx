/**
 * -----------------------------------------------------------------------------
 * File: ScrollToTop.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Floating scroll-to-top button.
 *
 * Provides improved navigation experience
 * on long luxury landing pages.
 *
 * Changes:
 *
 * - July 27, 2026
 *   - Added v1.1.0 navigation enhancement.
 *   - Added animated scroll behavior.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";



export default function ScrollToTop(){


const [visible,setVisible] = useState(false);



useEffect(()=>{


const handleScroll = ()=>{


if(window.scrollY > 500){

setVisible(true);

}

else{

setVisible(false);

}


};



window.addEventListener(
"scroll",
handleScroll
);



return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





if(!visible){

return null;

}





return (

<button

onClick={()=>{

window.scrollTo({

top:0,

behavior:"smooth",

});

}}

aria-label="Scroll to top"

className="
fixed
bottom-6
right-6
z-50
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-brand-gold
text-brand-dark
shadow-lg
transition
hover:scale-105
"

>


<ArrowUp size={20}/>


</button>

);


}
