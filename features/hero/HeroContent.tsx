/**
 * -----------------------------------------------------------------------------
 * File: HeroContent.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Hero text content.
 *
 * Changes:
 * - July 27, 2026
 *   - Created luxury hero messaging.
 *
 * -----------------------------------------------------------------------------
 */


import HeroButtons from "./HeroButtons";


export default function HeroContent() {


return (

<div>


<p className="
mb-5
text-sm
uppercase
tracking-[0.4em]
text-brand-champagne
">

Luxury Wax Studio

</p>



<h1 className="
text-5xl
leading-tight
md:text-7xl
">

More Than
<br />
Just a Wax

</h1>



<p className="
mt-8
max-w-xl
text-lg
leading-relaxed
text-brand-taupe
">

A premium waxing experience focused on comfort,
confidence, and elegance.

</p>



<div className="
mt-10
">

<HeroButtons />

</div>


</div>

);

}
