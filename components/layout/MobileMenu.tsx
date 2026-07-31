/**
 * -----------------------------------------------------------------------------
 * File: components/layout/MobileMenu.tsx
 *
 * Date: July 30, 2026
 *
 * Description:
 * Mobile-first navigation for Just Wax by Kim — luxury theme.
 *
 * Changes (July 30, 2026):
 * • Link text inset ~½ inch from the left (pl-12 / 48px)
 * • Kept large tap targets and theme styling
 * • Book CTA still lifted from the bottom edge
 * -----------------------------------------------------------------------------
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavLink = {
  readonly label: string;
  readonly href: string;
};

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly dropdown?: readonly NavLink[];
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: readonly NavItem[];
}

const NAVBAR_HEIGHT = 168;

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (!element) return;

  const position =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleLink = (href: string) => {
    onClose();
    setExpanded(null);

    if (!href.startsWith("#")) return;

    if (pathname === "/") {
      window.setTimeout(() => scrollToSection(href), 180);
    } else {
      router.push(`/${href}`);
    }
  };

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <div
      className={`
        fixed inset-0 z-40 xl:hidden
        transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className="absolute inset-0 bg-[#3B2A26]/25 backdrop-blur-[6px]"
        onClick={() => {
          onClose();
          setExpanded(null);
        }}
        aria-hidden
      />

      <div
        className={`
          absolute left-0 right-0 top-[168px] bottom-0
          flex flex-col
          bg-[#FCF8F3]
          border-t border-[#E8DDD8]
          transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
          ${open ? "translate-y-0" : "translate-y-3"}
        `}
      >
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-x-0 top-0 h-24
            bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.28),transparent_70%)]
          "
        />

        <div className="relative flex-1 overflow-y-auto overscroll-contain px-6 py-8">
          <p className="mb-6 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#8C5A6B]">
            Menu
          </p>

          <ul className="flex flex-col gap-3">
            {links.map((link) => {
              const hasDropdown = Boolean(link.dropdown?.length);
              const isOpen = expanded === link.href;

              return (
                <li key={link.href}>
                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isOpen ? null : link.href)
                        }
                        className="
                          flex w-full items-center justify-between
                          min-h-[56px] rounded-full
                          pl-12 pr-6
                          text-left
                          text-[0.78rem] font-semibold uppercase tracking-[0.18em]
                          text-[#3B2A26]
                          bg-[#FFFFFF]/90 border border-[#E8DDD8]
                          shadow-[0_8px_24px_rgba(59,42,38,0.04)]
                          active:bg-[#F6E7E1]
                          transition-colors
                        "
                      >
                        <span>{link.label}</span>
                        <span
                          className={`
                            text-[#C8919B] text-base leading-none
                            transition-transform duration-300
                            ${isOpen ? "rotate-180" : ""}
                          `}
                        >
                          ▾
                        </span>
                      </button>

                      {isOpen && (
                        <ul className="mt-2 flex flex-col gap-2 px-1">
                          <li>
                            <Link
                              href={resolveHref(link.href)}
                              onClick={(e) => {
                                if (link.href.startsWith("#")) {
                                  e.preventDefault();
                                  handleLink(link.href);
                                } else {
                                  onClose();
                                  setExpanded(null);
                                }
                              }}
                              className="
                                flex w-full items-center
                                min-h-[52px] rounded-full
                                pl-12 pr-6
                                text-[0.72rem] font-semibold uppercase tracking-[0.16em]
                                text-[#8C5A6B]
                                bg-[#F6E7E1]
                                border border-[#E8DDD8]/60
                                active:bg-[#E8DDD8]
                                transition-colors
                              "
                            >
                              View {link.label}
                            </Link>
                          </li>

                          {link.dropdown!.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={resolveHref(item.href)}
                                onClick={(e) => {
                                  if (item.href.startsWith("#")) {
                                    e.preventDefault();
                                    handleLink(item.href);
                                  } else {
                                    onClose();
                                    setExpanded(null);
                                  }
                                }}
                                className="
                                  flex w-full items-center
                                  min-h-[52px] rounded-full
                                  pl-12 pr-6
                                  text-[0.72rem] font-medium uppercase tracking-[0.16em]
                                  text-[#3B2A26]/90
                                  bg-[#FFFFFF]/80 border border-[#E8DDD8]/70
                                  active:bg-[#F6E7E1]
                                  transition-colors
                                "
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={resolveHref(link.href)}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          handleLink(link.href);
                        } else {
                          onClose();
                        }
                      }}
                      className="
                        flex w-full items-center
                        min-h-[56px] rounded-full
                        pl-12 pr-6
                        text-[0.78rem] font-semibold uppercase tracking-[0.18em]
                        text-[#3B2A26]
                        bg-[#FFFFFF]/90 border border-[#E8DDD8]
                        shadow-[0_8px_24px_rgba(59,42,38,0.04)]
                        active:bg-[#F6E7E1]
                        transition-colors
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

        <div
          className="
            relative shrink-0
            border-t border-[#E8DDD8]/80
            bg-[#FCF8F3]
            px-6
            pt-5
            pb-10
            mb-[max(0.5rem,env(safe-area-inset-bottom))]
          "
        >
          <div className="mx-auto mb-4 h-px w-12 bg-[#D4A9B6]/80" />

          <Link
            href={pathname === "/" ? "#booking" : "/#booking"}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                handleLink("#booking");
              } else {
                onClose();
              }
            }}
            className="
              flex w-full items-center justify-center
              min-h-[56px] rounded-full
              border-2 border-[#8C5A6B]
              bg-transparent
              text-[0.78rem] font-semibold uppercase tracking-[0.2em]
              text-[#8C5A6B]
              active:bg-[#F6E7E1]
              transition-colors
            "
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
