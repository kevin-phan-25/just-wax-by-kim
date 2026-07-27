/**
 * -----------------------------------------------------------------------------
 * File: HeroButtons.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Hero CTA buttons.
 *
 * Changes:
 * - July 27, 2026
 *   - Created appointment actions.
 *
 * -----------------------------------------------------------------------------
 */


import Button from "@/components/ui/Button";


export default function HeroButtons() {


return (

<div className="
flex
flex-col
gap-4
sm:flex-row
">


<Button>

Book Your Appointment

</Button>


<Button variant="secondary">

Explore Services

</Button>


</div>

);

}
