/**
 * -----------------------------------------------------------------------------
 * File: Navbar.tsx
 *
 * Description: Main luxury navigation for Just Wax by Kim
 *
 * Changes:
 * - July 28, 2026
 *   - Kept off-white navbar background
 *   - Reduced navbar height by 25%
 *   - Updated hover underline to match CTA bubble color
 *   - Updated active navigation accent
 *
 * -----------------------------------------------------------------------------
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import Logo from "../ui/Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-brand-border/50
        bg-[#FCF8F3]/95
        backdrop-blur-md
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-2.5
        "
      >

        {/* Logo */}
        <Logo />


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  relative
                  text-[13px]
                  font-medium
                  tracking-[0.08em]
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-[#8C5A6B]"
                      : "text-brand-espresso/80 hover:text-[#8C5A6B]"
                  }

                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[1.5px]
                  after:w-0
                  after:bg-[#8C5A6B]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full

                  ${isActive ? "after:w-full" : ""}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>


        {/* Mobile Menu */}
        <MobileMenu />

      </div>
    </header>
  );
}
