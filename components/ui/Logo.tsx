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
 * • Sized to fit the reduced navbar (104px / 124px) without clipping
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
        width={220}
        height={88}
        priority={priority}
        className="
          h-[72px] md:h-[88px] w-auto
          max-h-[88px]
          object-contain object-left
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />
    </Link>
  );
}
