/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 *
 * v1.0.2
 * - Added Luxury Promise experience
 * - Added premium customer journey flow
 * - Added emotional brand positioning
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

import Booking from "@/features/booking";



export default function Home() {


return (

<main>


<Hero />


<LuxuryPromise />


<About />


<Mission />


<Services />


<Experience />


<Gallery />


<Testimonials />


<Instagram />


<Booking />


</main>

);


}
