/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Updates:
 * • Fixed dropdown TypeScript safety
 * • Larger luxury logo spacing
 * • Larger Book Appointment CTA
 * • Mobile / tablet / desktop optimization
 * • Studio Exploration mega menu
 * • Services dropdown
 * -----------------------------------------------------------------------------
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
    element.getBoundingClientRect().top +
    window.scrollY -
    NAVBAR_HEIGHT;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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
          fixed
          top-0
          left-0
          right-0
          z-50
          h-[110px]
          md:h-[140px]
          xl:h-[168px]
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-[#FCF8F3]/95 backdrop-blur-xl"
              : "bg-[#FCF8F3]/90 backdrop-blur-md"
          }
        `}
      >
        {/* LOGO */}
        <div
          className="
            absolute
            left-2
            sm:left-5
            md:left-8
            xl:left-10
            top-1/2
            -translate-y-1/2
            flex-shrink-0
          "
        >
          <Logo />
        </div>

        {/* DESKTOP NAVIGATION */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-5
            xl:gap-8
            whitespace-nowrap
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
                  <div className="inline-flex items-center gap-1">
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleNavigation(e, link.href);
                        setOpenDropdown(null);
                      }}
                      className="
                        uppercase
                        font-semibold
                        tracking-[0.14em]
                        text-[11px]
                        xl:text-xs
                        text-[#3B2A26]/80
                        hover:text-[#8C5A6B]
                        transition
                      "
                    >
                      {link.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : link.label)
                      }
                      className="text-[10px]"
                    >
                      <span
                        className={`
                          inline-block
                          transition-transform
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  {/* SERVICES DROPDOWN */}
                  {!isMega && (
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full
                        pt-5
                        transition-all
                        ${
                          isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }
                      `}
                      style={{
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className="
                          min-w-[260px]
                          rounded-2xl
                          border
                          border-[#E8DDD8]
                          bg-[#FCF8F3]/98
                          p-3
                          shadow-xl
                        "
                      >
                        <div className="flex flex-col gap-1">
                          {(link.dropdown ?? []).map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                handleNavigation(e, item.href);
                                setOpenDropdown(null);
                              }}
                              className="
                                rounded-xl
                                px-5
                                py-3
                                text-center
                                transition
                                hover:bg-[#F6E7E1]
                              "
                            >
                              <span
                                className="
                                  block
                                  uppercase
                                  tracking-[0.14em]
                                  text-xs
                                  font-semibold
                                  text-[#3B2A26]
                                "
                              >
                                {item.label}
                              </span>
                              {item.description && (
                                <span
                                  className="
                                    mt-1
                                    block
                                    text-[11px]
                                    text-[#8C7468]
                                  "
                                >
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STUDIO EXPLORATION */}
                  {isMega && (
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full
                        pt-6
                        transition-all
                        ${
                          isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }
                      `}
                      style={{
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className="
                          w-[min(92vw,720px)]
                          rounded-3xl
                          border
                          border-[#E8DDD8]
                          bg-[#FCF8F3]/98
                          p-8
                          shadow-xl
                        "
                      >
                        <div className="mb-8 text-center">
                          <p
                            className="
                              uppercase
                              tracking-[0.35em]
                              text-[10px]
                              text-[#8C5A6B]
                            "
                          >
                            Discover
                          </p>
                          <h3
                            className="
                              mt-3
                              font-serif
                              text-2xl
                              text-[#3B2A26]
                            "
                          >
                            Studio Exploration
                          </h3>
                        </div>

                        <div
                          className="
                            grid
                            grid-cols-2
                            sm:grid-cols-3
                            gap-3
                          "
                        >
                          {(link.dropdown ?? []).map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                handleNavigation(e, item.href);
                                setOpenDropdown(null);
                              }}
                              className="
                                rounded-2xl
                                px-4
                                py-6
                                text-center
                                transition
                                hover:bg-white
                              "
                            >
                              <span
                                className="
                                  font-serif
                                  text-lg
                                  text-[#3B2A26]
                                "
                              >
                                {item.label}
                              </span>
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
                  uppercase
                  font-semibold
                  tracking-[0.14em]
                  text-[11px]
                  xl:text-xs
                  text-[#3B2A26]/80
                  hover:text-[#8C5A6B]
                  transition
                "
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + MOBILE MENU */}
        <div
          className="
            absolute
            right-3
            sm:right-5
            md:right-8
            xl:right-10
            top-1/2
            -translate-y-1/2
            flex
            items-center
            gap-3
          "
        >
          {/* BOOK APPOINTMENT */}
          <Link
            href="/#booking"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("/#booking");
              }
            }}
            className="
              hidden
              sm:inline-flex
              min-h-[58px]
              md:min-h-[66px]
              xl:min-h-[74px]
              min-w-[190px]
              md:min-w-[240px]
              xl:min-w-[280px]
              items-center
              justify-center
              rounded-full
              border-2
              border-[#8C5A6B]
              px-8
              md:px-10
              xl:px-14
              uppercase
              tracking-[0.22em]
              text-xs
              md:text-sm
              xl:text-base
              font-bold
              whitespace-nowrap
              text-[#8C5A6B]
              transition-all
              duration-300
              hover:bg-[#F6E7E1]
              hover:scale-[1.03]
            "
          >
            Book Appointment
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#E8DDD8]
              bg-white
              text-[#3B2A26]
            "
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
