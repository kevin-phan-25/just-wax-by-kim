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
 * • Nav links shifted further right for better balance with large logo
 * • Book Appointment: removed solid purple fill → outline bubble
 * • CTA text and padding enlarged for easier tapping / readability
 * • Nav order: Home, About, Services, Gallery, Testimonials, FAQ, Booking, Contact
 * -----------------------------------------------------------------------------
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Booking", href: "#booking" },
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
              ? "bg-[#FCF8F3]/95 backdrop-blur-xl border-b border-[#E8DDD8] shadow-[0_6px_24px_rgba(59,42,38,0.05)]"
              : "bg-[#FCF8F3]/85 backdrop-blur-md border-b border-transparent"
          }
        `}
      >
        <div className="container-luxury">
          <nav className="flex h-[200px] md:h-[220px] items-center justify-between gap-6">
            {/* Brand — left */}
            <div className="flex-shrink-0 flex items-center h-full py-3">
              <Logo priority />
            </div>

            {/* Right cluster: links + CTA pushed further right */}
            <div className="flex items-center gap-8 xl:gap-12 ml-auto">
              {/* Desktop links */}
              <ul className="hidden xl:flex items-center gap-6 2xl:gap-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        relative text-[0.68rem] font-semibold uppercase
                        tracking-[0.16em] text-[#3B2A26]/75
                        transition-colors duration-300 whitespace-nowrap
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

              {/* Outline CTA — larger, no purple fill */}
              <Link
                href="#booking"
                className="
                  hidden sm:inline-flex items-center justify-center
                  rounded-full
                  border-2 border-[#8C5A6B]
                  bg-transparent
                  px-8 py-4
                  text-[0.78rem] font-semibold uppercase tracking-[0.18em]
                  text-[#8C5A6B]
                  transition-all duration-300 whitespace-nowrap
                  hover:bg-[#8C5A6B] hover:text-white
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_28px_rgba(140,90,107,0.2)]
                "
              >
                Book Appointment
              </Link>

              {/* Mobile menu toggle */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="
                  xl:hidden flex h-12 w-12 items-center justify-center
                  rounded-full border border-[#E8DDD8] bg-white/90
                  text-[#3B2A26] transition-colors hover:border-[#D4A9B6]
                "
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-[5px]">
                  <span
                    className={`block h-px w-5 bg-current transition-transform duration-300 origin-center ${
                      mobileOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition-opacity duration-300 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition-transform duration-300 origin-center ${
                      mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
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
