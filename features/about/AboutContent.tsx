/**
 * -----------------------------------------------------------------------------
 * File: AboutContent.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * About Kim text content.
 *
 * Changes:
 * - July 27, 2026
 *   - Added brand storytelling.
 *
 * -----------------------------------------------------------------------------
 */


import {
aboutContent
} from "./about.data";


import Credentials from "./Credentials";


export default function AboutContent() {


return (

<div>


<p className="
mb-5
text-sm
uppercase
tracking-[0.35em]
text-brand-champagne
">

{aboutContent.eyebrow}

</p>


<h2 className="
text-4xl
leading-tight
md:text-5xl
">

{aboutContent.title}

</h2>


<p className="
mt-6
leading-relaxed
text-brand-taupe
">

{aboutContent.description}

</p>


<Credentials />


</div>

);

}
