/**
 * -----------------------------------------------------------------------------
 * File: Services.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Services preview.
 *
 * Changes:
 * - July 27, 2026
 *   - Added homepage services preview.
 *
 * -----------------------------------------------------------------------------
 */


export default function Services() {


const services = [

"Brazilian Wax",

"Facial Wax",

"Body Wax",

];


return (

<section className="
bg-brand-white
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
text-center
">


<h2 className="
text-4xl
">

Our Services

</h2>


<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{
services.map((service)=>(

<div

key={service}

className="
rounded-2xl
border
border-brand-border
p-8
"

>

{service}

</div>

))
}


</div>


</div>


</section>

);

}
