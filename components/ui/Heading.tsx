/**
 *
 * ---
 * File:
 * components/ui/Heading.tsx
 *
 * Description:
 * Luxury typography system.
 *
 * Updates:
 *
 * • Added editorial spacing
 * • Improved responsive typography
 * • Added brand color system
 * • Supports centered luxury presentation
 *
 * ---
 *
 */

interface Props {
  children: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  children,
  subtitle,
  align = "center",
}: Props) {
  return (
    <header
      className={`
        w-full

        ${
          align === "center"
            ? "text-center"
            : "text-left"
        }
      `}
    >
      {subtitle && (
        <p
          className="
            uppercase

            tracking-[0.35em]

            text-xs
            sm:text-sm

            text-[#8C5A6B]
          "
        >
          {subtitle}
        </p>
      )}

      <h1
        className="
          mt-6

          font-serif

          text-4xl
          sm:text-5xl
          md:text-6xl

          leading-tight

          text-[#3B2A26]
        "
      >
        {children}
      </h1>
    </header>
  );
}
