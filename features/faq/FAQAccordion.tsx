/**
 *
 * ---
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * Luxury FAQ accordion collection.
 *
 * Changes:
 * • Simplified rendering structure
 * • Preserved editorial width
 * • Improved spacing rhythm
 * • Removed alignment wrappers
 * • Added refined divider system
 *
 * ---
 *
 */

import FAQItem from "./FAQItem";

import type {
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
        w-full
        divide-y
        divide-[#E8DDD8]
      "
    >

      {
        items.map((item) => (

          <FAQItem
            key={item.id}
            item={item}
          />

        ))
      }

    </div>

  );

}
