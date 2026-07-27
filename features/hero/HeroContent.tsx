import Logo from "@/components/ui/Logo";


export default function HeroContent(){


return (

<div

className="
flex
flex-col
items-center
text-center
"

>


<Logo size="lg" />



<p

className="
mt-8
text-sm
uppercase
tracking-[0.45em]
text-[#8C7468]
"

>

Luxury Wax Studio

</p>



<h1

className="
mt-6
font-serif
text-5xl
leading-tight
text-[#3B2A26]
md:text-7xl
"

>

More Than
<br />

Just A Wax

</h1>



<p

className="
mt-6
max-w-xl
text-lg
text-[#6F5A50]
"

>

A personalized waxing experience
designed around comfort,
confidence, and you.

</p>


</div>


);


}
