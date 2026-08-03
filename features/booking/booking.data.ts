/**
 * ------------------------------------------------------------------
 * File: booking.data.ts
 *
 * Description:
 * Luxury booking benefits & studio info.
 * ------------------------------------------------------------------
 */

import type { BookingBenefit, BusinessHour } from "./booking.types";

export const bookingBenefits: BookingBenefit[] = [
  {
    icon: "✦",
    title: "Private & Calm",
    description:
      "A boutique setting designed for comfort and confidence — no rush, no crowd, just space to relax.",
  },
  {
    icon: "♡",
    title: "Gentle Precision",
    description:
      "Professional products and expert technique, thoughtfully tailored to your skin and comfort.",
  },
  {
    icon: "◎",
    title: "Book in Minutes",
    description:
      "Choose your service and time online. Confirmations are clear, and changes are easy when life shifts.",
  },
];

export const businessHours: BusinessHour[] = [
  {
    day: "Monday – Friday",
    hours: "9:00 AM – 6:00 PM",
  },
  {
    day: "Saturday",
    hours: "9:00 AM – 3:00 PM",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export const cancellationPolicy =
  "Please provide 24 hours’ notice for changes or cancellations so we can offer your time to another guest.";
