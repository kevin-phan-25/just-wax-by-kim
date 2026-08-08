/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared public website layout for Just Wax by Kim.
 *
 * Responsibilities:
 * • Navbar
 * • MobileMenu through Navbar
 * • BookingWidget through Navbar
 * • Public page content
 * • Footer
 *
 * IMPORTANT:
 * Navbar is fixed. Main gets nav clearance so Information pages
 * (and other non-hero routes) are not flushed under the nav.
 * Homepage Hero keeps its own editorial spacing on top of this.
 * -----------------------------------------------------------------------------
 */
import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function StudioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main
        className="
          w-full
          overflow-x-hidden

          pt-[var(--nav-mobile)]
          md:pt-[var(--nav-tablet)]
          xl:pt-[var(--nav-desktop)]
        "
      >
        {children}
      </main>

      <Footer />
    </>
  );
}
