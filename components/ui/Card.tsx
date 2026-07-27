/**
 * -----------------------------------------------------------------------------
 * File: Card.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury reusable card component.
 *
 * Changes:
 * - July 27, 2026
 *   - Migrated colors to design tokens.
 *
 * -----------------------------------------------------------------------------
 */


import {
  cn,
} from "@/lib/cn";


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

"rounded-2xl border border-brand-border bg-brand-white p-6 shadow-sm transition duration-300 hover:shadow-md",

className

)}

>

{children}

</div>

);

}
