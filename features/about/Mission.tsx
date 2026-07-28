/**
 * -----------------------------------------------------------------------------
 * File: Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Fully centered mission quote
 *   - Reduced text size ~50% for better balance
 *
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 h-px w-12 bg-brand-gold/50" />

        <p className="font-serif text-base md:text-lg leading-relaxed text-brand-espresso italic">
          &ldquo;Every experience is crafted to leave you feeling vibrant,
          empowered, and beautifully renewed.&rdquo;
        </p>

        <div className="mx-auto mt-6 h-px w-12 bg-brand-gold/50" />
      </div>
    </section>
  );
}
