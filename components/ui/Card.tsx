/**
 * -----------------------------------------------------------------------------
 * File: Card.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury card container.
 *
 * Used for:
 * - Services
 * - Testimonials
 * - Gallery
 * - Experience sections
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import { cn } from "@/lib/cn";


interface CardProps {

children:
React.ReactNode;

className?:
string;

}


export default function Card({

children,

className,

}: CardProps) {


return (

<div

className={cn(

"rounded-2xl border border-[#ECE7E1] bg-white p-6 shadow-sm transition duration-300 hover:shadow-md",

className

)}

>

{children}

</div>

);

}
