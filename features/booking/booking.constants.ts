/**
 *
 * ---
 * File:
 * booking.constants.ts
 *
 * Description:
 * Luxury booking configuration & conversion copy.
 *
 * Updates:
 * • Refined luxury brand voice
 * • Removed repetitive messaging
 * • Optimized for GlossGenius external booking
 * • Cleaner conversion flow
 * • Matches Just Wax by Kim aesthetic
 *
 * ---
 *
 */

export const BOOKING_CONFIG = {
  eyebrow: "Reserve Your Experience",

  title: "Soft Skin Starts Here",

  description:
    "Enjoy a calm, private waxing experience designed around comfort, precision, and thoughtful care. Choose a time that works for you and leave feeling confident, refreshed, and beautifully smooth.",

  reassurance:
    "Private studio · Personalized care · Simple scheduling",

  ctaLabel: "Book Your Appointment",

  // Replace with your GlossGenius booking URL
  bookingUrl: "#",


  /*
   * External booking section
   */
  widgetEyebrow: "Online Booking",

  widgetTitle: "Choose Your Appointment Time",

  widgetDescription:
    "Ready when you are. Use our secure online booking system to select your service and reserve your preferred appointment time.",

} as const;
