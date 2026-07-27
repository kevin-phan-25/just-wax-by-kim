/**
 * -----------------------------------------------------------------------------
 * File: hooks/useIntersection.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Animation visibility hook.
 *
 * Changes:
 * - v1.0.2
 *   - Added luxury scroll reveal support.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
useEffect,
useRef,
useState
}
from "react";


export default function useIntersection(){


const ref =
useRef<HTMLDivElement|null>(null);


const [
visible,
setVisible
]
=
useState(false);



useEffect(()=>{


const observer =
new IntersectionObserver(
(entries)=>{


if(entries[0].isIntersecting){

 setVisible(true);

}


},
{
threshold:.2
}
);



if(ref.current){

observer.observe(ref.current);

}



return()=>observer.disconnect();


},[]);



return {
ref,
visible
};


}
