/**
 * -----------------------------------------------------------------------------
 * File:
 * app/contact/page.tsx
 *
 * Description:
 * Standalone luxury contact page.
 *
 * Changes:
 * • Moved Contact away from homepage
 * • Added dedicated route
 * • Matches Gallery / Testimonials / FAQ architecture
 * • Added navbar spacing
 *
 * -----------------------------------------------------------------------------
 */

import Contact from "@/features/contact";


export default function ContactPage() {

  return (

    <main
      className="
        relative
        overflow-hidden
        pt-[168px]
      "
    >

      <Contact />

    </main>

  );

}
