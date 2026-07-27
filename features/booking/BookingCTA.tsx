/**
 * -----------------------------------------------------------------------------
 * File: BookingCTA.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Primary booking call-to-action.
 *
 * Changes:
 * - July 27, 2026
 *   - Added booking CTA button.
 *
 * -----------------------------------------------------------------------------
 */


import {
BOOKING_CONFIG
}

from "./booking.constants";



export default function BookingCTA(){


return (

<a

href={BOOKING_CONFIG.bookingUrl}

className="
inline-flex
items-center
justify-center
rounded-full
bg-brand-gold
px-8
py-4
text-sm
font-medium
text-white
transition
hover:opacity-90
"

>


Book Your Appointment


</a>

);

}
