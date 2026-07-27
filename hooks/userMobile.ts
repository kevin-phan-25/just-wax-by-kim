/**
 * -----------------------------------------------------------------------------
 * File: hooks/userMobile.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Mobile device detection.
 *
 * Changes:
 * - v1.0.2
 *   - Added responsive behavior helper.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
useEffect,
useState
}
from "react";


export default function useMobile(){


const [
mobile,
setMobile
]
=
useState(false);



useEffect(()=>{


function check(){


setMobile(
 window.innerWidth < 768
);


}



check();


window.addEventListener(
"resize",
check
);


return()=>{


window.removeEventListener(
"resize",
check
);


};


},[]);



return mobile;


}
