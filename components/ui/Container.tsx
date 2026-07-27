/**
 * -----------------------------------------------------------------------------
 * File: Container.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Global content width wrapper.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import {
  cn,
} from "@/lib/cn";


interface Props {

children:
React.ReactNode;

className?:
string;

}


export default function Container({

children,

className,

}: Props) {


return (

<div

className={cn(
"mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16",
className
)}

>

{children}

</div>

);

}
