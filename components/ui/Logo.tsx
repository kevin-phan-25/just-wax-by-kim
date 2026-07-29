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
 * • Logo height set to ~1.75 inches (168px) inside the ~2 inch navbar
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
        width={360}
        height={168}
        priority={priority}
        className="
          h-[168px] w-auto
          max-h-[168px]
          object-contain object-left
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />
    </Link>
  );
}
