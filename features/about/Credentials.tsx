/**
 * -----------------------------------------------------------------------------
 * File: Credentials.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Cleaner vertical rhythm
 *
 * -----------------------------------------------------------------------------
 */
import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div className="mt-12 space-y-7">
      {credentials.map((item) => (
        <div key={item.title}>
          <h3 className="text-base font-medium text-brand-espresso">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-taupe">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
