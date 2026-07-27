/**
 * -----------------------------------------------------------------------------
 * File: Navbar.tsx
 *
 * Description: Main luxury navigation for Just Wax by Kim
 * Updated: July 27, 2026
 * -----------------------------------------------------------------------------
 */

"use client";   // ← Required for usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import Logo from "../ui/Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#EDE4D9] bg-white shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  text-sm font-medium tracking-[0.5px] 
                  transition-all duration-300 hover:scale-[1.02]
                  ${isActive 
                    ? "text-[#C6A15B] relative after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#C6A15B]" 
                    : "text-[#3B2A26] hover:text-[#C6A15B]"
                  }
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
