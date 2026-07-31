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
 * • Floating dropdowns for Services + Studio Exploration
 * • Removed scrolled border divider
 * • Removed duplicate desktop Book Appointment button
 * • Supports homepage anchors + standalone pages
 *
 * --------------------------------------------------------------------------
 */

"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  Logo,
} from "@/components/ui/Logo";

import {
  MobileMenu,
} from "@/components/layout/MobileMenu";

import {
  navigation,
} from "@/constants/navigation";


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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);


  const handleNavigation = (
    e: React.MouseEvent,
    href: string
  ) => {
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
          h-[168px]
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
            left-6
            top-1/2
            -translate-y-1/2
          "
        >
          <Logo />
        </div>


        {/* DESKTOP NAV */}
        <div
          className="
            hidden
            xl:flex
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-8
          "
        >
          {navigation.map((link) => {
            const hasDropdown = Boolean(link.dropdown?.length);
            const isOpen = openDropdown === link.label;

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="
                      uppercase
                      font-semibold
                      tracking-[0.14em]
                      text-xs
                      text-[#3B2A26]/80
                      transition
                      hover:text-[#8C5A6B]
                      inline-flex
                      items-center
                      gap-1.5
                    "
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : link.label)
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <span
                      className={`
                        text-[10px]
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Floating dropdown */}
                  <div
                    className={`
                      absolute
                      left-1/2
                      top-full
                      z-50
                      pt-5
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }
                    `}
                    style={{ transform: isOpen ? "translateX(-50%)" : "translateX(-50%) translateY(-0.5rem)" }}
                  >
                    <div
                      className="
                        min-w-[240px]
                        rounded-2xl
                        border
                        border-[#E8DDD8]
                        bg-[#FCF8F3]/98
                        p-3
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
                                block
                                rounded-xl
                                px-5
                                py-3.5
                                text-center
                                uppercase
                                tracking-[0.14em]
                                text-xs
                                font-semibold
                                text-[#3B2A26]/85
                                transition
                                hover:bg-[#F6E7E1]
                                hover:text-[#8C5A6B]
                              "
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                  text-xs
                  text-[#3B2A26]/80
                  transition
                  hover:text-[#8C5A6B]
                "
              >
                {link.label}
              </Link>
            );
          })}
        </div>


        {/* MOBILE TOGGLE */}
        <div
          className="
            absolute
            right-6
            top-1/2
            -translate-y-1/2
            flex
            items-center
            gap-4
          "
        >
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              xl:hidden
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#E8DDD8]
              bg-white
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
