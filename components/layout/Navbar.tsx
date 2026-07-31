/**
 * -----------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Responsive:
 * • Mobile optimized (110px)
 * • Tablet/iPad optimized (140px)
 * • Desktop editorial navigation (168px)
 * • Services floating dropdown
 * • Studio Exploration mega panel
 * • Large Book Appointment CTA
 * • Smooth anchor scrolling
 *
 * -----------------------------------------------------------------------------
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/constants/navigation";


const MOBILE_HEIGHT = 110;
const TABLET_HEIGHT = 140;
const DESKTOP_HEIGHT = 168;


function getNavbarOffset() {
  if (window.innerWidth >= 1280) {
    return DESKTOP_HEIGHT;
  }

  if (window.innerWidth >= 768) {
    return TABLET_HEIGHT;
  }

  return MOBILE_HEIGHT;
}


function scrollToSection(href: string) {

  const id = href.split("#")[1];

  const element = document.getElementById(id);

  if (!element) return;


  const offset = getNavbarOffset();


  const position =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;


  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}



export default function Navbar() {

  const pathname = usePathname();


  const [scrolled,setScrolled] =
    useState(false);


  const [mobileOpen,setMobileOpen] =
    useState(false);


  const [openDropdown,setOpenDropdown] =
    useState<string | null>(null);



  useEffect(()=>{

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true,
      }
    );


    return()=> {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };


  },[]);



  useEffect(()=>{

    document.body.style.overflow =
      mobileOpen ? "hidden" : "";


    return()=> {
      document.body.style.overflow="";
    };


  },[mobileOpen]);




  const handleNavigation = (
    e:React.MouseEvent,
    href:string
  )=>{


    if(!href.includes("#")) {
      return;
    }


    if(pathname === "/") {

      e.preventDefault();

      scrollToSection(href);

    }


    setOpenDropdown(null);

  };




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



        {/* LOGO */}

        <div

          className="

            absolute

            left-5

            md:left-10

            top-1/2

            -translate-y-1/2

          "

        >

          <Logo />

        </div>





        {/* DESKTOP NAVIGATION */}

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


            gap-5

            xl:gap-8

          "

        >


          {navigation.map((link)=>{


            const hasDropdown =
              Boolean(link.dropdown?.length);


            const isOpen =
              openDropdown === link.label;


            const isMega =
              link.label === "Studio Exploration";




            if(hasDropdown){


              return (

                <div

                  key={link.label}

                  className="relative"

                  onMouseEnter={()=>
                    setOpenDropdown(link.label)
                  }

                  onMouseLeave={()=>
                    setOpenDropdown(null)
                  }

                >


                  <div

                    className="
                      flex
                      items-center
                      gap-1
                    "

                  >


                    <Link

                      href={link.href}

                      onClick={(e)=>
                        handleNavigation(
                          e,
                          link.href
                        )
                      }


                      className="

                        uppercase

                        font-semibold

                        tracking-[0.14em]

                        text-[11px]

                        xl:text-xs


                        text-[#3B2A26]/80


                        hover:text-[#8C5A6B]

                        transition

                      "

                    >

                      {link.label}

                    </Link>



                    <button

                      type="button"

                      onClick={()=>
                        setOpenDropdown(
                          isOpen
                          ? null
                          : link.label
                        )
                      }


                      className="

                        text-[10px]

                        text-[#3B2A26]/70

                      "

                    >

                      <span

                        className={`

                          inline-block

                          transition-transform

                          duration-300


                          ${
                            isOpen
                            ? "rotate-180"
                            :""
                          }

                        `}

                      >

                        ▾

                      </span>


                    </button>


                  </div>





                  {!isMega && (

                    <div

                      className={`

                        absolute

                        left-1/2

                        top-full

                        pt-5


                        transition-all

                        duration-300


                        ${
                          isOpen

                          ?

                          "opacity-100 pointer-events-auto"

                          :

                          "opacity-0 pointer-events-none"

                        }

                      `}


                      style={{
                        transform:
                        "translateX(-50%)",
                      }}

                    >


                      <div

                        className="

                          min-w-[260px]

                          rounded-2xl

                          border

                          border-[#E8DDD8]

                          bg-[#FCF8F3]/98

                          p-3


                          shadow-[0_20px_60px_rgba(59,42,38,.15)]

                        "

                      >


                        {link.dropdown?.map(item=>(

                          <Link

                            key={item.href}

                            href={item.href}

                            onClick={(e)=>
                              handleNavigation(
                                e,
                                item.href
                              )
                            }


                            className="

                              block

                              rounded-xl

                              px-5

                              py-4

                              text-center


                              hover:bg-[#F6E7E1]

                              transition

                            "

                          >

                            <span

                              className="

                                block

                                uppercase

                                tracking-[0.14em]

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

                                  mt-1

                                  block

                                  text-[11px]

                                  text-[#8C7468]

                                "

                              >

                                {item.description}

                              </span>

                            )}

                          </Link>

                        ))}


                      </div>


                    </div>

                  )}






                  {isMega && (

                    <div

                      className={`

                        absolute

                        left-1/2

                        top-full

                        pt-6


                        transition-all


                        ${
                          isOpen

                          ?

                          "opacity-100 pointer-events-auto"

                          :

                          "opacity-0 pointer-events-none"

                        }

                      `}


                      style={{

                        transform:
                        "translateX(-50%)",

                      }}

                    >

                      <div

                        className="

                          w-[min(92vw,720px)]

                          rounded-3xl

                          border

                          border-[#E8DDD8]

                          bg-[#FCF8F3]/98

                          p-8


                          shadow-[0_28px_70px_rgba(59,42,38,.18)]

                        "

                      >


                        <div className="text-center mb-8">


                          <p

                            className="

                              uppercase

                              tracking-[0.35em]

                              text-[10px]

                              text-[#8C5A6B]

                            "

                          >

                            Discover

                          </p>


                          <h3

                            className="

                              mt-3

                              font-serif

                              text-2xl

                            "

                          >

                            Studio Exploration

                          </h3>


                        </div>




                        <div

                          className="

                            grid

                            grid-cols-2

                            sm:grid-cols-3

                            gap-3

                          "

                        >

                          {link.dropdown?.map(item=>(


                            <Link

                              key={item.href}

                              href={item.href}

                              onClick={(e)=>
                                handleNavigation(
                                  e,
                                  item.href
                                )
                              }


                              className="

                                rounded-2xl

                                px-4

                                py-6

                                text-center

                                hover:bg-white

                                transition

                              "

                            >

                              <span

                                className="

                                  font-serif

                                  text-lg

                                "

                              >

                                {item.label}

                              </span>


                            </Link>


                          ))}

                        </div>


                      </div>

                    </div>

                  )}



                </div>

              );

            }




            return (

              <Link

                key={link.href}

                href={link.href}

                onClick={(e)=>
                  handleNavigation(
                    e,
                    link.href
                  )
                }


                className="

                  uppercase

                  font-semibold

                  tracking-[0.14em]

                  text-[11px]

                  xl:text-xs


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





        {/* CTA + MOBILE */}

        <div

          className="

            absolute

            right-5

            md:right-10

            top-1/2

            -translate-y-1/2


            flex

            items-center

            gap-3

          "

        >


          <Link

            href="/#booking"

            onClick={(e)=>{

              if(pathname === "/"){

                e.preventDefault();

                scrollToSection("/#booking");

              }

            }}


            className="

              hidden

              sm:inline-flex


              rounded-full

              border-2

              border-[#8C5A6B]


              px-7

              py-3


              lg:px-10

              lg:py-4


              xl:px-12

              xl:py-5


              uppercase

              tracking-[0.2em]

              text-[11px]

              xl:text-sm


              font-semibold

              text-[#8C5A6B]


              hover:bg-[#F6E7E1]

              transition

            "

          >

            Book Appointment

          </Link>





          <button

            onClick={()=>
              setMobileOpen(!mobileOpen)
            }

            className="

              lg:hidden

              flex

              h-11

              w-11

              items-center

              justify-center


              rounded-full

              border

              border-[#E8DDD8]

              bg-white

            "

            aria-label="Open menu"

          >

            ☰

          </button>


        </div>


      </nav>





      <MobileMenu

        open={mobileOpen}

        onClose={()=>
          setMobileOpen(false)
        }

        links={navigation}

      />


    </>

  );

}
