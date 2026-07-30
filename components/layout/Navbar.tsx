/**
 * ------------------------------------------------------------------
 * File: components/layout/Navbar.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Fixed luxury navigation for Just Wax by Kim.
 *
 * Changes:
 * • Navbar height: 168px
 * • Logo anchored left
 * • Navigation centered to viewport
 * • Navigation typography refined
 * • Book button anchored right
 * ------------------------------------------------------------------
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
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          h-[168px]

          transition-all
          duration-500
          ease-[cubic-bezier(0.2,0.8,0.2,1)]

          ${
            scrolled
              ? "bg-[#FCF8F3]/95 backdrop-blur-xl border-b border-[#E8DDD8] shadow-[0_6px_24px_rgba(59,42,38,0.05)]"
              : "bg-[#FCF8F3]/90 backdrop-blur-md border-b border-transparent"
          }
        `}
      >
        <div className="relative h-full flex items-center px-12">

          {/* LEFT LOGO */}
          <div
            className="
              absolute
              left-12
              flex
              items-center
            "
          >
            <Logo />
          </div>


          {/* CENTER NAVIGATION */}
          <nav
            className="
              absolute
              left-1/2
              -translate-x-1/2

              hidden
              xl:flex

              items-center
            "
          >
            <ul
              className="
                flex
                items-center

                gap-8
                2xl:gap-10
              "
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative

                      uppercase
                      font-semibold

                      tracking-[0.16em]

                      text-[#3B2A26]/80

                      whitespace-nowrap

                      text-[0.9rem]
                      2xl:text-[1.1rem]

                      transition-colors
                      duration-300

                      hover:text-[#8C5A6B]

                      after:absolute
                      after:left-0
                      after:-bottom-[5px]

                      after:h-px
                      after:w-0

                      after:bg-[#D4A9B6]

                      after:transition-all
                      after:duration-300

                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          {/* RIGHT BOOK BUTTON */}
          <div
            className="
              absolute
              right-12

              flex
              items-center
            "
          >
            <Link
              href="#booking"
              className="
                hidden
                sm:inline-flex

                items-center
                justify-center

                rounded-full

                border-2
                border-[#8C5A6B]

                px-8
                py-4

                text-[0.85rem]

                font-semibold

                uppercase

                tracking-[0.18em]

                text-[#8C5A6B]

                transition-all
                duration-300

                whitespace-nowrap

                hover:border-[#6E4A55]
                hover:text-[#6E4A55]
                hover:bg-[#F6E7E1]/60
              "
            >
              Book Appointment
            </Link>


            {/* MOBILE MENU */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((v) => !v)
              }
              className="
                xl:hidden

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-[#E8DDD8]

                bg-white/90

                text-[#3B2A26]
              "
            >
              <span className="sr-only">
                Menu
              </span>

              <div className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </div>
            </button>

          </div>

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
