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
 * • Standalone page breathing room
 * • Navbar remains fixed
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

        pt-[120px]

        md:pt-[150px]

        xl:pt-[190px]
      "
    >
      {children}
    </div>
  );
}
