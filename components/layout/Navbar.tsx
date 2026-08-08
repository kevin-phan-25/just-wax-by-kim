/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Behavior:
 * • Fixed navbar
 * • Information is dropdown-only
 * • Services is dropdown-only
 * • Homepage anchors scroll beneath navbar
 * • Booking CTA opens booking widget
 * • Mobile menu supported
 * • Responsive desktop / tablet / mobile spacing
 * -----------------------------------------------------------------------------
 */

"use client";

import { useEffect, useState } from "react";
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

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  /*
   * ---------------------------------------------------------------------------
   * NAVBAR SCROLL STATE
   * ---------------------------------------------------------------------------
   */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ---------------------------------------------------------------------------
   * PREVENT BODY SCROLL WHEN MENU / BOOKING IS OPEN
   * ---------------------------------------------------------------------------
   */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || bookingOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, bookingOpen]);

  /*
   * ---------------------------------------------------------------------------
   * HOMEPAGE ANCHOR NAVIGATION
   * ---------------------------------------------------------------------------
   */

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.includes("#")) {
      return;
    }

    if (pathname === "/") {
      e.preventDefault();

      scrollToSection(href);

      setOpenDropdown(null);
    }
  };

  /*
   * ---------------------------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------------------------
   */

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
            -translate-y-1/2
            z-10
          "
        >
          <Link
            href="/"
            aria-label="Just Wax by Kim home"
          >
            <Logo />
          </Link>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* DESKTOP NAVIGATION                                               */}
        {/* ----------------------------------------------------------------- */}

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

            gap-7
            xl:gap-10

            whitespace-nowrap
          "
        >
          {navigation.map((link) => {
            const hasDropdown =
              Boolean(link.dropdown?.length);

            const isOpen =
              openDropdown === link.label;

            /*
             * ---------------------------------------------------------------
             * DROPDOWN NAVIGATION
             *
             * Information and Services do NOT navigate.
             * Clicking them only opens/closes their dropdown.
             * ---------------------------------------------------------------
             */

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(link.label)
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown(
                        isOpen
                          ? null
                          : link.label
                      )
                    }
                    className="
                      flex
                      items-center
                      gap-2

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

                    <span
                      className={`
                        text-[10px]

                        transition-transform
                        duration-300

                        ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▾
                    </span>
                  </button>

                  {/* ------------------------------------------------------- */}
                  {/* DROPDOWN                                                 */}
                  {/* ------------------------------------------------------- */}

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
                          min-w-[290px]

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
                                  block

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
                                  {
                                    item.description
                                  }
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
             * NORMAL NAVIGATION LINK
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

                  hover:text-[#8C5A6B]

                  transition
                "
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* RIGHT SIDE ACTIONS                                               */}
        {/* ----------------------------------------------------------------- */}

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
          {/* --------------------------------------------------------------- */}
          {/* BOOKING CTA                                                     */}
          {/* --------------------------------------------------------------- */}

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
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

          {/* --------------------------------------------------------------- */}
          {/* MOBILE MENU BUTTON                                              */}
          {/* --------------------------------------------------------------- */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(!mobileOpen)
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

              transition

              hover:bg-[#F6E7E1]
            "
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE MENU                                                         */}
      {/* ------------------------------------------------------------------- */}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onBookingOpen={() => setBookingOpen(true)}
        links={navigation}
      />

      {/* ------------------------------------------------------------------- */}
      {/* BOOKING WIDGET                                                      */}
      {/* ------------------------------------------------------------------- */}

      <BookingWidget
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
