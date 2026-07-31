/**
 ---
 File:
 components/ui/Logo.tsx

 Description:
 Responsive luxury brand logo.

 Updates:
 - Increased logo presence
 - Stronger desktop branding
 - Better mobile/tablet scaling
 - Matches luxury editorial navbar
 ---
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

        width={500}
        height={220}

        priority={priority}

        className="
          object-contain
          select-none

          h-[92px]

          sm:h-[110px]

          md:h-[125px]

          lg:h-[145px]

          xl:h-[165px]
        "
      />

    </Link>
  );
}
