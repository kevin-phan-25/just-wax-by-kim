/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial credentials sidebar displayed to the right of the portrait.
 *
 * Changes:
 * • Converted from 3-column grid to luxury vertical sidebar
 * • Added subtle divider between items
 * • Increased spacing for premium editorial feel
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <aside className="w-full max-w-[320px]">
      {credentials.map((item, index) => (
        <div
          key={item.title}
          className={`
            ${
              index !== credentials.length - 1
                ? "mb-10 pb-10 border-b border-[#E8DDD8]"
                : ""
            }
          `}
        >
          <p
            className="
              mb-3
              text-[0.65rem]
              uppercase
              tracking-[0.32em]
              text-[#B28A62]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3
            className="
              mb-3
              font-serif
              text-[1.25rem]
              leading-tight
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-[0.9rem]
              leading-[1.9]
              text-[#7E6B63]
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </aside>
  );
}
