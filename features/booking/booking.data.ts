/**
 * -----------------------------------------------------------------------------
 * File: booking.data.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Booking information data.
 *
 * Changes:
 * - July 27, 2026
 *   - Added appointment information.
 *
 * -----------------------------------------------------------------------------
 */


import type {

BookingBenefit,

BusinessHour

}

from "./booking.types";



export const bookingBenefits: BookingBenefit[] = [


{

title:

"Private Experience",

description:

"Enjoy a comfortable and personalized appointment environment."

},



{

title:

"Premium Products",

description:

"Professional products selected for quality and comfort."

},



{

title:

"Easy Scheduling",

description:

"Book your appointment online at a time that works for you."

}


];





export const businessHours: BusinessHour[] = [


{

day:

"Monday - Friday",

hours:

"9:00 AM - 6:00 PM"

},



{

day:

"Saturday",

hours:

"9:00 AM - 3:00 PM"

},



{

day:

"Sunday",

hours:

"Closed"

}


];



export const cancellationPolicy =

"Please provide 24 hours notice for appointment changes or cancellations.";
