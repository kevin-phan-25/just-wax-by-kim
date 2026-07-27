/**
 * -----------------------------------------------------------------------------
 * File: Button.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury button component.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 * - July 27, 2026
 *   - Migrated colors to design tokens.
 *
 * -----------------------------------------------------------------------------
 */


import {
  cn,
} from "@/lib/cn";


interface ButtonProps {

children:
React.ReactNode;

variant?:
"primary" | "secondary";

className?:
string;

type?:
"button" | "submit";

}


export default function Button({

children,

variant = "primary",

className,

type = "button",

}: ButtonProps) {


return (

<button

type={type}

className={cn(

"rounded-full px-8 py-3 text-sm font-semibold transition duration-300",

variant === "primary" &&
"bg-brand-gold text-white hover:opacity-90",

variant === "secondary" &&
"border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",

className

)}

>

{children}

</button>

);

}
