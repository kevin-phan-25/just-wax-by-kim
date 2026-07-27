/**
 * -----------------------------------------------------------------------------
 * File: Section.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Standard website section wrapper.
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

id?:
string;

className?:
string;

}


export default function Section({

children,

id,

className,

}: Props) {


return (

<section

id={id}

className={cn(
"py-24 lg:py-32",
className
)}

>

{children}

</section>

);

}
