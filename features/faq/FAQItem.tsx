/**
 * ---
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Updates:
 * • Refined luxury card styling
 * • Improved mobile responsiveness
 * • Enhanced accordion animation
 * • Better answer readability
 * • Added accessibility attributes
 *
 * ---
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
    <article
      className={`
        overflow-hidden

        rounded-3xl

        border

        transition-all

        duration-500

        ${
          open
            ? `
              border-[#D8B4A0]

              bg-white

              shadow-[0_15px_40px_rgba(59,42,38,0.06)]
            `
            : `
              border-[#E8DDD8]

              bg-[#FDF9F5]

              hover:bg-white

              hover:border-[#D8B4A0]
            `
        }
      `}
    >


      {/* QUESTION */}
      <button
        type="button"

        aria-expanded={open}

        onClick={() => setOpen(!open)}

        className="
          group

          relative

          flex

          min-h-[96px]

          w-full

          items-center

          justify-center

          px-6

          sm:px-8

          md:px-12

          py-7

          md:py-9

          text-center

          transition
        "
      >

        <span
          className="
            max-w-3xl

            pr-12

            font-serif

            text-lg

            sm:text-xl

            leading-relaxed

            text-[#3B2A26]

            transition-colors

            group-hover:text-[#8C5A6B]
          "
        >
          {item.question}
        </span>



        {/* ICON */}
        <span
          className={`
            absolute

            right-5

            md:right-8

            flex

            h-10

            w-10

            md:h-11

            md:w-11

            items-center

            justify-center

            rounded-full

            border

            transition-all

            duration-300

            ${
              open
                ? `
                  border-[#8C5A6B]

                  bg-[#8C5A6B]

                  text-white
                `
                : `
                  border-[#D8B4A0]

                  text-[#8C5A6B]

                  group-hover:bg-[#F6E7E1]
                `
            }
          `}
        >

          {open ? (
            <Minus
              size={18}
              strokeWidth={1.8}
            />
          ) : (
            <Plus
              size={18}
              strokeWidth={1.8}
            />
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

        <div
          className="
            overflow-hidden
          "
        >

          <div
            className="
              mx-4

              sm:mx-6

              md:mx-10

              mb-6

              md:mb-8

              rounded-2xl

              bg-[#FCF8F3]

              px-6

              sm:px-8

              md:px-12

              py-7

              md:py-8
            "
          >

            <p
              className="
                mx-auto

                max-w-4xl

                text-center

                text-base

                md:text-lg

                leading-8

                font-medium

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
