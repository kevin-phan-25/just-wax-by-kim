/**
 *
 * ---
 * File:
 * app/(studio)/layout.tsx
 *
 * Description:
 * Shared luxury studio page layout.
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

        pt-[220px]

        md:pt-[260px]

        xl:pt-[300px]
      "
    >
      {children}
    </div>
  );
}
