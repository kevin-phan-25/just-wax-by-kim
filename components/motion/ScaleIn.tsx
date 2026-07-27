/**
 * -----------------------------------------------------------------------------
 * File: ScaleIn.tsx
 *
 * Description:
 * Premium scale animation.
 *
 * v1.0.2
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import { motion } from "framer-motion";


export default function ScaleIn({
children
}:{
children:React.ReactNode
}){


return (

<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

>

{children}

</motion.div>

);


}
