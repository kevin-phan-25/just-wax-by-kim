/**
 * --------------------------------------------------------------------------
 * File:
 * components/layout/Navbar.tsx
 *
 * Description:
 * Luxury responsive navigation for Just Wax by Kim.
 *
 * Changes:
 * • Added standalone page routing support
 * • Supports homepage anchors + dedicated pages
 * • Fixed /#section navigation
 * • Supports Instagram standalone page
 * • Preserved luxury styling
 *
 * --------------------------------------------------------------------------
 */

"use client";


import {
  useEffect,
  useState,
} from "react";


import Link from "next/link";


import {
  usePathname,
} from "next/navigation";


import {
  Logo,
} from "@/components/ui/Logo";


import {
  MobileMenu,
} from "@/components/layout/MobileMenu";


import {
  navigation,
} from "@/constants/navigation";



const NAVBAR_HEIGHT = 168;



function scrollToSection(
  href:string
) {


  const id =
    href.split("#")[1];



  const element =
    document.getElementById(id);



  if(!element)
    return;



  const position =
    element.getBoundingClientRect().top +
    window.scrollY -
    NAVBAR_HEIGHT;



  window.scrollTo({

    top:position,

    behavior:"smooth",

  });

}





export default function Navbar() {


  const pathname =
    usePathname();



  const [
    scrolled,
    setScrolled,
  ] =
  useState(false);



  const [
    mobileOpen,
    setMobileOpen,
  ] =
  useState(false);





  useEffect(()=>{


    const handleScroll = () => {

      setScrolled(
        window.scrollY > 16
      );

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







  useEffect(()=>{


    document.body.style.overflow =
      mobileOpen
      ?
      "hidden"
      :
      "";



    return()=>{

      document.body.style.overflow="";

    };


  },[
    mobileOpen
  ]);









  const handleNavigation = (

    e:React.MouseEvent,

    href:string

  )=>{



    if(
      !href.includes("#")
    )
      return;





    /*
      Already on homepage
      Smooth scroll
    */

    if(
      pathname === "/"
    ){

      e.preventDefault();


      scrollToSection(
        href
      );


      return;

    }




    /*
      From standalone pages

      Example:
      /instagram
      click About

      Goes to:
      /#about
    */

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

          h-[168px]

          transition-all

          duration-500


          ${
            scrolled

            ?

            "bg-[#FCF8F3]/95 backdrop-blur-xl border-b border-[#E8DDD8]"

            :

            "bg-[#FCF8F3]/90 backdrop-blur-md"

          }

        `}

      >






        {/* LOGO */}

        <div

          className="

            absolute

            left-6

            top-1/2

            -translate-y-1/2

          "

        >

          <Logo />

        </div>









        {/* DESKTOP NAV */}

        <div

          className="

            hidden

            xl:flex

            absolute

            left-1/2

            top-1/2

            -translate-x-1/2

            -translate-y-1/2

            items-center

            gap-8

          "

        >


          {
            navigation.map(
              (link)=>(


                <Link

                  key={
                    link.href
                  }


                  href={
                    link.href
                  }



                  onClick={
                    (e)=>

                      handleNavigation(
                        e,
                        link.href
                      )
                  }



                  className="

                    uppercase

                    font-semibold

                    tracking-[0.14em]

                    text-xs

                    text-[#3B2A26]/80

                    transition

                    hover:text-[#8C5A6B]

                  "

                >

                  {
                    link.label
                  }


                </Link>


              )
            )
          }



        </div>









        {/* BOOK BUTTON */}

        <div

          className="

            absolute

            right-6

            top-1/2

            -translate-y-1/2

            flex

            items-center

            gap-4

          "

        >



          <Link

            href="/#booking"



            onClick={

              (e)=>{


                if(
                  pathname === "/"
                ){

                  e.preventDefault();


                  scrollToSection(
                    "/#booking"
                  );

                }


              }

            }



            className="

              hidden

              sm:inline-flex

              items-center

              justify-center

              rounded-full

              border-2

              border-[#8C5A6B]

              px-12

              py-5

              uppercase

              tracking-[0.20em]

              text-sm

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

              setMobileOpen(
                !mobileOpen
              )

            }



            className="

              xl:hidden

              flex

              h-12

              w-12

              items-center

              justify-center

              rounded-full

              border

              border-[#E8DDD8]

              bg-white

            "

          >

            ☰


          </button>




        </div>






      </nav>







      <MobileMenu

        open={
          mobileOpen
        }



        onClose={()=>

          setMobileOpen(false)

        }



        links={
          navigation
        }

      />



    </>

  );

}
