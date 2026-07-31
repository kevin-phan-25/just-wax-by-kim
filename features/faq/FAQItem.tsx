/**
 * ------------------------------------------------------------------
 * File: FAQItem.tsx
 *
 * Description:
 * Luxury FAQ accordion item.
 *
 * Changes:
 *
 * - Removed answer width restriction
 * - Full centered layout
 * - Larger luxury answer bubble
 * - Improved spacing
 *
 * ------------------------------------------------------------------
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
        py-10
        last:border-none
      "
    >


      {/* QUESTION */}

      <button

        onClick={() => setOpen(!open)}

        className="
          mx-auto
          flex
          w-full
          items-center
          justify-center
          gap-6
          text-center
        "

      >

        <span
          className="
            font-serif
            text-xl
            md:text-2xl
            text-[#3B2A26]
          "
        >

          {item.question}

        </span>


        <span
          className="
            flex
            h-9
            w-9
            shrink-0
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
              <Minus size={17}/>
              :
              <Plus size={17}/>
          }

        </span>


      </button>



      {/* ANSWER */}

      {
        open && (

          <div
            className="
              mx-auto
              mt-8
              w-full
              rounded-[32px]
              border
              border-[#E8DDD8]
              bg-[#F6E7E1]
              px-8
              py-7
              text-center
              shadow-[0_15px_40px_rgba(59,42,38,0.05)]
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
