/**
 * -----------------------------------------------------------------------------
 * File: Heading.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury typography component.
 *
 * Changes:
 * - July 27, 2026
 *   - Migrated colors to design tokens.
 *
 * -----------------------------------------------------------------------------
 */


interface HeadingProps {

eyebrow?:
string;

title:
string;

subtitle?:
string;

centered?:
boolean;

}


export default function Heading({

eyebrow,

title,

subtitle,

centered = false,

}: HeadingProps) {


return (

<div className={centered ? "text-center" : ""}>


{eyebrow && (

<p className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-brand-gold
">

{eyebrow}

</p>

)}


<h2 className="
text-4xl
leading-tight
md:text-5xl
">

{title}

</h2>


{subtitle && (

<p className="
mt-6
max-w-2xl
text-lg
text-brand-taupe
">

{subtitle}

</p>

)}


</div>

);

}
