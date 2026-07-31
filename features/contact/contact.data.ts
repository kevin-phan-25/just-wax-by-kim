/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/contact.data.ts
 *
 * Description:
 * Contact page data.
 *
 * -----------------------------------------------------------------------------
 */

export const CONTACT_DATA = {

  businessName:
    "Just Wax by Kim",

  tagline:
    "Luxury Waxing Studio",

  phone:
    "(555) 555-5555",

  email:
    "justwaxbykim@gmail.com",

  address:
    "Virginia, United States",

  instagram:
    "@justwaxbykim",


  hours: [

    {
      day: "Monday – Friday",
      time: "9:00 AM – 6:00 PM",
    },

    {
      day: "Saturday",
      time: "9:00 AM – 3:00 PM",
    },

    {
      day: "Sunday",
      time: "Closed",
    },

  ],

} as const;
