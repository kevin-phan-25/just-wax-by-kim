/**
 * -----------------------------------------------------------------------------
 * File: components/layout/MobileMenu.tsx
 *
 * Date: July 30, 2026
 *
 * Description:
 * Mobile navigation panel for Just Wax by Kim.
 *
 * Changes:
 * - July 30, 2026
 *   - Centered all menu text for testing (to verify styles apply)
 * -----------------------------------------------------------------------------
 */
"use client";

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

  const handleLink = (href: string) => {
    onClose();

    if (!href.startsWith("#")) return;

    if (pathname === "/") {
      window.setTimeout(() => scrollToSection(href), 150);
    } else {
      router.push(`/${href}`);
    }
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
        className="absolute inset-0 bg-[#3B2A26]/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        className={`
          absolute top-[168px] left-4 right-4
          max-h-[calc(100svh-168px-1.5rem)] overflow-y-auto
          rounded-[28px] border border-[#E8DDD8]
          bg-[#FCF8F3]/98 backdrop-blur-xl
          shadow-[0_24px_60px_rgba(59,42,38,0.12)]
          px-6 py-8
          transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
          ${open ? "translate-y-0" : "-translate-y-3"}
        `}
      >
        <ul className="flex flex-col items-center gap-1 text-center">
          {links.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={
                  link.href.startsWith("#")
                    ? pathname === "/"
                      ? link.href
                      : `/${link.href}`
                    : link.href
                }
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleLink(link.href);
                  } else {
                    onClose();
                  }
                }}
                className="
                  block w-full rounded-2xl py-4
                  text-center
                  text-[0.72rem] font-semibold uppercase tracking-[0.2em]
                  text-[#3B2A26]
                  hover:bg-[#F6E7E1] hover:text-[#8C5A6B]
                  transition-colors
                "
              >
                {link.label}
              </Link>

              {link.dropdown?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="
                    block w-full rounded-2xl py-3
                    text-center
                    text-[0.65rem] font-medium uppercase tracking-[0.18em]
                    text-[#6F5A50]
                    hover:text-[#8C5A6B] hover:bg-[#F6E7E1]/70
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              ))}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-[#E8DDD8]">
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
              rounded-full border-2 border-[#8C5A6B]
              px-8 py-4
              text-center
              text-[0.72rem] font-semibold uppercase tracking-[0.18em]
              text-[#8C5A6B] hover:bg-[#F6E7E1] transition
            "
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
