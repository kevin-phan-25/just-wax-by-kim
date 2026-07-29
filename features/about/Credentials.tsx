/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury brand values.
 *
 * Changes:
 * • Redesigned as editorial highlights
 * • Softer spacing and typography
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";


export default function Credentials() {
  return (
    <div
      className="
        mt-12
        grid
        gap-8
      "
    >

      {credentials.map((item) => (
        <div
          key={item.title}
          className="
            border-l
            border-[#D4A9B6]
            pl-5
          "
        >

          <h3
            className="
              text-sm
              uppercase
              tracking-[0.18em]
              font-medium
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-2
              text-sm
              leading-[1.8]
              text-[#8A776E]
              max-w-md
            "
          >
            {item.description}
          </p>

        </div>
      ))}

    </div>
  );
}
