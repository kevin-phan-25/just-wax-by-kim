/**
 * -----------------------------------------------------------------------------
 * File: Hero.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main luxury hero section.
 *
 * Changes:
 * - July 27, 2026
 *   - Created hero layout.
 *
 * -----------------------------------------------------------------------------
 */


import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


export default function Hero() {


return (

<section className="
relative
overflow-hidden
bg-brand-ivory
">


<div className="
mx-auto
grid
max-w-7xl
items-center
gap-12
px-6
py-20
md:grid-cols-2
md:px-12
md:py-32
">


<HeroContent />


<HeroImage />


</div>


</section>

);

}
