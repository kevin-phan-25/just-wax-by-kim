/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/page.tsx
 *
 * Description:
 * Public homepage for Just Wax by Kim.
 *
 * Route:
 * /
 *
 * The (studio) route group is invisible in the URL.
 *
 * The parent studio layout provides:
 * • Navbar
 * • Page content
 * • Footer
 * -----------------------------------------------------------------------------
 */
import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services/Services";
import { Booking } from "@/features/booking";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Booking />
    </>
  );
}
