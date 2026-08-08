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
 * No padding or navbar clearance is added here.
 * Existing components control their own spacing.
 * -----------------------------------------------------------------------------
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
