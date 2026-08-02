/**
 *
 * ---
 * File: Section.tsx
 *
 * Description:
 * Luxury page section wrapper.
 *
 * Updates:
 *
 * - July 28, 2026
 * • Added responsive editorial spacing.
 * • Removed conflicting fixed padding.
 * • Added reusable layout controls.
 * • Improved full-width page compatibility.
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}

export default function Section({
  children,
  className = "",
  contained = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        `
        w-full

        py-24

        sm:py-28

        md:py-32

        lg:py-36
        `,
        className
      )}
    >
      {contained ? (
        <div
          className="
            mx-auto

            w-full

            max-w-[1800px]

            px-5
            sm:px-6
            md:px-10
            lg:px-12
            xl:px-16
          "
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
