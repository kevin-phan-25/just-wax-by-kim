/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Homepage entry point.
 *
 * Changes:
 * - July 27, 2026
 *   - Created initial landing page shell.
 *   - Added luxury brand introduction.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";


export default function Home() {


return (

<>


<section className="
flex
min-h-screen
items-center
">


<Container>


<div className="
max-w-3xl
pt-20
">


<p className="
text-sm
uppercase
tracking-[0.3em]
text-[#C9A227]
">

Luxury Wax Studio

</p>


<h1 className="
mt-6
text-6xl
leading-tight
md:text-7xl
">

More Than Just a Wax

</h1>


<p className="
mt-6
text-lg
text-[#8A817C]
">

A premium waxing experience focused on
comfort, confidence, and elegance.

</p>


<div className="
mt-8
flex
gap-4
">


<Button>

Book Your Appointment

</Button>


<Button variant="secondary">

Explore Services

</Button>


</div>


</div>


</Container>


</section>



<Section>


<Container>


<h2 className="
text-4xl
">

Luxury Experience Coming Soon

</h2>


</Container>


</Section>


</>

);

}
