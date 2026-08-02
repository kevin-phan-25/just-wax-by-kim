/**
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
 * ---
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

        pt-[168px]

        md:pt-[190px]

        xl:pt-[216px]
      "
    >
      {children}
    </div>
  );
}
