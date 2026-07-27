export default function ServiceCard({

title,

price,

description,

duration

}:{

title:string;

price:string;

description:string;

duration:string;

}){


return (

<div

className="
bg-white
rounded-3xl
p-8
shadow-xl
border
border-neutral-100
"

>


<h3

className="
font-serif
text-2xl
"

>

{title}

</h3>


<p

className="
mt-4
text-gray-600
"

>

{description}

</p>


<div

className="
mt-6
flex
justify-between
items-center
"

>


<span

className="
text-[#C9A227]
text-2xl
font-semibold
"

>

{price}

</span>


<span

className="
text-sm
text-gray-500
"

>

{duration}

</span>


</div>


</div>


);


}
