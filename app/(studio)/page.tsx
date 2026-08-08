```tsx
/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/page.tsx
 *
 * Description:
 * Public homepage for Just Wax by Kim.
 *
 * This page is rendered through:
 * app/(studio)/layout.tsx
 *
 * The studio layout provides:
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
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* BOOKING */}
      <Booking />
    </>
  );
}
```
