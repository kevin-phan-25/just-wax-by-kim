/**
 * --------------------------------------------------------------------------
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Mobile navigation for Just Wax by Kim.
 *
 * --------------------------------------------------------------------------
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

const NAVBAR_HEIGHT = 168;

function scrollToSection(href: string) {
  const id = href.replace("/#", "");
  const element = document.getElementById(id);
  if (!element) return;

  const position =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

  window.scrollTo({ top: position, behavior: "smooth" });
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleAnchor = (href: string) => {
    onClose();
    setExpanded(null);

    if (pathname === "/") {
      window.setTimeout(() => scrollToSection(href), 180);
    } else {
      window.location.href = href;
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 xl:hidden">
      <div
        className="absolute inset-0 bg-[#3B2A26]/25 backdrop-blur"
        onClick={onClose}
      />

      <div
        className="
          absolute top-[168px] left-0 right-0 bottom-0
          overflow-y-auto bg-[#FCF8F3] px-6 py-8
        "
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => {
            const hasDropdown = Boolean(link.dropdown?.length);
            const isOpen = expanded === link.label;

            return (
              <li key={link.label}>
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(isOpen ? null : link.label)
                      }
                      className="
                        flex w-full min-h-[56px] items-center justify-center gap-2
                        rounded-full border border-[#E8DDD8] bg-white/90
                        uppercase tracking-[0.18em] text-xs font-semibold
                        text-[#3B2A26]
                      "
                    >
                      {link.label}
                      <span
                        className={`
                          text-[10px] transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        ▾
                      </span>
                    </button>

                    {isOpen && (
                      <ul className="mt-2 flex flex-col gap-2">
                        {link.dropdown?.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                if (item.href.includes("#")) {
                                  e.preventDefault();
                                  handleAnchor(item.href);
                                } else {
                                  onClose();
                                  setExpanded(null);
                                }
                              }}
                              className="
                                flex min-h-[52px] flex-col items-center justify-center
                                rounded-2xl bg-[#F6E7E1] border border-[#E8DDD8]
                                px-4 py-3 text-center
                              "
                            >
                              <span className="uppercase tracking-[0.16em] text-xs text-[#8C5A6B] font-semibold">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-1 text-[11px] leading-snug text-[#8C7468] normal-case tracking-normal">
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
                    onClick={(e) => {
                      if (link.href.includes("#")) {
                        e.preventDefault();
                        handleAnchor(link.href);
                      } else {
                        onClose();
                      }
                    }}
                    className="
                      flex w-full min-h-[56px] items-center justify-center
                      rounded-full border border-[#E8DDD8] bg-white/90
                      uppercase tracking-[0.18em] text-xs font-semibold
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
    </div>
  );
}
