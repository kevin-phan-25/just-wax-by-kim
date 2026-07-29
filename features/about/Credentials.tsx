/**
 * -----------------------------------------------------------------------------
 * File: features/about/Credentials.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Three credential items under the About text.
 *
 * Changes:
 * • July 29, 2026 – Simple 3-column grid (no clear-both needed)
 * -----------------------------------------------------------------------------
 */
import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
        {credentials.map((item) => (
          <div key={item.title}>
            <h3
              className="
                text-[0.7rem] uppercase tracking-[0.22em]
                text-[#3B2A26]
                mb-3
              "
            >
              {item.title}
            </h3>
            <p className="text-sm leading-[1.8] text-[#8A776E]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
