/**
 * -----------------------------------------------------------------------------
 * File:
 * constants/navigation.ts
 *
 * Description:
 * Main website navigation anchors.
 *
 * Changes:
 *
 * - July 30, 2026
 *   • Added Services dropdown
 *   • Added Ladies / Gentlemen service anchors
 *
 * -----------------------------------------------------------------------------
 */


export const navigation = [

  {
    label: "Home",
    href: "#home",
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
        href: "#ladies-services",
      },

      {
        label: "Gentlemen Waxing",
        href: "#gentlemen-services",
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


] as const;
