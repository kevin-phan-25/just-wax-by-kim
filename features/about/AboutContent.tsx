/**
 * ------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Description:
 * Right-side editorial experience highlights.
 * ------------------------------------------------------------------
 */

import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div
      className="
        space-y-10
      "
    >

      {credentials.map((item, index) => (
        <div
          key={item.title}
          className={`
            ${
              index !== credentials.length - 1
                ? "pb-8 border-b border-[#E8DDD8]"
                : ""
            }
          `}
        >

          <h3
            className="
              mb-3

              font-serif

              text-[1.35rem]

              leading-tight

              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              text-[0.95rem]

              leading-[1.9]

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
