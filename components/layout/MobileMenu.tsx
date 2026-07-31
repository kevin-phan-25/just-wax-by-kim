/**
 * --------------------------------------------------------------------------
 * File:
 * components/layout/MobileMenu.tsx
 *
 * Description:
 * Mobile navigation for Just Wax by Kim.
 *
 * Changes:
 * • Supports standalone routes
 * • Supports /#section navigation
 * • Smooth scrolling from homepage
 * • Returns to homepage sections from inner pages
 * • Supports Instagram standalone page
 *
 * --------------------------------------------------------------------------
 */


"use client";


import {
  useState,
} from "react";


import Link from "next/link";


import {
  usePathname,
} from "next/navigation";





type NavLink = {

  readonly label:string;

  readonly href:string;

};



type NavItem = {

  readonly label:string;

  readonly href:string;

  readonly dropdown?:readonly NavLink[];

};





interface MobileMenuProps {

  open:boolean;

  onClose:()=>void;

  links:readonly NavItem[];

}





const NAVBAR_HEIGHT = 168;






function scrollToSection(
  href:string
){


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







export function MobileMenu({

  open,

  onClose,

  links,

}:MobileMenuProps){



const pathname =
  usePathname();




const [
  expanded,
  setExpanded,
] =
useState<string | null>(
  null
);







const handleAnchor = (
  href:string
)=>{


  onClose();

  setExpanded(null);




  /*
    Already homepage

    Smooth scroll
  */

  if(
    pathname === "/"
  ){

    window.setTimeout(()=>{


      scrollToSection(
        href
      );


    },180);



    return;

  }





  /*
    From standalone pages

    Example:

    /instagram

    click Services


    Goes:

    /#services

  */

  window.location.href =
    href;



};







if(!open)

return null;









return (

<div

  className="

    fixed

    inset-0

    z-40

    xl:hidden

  "

>



  {/* BACKDROP */}

  <div

    className="

      absolute

      inset-0

      bg-[#3B2A26]/25

      backdrop-blur

    "

    onClick={
      onClose
    }

  />







  {/* MENU */}

  <div

    className="

      absolute

      top-[168px]

      left-0

      right-0

      bottom-0

      overflow-y-auto

      bg-[#FCF8F3]

      px-6

      py-8

    "

  >





    <ul

      className="

        flex

        flex-col

        gap-3

      "

    >




      {
        links.map(
          (link)=>{


            const hasDropdown =
              Boolean(
                link.dropdown?.length
              );



            const isOpen =
              expanded === link.href;





            return (

            <li

              key={
                link.href
              }

            >





            {
              hasDropdown

              ?


              <>



                <button

                  type="button"

                  onClick={()=>


                    setExpanded(

                      isOpen

                      ?

                      null

                      :

                      link.href

                    )

                  }


                  className="

                    flex

                    w-full

                    min-h-[56px]

                    items-center

                    justify-center

                    rounded-full

                    border

                    border-[#E8DDD8]

                    bg-white/90

                    uppercase

                    tracking-[0.18em]

                    text-xs

                    font-semibold

                    text-[#3B2A26]

                  "

                >

                  {
                    link.label
                  }


                </button>







                {
                  isOpen && (

                  <ul

                    className="

                      mt-2

                      flex

                      flex-col

                      gap-2

                    "

                  >



                  {
                    link.dropdown.map(
                      (item)=>(


                      <li

                        key={
                          item.href
                        }

                      >


                        <Link

                          href={
                            item.href
                          }


                          onClick={
                            onClose
                          }


                          className="

                            flex

                            min-h-[52px]

                            items-center

                            justify-center

                            rounded-full

                            bg-[#F6E7E1]

                            border

                            border-[#E8DDD8]

                            uppercase

                            tracking-[0.16em]

                            text-xs

                            text-[#8C5A6B]

                          "

                        >

                          {
                            item.label
                          }


                        </Link>


                      </li>


                      )
                    )
                  }



                  </ul>

                  )
                }


              </>





              :





              <Link

                href={
                  link.href
                }


                onClick={

                  (e)=>{


                    if(
                      link.href.includes("#")
                    ){

                      e.preventDefault();


                      handleAnchor(
                        link.href
                      );


                    } else {


                      onClose();


                    }


                  }

                }



                className="

                  flex

                  w-full

                  min-h-[56px]

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-[#E8DDD8]

                  bg-white/90

                  uppercase

                  tracking-[0.18em]

                  text-xs

                  font-semibold

                  text-[#3B2A26]

                "

              >

                {
                  link.label
                }


              </Link>


            }





            </li>


            );


          }

        )

      }




    </ul>









    {/* BOOK BUTTON */}

    <Link

      href="/#booking"


      onClick={

        (e)=>{


          if(
            pathname === "/"
          ){


            e.preventDefault();


            handleAnchor(
              "/#booking"
            );


          } else {


            onClose();


          }


        }

      }



      className="

        mt-10

        flex

        min-h-[56px]

        items-center

        justify-center

        rounded-full

        border-2

        border-[#8C5A6B]

        uppercase

        tracking-[0.2em]

        text-xs

        font-semibold

        text-[#8C5A6B]

      "

    >

      Book Appointment


    </Link>







  </div>





</div>

);

}
