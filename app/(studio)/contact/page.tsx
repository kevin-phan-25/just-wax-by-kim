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
 * • Removed page-level navbar clearance
 * • Navbar spacing handled by studio layout
 * • Matches Gallery / FAQ / Policies architecture
 * • Preserves feature component layout
 *
 * ---
 */

import Contact from "@/features/contact";

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}