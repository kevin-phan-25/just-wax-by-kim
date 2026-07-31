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
 * • Studio Exploration → Gallery, Instagram, Testimonials, FAQ, Policies, Contact
 * • Preserved Services dropdown
 *
 * --------------------------------------------------------------------------
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
        description: "Refined care for her",
      },
      {
        label: "Gentlemen Waxing",
        href: "/services/gentlemen",
        description: "Tailored care for him",
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
        description: "A glimpse inside the studio",
      },
      {
        label: "Instagram",
        href: "/instagram",
        description: "Daily moments & inspiration",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "Words from our clients",
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Helpful answers, simply put",
      },
      {
        label: "Policies",
        href: "/policies",
        description: "Appointment guidelines & care",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "We'd love to hear from you",
      },
    ],
  },
];
