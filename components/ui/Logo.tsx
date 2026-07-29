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
 * • Logo size increased 100% from previous (84→168px mobile, 96→192px desktop)
 * • object-contain keeps the full stacked lockup visible
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
        width={400}
        height={192}
        priority={priority}
        className="
          h-[168px] md:h-[192px] w-auto
          max-h-[192px]
          object-contain object-left
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />
    </Link>
  );
}
