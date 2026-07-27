/**
 * -----------------------------------------------------------------------------
 * File: FadeIn.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable fade animation wrapper.
 *
 * v1.0.2
 * - Added luxury animation system.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import { motion } from "framer-motion";


export default function FadeIn({
children
}:{
children:React.ReactNode
}){


return (

<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

>

{children}

</motion.div>

);


}
