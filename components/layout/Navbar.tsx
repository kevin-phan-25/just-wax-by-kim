/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Behavior:
 * • Navbar remains fixed
 * • Services navigates to #services on homepage
 * • Services dropdown contains Ladies / Gentlemen
 * • Information ONLY opens its dropdown
 * • Information itself does not navigate
 * • Booking CTA opens BookingWidget
 * • Desktop and mobile navigation supported
 * • No raw <a> elements
 * -----------------------------------------------------------------------------
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

import {
  BookingWidget,
} from "@/features/booking";


/* -----------------------------------------------------------------------------
 * NAVBAR HEIGHT
 * -------------------------------------------------------------------------- */

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


/* -----------------------------------------------------------------------------
 * SCROLL TO ANCHOR
 * -------------------------------------------------------------------------- */

function scrollToSection(
  href: string
): void {
  const id = href.split("#")[1];

  if (!id) {
    return;
  }

  const element =
    document.getElementById(id);

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


/* -----------------------------------------------------------------------------
 * NAVBAR
 * -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();

  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  const [
    bookingOpen,
    setBookingOpen,
  ] = useState(false);

  const [
    openDropdown,
    setOpenDropdown,
  ] = useState<string | null>(null);


  /* ---------------------------------------------------------------------------
   * SCROLL STATE
   * ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
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


  /* ---------------------------------------------------------------------------
   * LOCK BODY WHEN MENU / BOOKING IS OPEN
   * ------------------------------------------------------------------------ */

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


  /* ---------------------------------------------------------------------------
   * DESKTOP NAVIGATION
   *
   * Handles:
   *
   * /#hero
   * /#about
   * /#services
   * /#booking
   *
   * When already on homepage, we prevent normal navigation and smoothly
   * scroll to the section.
   *
   * When on another page, Next.js navigates to /#section.
   * ------------------------------------------------------------------------ */

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.includes("#")) {
      return;
    }

    const [
      path,
    ] = href.split("#");

    const targetPath =
      path || "/";

    const isHomepage =
      pathname === "/" &&
      targetPath === "/";

    if (isHomepage) {
      e.preventDefault();

      scrollToSection(href);

      setOpenDropdown(null);
      setMobileOpen(false);
    }
  };


  /* ---------------------------------------------------------------------------
   * DESKTOP NAVIGATION RENDER
   * ------------------------------------------------------------------------ */

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

        {/* -------------------------------------------------------------------
         * LOGO
         * ---------------------------------------------------------------- */}
        <div
          className="
            absolute
            left-6
            md:left-10
            xl:left-14

            top-1/2
            -translate-y-1/2

            z-10
          "
        >
          <Link
            href="/"
            aria-label="Just Wax by Kim home"
            onClick={() => {
              setOpenDropdown(null);
              setMobileOpen(false);
            }}
          >
            <Logo />
          </Link>
        </div>


        {/* -------------------------------------------------------------------
         * DESKTOP NAV
         * ---------------------------------------------------------------- */}
        <nav
          aria-label="Main navigation"
          className="
            hidden
            lg:flex

            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            items-center

            gap-7
            xl:gap-10

            whitespace-nowrap
          "
        >

          {navigation.map((link) => {
            const hasDropdown =
              Boolean(
                link.dropdown?.length
              );

            const isOpen =
              openDropdown ===
              link.label;


            /* -----------------------------------------------------------------
             * INFORMATION
             *
             * IMPORTANT:
             * Information has an empty href.
             * It MUST NOT navigate.
             *
             * It only opens/closes the dropdown.
             * ---------------------------------------------------------------- */

            if (
              link.label ===
                "Information"
            ) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(
                      link.label
                    )
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenDropdown(
                        isOpen
                          ? null
                          : link.label
                      )
                    }
                    className="
                      uppercase
                      tracking-[0.18em]
                      text-xs
                      font-semibold

                      text-[#3B2A26]/80
                      hover:text-[#8C5A6B]

                      transition
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

                        pt-6

                        -translate-x-1/2
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
                              key={
                                item.href
                              }
                              href={
                                item.href
                              }
                              onClick={() => {
                                setOpenDropdown(
                                  null
                                );
                              }}
                              className="
                                block

                                rounded-2xl

                                px-5
                                py-4

                                text-center

                                hover:bg-[#F6E7E1]

                                transition
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


            /* -----------------------------------------------------------------
             * ITEMS WITH DROPDOWNS
             *
             * Services:
             *
             * • Clicking "Services" goes to #services
             * • Hovering opens the service dropdown
             * ---------------------------------------------------------------- */

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(
                      link.label
                    )
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <Link
                    href={
                      link.href || "/"
                    }
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
                      hover:text-[#8C5A6B]

                      transition
                    "
                  >
                    {link.label}
                  </Link>


                  {isOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-full

                        pt-6

                        -translate-x-1/2
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
                              key={
                                item.href
                              }
                              href={
                                item.href
                              }
                              onClick={(e) => {
                                handleNavigation(
                                  e,
                                  item.href
                                );

                                setOpenDropdown(
                                  null
                                );
                              }}
                              className="
                                block

                                rounded-2xl

                                px-5
                                py-4

                                text-center

                                hover:bg-[#F6E7E1]

                                transition
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


            /* -----------------------------------------------------------------
             * NORMAL NAVIGATION ITEM
             * ---------------------------------------------------------------- */

            return (
              <Link
                key={link.href}
                href={
                  link.href || "/"
                }
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
                  hover:text-[#8C5A6B]

                  transition
                "
              >
                {link.label}
              </Link>
            );
          })}

        </nav>


        {/* -------------------------------------------------------------------
         * BOOKING CTA
         * ---------------------------------------------------------------- */}

        <div
          className="
            absolute
            right-6
            md:right-10
            xl:right-14

            top-1/2
            -translate-y-1/2

            flex
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
              sm:inline-flex

              min-h-[64px]
              md:min-h-[70px]
              xl:min-h-[78px]

              min-w-[220px]
              md:min-w-[260px]
              xl:min-w-[300px]

              items-center
              justify-center

              rounded-full

              border-2
              border-[#8C5A6B]

              uppercase
              tracking-[0.24em]

              text-sm
              font-semibold

              text-[#8C5A6B]

              transition-all
              duration-300

              hover:bg-[#F6E7E1]
              hover:scale-[1.03]
            "
          >
            Book Appointment
          </button>


          {/* -----------------------------------------------------------------
           * MOBILE MENU BUTTON
           * ---------------------------------------------------------------- */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={
              mobileOpen
            }
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="
              lg:hidden

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
            "
          >
            {mobileOpen
              ? "×"
              : "☰"}
          </button>
        </div>

      </header>


      {/* ---------------------------------------------------------------------
       * MOBILE MENU
       * ------------------------------------------------------------------ */}

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


      {/* ---------------------------------------------------------------------
       * BOOKING WIDGET
       * ------------------------------------------------------------------ */}

      <BookingWidget
        open={bookingOpen}
        onClose={() =>
          setBookingOpen(false)
        }
      />
    </>
  );
}
