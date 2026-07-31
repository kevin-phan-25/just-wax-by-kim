/**
 * -----------------------------------------------------------------------------
 * File:
 * components/ui/Logo.tsx
 *
 * Description:
 * Responsive brand logo for Just Wax by Kim.
 *
 * Responsive Update:
 * • Mobile optimized
 * • Tablet scaling
 * • Desktop editorial sizing
 * • Smooth hover animation
 * • Matches responsive navbar heights
 *
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Just Wax by Kim — Home"
      className={`
        inline-flex
        items-center
        transition-transform
        duration-300
        hover:scale-[1.02]
        ${className}
      `}
    >
      <Image
        src="/hero/logo/just-wax-by-kim-logo.jpg"
        alt="Just Wax by Kim"

        width={420}
        height={180}

        priority={priority}

        className="
          h-[72px]
          w-auto

          sm:h-[82px]

          md:h-[96px]

          lg:h-[112px]

          xl:h-[132px]

          object-contain
          select-none
        "
      />
    </Link>
  );
}
