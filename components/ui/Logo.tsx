/**
 * -----------------------------------------------------------------------------
 * File: components/ui/Logo.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Brand logo for Just Wax by Kim.
 *
 * Changes (July 29, 2026):
 * • Locked to max 144px tall so it fits inside the 168px (1.75in) navbar
 *   with padding and does not hang outside the bar
 * -----------------------------------------------------------------------------
 */
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Just Wax by Kim — Home"
    >
      <Image
        src="/logo/just-wax-by-kim.png"
        alt="Just Wax by Kim"
        width={280}
        height={144}
        priority={priority}
        className="
          h-[144px] w-auto
          max-h-[144px]
          object-contain object-left
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />
    </Link>
  );
}
