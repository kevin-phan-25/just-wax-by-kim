/**
 * -----------------------------------------------------------------------------
 * File: Experience.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury experience section.
 *
 * Changes:
 * - v1.0.3
 *   - Added premium customer journey section.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";

import Section from "@/components/ui/Section";

import Heading from "@/components/ui/Heading";


import ExperienceHighlights from "./ExperienceHighlights";

import ExperienceTimeline from "./ExperienceTimeline";


import {
EXPERIENCE_CONSTANTS
}
from "./experience.constants";



export default function Experience(){


return (

<section

id={EXPERIENCE_CONSTANTS.sectionId}

>


<Section>


<Container>


<div

className="
text-center
"

>

<Heading>

{EXPERIENCE_CONSTANTS.title}

</Heading>


<p

className="
mx-auto
mt-4
max-w-2xl
text-gray-600
"

>

{EXPERIENCE_CONSTANTS.subtitle}

</p>


</div>



<div className="mt-12">


<ExperienceHighlights />


</div>




<ExperienceTimeline />



</Container>


</Section>


</section>

);


}
