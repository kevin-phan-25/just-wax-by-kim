/**
 *
 * ---
 * File: Card.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury editorial card component.
 *
 * Used by:
 *
 * - Services
 * - Gallery
 * - Testimonials
 * - Experience sections
 *
 * Updates:
 *
 * - July 27, 2026
 * • Added luxury editorial styling.
 * • Improved responsive spacing.
 * • Matched brand color system.
 * • Added premium hover interaction.
 *
 * ---
 *
 */

import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        `
        group

        w-full

        rounded-[32px]

        border
        border-[#E8DDD8]

        bg-white/80

        p-6
        sm:p-8
        md:p-10

        shadow-[0_18px_50px_rgba(59,42,38,0.06)]

        backdrop-blur

        transition-all
        duration-500

        hover:-translate-y-2

        hover:shadow-[0_25px_70px_rgba(59,42,38,0.12)]
        `,
        className
      )}
    >
      {children}
    </article>
  );
}
