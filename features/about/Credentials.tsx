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
 * • July 29, 2026 – Clean spacing, no overlapping
 * -----------------------------------------------------------------------------
 */
import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {credentials.map((item) => (
          <div key={item.title}>
            <h3
              className="
                text-[0.65rem] uppercase tracking-[0.2em]
                text-[#3B2A26]
                mb-2.5
              "
            >
              {item.title}
            </h3>
            <p className="text-[0.8rem] leading-[1.7] text-[#8A776E]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
