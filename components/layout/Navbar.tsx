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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
              ? "bg-[#FCF8F3]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(59,42,38,0.06)] border-b border-[#E8DDD8]"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="container-luxury">
          <nav className="flex h-[88px] items-center justify-between">
            {/* Brand */}
            <Logo priority />

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative text-[0.72rem] font-semibold uppercase
                      tracking-[0.22em] text-[#3B2A26]/80
                      transition-colors duration-300
                      hover:text-[#8C5A6B]
                      after:absolute after:left-0 after:-bottom-1
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

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="#booking"
                className="
                  hidden sm:inline-flex items-center justify-center
                  rounded-full bg-[#8C5A6B] px-6 py-3
                  text-[0.7rem] font-semibold uppercase tracking-[0.2em]
                  text-white transition-all duration-350
                  hover:bg-[#7A4A5A] hover:-translate-y-0.5
                  hover:shadow-[0_14px_36px_rgba(140,90,107,0.28)]
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
                  lg:hidden flex h-11 w-11 items-center justify-center
                  rounded-full border border-[#E8DDD8] bg-white/80
                  text-[#3B2A26] transition-colors hover:border-[#D4A9B6]
                "
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-1.5">
                  <span
                    className={`block h-px w-5 bg-current transition-transform duration-300 ${
                      mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition-opacity duration-300 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition-transform duration-300 ${
                      mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
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
