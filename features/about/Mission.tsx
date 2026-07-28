/**
 * -----------------------------------------------------------------------------
 * File: Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Fully centered mission quote
 *   - Tailored around the new brand statement
 *
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 h-px w-16 bg-brand-gold/50" />

        <p className="font-serif text-2xl md:text-3xl leading-relaxed text-brand-espresso italic">
          &ldquo;Every experience is crafted to leave you feeling vibrant,
          empowered, and beautifully renewed.&rdquo;
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-brand-gold/50" />
      </div>
    </section>
  );
}
