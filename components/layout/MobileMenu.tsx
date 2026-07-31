/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Luxury mobile navigation for Just Wax by Kim.
 *
 * Updates:
 * • Responsive navbar height support
 * • Handles mobile + tablet layouts
 * • Supports Services dropdown
 * • Supports Studio Exploration dropdown
 * • Supports anchor scrolling
 * • Sticky Book Appointment CTA
 * • Improved spacing and touch targets
 * -----------------------------------------------------------------------------
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
};

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly dropdown?: readonly NavLink[];
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: readonly NavItem[];
}

const NAVBAR_HEIGHT = 140;

function scrollToSection(href: string) {
  const id = href.replace("/#", "");

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

export function MobileMenu({
  open,
  onClose,
  links,
}: MobileMenuProps) {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState<string | null>(null);


  const handleAnchor = (href: string) => {
    onClose();
    setExpanded(null);

    if (pathname === "/") {
      window.setTimeout(() => {
        scrollToSection(href);
      }, 150);
    } else {
      window.location.href = href;
    }
  };


  if (!open) return null;


  return (
    <>
      {/* Backdrop */}
      <div
        className="
          fixed
          inset-0
          z-40
          bg-[#3B2A26]/20
          backdrop-blur-sm
          lg:hidden
        "
        onClick={onClose}
      />


      {/* Mobile Panel */}
      <div
        className="
          fixed
          top-[110px]
          md:top-[140px]

          left-0
          right-0
          bottom-0

          z-50

          flex
          flex-col

          bg-[#FCF8F3]

          lg:hidden
        "
      >


        {/* Scroll Area */}
        <div
          className="
            flex-1
            overflow-y-auto

            px-6
            py-8
          "
        >

          <ul
            className="
              flex
              flex-col
              gap-4
            "
          >

            {links.map((link) => {

              const hasDropdown =
                Boolean(link.dropdown?.length);

              const isOpen =
                expanded === link.label;


              return (
                <li key={link.label}>

                  {hasDropdown ? (

                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(
                            isOpen
                              ? null
                              : link.label
                          )
                        }
                        className="
                          flex
                          min-h-[58px]
                          w-full

                          items-center
                          justify-center
                          gap-2

                          rounded-full

                          border
                          border-[#E8DDD8]

                          bg-white/90

                          uppercase
                          tracking-[0.18em]

                          text-xs
                          font-semibold

                          text-[#3B2A26]
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


                      {isOpen && (

                        <ul
                          className="
                            mt-3

                            flex
                            flex-col
                            gap-3
                          "
                        >

                          {link.href.includes("#") && (

                            <li>

                              <button
                                type="button"
                                onClick={() =>
                                  handleAnchor(
                                    link.href
                                  )
                                }
                                className="
                                  flex
                                  min-h-[54px]
                                  w-full

                                  items-center
                                  justify-center

                                  rounded-full

                                  bg-[#F6E7E1]

                                  border
                                  border-[#E8DDD8]

                                  uppercase
                                  tracking-[0.16em]

                                  text-xs
                                  font-semibold

                                  text-[#8C5A6B]
                                "
                              >
                                {link.label === "Services"
                                  ? "All Services"
                                  : `View ${link.label}`}
                              </button>

                            </li>

                          )}



                          {link.dropdown?.map((item) => (

                            <li key={item.href}>

                              <Link
                                href={item.href}
                                onClick={(e)=>{

                                  if(
                                    item.href.includes("#")
                                  ){
                                    e.preventDefault();

                                    handleAnchor(
                                      item.href
                                    );
                                  }
                                  else{
                                    onClose();
                                  }

                                }}
                                className="
                                  flex
                                  min-h-[58px]

                                  flex-col
                                  items-center
                                  justify-center

                                  rounded-2xl

                                  bg-[#F6E7E1]

                                  border
                                  border-[#E8DDD8]

                                  px-4
                                  py-3

                                  text-center
                                "
                              >

                                <span
                                  className="
                                    uppercase
                                    tracking-[0.16em]

                                    text-xs
                                    font-semibold

                                    text-[#8C5A6B]
                                  "
                                >
                                  {item.label}
                                </span>


                                {item.description && (

                                  <span
                                    className="
                                      mt-1

                                      text-[11px]

                                      leading-snug

                                      text-[#8C7468]

                                      normal-case

                                      tracking-normal
                                    "
                                  >
                                    {item.description}
                                  </span>

                                )}

                              </Link>

                            </li>

                          ))}

                        </ul>

                      )}

                    </>

                  ) : (

                    <Link
                      href={link.href}
                      onClick={(e)=>{

                        if(
                          link.href.includes("#")
                        ){
                          e.preventDefault();

                          handleAnchor(
                            link.href
                          );
                        }
                        else{
                          onClose();
                        }

                      }}
                      className="
                        flex
                        min-h-[58px]
                        w-full

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#E8DDD8]

                        bg-white/90

                        uppercase

                        tracking-[0.18em]

                        text-xs

                        font-semibold

                        text-[#3B2A26]
                      "
                    >
                      {link.label}
                    </Link>

                  )}

                </li>
              );

            })}

          </ul>

        </div>



        {/* Bottom CTA */}
        <div
          className="
            shrink-0

            border-t
            border-[#E8DDD8]

            bg-[#FCF8F3]

            px-6
            py-6
          "
        >

          <Link
            href="/#booking"
            onClick={(e)=>{

              if(pathname === "/"){

                e.preventDefault();

                handleAnchor(
                  "/#booking"
                );

              }
              else{

                onClose();

              }

            }}
            className="
              flex

              min-h-[58px]

              w-full

              items-center
              justify-center

              rounded-full

              border-2

              border-[#8C5A6B]

              uppercase

              tracking-[0.2em]

              text-sm

              font-semibold

              text-[#8C5A6B]

              transition

              hover:bg-[#F6E7E1]
            "
          >
            Book Appointment
          </Link>

        </div>


      </div>

    </>
  );
}
