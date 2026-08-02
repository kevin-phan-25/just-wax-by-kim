/**
 * -----------------------------------------------------------------------------
 * File:
 * app/testimonials/page.tsx
 *
 * Description:
 * Standalone luxury testimonials page.
 *
 * Changes:
 * • Moved testimonials away from homepage
 * • Added dedicated route
 * • Matches Gallery page architecture
 * • Added navbar spacing
 * • Added luxury editorial presentation
 * -----------------------------------------------------------------------------
 */

import Testimonials from "@/features/testimonials";


export default function TestimonialsPage() {

  return (

    <main
      className="
        w-full
        px-6
        pt-[168px]
        pb-24
        bg-[#FCF8F3]
      "
    >

      <Testimonials />

    </main>

  );

}
