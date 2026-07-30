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
 * • Height scales with --nav-height / viewport via clamp
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
        width={200}
        height={72}
        priority={priority}
        className="
          h-[clamp(2.5rem,6.5vh,3.75rem)]
          w-auto
          max-h-[calc(var(--nav-height)-0.75rem)]
          object-contain object-left
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />
    </Link>
  );
}
