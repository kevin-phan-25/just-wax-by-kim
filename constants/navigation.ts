/**
 * -----------------------------------------------------------------------------
 * File:
 * constants/navigation.ts
 *
 * Description:
 * Main website navigation.
 *
 * Behavior:
 * • Home → homepage hero
 * • About → homepage About section
 * • Services → homepage Services section
 * • Services dropdown → Ladies / Gentlemen pages
 * • Book Now → homepage booking section
 * • Information → dropdown only
 * • Information itself does NOT navigate
 * • Gallery, Instagram, Testimonials removed
 * -----------------------------------------------------------------------------
 */

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
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
        description:
          "Professional waxing services, tailored to you",
      },

      {
        label: "Gentlemen Waxing",
        href: "/services/gentlemen",
        description:
          "Professional waxing services, tailored to you",
      },
    ],
  },

  {
    label: "Book Now",
    href: "/#booking",
  },

  {
    label: "Information",
    href: "",
    dropdown: [
      {
        label: "FAQ",
        href: "/faq",
        description:
          "Helpful answers before your visit",
      },

      {
        label: "Policies",
        href: "/policies",
        description:
          "Appointment guidelines and care",
      },

      {
        label: "Contact",
        href: "/contact",
        description:
          "We would love to hear from you",
      },

      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        description:
          "How we protect your information",
      },
    ],
  },
];
