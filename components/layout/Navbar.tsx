/**
 * --------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Changes:
 * • Main links: Home, About, Services, Book Now, Studio Exploration
 * • Studio Exploration → editorial mega panel
 * • Services → compact floating dropdown
 * • Dropdown labels are real links (Services scrolls to #services)
 * • Large Book Appointment CTA on the right
 * • Removed scrolled border divider
 *
 * --------------------------------------------------------------------------
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/constants/navigation";

const NAVBAR_HEIGHT = 168;

function scrollToSection(href: string) {
  const id = href.split("#")[1];
  const element = document.getElementById(id);
  if (!element) return;

  const position =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

  window.scrollTo({ top: position, behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    if (!href.includes("#")) return;
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(href);
      setOpenDropdown(null);
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-[168px]
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#FCF8F3]/95 backdrop-blur-xl"
              : "bg-[#FCF8F3]/90 backdrop-blur-md"
          }
        `}
      >
        {/* LOGO */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* DESKTOP NAV */}
        <div
          className="
            hidden xl:flex
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            items-center gap-8
          "
        >
          {navigation.map((link) => {
            const hasDropdown = Boolean(link.dropdown?.length);
            const isOpen = openDropdown === link.label;
            const isMega = link.label === "Studio Exploration";

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="inline-flex items-center gap-1.5">
                    {/* Label → navigates / scrolls */}
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleNavigation(e, link.href);
                        setOpenDropdown(null);
                      }}
                      className="
                        uppercase font-semibold tracking-[0.14em] text-xs
                        text-[#3B2A26]/80 transition hover:text-[#8C5A6B]
                      "
                    >
                      {link.label}
                    </Link>

                    {/* Chevron → toggles dropdown */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-label={`${link.label} menu`}
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : link.label)
                      }
                      className="
                        text-[10px] text-[#3B2A26]/80 transition
                        hover:text-[#8C5A6B]
                      "
                    >
                      <span
                        className={`
                          inline-block transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  {/* SERVICES: compact dropdown */}
                  {!isMega && (
                    <div
                      className={`
                        absolute left-1/2 top-full z-50 pt-5
                        transition-all duration-300
                        ${
                          isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                        }
                      `}
                      style={{
                        transform: isOpen
                          ? "translateX(-50%)"
                          : "translateX(-50%) translateY(-0.5rem)",
                      }}
                    >
                      <div
                        className="
                          min-w-[260px] rounded-2xl border border-[#E8DDD8]
                          bg-[#FCF8F3]/98 p-3
                          shadow-[0_20px_50px_-20px_rgba(59,42,38,0.25)]
                          backdrop-blur-xl
                        "
                      >
                        <ul className="flex flex-col gap-1">
                          {link.dropdown?.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={(e) => {
                                  handleNavigation(e, item.href);
                                  setOpenDropdown(null);
                                }}
                                className="
                                  block rounded-xl px-5 py-3.5 text-center
                                  transition hover:bg-[#F6E7E1]
                                "
                              >
                                <span
                                  className="
                                    block uppercase tracking-[0.14em] text-xs
                                    font-semibold text-[#3B2A26]
                                  "
                                >
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="mt-1 block text-[11px] leading-snug text-[#8C7468] normal-case tracking-normal font-normal">
                                    {item.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* STUDIO EXPLORATION: mega panel */}
                  {isMega && (
                    <div
                      className={`
                        absolute left-1/2 top-full z-50 pt-6
                        transition-all duration-300
                        ${
                          isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                        }
                      `}
                      style={{
                        transform: isOpen
                          ? "translateX(-50%)"
                          : "translateX(-50%) translateY(-0.5rem)",
                      }}
                    >
                      <div
                        className="
                          w-[min(92vw,720px)]
                          rounded-3xl
                          border border-[#E8DDD8]
                          bg-[#FCF8F3]/98
                          p-8
                          shadow-[0_28px_60px_-24px_rgba(59,42,38,0.28)]
                          backdrop-blur-xl
                        "
                      >
                        <div className="mb-8 text-center">
                          <p className="uppercase tracking-[0.35em] text-[10px] text-[#8C5A6B]">
                            Discover
                          </p>
                          <p className="mt-3 font-serif text-2xl text-[#3B2A26]">
                            Studio Exploration
                          </p>
                          <div className="mx-auto mt-5 h-px w-16 bg-[#D8B4A0]" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                handleNavigation(e, item.href);
                                setOpenDropdown(null);
                              }}
                              className="
                                group flex flex-col items-center
                                rounded-2xl border border-transparent
                                px-4 py-6 text-center
                                transition duration-300
                                hover:border-[#E8DDD8] hover:bg-white
                              "
                            >
                              <span
                                className="
                                  font-serif text-lg text-[#3B2A26]
                                  transition-colors
                                  group-hover:text-[#8C5A6B]
                                "
                              >
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-2 text-[12px] leading-relaxed text-[#8C7468]">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="
                  uppercase font-semibold tracking-[0.14em] text-xs
                  text-[#3B2A26]/80 transition hover:text-[#8C5A6B]
                "
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* BOOK CTA + MOBILE TOGGLE */}
        <div
          className="
            absolute right-6 top-1/2 -translate-y-1/2
            flex items-center gap-4
          "
        >
          <Link
            href="/#booking"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("/#booking");
              }
            }}
            className="
              hidden sm:inline-flex
              items-center justify-center
              rounded-full
              border-2 border-[#8C5A6B]
              px-10 py-4
              md:px-12 md:py-5
              uppercase tracking-[0.2em]
              text-xs md:text-sm
              font-semibold
              text-[#8C5A6B]
              transition
              hover:bg-[#F6E7E1]
            "
          >
            Book Appointment
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              xl:hidden flex h-12 w-12 items-center justify-center
              rounded-full border border-[#E8DDD8] bg-white
            "
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navigation}
      />
    </>
  );
}
