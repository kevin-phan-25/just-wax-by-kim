import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


export default function Hero(){


return (

<section

id="home"

className="
bg-[#FAF7F2]
py-24
px-6
"

>


<div

className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-16
items-center
"

>


<HeroContent />


<HeroImage />


</div>


</section>

);


}
