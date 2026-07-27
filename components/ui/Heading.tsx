/**
 * -----------------------------------------------------------------------------
 * File:
 * Heading.tsx
 *
 * Description:
 * Luxury typography system.
 *
 * -----------------------------------------------------------------------------
 */


export default function Heading({

children,

subtitle


}:{

children:React.ReactNode;

subtitle?:string;


}){


return (

<div className="mb-14">


{subtitle &&

<p

className="
uppercase
tracking-[0.4em]
text-sm
text-[#C9A227]
"

>

{subtitle}

</p>

}



<h2

className="
mt-4
font-serif
text-4xl
md:text-5xl
"

>

{children}

</h2>



</div>

);


}
