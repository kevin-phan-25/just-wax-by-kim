/**
 * --------------------------------------------------------------------------
 * File:
 * constants/navigation.ts
 *
 * Description:
 * Main website navigation.
 *
 * Changes:
 * • Added standalone Gallery page
 * • Added standalone Instagram page
 * • Added standalone Testimonials page
 * • Updated FAQ to standalone route
 * • Updated Contact to standalone route
 * • Fixed homepage anchor routing
 * • Preserved Services dropdown
 *
 * --------------------------------------------------------------------------
 */


export interface NavigationItem {

  label:string;

  href:string;

  dropdown?:readonly NavigationItem[];

}





export const navigation:readonly NavigationItem[] = [



  {
    label:"Home",
    href:"/#hero",
  },



  {
    label:"About",
    href:"/#about",
  },



  {
    label:"Services",
    href:"/#services",

    dropdown:[

      {
        label:"Ladies Waxing",
        href:"/services/ladies",
      },


      {
        label:"Gentlemen Waxing",
        href:"/services/gentlemen",
      },

    ],

  },



  {
    label:"Gallery",
    href:"/gallery",
  },



  {
    label:"Instagram",
    href:"/instagram",
  },



  {
    label:"Testimonials",
    href:"/testimonials",
  },



  {
    label:"FAQ",
    href:"/faq",
  },



  {
    label:"Book Now",
    href:"/#booking",
  },



  {
    label:"Contact",
    href:"/contact",
  },


];
