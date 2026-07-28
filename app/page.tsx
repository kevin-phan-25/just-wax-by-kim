/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main homepage composition.
 *
 * This file controls:
 *
 * - Homepage section ordering
 * - Customer journey flow
 * - Feature composition
 * - Navigation anchors
 *
 * Changes:
 *
 * - July 27, 2026
 *   - Added v0.4.0 About Kim experience.
 *   - Added Mission section.
 *
 * - July 27, 2026
 *   - Added v0.5.0 Services Experience.
 *
 * - July 27, 2026
 *   - Added v0.6.0 Booking Experience.
 *
 * - July 27, 2026
 *   - Added v0.7.0 Gallery Experience.
 *
 * - July 27, 2026
 *   - Added v0.8.0 Testimonials Experience.
 *   - Added Instagram Social Experience.
 *
 * - July 27, 2026
 *   - Added v0.9.0 navigation anchors.
 *   - Connected homepage sections for smooth scrolling.
 *
 * - July 27, 2026
 *   - Added v1.0.2 Luxury Visual Experience.
 *   - Added emotional brand positioning section.
 *   - Added premium customer journey flow.
 *
 * - July 27, 2026
 *   - Added v1.0.2 FAQ Experience.
 *   - Added customer education before booking.
 *
 * - July 27, 2026
 *   - Added v1.1.0 Contact Experience.
 *   - Added customer support section.
 *   - Added location, hours, and contact workflow.
 *
 * -----------------------------------------------------------------------------
 */


import Hero from "@/features/hero";


import About from "@/features/about";


import Mission from "@/features/about/Mission";


import Services from "@/features/services";


import Experience from "@/features/experience";


import Gallery from "@/features/gallery";


import Testimonials from "@/features/testimonials";


import Instagram from "@/features/instagram";


import FAQ from "@/features/faq";


import Booking from "@/features/booking";


import Contact from "@/features/contact";



export default function Home(){


return (


<main>



{/*
------------------------------------------------

v0.3.0

Luxury Hero Experience

Purpose:

First impression.

Creates:

- Brand identity
- Emotional connection
- Primary CTA

------------------------------------------------
*/}

<section id="home">

<Hero />

</section>







{/*
------------------------------------------------

v0.4.0

About Kim Experience


Creates:

- Personal connection
- Trust
- Brand story

------------------------------------------------
*/}

<section id="about">

<About />

</section>





{/*
------------------------------------------------

v0.4.0

Mission Experience


Explains:

Why Just Wax by Kim exists.

------------------------------------------------
*/}

<Mission />





{/*
------------------------------------------------

v0.5.0

Services Experience


Displays:

- Waxing services
- Pricing
- Treatment options

------------------------------------------------
*/}

<section id="services">

<Services />

</section>





{/*
------------------------------------------------

v1.1.0

Studio Experience


Creates luxury atmosphere:

- Client journey
- Professional environment
- Studio expectations

------------------------------------------------
*/}

<section id="studio">

<Experience />

</section>





{/*
------------------------------------------------

v0.7.0

Gallery Experience


Visual trust:

- Studio
- Results
- Luxury details

------------------------------------------------
*/}

<section id="gallery">

<Gallery />

</section>





{/*
------------------------------------------------

v0.8.0

Testimonials Experience


Social proof:

- Reviews
- Client confidence
- Customer stories

------------------------------------------------
*/}

<section id="testimonials">

<Testimonials />

</section>





{/*
------------------------------------------------

v0.8.0

Instagram Experience


Brand personality:

- Social content
- Community
- Recent updates

------------------------------------------------
*/}

<section id="instagram">

<Instagram />

</section>





{/*
------------------------------------------------

v1.0.2

FAQ Experience


Removes booking hesitation:

- Preparation
- Expectations
- First appointment questions

------------------------------------------------
*/}

<section id="faq">

<FAQ />

</section>





{/*
------------------------------------------------

v0.6.0

Booking Experience


Primary conversion:

- Appointment CTA
- Scheduling workflow

------------------------------------------------
*/}

<section id="booking">

<Booking />

</section>





{/*
------------------------------------------------

v1.1.0

Contact Experience


Customer support:

- Contact information
- Studio hours
- Location details
- Questions before booking

------------------------------------------------
*/}

<section id="contact">

<Contact />

</section>



</main>


);


}
