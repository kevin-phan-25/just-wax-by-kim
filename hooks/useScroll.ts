/**
 * -----------------------------------------------------------------------------
 * File: hooks/useScroll.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Detect page scrolling.
 *
 * Changes:
 * - v1.0.2
 *   - Added navbar scroll behavior support.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
 useEffect,
 useState
}
from "react";


export default function useScroll(){


const [scrolled,setScrolled]
=
useState(false);



useEffect(()=>{


function handleScroll(){


 setScrolled(
  window.scrollY > 50
 );


}


window.addEventListener(
 "scroll",
 handleScroll
);


return()=>{


window.removeEventListener(
 "scroll",
 handleScroll
);


};


},[]);



return scrolled;


}
