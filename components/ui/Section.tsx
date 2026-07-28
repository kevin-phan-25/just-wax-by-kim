/**
 * -----------------------------------------------------------------------------
 * File: Section.tsx
 *
 * Description:
 * Luxury page section wrapper.
 *
 * Changes:
 * - July 28, 2026
 *   - Increased vertical padding for more breathing room
 *   - More elegant, less cramped spacing
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
        py-20 md:py-28 lg:py-32
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
