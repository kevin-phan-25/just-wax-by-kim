/**
 * -----------------------------------------------------------------------------
 * File: features/policies/PolicySectionCard.tsx
 * -----------------------------------------------------------------------------
 */

import type { PolicySection } from "./policies.types";

interface Props {
  section: PolicySection;
}

export default function PolicySectionCard({ section }: Props) {
  return (
    <article
      id={section.id}
      className="
        w-full
        rounded-3xl
        border border-[#E8DDD8]
        bg-[#FDF9F5]
        px-8 py-10
        md:px-12 md:py-12
        text-left
      "
    >
      <h2
        className="
          font-serif
          text-2xl
          md:text-3xl
          text-[#3B2A26]
        "
      >
        {section.title}
      </h2>

      <div className="mt-4 h-px w-16 bg-[#D8B4A0]" />

      {section.intro && (
        <p className="mt-6 text-base leading-8 text-[#6F5A50]">
          {section.intro}
        </p>
      )}

      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="mt-4 text-base leading-8 text-[#6F5A50]"
        >
          {paragraph}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 32)}
              className="
                relative
                pl-6
                text-base
                leading-8
                text-[#6F5A50]
              "
            >
              <span
                className="
                  absolute left-0 top-[0.85em]
                  h-1.5 w-1.5 rounded-full
                  bg-[#8C5A6B]
                "
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {section.note && (
        <p
          className="
            mt-6
            text-base
            leading-8
            text-[#8C7468]
            italic
          "
        >
          {section.note}
        </p>
      )}
    </article>
  );
}
