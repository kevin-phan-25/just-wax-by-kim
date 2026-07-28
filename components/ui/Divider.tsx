/**
 * -----------------------------------------------------------------------------
 * File: Divider.tsx
 *
 * Description:
 * Decorative luxury divider.
 *
 * Changes:
 * - July 28, 2026
 *   - Redesigned as an elegant centered divider with gold accent
 *   - Used between homepage sections for clear visual separation
 *
 * -----------------------------------------------------------------------------
 */
export default function Divider() {
  return (
    <div className="flex items-center justify-center py-6 md:py-10">
      <div className="h-px w-16 bg-brand-border" />
      <div className="mx-4 h-1.5 w-1.5 rounded-full bg-brand-gold/70" />
      <div className="h-px w-16 bg-brand-border" />
    </div>
  );
}
