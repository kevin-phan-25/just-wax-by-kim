```tsx
/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/page.tsx
 *
 * Description:
 * Just Wax by Kim homepage.
 *
 * This page is rendered inside:
 * app/(studio)/layout.tsx
 *
 * Therefore it automatically receives:
 * • Navbar
 * • MobileMenu
 * • Footer
 *
 * The middleware controls whether the visitor is allowed to reach this page.
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

