/**
 * -----------------------------------------------------------------------------
 * File: ServiceCategory.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Service category heading.
 *
 * Changes:
 * - July 27, 2026
 *   - Added category presentation.
 *
 * -----------------------------------------------------------------------------
 */


import type {
ServiceCategory
} from "./services.types";


interface Props {

category: ServiceCategory;

}



export default function ServiceCategory({
category
}:Props){


return (

<div>

<h3 className="
text-2xl
font-medium
">

{category.title}

</h3>


<p className="
mt-3
text-brand-taupe
">

{category.description}

</p>

</div>

);


}
