/**
 * -----------------------------------------------------------------------------
 * File: app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed excessive dividers
 *   - Added luxury section separation
 * - July 29, 2026
 *   - Removed all border-t wrappers (cluttered seams)
 *   - Removed double <section> wrappers; features own their ids
 *   - ~1 inch (96px / gap-24) separation between each section
 * -----------------------------------------------------------------------------
 */
import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
import Services from "@/features/services";
import Gallery from "@/features/gallery";
import Testimonials from "@/features/testimonials";
import Instagram from "@/features/instagram";
import FAQ from "@/features/faq";
import Booking from "@/features/booking";
import Contact from "@/features/contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      {/* gap-12 ≈ 48px ≈ 1/2 inch between each section */}
      <Hero />
      <About />
      <Mission />
      <Services />
      <Gallery />
      <Testimonials />
      <Instagram />
      <FAQ />
      <Booking />
      <Contact />
    </main>
  );
}
