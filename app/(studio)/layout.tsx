/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared public website layout for Just Wax by Kim.
 *
 * Responsibilities:
 * • Announcement
 * • Navbar
 * • MobileMenu through Navbar
 * • BookingWidget through Navbar
 * • Public page content
 * • Footer
 *
 * IMPORTANT:
 * No navbar clearance or page padding is added here.
 * Individual components and pages control their own spacing.
 * -----------------------------------------------------------------------------
 */

import type { ReactNode } from "react";

import Announcement from "@/components/layout/Announcement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function StudioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Announcement />

      <Navbar />

      <main
        className="
          w-full
          overflow-x-hidden
        "
      >
        {children}
      </main>

      <Footer />
    </>
  );
}
