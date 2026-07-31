/**
 * ------------------------------------------------------------------
 * File: FAQAccordion.tsx
 *
 * Description:
 * Luxury FAQ accordion collection.
 *
 * Changes:
 *
 * - Centered accordion content
 * - Removed left alignment behavior
 * - Full width editorial layout
 *
 * ------------------------------------------------------------------
 */

import FAQItem from "./FAQItem";

import {
  FAQItemType,
} from "./faq.types";


interface Props {

  items: FAQItemType[];

}


export default function FAQAccordion({

  items,

}: Props) {


  return (

    <div
      className="
        flex
        w-full
        flex-col
        items-center
      "
    >

      {
        items.map(

          (item) => (

            <div
              key={item.id}
              className="
                w-full
                text-center
              "
            >

              <FAQItem
                item={item}
              />

            </div>

          )

        )
      }


    </div>

  );

}
