/**
 * -----------------------------------------------------------------------------
 * File: components/layout/Navbar.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Fixed top navigation for Just Wax by Kim.
 *
 * Changes (July 29, 2026):
 * • Reduced height to 72px / 80px for better proportion with hero
 * • Softer glass background + thinner border
 * • Refined link tracking and hover underline
 * • Smaller, quieter Book CTA
 * • Mobile menu toggle refined
 * -----------------------------------------------------------------------------
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]
          ${
            scrolled
              ? "bg-[#FCF8F3]/92 backdrop-blur-xl border-b border-[#E8DDD8] shadow-[0_6px_24px_rgba(59,42,38,0.05)]"
              : "bg-[#FCF8F3]/70 backdrop-blur-md border-b border-transparent"
          }
        `}
      >
        <div className="container-luxury">
          <nav className="flex h-[72px] md:h-[80px] items-center justify-between">
            <Logo priority />

            <ul className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative text-[0.68rem] font-semibold uppercase
                      tracking-[0.2em] text-[#3B2A26]/75
                      transition-colors duration-300
                      hover:text-[#8C5A6B]
                      after:absolute after:left-0 after:-bottom-[3px]
                      after:h-px after:w-0 after:bg-[#D4A9B6]
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="#booking"
                className="
                  hidden sm:inline-flex items-center justify-center
                  rounded-full bg-[#8C5A6B] px-5 py-2.5
                  text-[0.65rem] font-semibold uppercase tracking-[0.18em]
                  text-white transition-all duration-300
                  hover:bg-[#7A4A5A] hover:-translate-y-0.5
                  hover:shadow-[0_12px_28px_rgba(140,90,107,0.25)]
                "
              >
                Book Appointment
              </Link>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="
                  lg:hidden flex h-10 w-10 items-center justify-center
                  rounded-full border border-[#E8DDD8] bg-white/90
                  text-[#3B2A26] transition-colors hover:border-[#D4A9B6]
                "
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-[5px]">
                  <span
                    className={`block h-px w-4 bg-current transition-transform duration-300 origin-center ${
                      mobileOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-4 bg-current transition-opacity duration-300 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-4 bg-current transition-transform duration-300 origin-center ${
                      mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
