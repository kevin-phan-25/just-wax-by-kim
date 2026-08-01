/**
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * Luxury FAQ accordion collection.
 *
 * Updates:
 * • Added spacing between FAQ cards
 * • Improved visual breathing room
 * • Better mobile/tablet/desktop layout
 */

import FAQItem from "./FAQItem";
import type { FAQItemType } from "./faq.types";

interface Props {
  items: FAQItemType[];
}

export default function FAQAccordion({ items }: Props) {
  return (
    <div
      className="
        flex
        w-full
        flex-col

        gap-6

        md:gap-8
      "
    >
      {items.map((item) => (
        <FAQItem
          key={item.question}
          item={item}
        />
      ))}
    </div>
  );
}
