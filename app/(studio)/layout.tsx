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
 * • Navbar clearance
 * • Editorial page rhythm
 * • Studio spacing consistency
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

        pt-[280px]

        md:pt-[320px]

        xl:pt-[360px]
      "
    >
      {children}
    </div>
  );
}
