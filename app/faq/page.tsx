/**
 *
 * ---
 * File:
 * app/faq/page.tsx
 *
 * Description:
 * Standalone luxury FAQ page.
 *
 * Changes:
 * • Moved FAQ away from homepage
 * • Added dedicated route
 * • Matches Gallery / Testimonials architecture
 * • Added luxury navbar spacing
 *
 * ---
 *
 */

import FAQ from "@/features/faq";

export default function FAQPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
        pt-[168px]
        pb-32
      "
    >
      {/* Ambient Background */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#F6E7E1]
          opacity-40
          blur-3xl
        "
      />

      <section
        id="faq"
        className="
          relative
        "
      >
        <FAQ />
      </section>
    </main>
  );
}
