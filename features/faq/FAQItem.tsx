/**
 *
 * ---
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Changes:
 * • Added premium interaction states
 * • Added smoother answer transition
 * • Improved question presentation
 * • Refined luxury spacing
 * • Updated editorial alignment
 *
 * ---
 *
 */

"use client";

import {
  Plus,
  Minus,
} from "lucide-react";

import {
  useState,
} from "react";

import type {
  FAQItemType,
} from "./faq.types";


interface Props {
  item: FAQItemType;
}


export default function FAQItem({
  item,
}: Props) {

  const [
    open,
    setOpen,
  ] = useState(false);



  return (

    <div
      className="
        py-10
      "
    >


      {/* QUESTION */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          gap-8
          text-left
        "
      >

        <span
          className="
            font-serif
            text-xl
            md:text-2xl
            leading-relaxed
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
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D8B4A0]
            text-[#8C5A6B]
            transition-all
            duration-300
            group-hover:bg-[#F6E7E1]
          "
        >

          {
            open
              ?
              <Minus size={17}/>
              :
              <Plus size={17}/>
          }

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
              ? "grid-rows-[1fr] opacity-100 mt-8"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }
        `}
      >

        <div
          className="
            overflow-hidden
          "
        >

          <p
            className="
              max-w-4xl
              text-base
              leading-8
              text-[#6F5A50]
            "
          >
            {item.answer}
          </p>

        </div>

      </div>


    </div>

  );

}
