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
 * • Replaced fixed 168px height with clamp (scales across screens)
 * • Uses CSS --nav-height so scroll-padding stays in sync
 * • Logo scales with the bar
 * • Book Appointment: outline only, no solid purple on hover
 * • Nav: Home, About, Services, Gallery, Testimonials, FAQ, Booking, Contact
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
              : "bg-[#FCF8F3]/90 backdrop-blur-md border-b border-transparent"
          }
        `}
      >
        <div className="container-luxury">
          <nav
            className="
              flex items-center justify-between gap-4
              h-[var(--nav-height)]
            "
          >
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center h-full py-2">
              <Logo priority />
            </div>

            {/* Links + CTA */}
            <div className="flex items-center gap-6 xl:gap-10 ml-auto">
              <ul className="hidden xl:flex items-center gap-5 2xl:gap-7">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        relative text-[0.65rem] font-semibold uppercase
                        tracking-[0.15em] text-[#3B2A26]/75
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

              <Link
                href="#booking"
                className="
                  hidden sm:inline-flex items-center justify-center
                  rounded-full
                  border-2 border-[#8C5A6B]
                  bg-transparent
                  px-7 py-3.5
                  text-[0.72rem] font-semibold uppercase tracking-[0.16em]
                  text-[#8C5A6B]
                  transition-all duration-300 whitespace-nowrap
                  hover:border-[#6E4A55]
                  hover:text-[#6E4A55]
                  hover:bg-[#F6E7E1]/60
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
                  xl:hidden flex h-11 w-11 items-center justify-center
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
