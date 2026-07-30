"use client";

import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: readonly { label: string; href: string }[];
}


export function MobileMenu({
  open,
  onClose,
  links,
}: MobileMenuProps) {

  return (

    <div
      className={`
        fixed
        inset-0
        z-40
        lg:hidden
        transition-opacity
        duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      aria-hidden={!open}
    >


      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/20
          backdrop-blur-sm
        "
      />



      {/* Panel */}
      <div
        className={`
          absolute
          top-[88px]
          left-4
          right-4

          rounded-[28px]
          border
          border-[#E8DDD8]

          bg-[#FCF8F3]/95
          backdrop-blur-xl

          shadow-floating

          px-8
          py-10

          transition-transform
          duration-300
          ease-[cubic-bezier(0.2,0.8,0.2,1)]

          ${
            open
              ? "translate-y-0"
              : "-translate-y-6"
          }
        `}
      >


        <ul
          className="
            flex
            flex-col
            gap-6
          "
        >

          {links.map((link) => (

            <li
              key={link.href}
            >

              <Link
                href={link.href}
                onClick={onClose}
                className="
                  block

                  text-[0.78rem]
                  font-semibold
                  uppercase

                  tracking-[0.24em]

                  text-[#3B2A26]

                  transition-colors

                  hover:text-[#8C5A6B]
                "
              >
                {link.label}
              </Link>

            </li>

          ))}

        </ul>



        <div
          className="
            mt-10
            pt-8

            border-t
            border-[#E8DDD8]
          "
        >

          <Link
            href="#booking"
            onClick={onClose}
            className="
              btn-primary
              w-full
              text-center
              block
            "
          >
            Book Appointment
          </Link>

        </div>


      </div>


    </div>

  );

}
