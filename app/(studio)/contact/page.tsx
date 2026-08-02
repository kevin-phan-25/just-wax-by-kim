/**
 * ---
 * File:
 * app/contact/page.tsx
 *
 * Description:
 * Standalone luxury contact page.
 *
 * Changes:
 * • Moved Contact away from homepage
 * • Added dedicated route
 * • Added navbar clearance spacing
 * • Matches Gallery / FAQ architecture
 * • Preserves feature component layout
 *
 * ---
 */

import Contact from "@/features/contact";

export default function ContactPage() {
  return (
    <main
      className="
        pt-[168px]

        md:pt-[190px]
      "
    >
      <Contact />
    </main>
  );
}
