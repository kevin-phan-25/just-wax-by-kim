/**
 * -----------------------------------------------------------------------------
 * File: components/layout/MobileMenu.tsx
 *
 * Date: July 30, 2026
 *
 * Description:
 * Mobile-first navigation for Just Wax by Kim.
 *
 * Design goals:
 * • Large tap targets (easy on phones)
 * • No tiny hover dropdowns
 * • Sub-links expand as full-width rows
 * • Clear Book Appointment CTA
 *
 * Changes (July 30, 2026):
 * • Full redesign for mobile usability
 * • Expandable sections instead of small dropdowns
 * • Larger type + padding for touch
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#3B2A26]/35 backdrop-blur-sm"
        onClick={() => {
          onClose();
          setExpanded(null);
        }}
        aria-hidden
      />

      {/* Full-width sheet under navbar */}
      <div
        className={`
          absolute left-0 right-0 top-[168px] bottom-0
          flex flex-col
          bg-[#FCF8F3]
          border-t border-[#E8DDD8]
          shadow-[0_-8px_40px_rgba(59,42,38,0.08)]
          transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
          ${open ? "translate-y-0" : "translate-y-4"}
        `}
      >
        {/* Scrollable links */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const hasDropdown = Boolean(link.dropdown?.length);
              const isOpen = expanded === link.href;

              return (
                <li key={link.href}>
                  {hasDropdown ? (
                    <>
                      {/* Parent row — toggles sub-links */}
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isOpen ? null : link.href)
                        }
                        className="
                          flex w-full items-center justify-between
                          min-h-[56px] rounded-2xl px-5
                          text-left
                          text-[0.9rem] font-semibold uppercase tracking-[0.16em]
                          text-[#3B2A26]
                          bg-white/70 border border-[#E8DDD8]
                          active:bg-[#F6E7E1]
                          transition-colors
                        "
                      >
                        <span>{link.label}</span>
                        <span
                          className={`
                            text-[#8C5A6B] text-lg leading-none
                            transition-transform duration-300
                            ${isOpen ? "rotate-180" : ""}
                          `}
                        >
                          ▾
                        </span>
                      </button>

                      {/* Sub-links — large tap targets */}
                      {isOpen && (
                        <ul className="mt-2 flex flex-col gap-2 pl-2">
                          {/* Main section link */}
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
                                min-h-[52px] rounded-2xl px-5
                                text-[0.8rem] font-semibold uppercase tracking-[0.14em]
                                text-[#8C5A6B]
                                bg-[#F6E7E1]/80
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
                                  min-h-[52px] rounded-2xl px-5
                                  text-[0.8rem] font-medium uppercase tracking-[0.14em]
                                  text-[#3B2A26]
                                  bg-white/80 border border-[#E8DDD8]/80
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
                    /* Simple link — large row */
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
                        min-h-[56px] rounded-2xl px-5
                        text-[0.9rem] font-semibold uppercase tracking-[0.16em]
                        text-[#3B2A26]
                        bg-white/70 border border-[#E8DDD8]
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

        {/* Sticky bottom CTA */}
        <div className="shrink-0 border-t border-[#E8DDD8] bg-[#FCF8F3] px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
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
              bg-[#8C5A6B] text-white
              text-[0.85rem] font-semibold uppercase tracking-[0.18em]
              shadow-[0_12px_28px_rgba(140,90,107,0.28)]
              active:bg-[#7A4A5A]
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
