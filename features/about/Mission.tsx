/**
 * -----------------------------------------------------------------------------
 * File: Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed internal dividers (page.tsx already provides them)
 *   - Forced true horizontal centering
 *   - Single clean line of text
 *
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section className="w-full px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl flex justify-center">
        <p
          className="
            font-serif
            text-sm md:text-[15px]
            leading-relaxed
            text-brand-espresso/85
            italic
            text-center
            whitespace-nowrap
          "
        >
          “Every experience is crafted to leave you feeling vibrant, empowered, and beautifully renewed.”
        </p>
      </div>
    </section>
  );
}
