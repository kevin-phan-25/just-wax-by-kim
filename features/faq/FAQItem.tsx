/**
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Updates:
 * • Increased spacing between content
 * • Improved typography hierarchy
 * • Easier-to-read answers
 * • Luxury card presentation
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

              shadow-md
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

        onClick={() =>
          setOpen(!open)
        }

        className="
          group

          flex

          w-full

          items-center

          justify-between

          gap-6

          px-7
          md:px-10

          py-7
          md:py-8

          text-left
        "
      >


        <span
          className="
            pr-4

            font-serif

            text-lg

            md:text-xl

            leading-relaxed

            font-medium

            text-[#3B2A26]
          "
        >
          {item.question}
        </span>



        <span
          className={`
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

          {
            open
              ? <Minus size={18}/>
              : <Plus size={18}/>
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
              px-7
              md:px-10

              pb-8
              md:pb-10

              pt-1
            "
          >

            <p
              className="
                text-base

                md:text-lg

                font-medium

                leading-[1.9]

                text-[#5F4A42]
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
