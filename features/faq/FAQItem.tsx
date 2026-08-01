/**
 * ---
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Updates:
 * • Centered questions
 * • Increased card breathing room
 * • Better answer spacing
 * • Stronger answer typography
 * • Luxury soft card appearance
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

    <div
      className={`
        rounded-3xl

        border

        transition-all
        duration-300

        ${
          open
            ? `
              border-[#D8B4A0]
              bg-white
              shadow-sm
            `
            :
            `
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

        onClick={() =>
          setOpen(!open)
        }

        className="
          group

          relative

          flex

          w-full

          items-center

          justify-center

          text-center

          px-10
          md:px-14

          py-8

          min-h-[90px]
        "
      >

        <span
          className="
            max-w-3xl

            font-serif

            text-lg
            md:text-xl

            leading-relaxed

            text-[#3B2A26]
          "
        >
          {item.question}
        </span>



        <span
          className={`
            absolute

            right-6
            md:right-10

            flex

            h-11
            w-11

            items-center
            justify-center

            rounded-full

            border

            transition-all

            ${
              open
                ?
                  `
                  border-[#8C5A6B]
                  bg-[#8C5A6B]
                  text-white
                  `
                :
                  `
                  border-[#D8B4A0]
                  text-[#8C5A6B]
                  group-hover:bg-[#F6E7E1]
                  `
            }
          `}
        >

          {
            open
              ?
              <Minus size={18}/>
              :
              <Plus size={18}/>
          }

        </span>


      </button>




      {/* ANSWER */}

      <div
        className={`
          grid

          transition-all

          duration-500

          ${
            open
              ?
              "grid-rows-[1fr] opacity-100"
              :
              "grid-rows-[0fr] opacity-0"
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
              mx-6
              md:mx-10

              mb-8

              rounded-2xl

              bg-[#FCF8F3]

              px-8
              md:px-12

              py-8
            "
          >

            <p
              className="
                text-center

                text-base
                md:text-lg

                font-medium

                leading-8

                text-[#6F5A50]
              "
            >
              {item.answer}
            </p>

          </div>


        </div>

      </div>


    </div>

  );

}
