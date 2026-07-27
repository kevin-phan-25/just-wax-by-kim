/**
 * -----------------------------------------------------------------------------
 * File: Heading.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Standardized luxury typography component.
 *
 * Used for:
 * - Hero titles
 * - Section headings
 * - Marketing copy
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
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

<div

className={

centered
?
"text-center"
:
""

}

>


{
eyebrow && (

<p className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-[#C9A227]
">

{eyebrow}

</p>

)

}


<h2 className="
text-4xl
leading-tight
md:text-5xl
">

{title}

</h2>


{
subtitle && (

<p className="
mt-6
max-w-2xl
text-lg
text-[#8A817C]
">

{subtitle}

</p>

)

}


</div>

);

}
