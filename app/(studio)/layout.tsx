/**
 *
 * ---
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared luxury studio page layout.
 *
 * Controls:
 * • Standalone page breathing room under fixed navbar
 * • Navbar remains fixed (unaffected)
 * • Editorial page rhythm
 *
 * ---
 *
 */

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative
        w-full
        pt-[180px]
        md:pt-[200px]
        xl:pt-[220px]
      "
    >
      {children}
    </div>
  );
}
