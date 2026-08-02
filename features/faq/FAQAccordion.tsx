/**
 * ---
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * FAQ accordion collection.
 *
 * Updates:
 * • Responsive spacing
 * • Luxury vertical rhythm
 * • Full width support
 * • Matches FAQ editorial layout
 *
 * ---
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
        flex

        w-full

        flex-col

        gap-6

        sm:gap-8

        md:gap-10
      "
    >

      {items.map((item, index) => (
        <FAQItem
          key={`${item.question}-${index}`}
          item={item}
        />
      ))}

    </div>
  );
}
