/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared luxury studio layout.
 *
 * Controls:
 * • Fixed Navbar
 * • Studio page content
 * • Global Footer
 * • Editorial page rhythm
 *
 * Note:
 * • /site-access is intentionally outside this layout.
 * • Public website pages receive Navbar + Footer.
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
      {/* GLOBAL NAVIGATION */}

      <Navbar />

      {/* PAGE CONTENT */}

      <main
        className="
          flex-1
          w-full
          overflow-x-hidden
        "
      >
        {children}
      </main>

      {/* GLOBAL FOOTER */}

      <Footer />
    </>
  );
}
