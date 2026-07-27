/**
 * -----------------------------------------------------------------------------
 * File:
 * Section.tsx
 *
 * Description:
 * Luxury page section wrapper.
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
py-24
px-6
${className}
`}

>


<div

className="
max-w-7xl
mx-auto
"

>

{children}

</div>


</section>

);


}
