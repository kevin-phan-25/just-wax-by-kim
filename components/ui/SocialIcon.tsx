/**
 * -----------------------------------------------------------------------------
 * File: SocialIcon.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Social media link wrapper.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


export default function SocialIcon({

children,

}: {

children:
React.ReactNode;

}) {


return (

<div className="
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-brand-border
transition
hover:border-brand-champagne
">

{children}

</div>

);

}
