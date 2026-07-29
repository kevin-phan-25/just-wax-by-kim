/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial credentials displayed beneath portrait.
 *
 * Changes:
 * • Converted from horizontal cards to vertical editorial list
 * • Reduced visual weight
 * • Added refined dividers
 * • Designed for portrait continuation layout
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div
      className="
        w-full
        max-w-[360px]
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

          {/* Number */}
          <p
            className="
              mb-2
              text-[0.6rem]
              uppercase
              tracking-[0.35em]
              text-[#B28A62]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </p>


          {/* Title */}
          <h3
            className="
              mb-2
              font-serif
              text-[1.15rem]
              leading-tight
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          {/* Description */}
          <p
            className="
              text-[0.85rem]
              leading-[1.8]
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
