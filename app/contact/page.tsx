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
 * • Removed page-level spacing
 * -----------------------------------------------------------------------------
 */

import Contact from "@/features/contact";

export default function ContactPage() {
  return (
    <main
      className="
        relative
        overflow-hidden
      "
    >
      <Contact />
    </main>
  );
}
