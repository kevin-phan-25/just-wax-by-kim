/**
 *
 * ---
 * File:
 * features/booking/booking.constants.ts
 *
 * Description:
 * Luxury booking configuration.
 *
 * Updates:
 * • Added GlossGenius widget URL support
 * • Centralized booking configuration
 * • Easy future URL replacement
 *
 * ---
 *
 */


export const BOOKING_CONFIG = {


  eyebrow:
    "Reserve Your Experience",



  title:
    "Soft Skin Starts Here",



  description:
    "Private waxing services crafted with precision, comfort, and care for a confident, refreshed experience.",



  reassurance:
    "Exceptional care · Precision results · Confidence that lasts",



  ctaLabel:
    "Book Your Appointment",




  /*
   *
   * Replace this value when GlossGenius
   * provides your booking URL.
   *
   * Example:
   *
   * https://glossgenius.com/your-business-name
   *
   */

  bookingUrl:
    "https://YOUR-GLOSSGENIUS-BOOKING-URL-HERE",



} as const;
