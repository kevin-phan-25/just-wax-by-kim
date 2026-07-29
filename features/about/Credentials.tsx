/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial credentials displayed beside portrait.
 *
 * Changes:
 * • Removed numbered labels
 * • Returned to right-side layout
 * • Softer luxury presentation
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div
      className="
        w-full
        max-w-[320px]
      "
    >
      {credentials.map((item, index) => (
        <div
          key={item.title}
          className={`
            ${
              index !== credentials.length - 1
                ? "pb-8 mb-8 border-b border-[#E8DDD8]"
                : ""
            }
          `}
        >

          <h3
            className="
              mb-3
              font-serif
              text-[1.2rem]
              leading-tight
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              text-[0.85rem]
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
