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
 * - July 27, 2026
 *   - Added v0.3.0 luxury hero experience.
 *   - Connected feature-based homepage architecture.
 *
 * -----------------------------------------------------------------------------
 */


import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services";


export default function Home() {


  return (

    <main>

      <Hero />

      <About />

      <Services />

    </main>

  );


}
