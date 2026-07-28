/**
 * -----------------------------------------------------------------------------
 * File: Container.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Global content width wrapper.
 *
 * Changes:
 * - July 28, 2026
 *   - Slightly more generous horizontal padding
 *
 * -----------------------------------------------------------------------------
 */
import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
