/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQItem.tsx
 *
 * Description:
 * Individual FAQ accordion item.
 *
 * Changes:
 *
 * - July 30, 2026
 * - Centered FAQ questions
 * - Right aligned expand icon
 * - Added luxury answer bubble
 * - Centered answer presentation
 * - Improved editorial spacing
 *
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

}: Props){


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

    onClick={()=>setOpen(!open)}

    className="
      relative
      flex
      w-full
      items-center
      justify-center
      px-10
    "

  >


    <span

      className="
        font-serif
        text-xl
        md:text-2xl
        text-center
        text-[#3B2A26]
      "

    >

      {item.question}

    </span>



    {/* EXPAND ICON */}

    <span

      className="
        absolute
        right-0
        flex
        items-center
        justify-center
      "

    >

      {
        open

        ?

        <Minus

          size={22}

          strokeWidth={1.5}

          className="
            text-[#8C5A6B]
          "

        />

        :

        <Plus

          size={22}

          strokeWidth={1.5}

          className="
            text-[#8C5A6B]
          "

        />

      }


    </span>


  </button>




  {/* ANSWER BUBBLE */}

  {

    open &&

    (

      <div

        className="
          mx-auto
          mt-8
          max-w-3xl
          rounded-[28px]
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
            text-[#8C7468]
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
