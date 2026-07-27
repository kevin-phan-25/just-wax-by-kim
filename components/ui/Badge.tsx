/**
 * -----------------------------------------------------------------------------
 * File: Badge.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Small luxury label component.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


export default function Badge({

children,

}: {

children:
React.ReactNode;

}) {


return (

<span className="
rounded-full
bg-brand-rose/20
px-4
py-2
text-xs
uppercase
tracking-[0.25em]
text-brand-champagne
">

{children}

</span>

);

}
