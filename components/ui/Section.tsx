/**
 * -----------------------------------------------------------------------------
 * File:
 * Section.tsx
 *
 * Description:
 * Reusable luxury section wrapper.
 *
 * Changes:
 * - v1.0.1 added spacing system.
 *
 * -----------------------------------------------------------------------------
 */


export default function Section({

children,

className=""

}:{

children:React.ReactNode;

className?:string;


}){


return (

<section

className={`
px-6
py-24
${className}
`}

>


<div

className="
mx-auto
max-w-6xl
"

>

{children}

</div>


</section>

);


}
