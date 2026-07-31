/**
 * -----------------------------------------------------------------------------
 * File:
 * features/faq/FAQAccordion.tsx
 *
 * Description:
 * Luxury FAQ accordion collection – soft bubble/card style.
 * -----------------------------------------------------------------------------
 */
import FAQItem from "./FAQItem";
import type { FAQItemType } from "./faq.types";

interface Props {
  items: FAQItemType[];
}

export default function FAQAccordion({ items }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {items.map((item) => (
        <FAQItem key={item.id} item={item} />
      ))}
    </div>
  );
}
