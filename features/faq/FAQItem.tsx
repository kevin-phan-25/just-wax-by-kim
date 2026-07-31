/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item – soft bubble / card style.
 * -----------------------------------------------------------------------------
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
    <div
      className={`
        rounded-3xl
        border
        transition-all
        duration-300
        ${
          open
            ? "border-[#D8B4A0] bg-white shadow-sm"
            : "border-[#E8DDD8] bg-[#FDF9F5] hover:border-[#D8B4A0] hover:bg-white"
        }
      `}
    >
      {/* QUESTION */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          group
          relative
          flex
          w-full
          items-center
          justify-center
          px-8
          py-7
          pr-20
          text-center
        "
      >
        <span
          className="
            font-serif
            text-xl
            md:text-2xl
            leading-snug
            text-[#3B2A26]
            transition-colors
            duration-300
            group-hover:text-[#8C5A6B]
          "
        >
          {item.question}
        </span>

        <span
          className={`
            absolute
            right-8
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            ${
              open
                ? "border-[#8C5A6B] bg-[#8C5A6B] text-white"
                : "border-[#D8B4A0] text-[#8C5A6B] group-hover:bg-[#F6E7E1]"
            }
          `}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
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
          <div className="px-8 pb-8 pt-1">
            <p className="text-base leading-8 text-[#6F5A50] text-center">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
