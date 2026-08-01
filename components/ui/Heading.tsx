/**
 * ---
 * File:
 * Heading.tsx
 *
 * Description:
 * Luxury typography system.
 * ---
 */

export default function Heading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div>
      {subtitle && (
        <p
          className="
            uppercase
            tracking-[0.4em]
            text-sm
            text-[#C9A227]
          "
        >
          {subtitle}
        </p>
      )}

      <h1
        className="
          mt-4
          font-serif
          text-4xl
          md:text-5xl
        "
      >
        {children}
      </h1>
    </div>
  );
}
