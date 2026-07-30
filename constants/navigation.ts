/**
 *
 * ---
 * File:
 * constants/navigation.ts
 *
 * Description:
 * Main website navigation anchors.
 *
 * Changes:
 *
 * - July 30, 2026
 *   - Added Services dropdown
 *   - Added Ladies / Gentlemen service links
 *   - Fixed Home anchor reference
 *   - Added shared navigation types
 *
 * ---
 *
 */

export interface NavigationItem {
  label: string;
  href: string;
  dropdown?: readonly NavigationItem[];
}


export const navigation: readonly NavigationItem[] = [

  {
    label: "Home",
    href: "#hero",
  },


  {
    label: "About",
    href: "#about",
  },


  {
    label: "Services",
    href: "#services",

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
    label: "Gallery",
    href: "#gallery",
  },


  {
    label: "Reviews",
    href: "#testimonials",
  },


  {
    label: "FAQ",
    href: "#faq",
  },


  {
    label: "Book Now",
    href: "#booking",
  },


  {
    label: "Contact",
    href: "#contact",
  },

];
