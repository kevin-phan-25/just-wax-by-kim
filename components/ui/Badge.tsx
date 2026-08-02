/**
 *
 * ---
 * File: Badge.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Small luxury editorial label component.
 *
 * Updates:
 *
 * - July 27, 2026
 * • Added luxury typography styling.
 * • Matched brand color system.
 * • Improved responsive presentation.
 * • Added reusable className support.
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex

        items-center

        justify-center

        rounded-full

        border

        border-[#D8B4A0]

        bg-[#FCF8F3]

        px-5

        py-2

        uppercase

        tracking-[0.28em]

        text-[10px]

        sm:text-xs

        font-medium

        text-[#8C5A6B]

        transition-all

        duration-300

        hover:bg-[#F6E7E1]
        `,
        className
      )}
    >
      {children}
    </span>
  );
}
