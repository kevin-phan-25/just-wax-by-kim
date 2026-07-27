/**
 * -----------------------------------------------------------------------------
 * File: experience.data.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Experience content.
 *
 * Changes:
 * - v1.0.3
 *   - Added luxury customer journey.
 *
 * -----------------------------------------------------------------------------
 */


import {
ExperienceItem,
TimelineItem
}
from "./experience.types";



export const EXPERIENCE_HIGHLIGHTS:ExperienceItem[] = [


{
id:"comfort",

title:"Comfort First",

description:
"From your first greeting to your final appointment moment, every detail is designed around your comfort.",

icon:"Heart"

},


{
id:"quality",

title:"Premium Care",

description:
"Professional waxing techniques combined with attention to detail create a refined luxury experience.",

icon:"Sparkles"

},


{
id:"confidence",

title:"Confidence",

description:
"More than smooth skin — every appointment is about helping you feel confident and beautiful.",

icon:"Star"

}


];





export const EXPERIENCE_TIMELINE:TimelineItem[]=[


{

step:"01",

title:"Welcome",

description:
"Your experience begins with a personalized consultation and comfortable environment."

},



{

step:"02",

title:"Relax",

description:
"Kim provides professional care with a gentle approach focused on your comfort."

},



{

step:"03",

title:"Glow",

description:
"Leave feeling refreshed, confident, and ready to shine."

}


];
