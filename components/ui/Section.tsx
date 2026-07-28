/**
 * -----------------------------------------------------------------------------
 * File: Section.tsx
 *
 * Description:
 * Luxury page section wrapper.
 *
 * Changes:
 * - July 28, 2026
 *   - Increased vertical padding for clearer section separation
 *
 * -----------------------------------------------------------------------------
 */
export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`
        py-24 md:py-32 lg:py-36
        px-6
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
