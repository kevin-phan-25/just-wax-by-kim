{/* RIGHT NAVIGATION */}
<nav className="flex-1 flex items-center justify-center">

  <ul
    className="
      hidden xl:flex
      items-center
      justify-center

      gap-10
      2xl:gap-14
    "
  >
    {NAV_LINKS.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="
            relative

            text-[3.4rem]
            font-semibold
            uppercase
            tracking-[0.18em]

            text-[#3B2A26]/80

            transition-colors
            duration-300

            whitespace-nowrap

            hover:text-[#8C5A6B]

            after:absolute
            after:left-0
            after:-bottom-[8px]
            after:h-px
            after:w-0
            after:bg-[#D4A9B6]
            after:transition-all
            after:duration-300

            hover:after:w-full
          "
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>


  {/* BOOK BUTTON */}
  <Link
    href="#booking"
    className="
      hidden
      sm:inline-flex

      ml-12

      items-center
      justify-center

      rounded-full

      border-2
      border-[#8C5A6B]

      bg-transparent

      px-8
      py-4

      text-[0.85rem]
      font-semibold
      uppercase
      tracking-[0.18em]

      text-[#8C5A6B]

      transition-all
      duration-300

      whitespace-nowrap

      hover:border-[#6E4A5]
      hover:text-[#6E4A55]
      hover:bg-[#F6E7E1]/60
    "
  >
    Book Appointment
  </Link>


  {/* MOBILE MENU */}
  <button
    type="button"
    aria-label={
      mobileOpen
        ? "Close menu"
        : "Open menu"
    }
    aria-expanded={mobileOpen}
    onClick={() =>
      setMobileOpen((v) => !v)
    }
    className="
      xl:hidden

      flex
      h-11
      w-11

      items-center
      justify-center

      rounded-full

      border
      border-[#E8DDD8]

      bg-white/90

      text-[#3B2A26]
    "
  >
    <span className="sr-only">
      Menu
    </span>

    <div className="flex flex-col gap-[5px]">
      <span className="block h-px w-4 bg-current" />
      <span className="block h-px w-4 bg-current" />
      <span className="block h-px w-4 bg-current" />
    </div>
  </button>

</nav>
