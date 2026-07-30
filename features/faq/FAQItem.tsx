/**
 * -----------------------------------------------------------------------------
 * File: FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Changes:
 * - Centered question layout
 * - Added luxury answer bubble
 * - Improved spacing and typography
 * - Removed left-aligned restriction
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  Plus,
  Minus,
} from "lucide-react";

import {
  useState,
} from "react";

import {
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
        w-full
        border-b
        border-[#E8DDD8]
        py-8
      "
    >


      {/* QUESTION */}

      <button

        onClick={() => setOpen(!open)}

        className="
          flex
          w-full
          items-center
          justify-center
          gap-6
          text-center
          transition
        "

      >

        <span
          className="
            font-serif
            text-xl
            text-[#3B2A26]
            tracking-tight
          "
        >

          {item.question}

        </span>



        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#D8B4A0]
            text-[#8C5A6B]
          "
        >

          {
            open
            ?
            (
              <Minus size={16}/>
            )
            :
            (
              <Plus size={16}/>
            )
          }

        </span>


      </button>



      {/* ANSWER */}

      {
        open && (

          <div

            className="
              mx-auto
              mt-6
              max-w-2xl
              rounded-3xl
              border
              border-[#E8DDD8]
              bg-[#F6E7E1]
              px-8
              py-6
              text-center
              shadow-sm
            "

          >

            <p
              className="
                text-base
                leading-relaxed
                text-[#6F5A50]
              "
            >

              {item.answer}

            </p>


          </div>

        )
      }


    </div>

  );

}
