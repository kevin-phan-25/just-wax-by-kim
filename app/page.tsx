/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main homepage composition.
 *
 * This file controls the order of homepage sections.
 *
 * Changes:
 *
 * - July 27, 2026
 *   - Added v0.3.0 luxury hero experience.
 *   - Connected feature-based homepage architecture.
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
 * -----------------------------------------------------------------------------
 */


import Hero from "@/features/hero";


import LuxuryPromise from "@/features/luxury";


import About from "@/features/about";


import Mission from "@/features/about/Mission";


import Services from "@/features/services";


import Experience from "@/features/experience";


import Gallery from "@/features/gallery";


import Testimonials from "@/features/testimonials";


import Instagram from "@/features/instagram";


import FAQ from "@/features/faq";


import Booking from "@/features/booking";



export default function Home(){


return (


<main>



{/*

v0.3.0

Luxury Hero Experience

First impression:
Brand identity + primary CTA

*/}

<section id="home">

<Hero />

</section>





{/*

v1.0.2

Luxury Promise Experience


Brand positioning:

"More Than Just A Wax"


Creates emotional connection:

- Comfort
- Confidence
- Premium care

*/}

<section id="experience">

<LuxuryPromise />

</section>





{/*

v0.4.0

About Kim Experience


Creates trust:

- Personal story
- Professional connection

*/}

<section id="about">

<About />

</section>





{/*

v0.4.0

Mission Experience


Explains:

Why Just Wax by Kim exists.

*/}

<Mission />





{/*

v0.5.0

Services Experience


Displays:

- Waxing services
- Pricing
- Service categories

*/}

<section id="services">

<Services />

</section>





{/*

v1.0.2

Studio Experience


Adds:

- Luxury atmosphere
- Client journey
- Premium environment

*/}

<section id="experience-details">

<Experience />

</section>





{/*

v0.7.0

Gallery Experience


Visual trust:

- Studio
- Results
- Luxury details

*/}

<section id="gallery">

<Gallery />

</section>





{/*

v0.8.0

Testimonials Experience


Social proof:

- Reviews
- Client confidence

*/}

<section id="testimonials">

<Testimonials />

</section>





{/*

v0.8.0

Instagram Experience


Brand personality:

- Social content
- Community

*/}

<section id="instagram">

<Instagram />

</section>





{/*

v1.0.2

FAQ Experience


Removes booking hesitation:

- Preparation
- Expectations
- First visit questions

*/}

<section id="faq">

<FAQ />

</section>





{/*

v0.6.0

Booking Experience


Final conversion:

- Appointment CTA
- Scheduling workflow

*/}

<section id="booking">

<Booking />

</section>



</main>


);


}
