/**
 * -----------------------------------------------------------------------------
 * File: ServiceCategory.tsx
 *
 * Created:
 * July 27, 2026
 *
 * Description:
 * Service category heading.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Unified with luxury theme
 * - Reduced visual weight
 *
 * -----------------------------------------------------------------------------
 */

import type {
  ServiceCategory,
} from "./services.types";


interface Props {
  category: ServiceCategory;
}


export default function ServiceCategory({
  category,
}: Props) {

  return (
    <div
      className="
        text-center
      "
    >

      <h3
        className="
          font-medium
          tracking-wide
          text-brand-espresso
        "
      >
        {category.title}
      </h3>


      <p
        className="
          mt-3
          leading-relaxed
          text-brand-taupe
        "
      >
        {category.description}
      </p>


    </div>
  );
}
