/**
 *
 * ---
 * File: Input.tsx
 *
 * Description:
 * Luxury text input component.
 *
 * Updates:
 *
 * - Refined luxury styling
 * - Matched ContactForm input system
 * - Added responsive spacing
 * - Added reusable className support
 * - Improved focus accessibility
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        `
        w-full

        rounded-2xl

        border
        border-[#E8DDD8]

        bg-[#FCF8F3]

        px-6

        py-4

        text-[#3B2A26]

        placeholder:text-[#8C7468]/70

        outline-none

        transition-all

        duration-300

        focus:border-[#D4A9B6]

        focus:bg-white

        focus:ring-4

        focus:ring-[#D4A9B6]/20
        `,
        className
      )}
      {...props}
    />
  );
}
