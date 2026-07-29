/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Editorial sidebar.
 * -----------------------------------------------------------------------------
 */

import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <aside
      className="
        w-full
        max-w-[320px]
        my-auto
      "
    >
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
              tracking-[0.30em]
              text-[#B28A62]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </p>

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
