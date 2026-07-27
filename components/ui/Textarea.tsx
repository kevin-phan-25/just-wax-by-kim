/**
 * -----------------------------------------------------------------------------
 * File: Textarea.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury textarea input.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


export default function Textarea(

props:
React.TextareaHTMLAttributes<HTMLTextAreaElement>

) {


return (

<textarea

{...props}

className="
w-full
rounded-xl
border
border-brand-border
bg-brand-white
px-4
py-3
outline-none
focus:border-brand-champagne
"

/>

);

}
