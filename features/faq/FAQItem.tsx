/**
 *
 * ---
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury editorial FAQ accordion item.
 *
 * Updates:
 * • Removed heavy card styling
 * • Editorial luxury appearance
 * • Thin divider aesthetic
 * • Left-aligned answers for readability
 * • Improved responsive spacing
 * • Elegant icon treatment
 * • Smooth accordion animation
 * • Mobile / iPad / Desktop optimized
 *
 * ---
 */

"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

import type { FAQItemType } from "./faq.types";

interface Props {
  item: FAQItemType;
}

export default function FAQItem({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="
        border-b
        border-[#E8DDD8]
        last:border-b-0
      "
    >
      {/* QUESTION */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="
          group

          flex

          w-full

          items-center

          justify-between

          gap-6

          py-6

          sm:py-7

          md:py-8

          text-left

          transition-colors

          duration-300
        "
      >
        <span
          className="
            flex-1

            font-serif

            text-lg

            sm:text-xl

            md:text-2xl

            leading-relaxed

            tracking-[-0.015em]

            text-[#3B2A26]

            transition-colors

            duration-300

            group-hover:text-[#8C5A6B]
          "
        >
          {item.question}
        </span>

        <span
          className="
            flex

            h-8

            w-8

            sm:h-9

            sm:w-9

            shrink-0

            items-center

            justify-center

            text-[#8C5A6B]

            transition-transform

            duration-300
          "
        >
          {open ? (
            <Minus size={22} strokeWidth={1.7} />
          ) : (
            <Plus size={22} strokeWidth={1.7} />
          )}
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`
          grid

          transition-all

          duration-500

          ease-in-out

          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              pb-7

              sm:pb-8

              md:pb-10

              pr-2

              sm:pr-10

              md:pr-16
            "
          >
            <p
              className="
                max-w-3xl

                text-left

                text-[15px]

                sm:text-base

                md:text-lg

                leading-8

                text-[#6F5A50]
              "
            >
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
