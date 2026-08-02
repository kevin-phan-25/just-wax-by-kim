/**
 *
 * ---
 * File:
 * components/ui/Container.tsx
 *
 * Description:
 * Global responsive luxury content wrapper.
 *
 * Updates:
 *
 * • Full-width editorial support
 * • Refined luxury spacing system
 * • Improved large screen balance
 * • Prevents mobile edge crowding
 *
 * ---
 *
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
        lg:px-12
        xl:px-16

        max-w-[1800px]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
