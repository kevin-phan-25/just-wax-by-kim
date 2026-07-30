/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceCategory.tsx
 *
 * Description:
 * Luxury service category heading.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * - Removed dependency on ServiceCategory model
 * - Supports Ladies/Gentlemen pricing sections
 * - Matches luxury editorial theme
 *
 * -----------------------------------------------------------------------------
 */


interface ServiceCategoryProps {

title:string;

description?:string;

}


export default function ServiceCategory({
title,
description,
}:ServiceCategoryProps){


return (

<div
className="
mb-10
text-center
"
>


<h3
className="
font-serif
text-3xl
md:text-4xl
text-[#3B2A26]
"
>
{title}
</h3>



{description && (

<p
className="
mx-auto
mt-4
max-w-xl
leading-relaxed
text-[#8C7468]
"
>
{description}
</p>

)}


</div>

);

}
