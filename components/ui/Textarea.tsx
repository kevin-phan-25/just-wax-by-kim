/**
 *
 * ---
 * File: Textarea.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury textarea input component.
 *
 * Updates:
 *
 * - July 27, 2026
 * • Added reusable luxury styling.
 * • Matched ContactForm input system.
 * • Improved responsive spacing.
 * • Added focus states.
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        `
        w-full

        min-h-[160px]

        resize-none

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
