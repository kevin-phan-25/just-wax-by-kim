/**
 * -----------------------------------------------------------------------------
 * File: Button.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury button component.
 * Provides consistent CTA styling throughout the website.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *   - Added primary and secondary variants.
 *
 * -----------------------------------------------------------------------------
 */


import { cn } from "@/lib/cn";


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
"bg-[#C9A227] text-white hover:opacity-90",

variant === "secondary" &&
"border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white",

className

)}

>

{children}

</button>

);

}
