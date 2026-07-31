/**
 * --------------------------------------------------------------------------
 * File:
 * constants/navigation.ts
 *
 * Description:
 * Main website navigation.
 *
 * Changes:
 * • Main nav: Home, About, Services, Book Now, Studio Exploration
 * • Studio Exploration dropdown: Gallery, Instagram, Testimonials, FAQ, Contact
 * • Preserved Services dropdown (Ladies / Gentlemen)
 * • Fixed homepage anchor routing
 *
 * --------------------------------------------------------------------------
 */


export interface NavigationItem {

  label: string;

  href: string;

  dropdown?: readonly NavigationItem[];

}


export const navigation: readonly NavigationItem[] = [

  {
    label: "Home",
    href: "/#hero",
  },

  {
    label: "About",
    href: "/#about",
  },

  {
    label: "Services",
    href: "/#services",
    dropdown: [
      {
        label: "Ladies Waxing",
        href: "/services/ladies",
      },
      {
        label: "Gentlemen Waxing",
        href: "/services/gentlemen",
      },
    ],
  },

  {
    label: "Book Now",
    href: "/#booking",
  },

  {
    label: "Studio Exploration",
    href: "/gallery",
    dropdown: [
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Instagram",
        href: "/instagram",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

];
