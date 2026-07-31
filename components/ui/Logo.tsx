/**
 * -----------------------------------------------------------------------------
 * File:
 * components/ui/Logo.tsx
 *
 * Description:
 * Responsive luxury brand logo for Just Wax by Kim.
 *
 * Updates:
 * - Correct public image path
 * - Larger editorial sizing
 * - Better navbar balance
 * - Responsive mobile/tablet/desktop scaling
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
        hover:scale-[1.03]
        ${className}
      `}
    >
      <Image
        src="/logo/just-wax-by-kim-logo.jpg"
        alt="Just Wax by Kim"
        width={620}
        height={260}
        priority={priority}
        className="
          h-[105px]
          sm:h-[125px]
          md:h-[150px]
          lg:h-[175px]
          xl:h-[200px]
          w-auto
          object-contain
          select-none
        "
      />
    </Link>
  );
}
