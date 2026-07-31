/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/Credentials.tsx
 *
 * Description:
 * Luxury editorial credentials list.
 *
 * Updates:
 * • Improved spacing rhythm
 * • Better typography hierarchy
 * • Cleaner divider treatment
 * • Balanced desktop/mobile presentation
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";


export default function Credentials() {

  return (

    <div
      className="
        flex

        flex-col

        space-y-8

        md:space-y-10
      "
    >

      {credentials.map((item) => (

        <div
          key={item.title}
          className="
            pb-8

            md:pb-10

            border-b

            border-[#E8DDD8]

            last:border-none
          "
        >


          <h3
            className="
              mb-4

              font-serif

              text-[1.35rem]

              md:text-[1.5rem]

              leading-tight

              tracking-[-0.02em]

              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>



          <p
            className="
              text-[0.95rem]

              md:text-base

              leading-[1.85]

              text-[#8A776E]
            "
          >
            {item.description}
          </p>


        </div>

      ))}


    </div>

  );

}
