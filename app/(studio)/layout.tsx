```tsx
/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared layout for the actual Just Wax by Kim website.
 *
 * Responsibilities:
 * • Navbar
 * • Mobile navigation
 * • Public page content
 * • Footer
 *
 * IMPORTANT:
 * This layout is only used by routes inside (studio).
 *
 * /site-access does NOT use this layout.
 *
 * Therefore:
 *
 * /site-access
 *     → no Navbar
 *     → no MobileMenu
 *     → no Footer
 *
 * authenticated website
 *     → Navbar
 *     → MobileMenu
 *     → page content
 *     → Footer
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
      {/* ================================================================
          PUBLIC WEBSITE NAVIGATION
          ================================================================ */}

      <Navbar />


      {/* ================================================================
          PUBLIC WEBSITE CONTENT
          ================================================================ */}

      <main
        className="
          w-full
          overflow-x-hidden
        "
      >
        {children}
      </main>


      {/* ================================================================
          PUBLIC WEBSITE FOOTER
          ================================================================ */}

      <Footer />
    </>
  );
}
```

