/**
 * -----------------------------------------------------------------------------
 * File: contact.data.ts
 *
 * Description:
 * Business contact information used throughout the website.
 *
 * -----------------------------------------------------------------------------
 */

export const CONTACT_DATA = {
  businessName: "Just Wax by Kim",

  tagline: "Luxury Waxing Studio",

  description:
    "Whether you're preparing for your first appointment or returning for your regular visit, we're here to make every experience comfortable, relaxing, and beautifully personal.",

  phone: "(555) 555-5555",

  email: "justwaxbykim@gmail.com",

  location: "Private Wax Studio",

  address: "Virginia, United States",

  instagram: "@justwaxbykim",

  bookingText:
    "Appointments are recommended to ensure your preferred date and time.",

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
