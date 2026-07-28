/**
 * -----------------------------------------------------------------------------
 * File: HeroImage.tsx
 *
 * Description:
 * Hero background image.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed dark black gradient overlay
 *   - Image now shows cleanly
 *
 * -----------------------------------------------------------------------------
 */
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero/hero-main.webp"
        alt="Luxury waxing studio"
        fill
        priority
        className="object-cover"
      />
      {/* No dark gradient – removed */}
    </div>
  );
}
