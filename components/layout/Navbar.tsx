/**
 ---
 File:
 components/layout/Navbar.tsx

 Description:
 Luxury responsive navigation for Just Wax by Kim.

 Updates:
 - Increased CTA prominence
 - Improved responsive spacing
 - Larger brand presentation
 - Enhanced mobile/tablet experience
 ---
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/constants/navigation";

const NAVBAR_HEIGHT = 168;


function scrollToSection(href: string) {
  const id = href.split("#")[1];

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



export default function Navbar() {

  const pathname = usePathname();


  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);



  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true,
      }
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  },[]);




  useEffect(() => {

    document.body.style.overflow =
      mobileOpen ? "hidden" : "";


    return () => {
      document.body.style.overflow="";
    };

  },[mobileOpen]);




  const handleNavigation = (
    e: React.MouseEvent,
    href:string
  ) => {

    if(!href.includes("#")) return;


    if(pathname === "/") {

      e.preventDefault();

      scrollToSection(href);

      setOpenDropdown(null);
    }

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

          lg:h-[140px]

          xl:h-[168px]


          transition-all

          duration-500


          ${
            scrolled
            ?
            "bg-[#FCF8F3]/95 backdrop-blur-xl"
            :
            "bg-[#FCF8F3]/90 backdrop-blur-md"
          }

        `}
      >



        {/* LOGO */}
        <div
          className="
            absolute

            left-4

            md:left-8

            lg:left-10

            top-1/2

            -translate-y-1/2
          "
        >

          <Logo priority />

        </div>





        {/* DESKTOP NAV */}
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

                  onMouseEnter={() =>
                    setOpenDropdown(link.label)
                  }

                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >


                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                    "
                  >

                    <Link
                      href={link.href}

                      onClick={(e)=>{
                        handleNavigation(
                          e,
                          link.href
                        );

                        setOpenDropdown(null);
                      }}

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

                      onClick={() =>
                        setOpenDropdown(
                          isOpen
                          ?
                          null
                          :
                          link.label
                        )
                      }

                      className="
                        text-[10px]
                        text-[#3B2A26]
                      "
                    >
                      <span
                        className={`
                          inline-block
                          transition-transform

                          ${
                            isOpen
                            ?
                            "rotate-180"
                            :
                            ""
                          }
                        `}
                      >
                        ▾
                      </span>

                    </button>


                  </div>




                  {isOpen && (

                    <div
                      className="
                        absolute

                        left-1/2

                        top-full

                        -translate-x-1/2

                        pt-5

                        z-50
                      "
                    >

                      <div
                        className="
                          min-w-[260px]

                          rounded-2xl

                          border

                          border-[#E8DDD8]

                          bg-[#FCF8F3]

                          p-3

                          shadow-xl
                        "
                      >

                        {link.dropdown.map(item=>(

                          <Link
                            key={item.href}

                            href={item.href}

                            onClick={(e)=>{
                              handleNavigation(
                                e,
                                item.href
                              );

                              setOpenDropdown(null);
                            }}

                            className="
                              block

                              rounded-xl

                              px-5

                              py-3

                              text-center

                              hover:bg-[#F6E7E1]
                            "
                          >

                            <span
                              className="
                                block

                                uppercase

                                tracking-[0.14em]

                                text-xs

                                font-semibold
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

            right-4

            md:right-8

            lg:right-10

            top-1/2

            -translate-y-1/2


            flex

            items-center

            gap-4
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


              items-center

              justify-center


              rounded-full


              border-2

              border-[#8C5A6B]


              px-9

              py-4


              md:px-12

              md:py-5


              lg:px-14

              lg:py-6


              xl:px-16

              xl:py-7



              uppercase

              tracking-[0.22em]


              text-xs

              lg:text-sm

              xl:text-base


              font-semibold


              text-[#8C5A6B]


              shadow-[0_15px_40px_rgba(140,90,107,0.15)]


              transition-all

              duration-300


              hover:bg-[#8C5A6B]

              hover:text-white

              hover:-translate-y-1
            "
          >

            Book Appointment

          </Link>




          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }

            className="
              lg:hidden

              flex

              h-14

              w-14

              items-center

              justify-center


              rounded-full


              border

              border-[#E8DDD8]


              bg-white


              text-xl
            "
          >

            ☰

          </button>


        </div>


      </nav>



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
