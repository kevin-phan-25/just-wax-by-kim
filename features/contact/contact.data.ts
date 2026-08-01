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
    "More Then Just A Wax",

  phone:
    "(571) 234-1264",

  email:
    "justwaxbykim@gmail.com",

  address:
    "7777 Leesburg Pike Falls Church, VA 22043 Suite 306",

  instagram:
    "@justwaxbykim",


  hours: [

    {
      day: "Monday – Friday",
      time: "8:00 AM – 4:00 PM",
    },

    {
      day: "Saturday",
      time: "8:00 AM – 4:00 PM",
    },

    {
      day: "Sunday",
      time: "Closed",
    },

  ],

} as const;
