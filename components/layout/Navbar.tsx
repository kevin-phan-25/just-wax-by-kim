/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation.
 *
 * Changes:
 *
 * - July 30, 2026
 *   • Connected centralized navigation constants
 *   • Added Services dropdown menu
 *   • Added Ladies / Gentlemen service links
 *   • Preserved luxury theme styling
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
  useEffect,
  useState,
} from "react";


import Link from "next/link";


import {
  Logo,
} from "@/components/ui/Logo";


import {
  MobileMenu,
} from "@/components/layout/MobileMenu";


import {
  navigation,
} from "@/constants/navigation";





const scrollToSection = (
  href: string
) => {


  if (href === "#home") {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return;

  }



  const id =
    href.replace("#", "");



  const element =
    document.getElementById(id);



  if (element) {

    const navbarHeight = 168;


    const elementPosition =
      element.getBoundingClientRect().top;



    const offsetPosition =
      elementPosition +
      window.scrollY -
      navbarHeight;



    window.scrollTo({

      top: offsetPosition,

      behavior: "smooth",

    });

  }

};





export default function Navbar() {


  const [
    scrolled,
    setScrolled,
  ] = useState(false);



  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);





  useEffect(() => {


    const onScroll = () => {

      setScrolled(
        window.scrollY > 16
      );

    };



    onScroll();



    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive:true,
      }
    );



    return () => {

      window.removeEventListener(
        "scroll",
        onScroll
      );

    };


  }, []);





  return (

    <>


      <header

        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          h-[168px]

          transition-all
          duration-500

          ease-[cubic-bezier(0.2,0.8,0.2,1)]

          ${
            scrolled

            ? `
              bg-[#FCF8F3]/95
              backdrop-blur-xl
              border-b
              border-[#E8DDD8]
              shadow-[0_6px_24px_rgba(59,42,38,0.05)]
            `

            :

            `
              bg-[#FCF8F3]/90
              backdrop-blur-md
              border-b
              border-transparent
            `
          }
        `}

      >



        <div
          className="
            relative
            h-full
            flex
            items-center
            px-12
          "
        >



          {/* LEFT LOGO */}

          <div
            className="
              absolute
              left-12
              flex
              items-center
            "
          >

            <Logo />

          </div>






          {/* DESKTOP NAVIGATION */}

          <nav

            className="
              absolute
              left-1/2
              -translate-x-1/2

              hidden
              xl:flex
              items-center
            "

          >


            <ul

              className="
                flex
                items-center
                gap-8
                2xl:gap-10
              "

            >


              {navigation.map((link)=>(


                <li

                  key={link.href}

                  className="
                    relative
                    group
                  "

                >



                  <Link

                    href={link.href}

                    onClick={(e)=>{


                      if(
                        link.href.startsWith("#")
                      ){

                        e.preventDefault();


                        scrollToSection(
                          link.href
                        );

                      }


                    }}


                    className="
                      relative

                      uppercase
                      font-semibold

                      tracking-[0.16em]

                      text-[#3B2A26]/80

                      whitespace-nowrap

                      text-[0.9rem]

                      2xl:text-[1.1rem]

                      transition-colors

                      duration-300

                      hover:text-[#8C5A6B]

                      after:absolute

                      after:left-0

                      after:-bottom-[5px]

                      after:h-px

                      after:w-0

                      after:bg-[#D4A9B6]

                      after:transition-all

                      after:duration-300

                      hover:after:w-full
                    "

                  >

                    {link.label}



                    {link.dropdown && (

                      <span
                        className="
                          ml-2
                          text-[#8C5A6B]
                        "
                      >
                        ▾
                      </span>

                    )}


                  </Link>






                  {/* SERVICES DROPDOWN */}

                  {link.dropdown && (

                    <div

                      className="
                        absolute

                        left-1/2

                        top-10

                        -translate-x-1/2


                        w-64


                        rounded-[28px]

                        border

                        border-[#E8DDD8]


                        bg-[#FCF8F3]/95

                        backdrop-blur-xl


                        p-4


                        shadow-[0_20px_60px_rgba(59,42,38,0.12)]


                        opacity-0

                        invisible


                        group-hover:opacity-100

                        group-hover:visible


                        transition-all

                        duration-300

                        translate-y-2

                        group-hover:translate-y-0
                      "

                    >



                      {link.dropdown.map((item)=>(


                        <Link

                          key={item.href}

                          href={item.href}


                          onClick={(e)=>{


                            e.preventDefault();


                            scrollToSection(
                              item.href
                            );


                          }}


                          className="
                            block

                            rounded-2xl

                            px-5

                            py-4


                            text-sm

                            uppercase

                            tracking-[0.18em]


                            text-[#3B2A26]


                            transition-all


                            hover:bg-[#F6E7E1]


                            hover:text-[#8C5A6B]
                          "

                        >

                          {item.label}


                        </Link>


                      ))}



                    </div>

                  )}



                </li>


              ))}


            </ul>


          </nav>







          {/* RIGHT BUTTON */}

          <div

            className="
              absolute
              right-12
              flex
              items-center
            "

          >



            <Link

              href="#booking"

              onClick={(e)=>{

                e.preventDefault();

                scrollToSection(
                  "#booking"
                );

              }}

              className="
                hidden

                sm:inline-flex

                items-center

                justify-center


                rounded-full


                border-2


                border-[#8C5A6B]


                px-8


                py-4


                text-[0.85rem]


                font-semibold


                uppercase


                tracking-[0.18em]


                text-[#8C5A6B]


                transition-all


                duration-300


                hover:border-[#6E4A55]


                hover:text-[#6E4A55]


                hover:bg-[#F6E7E1]/60
              "

            >

              Book Appointment


            </Link>






            {/* MOBILE BUTTON */}

            <button

              type="button"

              aria-label={
                mobileOpen
                ? "Close menu"
                : "Open menu"
              }

              onClick={() =>
                setMobileOpen(
                  (value)=>!value
                )
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


              <div
                className="
                  flex
                  flex-col
                  gap-[5px]
                "
              >

                <span className="block h-px w-4 bg-current" />

                <span className="block h-px w-4 bg-current" />

                <span className="block h-px w-4 bg-current" />

              </div>


            </button>



          </div>


        </div>


      </header>





      <MobileMenu

        open={mobileOpen}

        onClose={() =>
          setMobileOpen(false)
        }

        links={navigation}

      />



    </>

  );

}
