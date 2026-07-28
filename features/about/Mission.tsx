/**
 * -----------------------------------------------------------------------------
 * File: Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Forced single line on desktop
 *   - Properly centered
 *   - Reduced size for balance
 *
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section className="px-6 py-14 md:py-18">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-5 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-brand-gold/40" />
          <div className="h-1 w-1 rounded-full bg-brand-gold/60" />
          <div className="h-px w-10 bg-brand-gold/40" />
        </div>

        <p
          className="
            font-serif
            text-sm md:text-base
            leading-relaxed
            text-brand-espresso/90
            italic
            whitespace-nowrap
            overflow-x-auto
          "
        >
          “Every experience is crafted to leave you feeling vibrant, empowered, and beautifully renewed.”
        </p>

        <div className="mx-auto mt-5 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-brand-gold/40" />
          <div className="h-1 w-1 rounded-full bg-brand-gold/60" />
          <div className="h-px w-10 bg-brand-gold/40" />
        </div>
      </div>
    </section>
  );
}
