/**
 * -----------------------------------------------------------------------------
 * File:
 * components/ui/Container.tsx
 *
 * Description:
 * Global responsive luxury content wrapper.
 *
 * Responsive strategy:
 *
 * Mobile:
 * - Comfortable edge spacing
 * - Prevents content touching viewport
 *
 * Tablet / iPad:
 * - Adds breathing room
 * - Prevents desktop layouts feeling compressed
 *
 * Desktop:
 * - Expands content width for editorial layouts
 *
 * Large screens:
 * - Allows premium full-width presentation
 *
 * -----------------------------------------------------------------------------
 */

import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
        mx-auto
        w-full

        px-5
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-20
        2xl:px-24

        max-w-[1600px]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
