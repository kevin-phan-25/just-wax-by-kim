/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Behavior:
 * • Fixed responsive navbar
 * • Services navigates to the homepage Services section
 * • Services dropdown contains Ladies / Gentlemen Waxing
 * • Information is dropdown-only and never navigates
 * • Information contains FAQ / Policies / Contact / Privacy Policy
 * • Book Appointment opens BookingWidget
 * • Mobile menu is handled by MobileMenu
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/constants/navigation";
import { BookingWidget } from "@/features/booking";

function getNavbarHeight(): number {
  if (typeof window === "undefined") {
    return 168;
  }

  if (window.innerWidth >= 1280) {
    return 168;
  }

  if (window.innerWidth >= 768) {
    return 140;
  }

  return 110;
}

function scrollToSection(href: string): void {
  const id = href.split("#")[1];

  if (!id) {
    return;
  }

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const position =
    element.getBoundingClientRect().top +
    window.scrollY -
    getNavbarHeight();

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [bookingOpen, setBookingOpen] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || bookingOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    mobileOpen,
    bookingOpen,
  ]);

  /*
   * ---------------------------------------------------------------------------
   * NORMAL NAVIGATION
   * ---------------------------------------------------------------------------
   */

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.includes("#")) {
      return;
    }

    /*
     * Homepage anchor.
     *
     * Example:
     * /#services
     *
     * If already on the homepage, smoothly scroll.
     */

    if (
      href.startsWith("/#") &&
      pathname === "/"
    ) {
      e.preventDefault();

      scrollToSection(href);

      setOpenDropdown(null);

      return;
    }

    /*
     * If we are on another page, allow
     * Next.js to navigate to "/#services".
     */

    setOpenDropdown(null);
  };

  /*
   * ---------------------------------------------------------------------------
   * SERVICES
   * ---------------------------------------------------------------------------
   *
   * Services has both:
   *
   * • a destination: /#services
   * • a dropdown
   *
   * Clicking the main Services label should
   * ALWAYS take the user to the Services section.
   */

  const handleServicesClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    setOpenDropdown(null);

    if (pathname === "/") {
      scrollToSection("/#services");
      return;
    }

    window.location.href = "/#services";
  };

  /*
   * ---------------------------------------------------------------------------
   * INFORMATION
   * ---------------------------------------------------------------------------
   *
   * Information is intentionally NOT a Link.
   *
   * It only opens/closes the dropdown.
   */

  const handleInformationClick = () => {
    setOpenDropdown((current) =>
      current === "Information"
        ? null
        : "Information"
    );
  };

  return (
    <>
      <header
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
        {/* ----------------------------------------------------------------- */}
        {/* LOGO                                                             */}
        {/* ----------------------------------------------------------------- */}

        <div
          className="
            absolute
            left-6
            md:left-10
            xl:left-14
            top-1/2
            z-10
            -translate-y-1/2
          "
        >
          <Link
            href="/"
            aria-label="Just Wax by Kim home"
            onClick={() =>
              setOpenDropdown(null)
            }
          >
            <Logo />
          </Link>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* DESKTOP NAV                                                      */}
        {/* ----------------------------------------------------------------- */}

        <nav
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-7
            whitespace-nowrap
            lg:flex
            xl:gap-10
          "
          aria-label="Main navigation"
        >
          {navigation.map((link) => {
            const hasDropdown =
              Boolean(link.dropdown?.length);

            const isOpen =
              openDropdown === link.label;

            /*
             * ---------------------------------------------------------------
             * INFORMATION
             * ---------------------------------------------------------------
             *
             * Information is dropdown-only.
             */

            if (
              link.label === "Information"
            ) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(
                      "Information"
                    )
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    type="button"
                    onClick={
                      handleInformationClick
                    }
                    aria-expanded={isOpen}
                    className="
                      uppercase
                      tracking-[0.18em]
                      text-xs
                      font-semibold
                      text-[#3B2A26]/80
                      transition
                      hover:text-[#8C5A6B]
                    "
                  >
                    {link.label}
                  </button>

                  {isOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        -translate-x-1/2
                        pt-6
                      "
                    >
                      <div
                        className="
                          min-w-[270px]
                          rounded-3xl
                          border
                          border-[#E8DDD8]
                          bg-[#FCF8F3]
                          p-4
                          shadow-xl
                        "
                      >
                        {link.dropdown?.map(
                          (item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() =>
                                setOpenDropdown(
                                  null
                                )
                              }
                              className="
                                block
                                rounded-2xl
                                px-5
                                py-4
                                text-center
                                transition
                                hover:bg-[#F6E7E1]
                              "
                            >
                              <span
                                className="
                                  uppercase
                                  tracking-[0.15em]
                                  text-xs
                                  font-semibold
                                  text-[#3B2A26]
                                "
                              >
                                {item.label}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            /*
             * ---------------------------------------------------------------
             * SERVICES
             * ---------------------------------------------------------------
             *
             * Services main label navigates to
             * the Services section.
             *
             * Dropdown appears on hover.
             */

            if (
              link.label === "Services"
            ) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(
                      "Services"
                    )
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <a
                    href="/#services"
                    onClick={
                      handleServicesClick
                    }
                    className="
                      uppercase
                      tracking-[0.18em]
                      text-xs
                      font-semibold
                      text-[#3B2A26]/80
                      transition
                      hover:text-[#8C5A6B]
                    "
                  >
                    {link.label}
                  </a>

                  {isOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        -translate-x-1/2
                        pt-6
                      "
                    >
                      <div
                        className="
                          min-w-[270px]
                          rounded-3xl
                          border
                          border-[#E8DDD8]
                          bg-[#FCF8F3]
                          p-4
                          shadow-xl
                        "
                      >
                        {link.dropdown?.map(
                          (item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() =>
                                setOpenDropdown(
                                  null
                                )
                              }
                              className="
                                block
                                rounded-2xl
                                px-5
                                py-4
                                text-center
                                transition
                                hover:bg-[#F6E7E1]
                              "
                            >
                              <span
                                className="
                                  uppercase
                                  tracking-[0.15em]
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
                                    mt-2
                                    block
                                    text-[11px]
                                    leading-relaxed
                                    text-[#8C7468]
                                  "
                                >
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            /*
             * ---------------------------------------------------------------
             * NORMAL NAVIGATION ITEMS
             * ---------------------------------------------------------------
             */

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleNavigation(
                    e,
                    link.href
                  )
                }
                className="
                  uppercase
                  tracking-[0.18em]
                  text-xs
                  font-semibold
                  text-[#3B2A26]/80
                  transition
                  hover:text-[#8C5A6B]
                "
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ----------------------------------------------------------------- */}
        {/* BOOKING CTA                                                      */}
        {/* ----------------------------------------------------------------- */}

        <div
          className="
            absolute
            right-6
            md:right-10
            xl:right-14
            top-1/2
            flex
            -translate-y-1/2
            items-center
          "
        >
          <button
            type="button"
            onClick={() =>
              setBookingOpen(true)
            }
            className="
              hidden
              min-h-[64px]
              min-w-[220px]
              items-center
              justify-center
              rounded-full
              border-2
              border-[#8C5A6B]
              px-8
              uppercase
              tracking-[0.24em]
              text-sm
              font-semibold
              text-[#8C5A6B]
              transition-all
              hover:scale-[1.03]
              hover:bg-[#F6E7E1]
              sm:inline-flex
              md:min-h-[70px]
              md:min-w-[260px]
              xl:min-h-[78px]
              xl:min-w-[300px]
            "
          >
            Book Appointment
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="
              ml-4
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
              lg:hidden
            "
          >
            ☰
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE MENU                                                        */}
      {/* ------------------------------------------------------------------- */}

      <MobileMenu
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
        onBookingOpen={() =>
          setBookingOpen(true)
        }
        links={navigation}
      />

      {/* ------------------------------------------------------------------- */}
      {/* BOOKING WIDGET                                                     */}
      {/* ------------------------------------------------------------------- */}

      <BookingWidget
        open={bookingOpen}
        onClose={() =>
          setBookingOpen(false)
        }
      />
    </>
  );
}
