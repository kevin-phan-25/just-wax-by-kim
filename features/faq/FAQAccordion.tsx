/**
 *
 * ---
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * Luxury editorial FAQ accordion collection.
 *
 * Updates:
 * • Simplified spacing system
 * • Matches editorial FAQ item design
 * • Improved mobile readability
 * • Balanced tablet / desktop spacing
 * • Removed unnecessary card spacing
 *
 * ---
 */

import FAQItem from "./FAQItem";

import type { FAQItemType } from "./faq.types";

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

        flex

        flex-col

        divide-y-0
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
