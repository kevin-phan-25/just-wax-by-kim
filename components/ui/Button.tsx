/**
 *
 * ---
 * File: Button.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury button component.
 *
 * Updates:
 *
 * - July 27, 2026
 * • Migrated to luxury editorial styling.
 * • Removed outdated color tokens.
 * • Added responsive sizing.
 * • Matched Just Wax by Kim CTA system.
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;

  variant?: 
    | "primary"
    | "secondary";

  className?: string;

  type?:
    | "button"
    | "submit";
}

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {

  return (
    <button
      type={type}
      className={cn(
        `
        inline-flex

        items-center
        justify-center

        rounded-full

        px-8
        sm:px-10

        py-4

        uppercase

        tracking-[0.18em]

        text-sm

        font-semibold

        transition-all

        duration-300

        hover:-translate-y-0.5

        disabled:cursor-not-allowed

        disabled:opacity-60
        `,

        variant === "primary" &&
          `
          bg-[#8C5A6B]

          text-white

          hover:bg-[#3B2A26]

          hover:shadow-[0_15px_40px_rgba(59,42,38,0.15)]
          `,


        variant === "secondary" &&
          `
          border-2

          border-[#8C5A6B]

          text-[#8C5A6B]

          hover:bg-[#F6E7E1]
          `,


        className
      )}
    >
      {children}
    </button>
  );
}
